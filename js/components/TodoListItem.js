import { deleteTodo, toggleDone } from "../models/index.js";
import { createElement, classNames } from "../packages/index.js";
import { Confirm } from "./Confirm.js";
import { Button } from "./index.js";

export const TodoListItem = ({ content, id, isDone }) => {
	const onDone = () => {
		toggleDone(id);
	};
	const onDelete = () => {
		Confirm({
			header: "Delete todo",
			message: "Are you sure?",
			onYes: () => deleteTodo(id),
		});
	};
	return createElement(
		"li",
		[
			createElement("p", content, { className: "todo-list__paragraph" }),
			createElement(
				"div",
				[
					Button({
						children: "Done",
						onclick: onDone,
						className: "button--success",
					}),
					Button({
						children: "Delete",
						onclick: onDelete,
						className: "button--error",
					}),
				],
				{ className: "todo-list__buttons" }
			),
		],
		{
			className: classNames("todo-list__item", {
				["todo-list__item--done"]: isDone,
			}),
		}
	);
};
