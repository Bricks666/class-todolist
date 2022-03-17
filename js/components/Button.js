import { createElement, classNames } from "../packages/index.js";

export const Button = ({ children, className, ...props }) => {
	return createElement("button", children, {
		className: classNames("button", className),
		...props,
	});
};
