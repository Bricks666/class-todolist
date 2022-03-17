import { Header, TodoForm, TodoList } from "./components/index.js";

const root = document.querySelector("#root");

document.addEventListener("DOMContentLoaded", () => {
	const header = Header();
	const form = TodoForm();
	const todoList = TodoList();

	root.append(header, form, todoList);
});
