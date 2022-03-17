import { createElement } from "../packages/index.js";

export const Field = ({
	children,
	placeholder,
	name,
	value,
	onChange,
	id = name,
}) => {
	return createElement(
		"div",
		[
			createElement("label", children, {
				htmlFor: id,
				className: "form__label",
			}),
			createElement("input", undefined, {
				className: "form__input",
				placeholder,
				name,
				id,
				value,
				oninput: onChange,
			}),
		],
		{ className: "form__field" }
	);
};
