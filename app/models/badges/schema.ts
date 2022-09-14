import { z } from 'zod';
import { slugSchema } from '../skills/schema';

export const pieceSchema = z.object({
	id: z.string().uuid(),
	title: z.string().min(1, '값을 입력해주세요').max(64).trim(),
	content: z.string().max(1024),
	isDone: z.boolean(),
});

export type PieceT = z.infer<typeof pieceSchema>;

export const badgeSchema = z.object({
	slug: slugSchema.max(32),
	title: z.string().min(1, '값을 입력해주세요').max(64).trim(),
	skillSlugs: z.array(slugSchema).max(4),
	pieces: z.array(pieceSchema),
	icon: z.enum(['commandLine', 'rectangleGroup', 'magnifyingGlass']),
});

export type BadgeT = z.infer<typeof badgeSchema>;
