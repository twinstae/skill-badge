import invariant from 'tiny-invariant';
import { z } from 'zod';
import { SKILL_ALREADY_EXISTS } from './errorMessages';
import skillsData from './fakeData';
import type { ISkillRepo } from './IRepo';
import { type Skill, skillSchema } from './schema';

export const fakeSkillList: Skill[] = z.array(skillSchema).parse(skillsData);

export function FakeSkillsRepo(init: Skill[]): ISkillRepo {
  const _store = init;
  return {
    async getAllList(){
      return _store.map(item => ({ slug: item.slug, title: item.title }));
    },
    async getOneBySlug(slug){
      const result = _store.find(item => item.slug === slug);
      if (result === undefined) return null;
      return result;
    },
    async create(skill){
      invariant(
        _store.every(item => item.slug !== skill.slug),
        SKILL_ALREADY_EXISTS(skill.slug)
      );
      _store.push(skill);
    },
    async update(skill){
      _store.map(item => item.slug === skill.slug ? skill : item);
    }
  }
}