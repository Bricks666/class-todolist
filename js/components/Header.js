import { user } from "../models/user.js";
import { createElement } from "../packages/index.js";
import { Navigation } from "./Navigation.js";

export const Header = () => {
	user.subscribe(() => {
		console.log("asdasd");
		document.querySelector(
			".header__page"
		).textContent = `Todos page of ${user.value}`;
	});
	return createElement(
		"header",
		[
			createElement("h1", "The best todo list", { className: "header__head" }),
			createElement("h2", `Todos page of ${user.value}`, {
				className: "header__page",
			}),
			Navigation({ className: "header__navigation" }),
		],
		{ className: "header" }
	);
};
