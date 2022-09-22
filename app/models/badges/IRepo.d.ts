import { z } from 'zod';
import type { BadgeT } from './schema';
import { badgeSchema } from './schema';

export const badgeListSchema = badgeSchema
	.omit({ pieces: true })
	.extend({ max: z.number() })
	.array();

export type BadgeListT = z.infer<typeof badgeListSchema>;

export const createBadgeSchema = badgeSchema.omit({ pieces: true }).extend({
	pieces: z.string().array(),
});

export type CreateBadgeT = z.infer<typeof createBadgeSchema>;

export interface IBadgeRepo {
	getBadgeList: () => Promise<BadgeListT>;
	getBadgeWithPieces: (badgeSlug: BadgeT['slug']) => Promise<BadgeT | null>;
	createBadge: (badge: CreateBadgeT) => Promise<void>;
}
