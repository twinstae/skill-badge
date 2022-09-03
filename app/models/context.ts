import edgedb from "edgedb";
import { EdgeSkillsRepo } from "./skills/edgeRepo"
// import { fakeSkillList, FakeSkillsRepo } from "./skills/fakeRepo"
import type { ISkillRepo } from "./skills/IRepo"

const client = edgedb();

interface ContextT {
  skillsRepo: ISkillRepo
}

export const context: ContextT = {
  // skillsRepo: FakeSkillsRepo(fakeSkillList),
  skillsRepo: EdgeSkillsRepo(client),
}
