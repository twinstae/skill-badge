import { logger } from "~/logger";
import { fakeSkillList, FakeSkillsRepo } from "~/models/skills/fakeRepo";

export async function action() {
  global.__fakeDB = FakeSkillsRepo(fakeSkillList);
  logger.info('skill DB가 초기화되었습니다');
  return new Response('', {
    status: 204,
  });
}