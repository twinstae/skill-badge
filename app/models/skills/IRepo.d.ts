import { z } from 'zod';
import { resourceSchema } from '../resources/schema';
import { requirementSchema } from '../requirements/schema';
import { skillSchema, type SkillT } from './schema';

export const skillWithRequirementsAndResourcesSchema = skillSchema.extend({
	resources: z.array(resourceSchema),
	requirements: z.array(requirementSchema),
});

type SkillWithRequirementsAndResourcesT = z.infer<
	typeof skillWithRequirementsAndResourcesSchema
>;

type ImmutableSkillT = Readonly<SkillT>;

interface ISkillRepo {
	getAllList: () => Promise<Pick<SkillT, 'title' | 'slug'>[]>;
	getOneBySlug: (slug: SkillT['slug']) => Promise<SkillT | null>;
	getOneBySlugWithRequirementsAndResources: (
		slug: SkillT['slug'],
	) => Promise<SkillWithRequirementsAndResourcesT | null>;
	create: (skill: SkillT) => Promise<void>;
	update: (skill: SkillT) => Promise<void>;
	delete: (slug: SkillT['slug']) => Promise<void>;
}
