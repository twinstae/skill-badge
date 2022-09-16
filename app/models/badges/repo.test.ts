import { describe, it, expect } from 'vitest';
import { FakeBadgeRepo } from './fakeRepo';
import rawFakeBadgeList from './fakeBadgeList.json';
import { z } from 'zod';
import { badgeSchema } from './schema';

describe('BadgeRepo', () => {
	const repo = FakeBadgeRepo(z.array(badgeSchema).parse(rawFakeBadgeList));

	const newBadgeSlug = 'database-fake-for-test';
	it('새로운 배지를 만들 수 있다', async () => {
		const oldCount = await repo.getBadgeList().then(list => list.length);

		const newBadge = {
			slug: newBadgeSlug,
			title: 'database 테스트용 배지',
			skillSlugs: ['database'],
			pieces: [],
			icon: 'CommandLineIcon' as const
		};
		await repo.createBadge(newBadge);

		await expect(repo.getBadgeList().then(list => list.length))
			.resolves
			.toBe(oldCount+1)

		await expect(repo.getBadgeWithPieces(newBadgeSlug))
			.resolves
			.toStrictEqual(newBadge)
	});
});
