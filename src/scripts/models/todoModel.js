import { addTodoService, deleteTodoService, getTodosService, updateTodoService } from "../services/todoServices"

export default class TodoModel {
    constructor() {
        this.todos = []
    }

    addTodo = async (todoData) => {
        await addTodoService(todoData)
    }

    getTodos = async () => {
        const response = await getTodosService();
        this.todos = response;
        return this.todos;
    }

    updateTodo = async (todoId, todoData) => {
        const response = await updateTodoService(id, todoData);
        const todoIndex = this.todos.findIndex(todo => todo.id === todoId);
        if (todoIndex !== -1) this.todos[todoIndex] = response;
        return this.todos;
    }

    deleteTodo = async (todoId) => {
        await deleteTodoService(todoId);
    }
}