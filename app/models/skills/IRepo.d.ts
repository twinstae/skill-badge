import type { Skill } from "./schema";

interface ISkillRepo {
  async getAllList(): Promise<Pick<Skill, 'title' | 'slug'>[]>
  async getOneBySlug(slug: Skill['slug']): Promise<Skill | null>
  async create(skill: Skill): Promise<void>
  async update(skill: Skill): Promise<void>
}