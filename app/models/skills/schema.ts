import { z } from 'zod';

export const slugRegex = "^[a-z0-9]+(?:-[a-z0-9]+)*$";

export const slugSchema = z.string()
  .regex(new RegExp(slugRegex))
  .min(1, 'slug가 비어있어요')
  .trim();

export const skillSchema = z.object({
  slug: slugSchema,
  title: z.string().min(1, '값을 입력해주세요').trim(),
  parents: z.array(slugSchema).max(4).default([]),
  children: z.array(slugSchema).max(16).default([]),
  content: z.string().trim(),
});

export type Skill = z.infer<typeof skillSchema>;