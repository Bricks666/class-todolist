import { addTodo, content, setContent } from "../models/index.js";
import { createElement, classNames } from "../packages/index.js";
import { Button } from "./index.js";
import { Field } from "./index.js";

export const TodoForm = () => {
	const onChange = (evt) => {
		setContent(evt.target.value);
	};
	const onSubmit = (evt) => {
		evt.preventDefault();
		addTodo(content.value);
		setContent("");
	};
	const submit = Button({
		children: "Add todo",
		className: classNames("button--primary", "form__button"),
		disabled: !content.value,
	});
	const inputField = Field({
		children: "Your todo",
		placeholder: "Type todo here",
		name: "content",
		value: content.value,
		onChange,
	});
	content.subscribe(() => {
		inputField.querySelector("input").value = content.value;
		submit.disabled = !content.value;
	});

	return createElement("form", [inputField, submit], {
		className: "form",
		onsubmit: onSubmit,
	});
};
