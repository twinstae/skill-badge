import rawFrontReqList from './frontReqList.json';
import rawBackReqList from './backReqList.json';
import type { RequirementT } from './schema';
import type { WithSkillSlug } from '../skills/schema';

// const reqListSchema = z.array(withSkillSlug(requirementSchema));

const frontReqList = rawFrontReqList;
const backReqList = rawBackReqList;

type FakeRequirementT = WithSkillSlug<RequirementT> & { count: number };

export const fakeRequirementList = 
  frontReqList.map(v => ({...v, position: 'frontend' } as FakeRequirementT))
  .concat(backReqList.map(v=>({...v, position: 'backend'} as FakeRequirementT)));
