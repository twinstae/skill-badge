import { z } from 'zod';

export const requirementSchema = z.object({
  content: z.string(),
  position: z.enum(['frontend', 'backend'])
});

export type RequirementT = z.infer<typeof requirementSchema>;
