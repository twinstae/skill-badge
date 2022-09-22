import { describe, it, expect } from 'vitest';
import { omit, pick } from './Object';

describe('functional: Object', () => {
	it('pick', () => {
		const skill = {
			slug: 'optimization',
			title: '최적화',
			parents: [],
			children: [],
			content: '',
		};
		expect(pick(skill, ['slug', 'title'])).toEqual({
			slug: 'optimization',
			title: '최적화',
		});
	});

	it('omit', () => {
		const skill = {
			slug: 'optimization',
			title: '최적화',
			parents: [],
			children: [],
			content: '',
		};
		expect(omit(skill, ['parents', 'children'])).toEqual({
			slug: 'optimization',
			title: '최적화',
			content: '',
		});
	});
});
