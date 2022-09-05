import { z } from 'zod';

export const requirementSchema = z.object({
  rawText: z.string(),
  count: z.number(),
});

export type RequirementT = z.infer<typeof requirementSchema>;

