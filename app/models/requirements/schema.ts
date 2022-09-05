import { z } from 'zod';

export const requirementSchema = z.object({
  content: z.string(),
});

export type RequirementT = z.infer<typeof requirementSchema>;

