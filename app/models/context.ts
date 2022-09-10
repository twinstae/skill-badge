import type { ISkillRepo } from "./skills/IRepo"
import skillsRepo from "./skills/fakeRepo"
import type { IPositionsRepo } from "./requirements/IRepo"
import positionsRepo from "./requirements/fakeRepo"

// import edgedb from "edgedb";
// import { EdgeSkillsRepo } from "./skills/edgeRepo"

// const client = edgedb();
// const skillsRepo = EdgeSkillsRepo(client);

interface ContextT {
  skillsRepo: ISkillRepo,
  positionsRepo: IPositionsRepo,
}

export const context: ContextT = {
  skillsRepo,
  positionsRepo,
}
