import { createElement, classNames } from "../packages/index.js";
import { changeUser, user } from "../models/index.js";

const navigation = [
	{
		children: "me",
		onclick: () => changeUser("me"),
	},
	{
		children: "dad",
		onclick: () => changeUser("dad"),
	},
	{
		children: "mom",
		onclick: () => changeUser("mom"),
	},
];

export const Navigation = ({ className }) => {
	user.subscribe(() => {
		const buttons = document.querySelectorAll(".navigation__button");

		buttons.forEach((button) => {
			if (button.textContent === user.value) {
				button.classList.add("navigation__button--active");
			} else {
				button.classList.remove("navigation__button--active");
			}
		});
	});

	return createElement(
		"nav",
		createElement(
			"ul",
			navigation.map(({ children, onclick }) =>
				createElement(
					"li",
					createElement("button", children, {
						className: classNames("navigation__button", {
							["navigation__button--active"]: user.value === children,
						}),
						onclick,
					}),
					{
						className: "navigation__item",
					}
				)
			),
			{
				className: classNames("navigation__list", className),
			}
		),
		{
			className: "navigation",
		}
	);
};
