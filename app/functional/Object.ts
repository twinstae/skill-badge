import { removeAll } from './Array';

export const pick = <T, K extends Extract<keyof T, string>>(
	obj: T,
	keys: K[],
): Pick<T, K> => {
	const result = {} as Pick<T, K>;
	for (const key of keys) {
		result[key] = obj[key];
	}
	return result;
};

export const omit = <T extends object, K extends Extract<keyof T, string>>(
	obj: T,
	keys: K[],
): Omit<T, K> => {
	const result = {} as Omit<T, K>;
	for (const key in obj) {
		if (!keys.includes(key as any)) {
			const resultKey = key as Extract<keyof Omit<T, K>, string>;
			result[resultKey] = obj[resultKey];
		}
	}
	return result;
};

export const removeAllFrom = <O, K extends keyof O>(
	obj: O,
	from: K,
	target: O[K] extends Array<infer T> ? T : never,
): O => {
	const prop = obj[from] as typeof target[];
	if (!prop.includes(target)) {
		return obj;
	}

	return {
		...obj,
		[from]: removeAll(prop, target),
	};
};

export const addTo = <O, K extends keyof O>(
	obj: O,
	to: K,
	target: O[K] extends Array<infer T> ? T : never,
): O => {
	return {
		...obj,
		[to]: [...(obj[to] as typeof target[]), target],
	};
};
