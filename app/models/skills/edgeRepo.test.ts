import fs from 'fs/promises';
import edgedb from 'edgedb';
import { it } from 'vitest';
import { z } from 'zod';
import { skillSchema } from './schema';
import { flatSlugs } from './transformUtil';

const client = edgedb();

const flatChildren = flatSlugs('children');

it('save full data', async () => {
  await client
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
});
