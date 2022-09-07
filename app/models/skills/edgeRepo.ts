import type { Client } from "edgedb";
import invariant from "tiny-invariant";

import { SKILL_ALREADY_EXISTS, SKILL_NOT_FOUND } from "./errorMessages";
import { flatSlugs } from "./transformUtil";
import { type ISkillRepo, skillWithRequirementsAndResourcesSchema } from "./IRepo.d";
import { skillSchema } from "./schema";
import getAllList from "./queries/getAllList.edgeql";
import getOneBySlug from "./queries/getOneBySlug.edgeql";
import getOneBySlugWithRequirementsAndResources from "./queries/getOneBySlugWithRequirementsAndResources.edgeql";
import skillExists from "./queries/skillExists.edgeql";
import createSkill from "./queries/createSkill.edgeql";
import updateSkill from "./queries/updateSkill.edgeql";
import deleteSkill from "./queries/deleteSkill.edgeql";

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
    async getOneBySlugWithRequirementsAndResources(slug){
      const result = await client.querySingle(getOneBySlugWithRequirementsAndResources, { slug });

      if(result === null) return null;

      return skillWithRequirementsAndResourcesSchema.parse(flatChildren(result));
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
      invariant(old !== null, SKILL_NOT_FOUND(slug));

      const detached_parents = old.parents.filter(item => !parents.includes(item));
      const new_parents = parents.filter(item => !old.parents.includes(item));

      await client.execute(updateSkill, {
        slug, title, content, children,
        new_parents,
        detached_parents
      });
    },
    async delete(slug){
      const old = await this.getOneBySlug(slug);
      invariant(old !== null, SKILL_NOT_FOUND(slug));

      await client.execute(deleteSkill, { slug });
    }
  }
}
