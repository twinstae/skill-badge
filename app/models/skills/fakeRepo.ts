import invariant from 'tiny-invariant';
import { z } from 'zod';

import { fakeRequirementList } from '../requirements/fakeRepo';
import { fakeReactResources } from '../resources/fakeRepo';

import { SKILL_ALREADY_EXISTS } from './errorMessages';
import skillsData from './fakeSkills.json';
import type { ISkillRepo } from './IRepo';
import { type SkillT, skillSchema } from './schema';

export const fakeSkillList: SkillT[] = z.array(skillSchema).parse(skillsData);

export function FakeSkillsRepo(init: SkillT[]): ISkillRepo {
  let _store = init;
  return {
    async getAllList(){
      return _store.map(item => ({ slug: item.slug, title: item.title }));
    },
    async getOneBySlug(slug){
      const result = _store.find(item => item.slug === slug);
      if (result === undefined) return null;
      return result;
    },
    async getOneBySlugWithRequirementsAndResources(slug){
      const skill = _store.find(item => item.slug === slug);
      if (skill === undefined) return null;

      return {
        ...skill,
        requirements: fakeRequirementList.filter((r) => r.skillSlug === skill.slug),
        resources: fakeReactResources.filter((r) => r.skillSlug === skill.slug)
      }
    },
    async create(skill){
      invariant(
        _store.every(item => item.slug !== skill.slug),
        SKILL_ALREADY_EXISTS(skill.slug)
      );
      _store = [..._store, skill];

      _store = _store.map(a => skill.parents.includes(a.slug)
          ? {...a, children: [...a.children, skill.slug]}
          : a
        );
      _store = _store.map(a => skill.children.includes(a.slug)
        ? {...a, parents: [...a.parents, skill.slug]}
        : a
      );
    },
    async update(skill){
      _store = _store.map(item => item.slug === skill.slug ? skill : item);
    },
    async delete(slug){
      _store = _store.filter(item => item.slug !== slug);
      _store = _store.map(a => a.parents.includes(slug)
          ? {...a, parents: a.parents.filter(item => item !== slug)}
          : a
        );
      _store = _store.map(a => a.children.includes(slug)
        ? {...a, children: a.children.filter(item => item !== slug)}
        : a
      );
    }
  }
}

// https://stackoverflow.com/questions/72661999/how-do-i-use-in-memory-cache-in-remix-run-dev-mode
declare global {
  var __fakeSkillRepo: ISkillRepo | undefined;
}

if (global.__fakeSkillRepo === undefined){
  global.__fakeSkillRepo = FakeSkillsRepo(fakeSkillList);
}

export default global.__fakeSkillRepo!;
