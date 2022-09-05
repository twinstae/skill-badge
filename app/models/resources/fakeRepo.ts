import { z } from 'zod';

import {  withSkillSlug } from '~/models/skills/schema';

import { resourceSchema } from './schema';
import fakeResources from './fakeResources.json';

export const fakeReactResources = z
  .array(withSkillSlug(resourceSchema))
  .parse(fakeResources);