import { z } from 'zod';
import { slugSchema, withSkillSlug } from '../skills/schema';

export const positionSchema = z.object({
	slug: slugSchema.max(16),
	title: z.string().min(1, '값을 입력해주세요').max(16).trim(),
});

export type PositionT = z.infer<typeof positionSchema>;

export const requirementSchema = withSkillSlug(
	z.object({
		id: z.string().uuid(),
		content: z.string().max(1024),
		positionSlug: positionSchema.shape.slug,
	}),
);

export type RequirementT = z.infer<typeof requirementSchema>;
