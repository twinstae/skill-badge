import { describe, it, expect } from 'vitest';
import type { SkillT } from '~/models/skills/schema';
import {
	count,
	difference,
	get,
	intersection,
	IsomorphicArray,
	removeAll,
	sum,
	union,
	unique,
} from './Array';

describe('functional: Array', () => {
	it('count', () => {
		expect(count([1, 2, 3, 4], (n) => n % 2 === 0)).toBe(2);
		expect(count([], (n) => n % 2 === 0)).toBe(0);
	});

	it('sum', () => {
		expect(sum([1, 2, 3, 4])).toBe(10);
	});

	it('unique', () => {
		expect(unique([1, 2,2,2,2, 2, 3, 4,3,3])).toEqual([1,2,3,4]);
	});

	it('removeAll', () => {
		expect(removeAll([1, 2, 3, 4], 2)).toEqual([1, 3, 4]);
	});

	it('intersection', () => {
		expect(intersection([1, 2, 3, 4], [3, 4, 5, 6])).toEqual([3, 4]);
	});

	it('difference', () => {
		expect(difference([1, 2, 3, 4], [3, 4, 5, 6])).toEqual([1, 2]);
	});

	it('union', () => {
		expect(union([1, 2, 3, 4], [3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
	});

	it('IsomorphicArray', () => {
		const arr = [
			{
				slug: 'optimization',
				title: '최적화',
				parents: [],
				children: [],
				content: '',
			},
			{
				slug: 'react-native',
				title: '리액트 네이티브',
				parents: ['react'],
				children: [],
				content: '',
			},
		] as SkillT[];

		expect(IsomorphicArray(arr).slug).toEqual(['optimization', 'react-native']);
		expect(get(arr).slug).toEqual(['optimization', 'react-native']);
	});
});
