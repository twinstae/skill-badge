import { z } from 'zod';
import { slugSchema } from '../skills/schema';

export const resourceSchema = z.object({
  slug: slugSchema,
  title: z.string(),
  content: z.string(),
  href: z.string(),
});

export type ResourceT = z.infer<typeof resourceSchema>;

