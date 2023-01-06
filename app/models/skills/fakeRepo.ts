import invariant from 'tiny-invariant';
import { z } from 'zod';
import { difference, get, IsomorphicArray } from '~/functional/Array';
import { addTo, pick, removeAllFrom } from '~/functional/Object';

import { fakeReactResources } from '../resources/fakeRepo';

import { SKILL_ALREADY_EXISTS, SKILL_NOT_FOUND } from './errorMessages';
import skillsData from './fakeSkills.json';
import type { ISkillRepo } from './IRepo';
import { type SkillT, skillSchema } from './schema';

export const fakeSkillList: SkillT[] = z.array(skillSchema).parse(skillsData);

export function FakeSkillsRepo(init: SkillT[]): ISkillRepo {
	let _store: Omit<SkillT, 'parents'>[] = init;
	return {
		async getAllList() {
			return IsomorphicArray(
				_store.map((skill) => pick(skill, ['slug', 'title'])),
			);
		},
		async getOneBySlug(slug) {
			const result = _store.find((item) => item.slug === slug);
			if (result === undefined) {
				return null;
			}

			return {
				...result,
				parents: get(_store.filter((skill) => skill.children.includes(slug)))
					.slug,
			};
		},
		async getOneBySlugWithRequirementsAndResources(slug) {
			const skill = await this.getOneBySlug(slug);
			if (skill === null) {
				return null;
			}

			const requirementList =
				await globalThis.__fakePositionsRepo!.getRequirements();
			return {
				...skill,
				requirements: requirementList.filter((r) => r.skillSlug === skill.slug),
				resources: fakeReactResources.filter((r) => r.skillSlug === skill.slug),
			};
		},
		async create(skill) {
			invariant(
				_store.every((item) => item.slug !== skill.slug),
				SKILL_ALREADY_EXISTS(skill.slug),
			);
			_store = [..._store, skill];

			_store = _store.map((a) =>
				skill.parents.includes(a.slug) ? addTo(a, 'children', skill.slug) : a,
			);
		},
		async update({ slug, title, content, children, parents }) {
			const old = await this.getOneBySlug(slug);
			invariant(old !== null, SKILL_NOT_FOUND(slug));

			const detached_parents = difference(old.parents, parents);
			const new_parents = difference(parents, old.parents);

			_store = _store.map((a) => {
				if (detached_parents.includes(a.slug)) {
					return removeAllFrom(a, 'children', slug);
				}
				if (new_parents.includes(a.slug)) {
					return addTo(a, 'children', slug);
				}

				if (a.slug === slug) {
					return { slug, title, content, children };
				}

				return a;
			});
		},
		async delete(slug) {
			_store = _store.filter((item) => item.slug !== slug);
			_store = _store.map((a) => removeAllFrom(a, 'children', slug));
		},
	};
}

// https://stackoverflow.com/questions/72661999/how-do-i-use-in-memory-cache-in-remix-run-dev-mode
declare global {
	var __fakeSkillRepo: ISkillRepo | undefined;
}

if (global.__fakeSkillRepo === undefined) {
	global.__fakeSkillRepo = FakeSkillsRepo(fakeSkillList);
}

export default global.__fakeSkillRepo!;
