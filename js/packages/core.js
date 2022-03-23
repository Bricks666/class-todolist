/**
 *
 * @param {keyof HTMLElementTagNameMap} tag  tag
 * @param {Node|string|Node[]|string[]} children children node
 * @param {object} props props of node
 */

export const createElement = (
	tag = "div",
	children = [],
	{ className = "", ...props } = {}
) => {
	const element = document.createElement(tag);
	for (const c of className.split(" ")) {
		if (c) {
			element.classList.add(c);
		}
	}
	const propsKeys = Object.keys(props);
	for (const key of propsKeys) {
		element[key] = props[key];
	}
	if (typeof children === "object" && "length" in children) {
		element.append(...children.filter(Boolean));
	} else if (children) {
		element.append(children);
	}
	return element;
};
