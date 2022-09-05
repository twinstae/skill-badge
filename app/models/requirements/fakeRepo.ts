import { z } from 'zod';
import { withSkillSlug } from '../skills/schema';
import fakeRequirements from './fakeRequirements.json';
import { requirementSchema } from './schema';

export const fakeRequirementList = z
  .array(withSkillSlug(requirementSchema))
  .parse(fakeRequirements);