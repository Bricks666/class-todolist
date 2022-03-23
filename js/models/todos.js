import { Observable } from "../packages/index.js";
import { getLocalStorage, setLocalStorage } from "../utils/index.js";
import { user } from "./index.js";

class Todo {
	static #count = 0;

	/**
	 * @param {number} newCount
	 */
	static set count(newCount) {
		if (newCount >= 0) {
			this.#count = newCount;
		}
	}

	/**
	 * @param {string} content
	 * @returns {{id: number, content: string, isDone: boolean}} todo instance
	 */
	constructor(content) {
		this.id = Todo.#count;
		this.content = content;
		this.isDone = false;
		Todo.#count++;
	}
}
const savedTodos = getLocalStorage(`todos.${user.value}`, []);
export const todos = new Observable(savedTodos);
Todo.count = savedTodos.at(-1)?.id + 1 || 0;

export const deleteTodo = (todoId) => {
	todos.value = todos.value.filter((todo) => todo.id !== todoId);
	setLocalStorage(`todos.${user.value}`, todos.value);
};

export const addTodo = (content) => {
	todos.value = [...todos.value, new Todo(content)];
	setLocalStorage(`todos.${user.value}`, todos.value);
};
export const toggleDone = (todoId) => {
	todos.value = todos.value.map((todo) =>
		todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo
	);
	setLocalStorage(`todos.${user.value}`, todos.value);
};

user.subscribe(() => {
	todos.value = getLocalStorage(`todos.${user.value}`, []);
});
