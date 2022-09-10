import rawFrontReqList from './frontReqList.json';
import rawBackReqList from './backReqList.json';
import { requirementSchema } from './schema';
import { withSkillSlug } from '../skills/schema';
import { z } from 'zod';

const reqListSchema = z.array(withSkillSlug(requirementSchema));

const rawRequirementList = rawFrontReqList.map(v => ({...v, position: 'frontend' }))
  .concat(rawBackReqList.map(v=>({...v, position: 'backend'})));

export const fakeRequirementList = reqListSchema.parse(rawRequirementList);
