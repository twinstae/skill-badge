import rawFrontReqList from './frontReqList.json';
import rawBackReqList from './backReqList.json';
import { requirementSchema, type RequirementT } from './schema';
import type { IPositionsRepo } from './IRepo';
import { withSkillSlug } from '../skills/schema';
import { z } from 'zod';
import { uuidv4 } from '../uuidv4';

const reqListSchema = z.array(withSkillSlug(requirementSchema));

const rawRequirementList = rawFrontReqList
  .map((v) => ({ ...v, uuid: uuidv4(), positionSlug: 'frontend' }))
  .concat(rawBackReqList.map((v) => ({ ...v, uuid: uuidv4(), positionSlug: 'backend' })));

export const fakeRequirementList = reqListSchema.parse(rawRequirementList);

export function FakePositionsRepo(
  requirementList: RequirementT[]
): IPositionsRepo {
  let _store = requirementList;
  return {
    async getPositionList() {
      return [
        { title: '프런트엔드', slug: 'frontend' },
        { title: '백엔드', slug: 'backend' },
      ];
    },
    async getRequirementsByPosition(positionSlug) {
      return _store.filter((req) => req.positionSlug === positionSlug);
    },
    async addRequirement(requirement: Omit<RequirementT, 'uuid'>) {
      _store = [..._store, { ...requirement, uuid: uuidv4() }];
    },
    async deleteRequirement(uuid: string) {
      _store = _store.filter((req) => req.uuid !== uuid);
    },
    async updateRequirement(requirement: RequirementT) {
      _store = _store.map((req) =>
        req.uuid === requirement.uuid ? requirement : req
      );
    },
  };
}

declare global {
  var __fakePositionsRepo: IPositionsRepo | undefined;
}

if (global.__fakePositionsRepo === undefined){
  global.__fakePositionsRepo = FakePositionsRepo(fakeRequirementList);
}

export default global.__fakePositionsRepo!;