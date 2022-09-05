import { z } from 'zod';
import { withSkillSlug } from '../skills/schema';
import fakeRequirements from './fakeRequirements.json';

export const requirementSchema = z.object({
  rawText: z.string(),
  count: z.number(),
});

export type RequirementT = z.infer<typeof requirementSchema>;

export const fakeRequirementList = z
  .array(withSkillSlug(requirementSchema))
  .parse(fakeRequirements);
