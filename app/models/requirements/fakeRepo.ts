import rawRequirementList from './fakeRequirementList.json';
import { requirementSchema, type RequirementT } from './schema';
import type { IPositionsRepo } from './IRepo';
import { withSkillSlug } from '../skills/schema';
import { z } from 'zod';
import { uuidv4 } from '../uuidv4';
import invariant from 'tiny-invariant';
import { IsomorphicArray } from '~/functional/Array';

const reqListSchema = z.array(withSkillSlug(requirementSchema));

export const fakeRequirementList = reqListSchema.parse(rawRequirementList);

export function FakePositionsRepo(
	requirementList: RequirementT[],
): IPositionsRepo {
	let _store = requirementList;
	return {
		async getPositionList() {
			return IsomorphicArray([
				{ title: '프런트엔드', slug: 'frontend' },
				{ title: '백엔드', slug: 'backend' },
			]);
		},
		async getRequirements() {
			return _store;
		},
		async getRequirementById(uuid) {
			return _store.find((req) => req.id === uuid) ?? null;
		},
		async getRequirementsByPosition(positionSlug) {
			invariant(['frontend', 'backend'].includes(positionSlug));

			return _store.filter((req) => req.positionSlug === positionSlug);
		},
		async addRequirement(requirement) {
			invariant(['frontend', 'backend'].includes(requirement.positionSlug));

			const id = uuidv4();
			_store = [..._store, { ...requirement, id }];
			return id;
		},
		async deleteRequirement(targetId) {
			invariant(
				_store.some((req) => req.id === targetId),
				`[not-found] Requirement { id: ${targetId} }를 찾을 수 없습니다.`,
			);

			_store = _store.filter((req) => req.id !== targetId);
		},
		async updateRequirement(requirement) {
			const targetId = requirement.id;
			invariant(
				_store.some((req) => req.id === targetId),
				`[not-found] Requirement { id: ${targetId} } 를 찾을 수 없습니다.`,
			);

			_store = _store.map((req) => (req.id === targetId ? requirement : req));
		},
	};
}

declare global {
	var __fakePositionsRepo: IPositionsRepo | undefined;
}

if (global.__fakePositionsRepo === undefined) {
	global.__fakePositionsRepo = FakePositionsRepo(fakeRequirementList);
}

export default global.__fakePositionsRepo!;
