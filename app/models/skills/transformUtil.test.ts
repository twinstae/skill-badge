import { describe, it, expect } from 'vitest';
import { flatSlugs, selectSlug, flatLink } from './transformUtil';

describe('transformUtil', () => {
	it('selectSlug', () => {
		expect(selectSlug({ slug: 'test' })).toBe('test');
	});
	it('flatSlugs', () => {
		const item = {
			name: 'taehee',
			children: [{ slug: 'test' }, { slug: 'react' }],
		};
		expect(flatSlugs('children')(item)).toStrictEqual({
			name: 'taehee',
			children: ['test', 'react'],
		});
	});

	it('flatLink', () => {
		const item = {
			name: 'taehee',
			skill: { slug: 'test' },
		};
		expect(flatLink(selectSlug)('skill')(item)).toStrictEqual({
			name: 'taehee',
			skill: 'test',
		});
	});
});
