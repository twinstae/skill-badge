import { z } from 'zod';
import { slugSchema, withSkillSlug } from '../skills/schema';
import fakeResources from './fakeResources.json';

export const resourceSchema = z.object({
  slug: slugSchema,
  title: z.string(),
  content: z.string(),
  href: z.string(),
});

export type ResourceT = z.infer<typeof resourceSchema>;

export const fakeReactResources = z
  .array(withSkillSlug(resourceSchema))
  .parse(fakeResources);
