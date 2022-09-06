import { fakeSkillList, FakeSkillsRepo } from "~/models/skills/fakeRepo";

export async function action() {
  global.__fakeDB = FakeSkillsRepo(fakeSkillList);
  return new Response('', {
    status: 204,
  });
}