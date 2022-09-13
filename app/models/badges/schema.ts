import { z } from 'zod';
import { slugSchema, slugTitleSchema } from '../skills/schema';

export const pieceSchema = z.object({
	id: z.string().uuid(),
	title: z.string().min(1, '값을 입력해주세요').trim(),
	isDone: z.boolean(),
});

export type PieceT = z.infer<typeof pieceSchema>;

export const badgeSchema = slugTitleSchema.extend({
	skillSlugs: z.array(slugSchema).max(4),
	pieces: z.array(pieceSchema),
	icon: z.enum(['commandLine', 'rectangleGroup', 'magnifyingGlass']),
});

export type BadgeT = z.infer<typeof badgeSchema>;
