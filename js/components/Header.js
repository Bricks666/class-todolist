import { createElement } from "../packages/index.js";

export const Header = () => {
	return createElement(
		"header",
		createElement("h1", "The best todo list", { className: "header__head" }),
		{ className: "header" }
	);
};
