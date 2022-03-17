/**
 *
 * @param {string} key key for local storage
 * @param {unknown} value value which will be written
 */
export const setLocalStorage = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};

/**
 *
 * @param {string} key key for local storage
 * @param {unknown} defaultValue value which will be returned in there is nothing in storage
 * @returns {unknown} value from storage or default value
 */
export const getLocalStorage = (key, defaultValue) => {
	return JSON.parse(localStorage.getItem(key)) || defaultValue;
};
