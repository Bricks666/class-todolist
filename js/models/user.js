import { Observable } from "../packages/index.js";
import { getSessionStorage, setSessionStorage } from "../utils/index.js";

const initUser = getSessionStorage("user", "me");
export const user = new Observable(initUser);

/**
 *
 * @param {"me"|"mom"|"dad"} newUser
 */
export const changeUser = (newUser) => {
	user.value = newUser;
	setSessionStorage("user", newUser);
};
