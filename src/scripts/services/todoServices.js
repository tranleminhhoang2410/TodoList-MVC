import { request } from "../../utils/request";

export const addTodoService = async (todoData) => {
    try {
        await request('todo', 'POST', todoData)
    } catch (error) {
        console.log('Failed to add Todo: ', error);
    }
}

export const getTodosService = async () => {
    try {
        const response = await request('todo', 'GET');
        return response;
    } catch (error) {
        console.log('Failed to get Todos: ', error);
    }
}

export const getTodoByIdService = async (todoId) => {
    try {
        const response = await request(`todo/${todoId}`, 'GET');
        return response;
    } catch (error) {
        console.log('Failed to get Todo: ', error);
    }
}

export const updateTodoService = async (todoId, todoData) => {
    try {
        const response = await request(`todo/${todoId}`, 'PUT', todoData);
        return response;
    } catch (error) {
        console.log('Failed to update Todo: ', error);
    }
}

export const deleteTodoService = async (todoId) => {
    try {
        await request(`todo/${todoId}`, 'DELETE')
    } catch (error) {
        console.log('Failed to delete Todo: ', error);
    }
}