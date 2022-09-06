import type { ISkillRepo } from "./skills/IRepo"
// import skillsRepo from "./skills/fakeRepo"

import edgedb from "edgedb";
import { EdgeSkillsRepo } from "./skills/edgeRepo"
const client = edgedb();
const skillsRepo = EdgeSkillsRepo(client);

interface ContextT {
  skillsRepo: ISkillRepo
}

export const context: ContextT = {
  skillsRepo,
}
