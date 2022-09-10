import { z } from 'zod';
import { slugTitleSchema, withSkillSlug } from '../skills/schema';

const PositionSchema = slugTitleSchema;

export type PositionT = z.infer<typeof PositionSchema>;

export const requirementSchema = withSkillSlug(z.object({
  uuid: z.string().uuid(),
  content: z.string(),
  positionSlug: PositionSchema.shape.slug,
}));

export type RequirementT = z.infer<typeof requirementSchema>;
