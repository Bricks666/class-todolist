export class Observable {
	#value;
	#subscribers;
	/**
	 *
	 * @param {unknown} value
	 */
	constructor(value) {
		this.#value = value;
		this.#subscribers = new Set();
	}

	get value() {
		return this.#value;
	}

	set value(value) {
		if (this.#value !== value) {
			this.#value = value;
			this.#callSubscribers();
		}
	}

	/**
	 *
	 * @param {function} callback
	 * @returns {function} unsubscribe
	 */
	subscribe(callback) {
		this.#subscribers.add(callback);
		return () => {
			this.#subscribers.delete(callback);
		};
	}

	#callSubscribers() {
		this.#subscribers.forEach((subscriber) => subscriber());
	}
}
