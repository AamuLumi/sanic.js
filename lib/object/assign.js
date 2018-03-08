'use strict';

/* ECMA Reference
 * https://www.ecma-international.org/ecma-262/8.0/index.html#sec-object.assign
 */

/**
 * @param {Object} object - target
 * @param {Object} ...sources - sources to copy
 * @return the edited target
 */
module.exports = function assignClosure(nativeAssign) {
	return function assign(target, ...sources) {
		if (target === undefined || target === null) {
			throw new TypeError('Cannot convert undefined or null to object');
		}

		target = Object(target);

		if (!sources.length) {
			return target;
		}

		let i = 0;
		const iMax = sources.length;

		for (; i < iMax; i++) {
			const keys = Object.keys(sources[i]);

			let j = 0;
			const jMax = keys.length;
			const source = sources[i];

			for (; j < jMax; j++) {
				target[keys[j]] = source[keys[j]];
			}
		}

		return target;
	};
};
