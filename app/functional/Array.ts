export const count = <T>(arr: Iterable<T>, predicate: (item: T) => boolean) => {
	let result = 0;
	for (const item of arr) {
		if (predicate(item)) {
			result += 1;
		}
	}
	return result;
};

export const sum = (arr: Iterable<number>): number => {
	let result = 0;
	for (const n of arr) {
		result += n;
	}
	return result;
};

export const unique = <T>(arr: T[]): T[] => {
	return [...new Set(arr)];
};

// 아래 함수들은 배열이 이미 unique할 것을 가정함

const assertUnique = (arr: any[]) => {
	if (arr.length !== new Set(arr).size) {
		throw Error(`${JSON.stringify(arr)}은 유일하지 않습니다`);
	}
};

export const removeAll = <T>(arr: T[], target: T): T[] => {
	assertUnique(arr);
	return arr.filter((item) => item !== target);
};

export const intersection = <T>(a: T[], b: T[]): T[] => {
	assertUnique(a);
	assertUnique(b);
	return a.filter((item) => b.includes(item));
};

export const difference = <T>(a: T[], b: T[]): T[] => {
	assertUnique(a);
	assertUnique(b);

	return a.filter((item) => !b.includes(item));
};

export const union = <T>(a: T[], b: T[]): T[] => {
	assertUnique(a);
	assertUnique(b);

	return difference(a, b).concat(b);
};

export type IsomorphicArrayT<T> = T[] & {
	[K in keyof T]: T[K][];
};

export function IsomorphicArray<T>(arr: T[]) {
	return new Proxy(arr, {
		get(target, prop, receiver) {
			if (target[0] === undefined || target[0] === null) {
				return [];
			}
			if (prop in target[0]) {
				return target.map((item) => item[prop as keyof T]);
			}
			return Reflect.get(target, prop, receiver);
		},
	}) as IsomorphicArrayT<T>;
}

export const get = IsomorphicArray;
