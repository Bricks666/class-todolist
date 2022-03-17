import { todos } from "../models/index.js";
import { createElement } from "../packages/index.js";
import { TodoListItem } from "./index.js";

export const TodoList = () => {
	const renderItems = () => {
		const items = todos.value;
		if (!items.length) {
			return "Todo list is empty";
		} else {
			return items.map(TodoListItem);
		}
	};
	const list = createElement("ul", renderItems(), { className: "todo-list" });

	todos.subscribe(() => {
		const items = renderItems();
		list.innerHTML = "";
		list.append(...items);
	});

	return list;
};
