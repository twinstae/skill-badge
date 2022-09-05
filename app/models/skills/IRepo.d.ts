import { z } from "zod";
import { resourceSchema } from "../resources/schema";
import { requirementSchema } from "../requirements/schema";
import { skillSchema, type Skill } from "./schema";

export const skillWithRequirementsAndResourcesSchema = skillSchema.extend({
  resources: z.array(resourceSchema),
  requirements: z.array(requirementSchema)
})

type SkillWithRequirementsAndResourcesT = z.infer<typeof skillWithRequirementsAndResourcesSchema>

interface ISkillRepo {
  async getAllList(): Promise<Pick<Skill, 'title' | 'slug'>[]>
  async getOneBySlug(slug: Skill['slug']): Promise<Skill | null>
  async getOneBySlugWithRequirementsAndResources(slug: Skill['slug']): Promise<SkillWithRequirementsAndResourcesT | null>
  async create(skill: Skill): Promise<void>
  async update(skill: Skill): Promise<void>
}