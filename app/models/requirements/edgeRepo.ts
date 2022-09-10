import type { Client } from 'edgedb';
import type { IPositionsRepo } from './IRepo';

export function EdgePositionsRepo(client: Client): IPositionsRepo {
  return {
    async getPositionList() {
      return client.query(`
      select Position {
        slug,
        title
      }
      `);
    },
    async getRequirementsByPosition(positionSlug) {
      return client.query(`
      with position := ( select Position filter .slug = <str>$positionSlug )
      select Requirement {
        id,
        content,
        skillSlug := .skill.slug,
        positionSlug := .position.slug,
      }
      filter .position = position;
      `, { positionSlug });
    },
    async addRequirement(requirement) {
      return client.execute(`
      with skill := ( select Skill filter .slug in <str>$skillSlug limit 1 ),
        position := ( select Position filter .slug in <str>$positionSlug limit 1 )
      insert Requirement {
        content := <str>$content,
        skill := skill,
        position := position,
      };
      `, requirement);
    },
    async deleteRequirement(uuid) {
      return client.execute(`
      delete Requirement
      filter .id = <uuid>$uuid;
      `, { uuid });
    },
    async updateRequirement(requirement) {
      return client.execute(`
      with skill := ( select Skill filter .slug in <str>$skillSlug limit 1 ),
        position := ( select Position filter .slug in <str>$positionSlug limit 1 )      
      update Requirement
      filter .id = <uuid>$id
      set {
        content := <str>$content,
        skill := skill,
        position := position,
      };
      `, requirement);
    },
  };
}
