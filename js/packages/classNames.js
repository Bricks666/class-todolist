export const classNames = (...classes) => {
	const totalClasses = [];
	for (const className of classes) {
		switch (typeof className) {
			case "string": {
				if (className.trim()) {
					totalClasses.push(className);
				}
				break;
			}
			case "object": {
				for (const key of Object.keys(className)) {
					if (className[key]) {
						totalClasses.push(key);
					}
				}
				break;
			}
			case "boolean":
			case "number": {
				if (className) {
					totalClasses.push(className);
				}
				break;
			}
		}
	}

	return totalClasses.join(" ");
};
