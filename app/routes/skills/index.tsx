import React from 'react';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import CenterCardLayout from '~/components/CenterCardLayout';
import { Link } from '~/Link';
import type { Skill } from '~/models/skills/schema';
import { context } from '~/models/context';
import { logger } from '~/logger';

type LoaderData = {
  skills: Pick<Skill, 'slug' | 'title'>[];
};

export const loader = async () => {
  logger.info('skill 목록 보기');

  const skills = await context.skillsRepo.getAllList();
  return json<LoaderData>({ skills });
};

export default function SkillListPage() {
  const { skills } = useLoaderData() as LoaderData;
  return (
    <CenterCardLayout>
      <h1>역량 목록</h1>
      <Link className="btn btn-sm btn-primary w-full" to="/skills/admin/new">
        새 역량 만들기
      </Link>
      <ul className="p-2 m-2 menu">
        {skills.map((skill) => (
          <li key={skill.slug}>
            <Link to={'/skills/' + skill.slug} className="p-2">
              {skill.title}
            </Link>
          </li>
        ))}
      </ul>
    </CenterCardLayout>
  );
}
