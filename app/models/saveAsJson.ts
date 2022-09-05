import fs from 'fs/promises';
import edgedb from 'edgedb';
import { z } from 'zod';
import { resourceSchema } from './resources/schema';
import { skillSchema, withSkillSlug } from './skills/schema';
import { flatSlugs } from './skills/transformUtil';

const client = edgedb();

client
  .query(`
    select Resource {
      slug,
      title,
      content,
      href,
      skill: {
        slug
      }
    }
  `)
  .then((raw) => {
    const data = z.array(withSkillSlug(resourceSchema))
      .parse(raw.map((item: any) => ({
        ...item,
        skill: undefined,
        skillSlug: item.skill.slug
      })));
    return fs.writeFile(
      './app/models/resources/fakeResources.json',
      JSON.stringify(data),
      { encoding: 'utf8' }
    );
  });


const flatChildren = flatSlugs('children');
client
  .query(`
    select Skill {
      slug,
      title,
      content,
      children: { slug },
      parents
    }
  `)
  .then((raw) => {
    const data = z.array(skillSchema).parse(raw.map(flatChildren));
    return fs.writeFile(
      './app/models/skills/fakeSkills.json',
      JSON.stringify(data),
      { encoding: 'utf8' }
    );
  });