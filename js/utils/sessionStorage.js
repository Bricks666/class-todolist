/**
 *
 * @param {string} key key for local storage
 * @param {unknown} value value which will be written
 */
export const setSessionStorage = (key, value) => {
	sessionStorage.setItem(key, JSON.stringify(value));
};

/**
 *
 * @param {string} key key for local storage
 * @param {unknown} defaultValue value which will be returned in there is nothing in storage
 * @returns {unknown} value from storage or default value
 */
export const getSessionStorage = (key, defaultValue) => {
	return JSON.parse(sessionStorage.getItem(key)) || defaultValue;
};
