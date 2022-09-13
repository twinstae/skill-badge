import { removeAll } from './Array';

export const pick = <T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> => {
	const result = {} as Pick<T, K>;
	for (const key of keys) {
		result[key] = obj[key];
	}
	return result;
};

export const removeAllFrom = <O, K extends keyof O>(
	obj: O,
	from: K,
	target: O[K] extends Array<infer T> ? T : never,
): O => {
	const prop = obj[from] as typeof target[];
	if(!prop.includes(target)){
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
