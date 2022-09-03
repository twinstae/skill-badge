import edgedb from "edgedb";
import { it } from "vitest";
import { EdgeSkillsRepo } from "./edgeRepo";
import { skillSchema } from "./schema";

const client = edgedb();

it('test', async () => {
  const repo = EdgeSkillsRepo(client);
  try {
    await repo.create(skillSchema.parse({
      slug: 'vue',
      title: '뷰',
      content: '',
    }))
  } catch (e){
    if (e instanceof Error){
      console.log(`"${e.message}"`)
    }
  }
})

