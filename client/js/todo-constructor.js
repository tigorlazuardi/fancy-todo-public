function makeTodo(title, description) {
    return `<div class="col-12 border-bottom pt-2">
                <div class="row align-items-center">
                    <div class="col-1 pb-4">
                        <input type="checkbox" class="big-checkbox" id="exampleCheck1">
                    </div>
                    <div class="col-11 d-flex flex-column align-items-start justify-content-center">
                        <p class="text-truncate" style="max-width: 80vw;">
                            <strong>Title Todo Title Todo Title Todo Title Todo Title Todo Title Todo Title Todo
                                Title Todo Title Todo Title Todo Title Todo Title Todo Title Todo Title Todo
                                Title Todo Title Todo Title Todo Title Todo Title Todo
                                Title Todo Title Todo Title Todo Title Todo Title Todo</strong>
                        </p>
                        <p class="text-truncate" style="max-width: 80vw;">Todo description Todo description Todo
                            description Todo descriptionTodo description Todo descriptionTodo description Todo
                            description Todo description Todo descriptionTodo description Todo descriptionTodo
                            description Todo description Todo description Todo description Todo description Todo
                            description Todo description</p>
                        <div class="d-flex">
                            <p class="mr-5 font-italic text-danger">Due Date</p>
                            <p class="mr-5 font-italic text-muted">Last Updated</p>
                            <p class="mr-5 font-italic text-muted">Created</p>
                        </div>
                    </div>
                </div>
            </div>`
}