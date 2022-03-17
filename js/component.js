import {
	addTodo,
	content,
	deleteTodo,
	setContent,
	todos,
	toggleDone,
} from "./models/index.js";

const root = document.querySelector("#root");

const createHeader = () => {
	const header = document.createElement("header");
	const h1 = document.createElement("h1");

	header.classList.add("header");
	h1.classList.add("header__head");

	h1.textContent = "The best todo list";

	header.append(h1);

	return header;
};

const createField = ({
	text,
	placeholder,
	name,
	id = name,
	value,
	onChange,
}) => {
	const container = document.createElement("div");
	const label = document.createElement("label");
	const input = document.createElement("input");

	container.classList.add("form__field");
	label.classList.add("form__label");
	input.classList.add("form__input");

	label.textContent = text;
	label.htmlFor = id;
	input.placeholder = placeholder;
	input.name = name;
	input.id = id;
	input.value = value;
	input.oninput = onChange;

	container.append(label, input);
	return container;
};
const createButton = ({ text, onClick, disabled }) => {
	const button = document.createElement("button");

	button.classList.add("button");
	button.onclick = onClick;
	button.textContent = text;
	button.disabled = disabled;

	return button;
};
const createTodoForm = () => {
	const form = document.createElement("form");

	const onChange = (evt) => {
		setContent(evt.target.value);
	};
	const onSubmit = (evt) => {
		evt.preventDefault();
		addTodo(content.value);
		setContent("");
	};
	form.onsubmit = onSubmit;

	const inputField = createField({
		text: "Your todo",
		placeholder: "Type todo here",
		name: "content",
		value: content.value,
		onChange,
	});
	const submit = createButton({
		text: "Add todo",
		disabled: !content.value,
	});
	content.subscribe(() => {
		inputField.querySelector("input").value = content.value;
		submit.disabled = !content.value;
	});

	form.classList.add("form");
	inputField.classList.add("form__field");
	submit.classList.add("button--primary", "form__button");

	form.append(inputField, submit);

	return form;
};

const createTodoListItem = ({ content, id, isDone }) => {
	const item = document.createElement("li");
	const p = document.createElement("p");
	const buttons = document.createElement("div");

	const onDone = () => {
		toggleDone(id);
	};
	const onDelete = () => {
		const response = confirm("Are you sure?");
		if (response) {
			deleteTodo(id);
		}
	};

	const doneButton = createButton({ text: "Done", onClick: onDone });
	const deleteButton = createButton({ text: "Delete", onClick: onDelete });

	item.classList.add("todo-list__item");
	if (isDone) {
		item.classList.add("todo-list__item--done");
	}
	item.setAttribute("data-id", id);
	p.classList.add("todo-list__paragraph");
	buttons.classList.add("todo-list__buttons");
	doneButton.classList.add("button--success");
	deleteButton.classList.add("button--error");

	p.textContent = content;
	buttons.append(doneButton, deleteButton);
	item.append(p, buttons);

	return item;
};

const createTodoList = () => {
	const list = document.createElement("ul");

	list.classList.add("todo-list");
	const renderItems = () => {
		list.innerHTML = "";
		const items = todos.value;
		if (!items.length) {
			list.innerText = "Todo list is empty";
		} else {
			const children = items.map(createTodoListItem);
			list.append(...children);
		}
	};
	renderItems();

	todos.subscribe(renderItems);

	return list;
};

document.addEventListener("DOMContentLoaded", () => {
	const header = createHeader();
	const form = createTodoForm();
	const todoList = createTodoList();

	root.append(header, form, todoList);
});
