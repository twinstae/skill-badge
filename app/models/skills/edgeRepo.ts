import type { Client } from "edgedb";
import invariant from "tiny-invariant";
import { SKILL_ALREADY_EXISTS, SKILL_NOT_FOUND } from "./errorMessages";
import type { ISkillRepo } from "./IRepo";
import { skillSchema } from "./schema";
import { flatSlug, flatSlugs } from "./transformUtil";

const flatChildren = flatSlugs('children');

export function EdgeSkillsRepo(client: Client): ISkillRepo {
  return {
    async getAllList(){
      return client.query(`
        select Skill {
          slug,
          title,
        }
      `);
    },
    async getAllSlugs(){
      return this.getAllList().then(skills => skills.map(flatSlug));
    },
    async getOneBySlug(slug){
      const result = await client.query(`
        select Skill {
          slug,
          title,
          content,
          children: { slug },
          parents := .<children[is Skill].slug
        }
        filter .slug = <str>$slug
      `, { slug });

      invariant(
        result[0] !== undefined,
        SKILL_NOT_FOUND(slug)
      )
      return skillSchema.parse(flatChildren(result[0]));
    },
    async create({ slug, title, content }){
      const [exists] = await client.query(`
        with result := (select Skill filter .slug = 'vue')
        select count(result) = 1
      `);
      invariant(
        exists === false,
        SKILL_ALREADY_EXISTS(slug)
      );

      await client.execute(`
        insert Skill {
          slug := <str>$slug,
          title := <str>$title,
          content := <str>$content,
        }
      `, { slug, title, content });
    }
  }
}
