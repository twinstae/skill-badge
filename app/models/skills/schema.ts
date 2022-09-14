import { z } from 'zod';
import type { ZodRawShape, ZodObject } from 'zod';

export const slugRegex = '^[a-z0-9]+(?:-[a-z0-9]+)*$';

export const slugSchema = z.string().regex(new RegExp(slugRegex)).min(
	1,
	'slug가 비어있어요',
)
.trim();

export const skillSchema = z.object({
	slug: slugSchema.max(32),
	title: z.string().min(1, '값을 입력해주세요').max(64).trim(),
	parents: z.array(slugSchema).max(4).default([]),
	children: z.array(slugSchema).max(16).default([]),
	content: z.string().max(1024),
});

export type SkillT = z.infer<typeof skillSchema>;

export type WithSkillSlug<T> = T & { skillSlug: SkillT['slug'] };

export function withSkillSlug<T extends ZodRawShape>(schema: ZodObject<T>) {
	return schema.extend({ skillSlug: z.string() });
}
