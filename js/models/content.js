import { Observable } from "../packages/index.js";
import { getSessionStorage, setSessionStorage } from "../utils/index.js";
import { user } from "./user.js";

let KEY = `content.${user.value}`;

/**
 *
 * @param {string} postfix
 */
const setKey = (postfix) => {
	KEY = `content.${postfix}`;
};
const initContent = getSessionStorage(KEY, "");
export const content = new Observable(initContent);

export const setContent = (value) => {
	content.value = value;
	setSessionStorage(KEY, content.value);
};

user.subscribe(() => {
	setKey(user.value);
	content.value = getSessionStorage(KEY, "");
});
