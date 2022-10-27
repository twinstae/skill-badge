import { describe, it, expect } from 'vitest';
import { FakeSkillsRepo } from './fakeRepo';

describe('SkillsRepo', () => {
	it('scenario', async () => {
		const repo = FakeSkillsRepo([
			{
				slug: 'spa-framework',
				title: 'SPA 프레임워크',
				parents: [],
				children: ['vue', 'svelte'],
				content: '',
			},
			{
				slug: 'vue',
				title: '뷰',
				parents: ['spa-framework'],
				children: [],
				content: '',
			},
			{
				slug: 'svelte',
				title: '스벨트',
				parents: ['spa-framework'],
				children: [],
				content: '',
			},
			{
				slug: 'react',
				title: '리액트',
				parents: ['spa-framework'],
				children: [],
				content: '',
			},
		]);
		const fakeSlug = 'fake-for-test';
		const initialCount = await repo.getAllList().then((all) => all.length);

		const initialReact = await repo.getOneBySlug('react');

		expect(initialReact?.children).not.toContain(fakeSlug);

		await repo.create({
			slug: fakeSlug,
			title: '테스트를 위한 가짜',
			parents: ['react'],
			children: [],
			content: '',
		});

		await expect(repo.getAllList()).resolves.toHaveLength(initialCount + 1);

		await expect(repo.getOneBySlug(fakeSlug)).resolves.toStrictEqual({
			slug: fakeSlug,
			title: '테스트를 위한 가짜',
			parents: ['react'],
			children: [],
			content: '',
		});

		await repo.update({
			slug: fakeSlug,
			title: '테스트를 위한 가짜',
			parents: ['svelte'],
			children: ['vue'],
			content: '가짜 내용',
		});

		await expect(repo.getOneBySlug(fakeSlug)).resolves.toStrictEqual({
			slug: fakeSlug,
			title: '테스트를 위한 가짜',
			parents: ['svelte'],
			children: ['vue'],
			content: '가짜 내용',
		});

		await repo.delete(fakeSlug);

		await expect(repo.getOneBySlug('react')).resolves.toStrictEqual(
			initialReact,
		);

		
		await expect(repo.getOneBySlug(fakeSlug)).resolves.toBe(null);
	});
});
