import { createElement, getElement } from "../helpers/ui-control"

export default class TodoView {
    constructor() {
        // The root element
        this.app = getElement('#root')

        // The title of the app
        this.title = createElement('h1')    
        this.title.textContent = 'Todos'

        // The form, with a [type="text"] input, and a submit button
        this.form = createElement('form')

        this.input = createElement('input')
        this.input.type = 'text'
        this.input.placeholder = 'Add todo'
        this.input.name = 'todo'

        this.submitButton = createElement('button')
        this.submitButton.textContent = 'Submit'

        // The visual representation of the todo list
        this.todoList = createElement('ul', 'todo-list')

        // Append the input and submit button to the form
        this.form.append(this.input, this.submitButton)

        // Append the title, form, and todo list to the app
        this.app.append(this.title, this.form, this.todoList)
    }

    get _todoText() {
        return this.input.value
    }

    _resetInput() {
        this.input.value = ''
    }

    displayTodos(todos) {
        while (this.todoList.firstChild) {
            this.todoList.removeChild(this.todoList.firstChild)
        }
        // Create todo item nodes for each todo in state
        todos.forEach(todo => {
            const li = createElement('li')
            li.id = todo.id

            // Each todo item will have a checkbox you can toggle
            const checkbox = createElement('input')
            checkbox.type = 'checkbox'
            checkbox.checked = todo.isCompleted

            // The todo item text will be in a contenteditable span
            const span = createElement('span')
            span.contentEditable = true
            span.classList.add('editable')

            // If the todo is complete, it will have a strikethrough
            if (todo.isCompleted) {
                const strike = createElement('s')
                strike.textContent = todo.job
                span.append(strike)
            } else {
                // Otherwise just display the text
                span.textContent = todo.job
            }

            // The todos will also have a delete button
            const deleteButton = createElement('button', 'delete')
            deleteButton.textContent = 'Delete'
            li.append(checkbox, span, deleteButton)

            // Append nodes to the todo list
            this.todoList.append(li)
        })
    }

    addTodo = (handler) => {
        this.submitButton.addEventListener('click', (e) => {
            e.preventDefault();
            const todoData = {
                job: this.input.value,
                isCompleted: false,
                createdAt: new Date(),
            }
            handler(todoData);
            this._resetInput();
        });
    }

    deleteTodo = (handler) => {
        this.todoList.addEventListener('click', event => {
            if (event.target.className === 'delete') {
                const id = parseInt(event.target.parentElement.id)
                handler(id)
            }
        })
    }
}