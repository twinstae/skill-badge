import { z } from 'zod';

export const skillSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  tags: z.array(z.string().min(1)),
})

export type Skill = z.infer<typeof skillSchema>;

const fakeDB: Skill[] = [
  {
    slug: 'remix',
    title: '리믹스',
    tags: ['react', 'ssr', 'router'],
  },
  {
    slug: 'next-js',
    title: '넥스트js',
    tags: ['react', 'ssr', 'router'],
  },
];

export async function getSkillList(){
  return fakeDB;
}

export async function getSkill(slug: string){
  return fakeDB.find(skill => skill.slug === slug);
}

export async function createSkill(skill: Skill) {
  return fakeDB.push(skill);
}