/* eslint-disable @typescript-eslint/no-floating-promises */
import fs from 'fs/promises';
import edgedb from 'edgedb';
import { z } from 'zod';
import { resourceSchema } from './resources/schema';
import { skillSchema, withSkillSlug } from './skills/schema';
import { flatSlugs } from './skills/transformUtil';
import { requirementSchema } from './requirements/schema';

const client = edgedb();

client.query(
	`
    select Resource {
      slug,
      title,
      content,
      href,
      skillSlug := .skill.slug
    }
  `,
).then((raw) => {
	const data = z.array(withSkillSlug(resourceSchema)).parse(raw);
	return fs.writeFile('./app/models/resources/backup.json', JSON.stringify(
		data,
	), { encoding: 'utf8' });
});

client.query(
	`
    select Requirement {
      content,
      skillSlug := .skill.slug
    }
  `,
).then((raw) => {
	const data = z.array(withSkillSlug(requirementSchema)).parse(raw);
	return fs.writeFile('./app/models/requirements/backup.json', JSON.stringify(
		data,
	), { encoding: 'utf8' });
});

const flatChildren = flatSlugs('children');
client.query(
	`
    select Skill {
      slug,
      title,
      content,
      children: { slug },
      parents
    }
  `,
).then((raw) => {
	const data = z.array(skillSchema).parse(raw.map(flatChildren));
	return fs.writeFile('./app/models/skills/backup.json', JSON.stringify(data), {
		encoding: 'utf8',
	});
});
