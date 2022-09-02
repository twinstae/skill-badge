import { z } from 'zod';
import skillsData from './skills.data';

// https://zod.dev/
export const slugSchema = z.string().min(1, 'slug가 비어있어요').trim();

export const skillSchema = z.object({
  slug: slugSchema,
  title: z.string().min(1, '값을 입력해주세요').trim(),
  parents: z.array(slugSchema).max(4).default([]),
  children: z.array(slugSchema).max(16).default([]),
  content: z.string().trim(),
});

export type Skill = z.infer<typeof skillSchema>;

const fakeDB: Skill[] = z.array(skillSchema).parse(skillsData);

export const skillIdList = fakeDB.map(skill =>skill.slug);

export async function getSkillList(){
  return fakeDB;
}

export async function getSkill(slug: string){
  return fakeDB.find(skill => skill.slug === slug);
}

export async function createSkill(skill: Skill) {
  return fakeDB.push(skill);
}