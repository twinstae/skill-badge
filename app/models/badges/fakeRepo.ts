import { z } from 'zod';
import type { IBadgeRepo } from './IRepo';
import type { BadgeT } from './schema';
import { badgeSchema } from './schema';
import rawFakeBadgeList from './fakeBadgeList.json';
import { uuidv4 } from '../uuidv4';

const fakeBadgeList = z.array(badgeSchema).parse(rawFakeBadgeList);

export function FakeBadgeRepo(init: BadgeT[]): IBadgeRepo {
	let _store = init;
	return {
		async getBadgeList() {
			return _store.map(
				(badge) => ({
					...badge,
					max: badge.pieces.length,
				}),
			);
		},
		async getBadgeWithPieces(badgeSlug: string) {
			const badge = _store.find((badge) => badge.slug === badgeSlug);
			if (badge === undefined) {
				return null;
			}
			return badge;
		},
		async createBadge(badge) {
			const pieces = badge.pieces.map(
				(title) => ({ id: uuidv4(), title, content: '', isDone: true }),
			);

			_store = [..._store, { ...badge, pieces }];
		},
	};
}

declare global {
	var __fakeBadgeRepo: IBadgeRepo | undefined;
}

if (global.__fakeBadgeRepo === undefined) {
	global.__fakeBadgeRepo = FakeBadgeRepo(fakeBadgeList);
}

export default global.__fakeBadgeRepo!;
