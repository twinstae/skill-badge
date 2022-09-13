import { z } from 'zod';
import { slugTitleSchema, withSkillSlug } from '../skills/schema';

export const positionSchema = slugTitleSchema;

export type PositionT = z.infer<typeof positionSchema>;

export const requirementSchema = withSkillSlug(
	z.object({
		id: z.string().uuid(),
		content: z.string(),
		positionSlug: positionSchema.shape.slug,
	}),
);

export type RequirementT = z.infer<typeof requirementSchema>;
