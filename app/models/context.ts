import type { ISkillRepo } from './skills/IRepo';
import type { IPositionsRepo } from './requirements/IRepo';

import skillsRepo from './skills/fakeRepo';
import positionsRepo from './requirements/fakeRepo';

// import edgedb from "edgedb";
// import { EdgeSkillsRepo } from "./skills/edgeRepo"
// import { EdgePositionsRepo } from "./requirements/edgeRepo";

// const client = edgedb();
// const skillsRepo = EdgeSkillsRepo(client);
// const positionsRepo = EdgePositionsRepo(client);

interface ContextT {
  skillsRepo: ISkillRepo;
  positionsRepo: IPositionsRepo;
}

export const context: ContextT = {
  skillsRepo,
  positionsRepo,
};
