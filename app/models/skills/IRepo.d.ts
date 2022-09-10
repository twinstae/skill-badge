import { z } from "zod";
import { resourceSchema } from "../resources/schema";
import { requirementSchema } from "../requirements/schema";
import { skillSchema, type SkillT } from "./schema";

export const skillWithRequirementsAndResourcesSchema = skillSchema.extend({
  resources: z.array(resourceSchema),
  requirements: z.array(requirementSchema)
})

type SkillWithRequirementsAndResourcesT = z.infer<typeof skillWithRequirementsAndResourcesSchema>

interface ISkillRepo {
  async getAllList(): Promise<Pick<SkillT, 'title' | 'slug'>[]>
  async getOneBySlug(slug: SkillT['slug']): Promise<SkillT | null>
  async getOneBySlugWithRequirementsAndResources(slug: SkillT['slug']): Promise<SkillWithRequirementsAndResourcesT | null>
  async create(skill: SkillT): Promise<void>
  async update(skill: SkillT): Promise<void>
  async delete(slug: SkillT['slug']): Promise<void>
}