const host = 'http://192.168.0.100:3000'
// const host = 'http://localhost:3000'

const ajax = axios.create({
    baseURL: host,
    timeout: 2000,
    headers: { token: localStorage.getItem('token') }
})

$(document).ready(function () {
    verifyUser()
})

function showTodos() {
    $('#tab-todo').addClass('active')
    $('#tab-project').removeClass('active')
    $('.group-todo').show()
    $('.group-project').hide()
}

function showProjects() {
    $('#tab-project').addClass('active')
    $('#tab-todo').removeClass('active')
    $('.group-project').show()
    $('.group-todo').hide()
}

