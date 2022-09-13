import { describe, it, expect } from 'vitest';
import { count, difference, intersection, removeAll, union } from './Array';

describe('functional: Array', () => {
	it('count', () => {
		expect(count([1, 2, 3, 4], (n) => n % 2 === 0)).toBe(2);
		expect(count([], (n) => n % 2 === 0)).toBe(0);
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
});
