import type { Client } from "edgedb";
import invariant from "tiny-invariant";
import { SKILL_ALREADY_EXISTS, SKILL_NOT_FOUND } from "./errorMessages";
import type { ISkillRepo } from "./IRepo";
import { skillSchema } from "./schema";
import { flatSlugs } from "./transformUtil";

import getAllList from "./queries/getAllList.edgeql";
import getOneBySlug from "./queries/getOneBySlug.edgeql";
import skillExists from "./queries/skillExists.edgeql";
import createSkill from "./queries/createSkill.edgeql";
import updateSkill from "./queries/updateSkill.edgeql";

const flatChildren = flatSlugs('children');

export function EdgeSkillsRepo(client: Client): ISkillRepo {
  return {
    async getAllList(){
      return client.query(getAllList);
    },
    async getOneBySlug(slug){
      const result = await client.querySingle(getOneBySlug, { slug });

      if(result === null) return null;

      return skillSchema.parse(flatChildren(result));
    },
    async create(skill){
      const exists = await client.queryRequiredSingle<boolean>(skillExists, { slug: skill.slug });
      invariant(
        exists === false,
        SKILL_ALREADY_EXISTS(skill.slug)
      );

      await client.execute(createSkill, skill);
    },
    async update({ slug, title, content, children, parents }){
      const old = await this.getOneBySlug(slug);
      invariant(
        old !== null,
        SKILL_NOT_FOUND(slug)
      );

      const detached_parents = old.parents.filter(item => !parents.includes(item));
      const new_parents = parents.filter(item => !old.parents.includes(item));

      await client.execute(updateSkill, {
        slug, title, content, children,
        new_parents,
        detached_parents
      });
    }
  }
}
