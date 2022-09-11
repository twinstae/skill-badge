import { fakeSkillList, FakeSkillsRepo } from "~/models/skills/fakeRepo";

export async function action() {
  global.__fakeSkillRepo = FakeSkillsRepo(fakeSkillList);
  return new Response('', {
    status: 204,
  });
}