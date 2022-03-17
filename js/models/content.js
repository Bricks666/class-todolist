import { Observable } from "../packages/index.js";
import { getSessionStorage, setSessionStorage } from "../utils/index.js";

export const content = new Observable(getSessionStorage("content", ""));

export const setContent = (value) => {
	content.value = value;
	setSessionStorage("content", content.value);
};
