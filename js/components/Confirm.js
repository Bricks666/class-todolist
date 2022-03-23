import { createElement } from "../packages/index.js";
import { Button } from "./Button.js";

export const Confirm = ({ onYes, onNo, message, header, className }) => {
	const handleClose = () => {
		container.remove();
	};
	const handleYes = () => {
		onYes && onYes();
		handleClose();
	};
	const handleNo = () => {
		onNo && onNo();
		handleClose();
	};
	const container = createElement(
		"div",
		[
			createElement("div", undefined, {
				onclick: handleNo,
				className: "confirm__overlay",
			}),
			createElement(
				"div",
				[
					createElement(
						"header",
						createElement("h2", header, { className: "confirm__head" })
					),
					createElement(
						"main",
						[
							createElement("p", message, { className: "confirm__text" }),
							createElement(
								"div",
								[
									Button({
										className: "button--success",
										children: "Yes",
										onclick: handleYes,
									}),
									Button({
										className: "button--error",
										children: "No",
										onclick: handleNo,
									}),
								],
								{ className: "confirm__buttons" }
							),
						],
						{ className: "confirm__main" }
					),
				],
				{ className: "confirm__body" }
			),
		],
		{ className: "confirm" }
	);

	document.body.append(container);

	return container;
};
