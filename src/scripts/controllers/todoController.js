export default class TodoController {
    constructor(todoModel, todoView) {
        this.todoModel = todoModel;
        this.todoView = todoView;
    }

    async init() {
        this.todoView.addTodo(this.handleAddTodo);
        await this.handleGetTodos();
        this.todoView.deleteTodo(this.handleDeleteTodo)
    }

    handleAddTodo = async (todoData) => {
        await this.todoModel.addTodo(todoData);
        this.handleGetTodos();
    }

    handleGetTodos = async () => {
        const response = await this.todoModel.getTodos();
        this.todoView.displayTodos(response);
    }

    handleDeleteTodo = async (todoId) => {
        await this.todoModel.deleteTodo(todoId);
        this.handleGetTodos();
    }
}