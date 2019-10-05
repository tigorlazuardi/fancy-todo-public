function showCreateTodo() {
    $('#create-todo').modal('show')
    $('#create-todo').on('shown.bs.modal', function () {
        $('#create-todo-title').trigger('focus')
    })
}

function closeEmptyCreateTodo() {
    // https://quotes.rest/qod
    $('#create-todo').modal('hide')
    $('#create-todo-title').val('')
    $('#create-todo-description').val('')
    $('#create-todo-dueDate').val('')
    axios.get()
}

function createTodo() {
    Swal.fire({
        title: "Creating Todo",
        onOpen: () => Swal.showLoading()
    })

    ajax.post('/todos/', {
        title: $('#create-todo-title').val(),
        description: $('#create-todo-description').val(),
        dueDate: $('#create-todo-dueDate').val()
    })
        .then(() => {
            $('#create-todo').modal('hide')
            $('#create-todo-title').val('')
            $('#create-todo-description').val('')
            $('#create-todo-dueDate').val('')
            refreshTodos()
        }).catch(({ response: { data: error } }) => {
            Swal.fire({
                type: "error",
                title: 'Fail Create Todo',
                html: error.join('<br/>'),
                showConfirmButton: true
            })
        });
}



function refreshTodos() {
    Swal.fire({
        title: "Fetching Todos",
        onOpen() {
            Swal.showLoading()
        }
    })

    ajax.get('/todos')
        .then(({ data }) => {
            $('#fill-todos').empty()
            if (!data.length) { $('#fill-todos').append(emptyTodo()) }
            else {
                data.forEach(el => $('#fill-todos').append(constructTodo(el)))
            }
            Swal.close()
        }).catch(({ response: { data: error } }) => {
            Swal.fire({
                type: 'error',
                title: 'Fail Fetching Todos',
                text: error,
                showConfirmButton: true
            })
        });
}



$('#create-todo-form').on('submit', (e) => {
    e.preventDefault()
    createTodo()
})
