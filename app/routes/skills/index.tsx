import { json } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import CenterCardLayout from '~/components/CenterCardLayout';
import { Link } from '~/Link';
import { getSkillList, type Skill } from '~/models/skills.server';

type LoaderData = {
  skills: Skill[];
};

export const loader = async () => {
  return json<LoaderData>({
    skills: await getSkillList(),
  });
};

export default function Posts() {
  const { skills } = useLoaderData() as LoaderData;
  return (
    <CenterCardLayout>
      <h1 className="text-2xl font-bold mb-2">역량 목록</h1>
      <ul className="p-2 m-2">
        {skills.map((skill) => (
          <li key={skill.slug}>
            <Link to={'/skills/' + skill.slug} className="link link-primary">
              {skill.title} 역량
            </Link>
          </li>
        ))}
      </ul>
      <Link className="btn btn-primary" to="/skills/admin/new">
        새 역량 만들기
      </Link>
    </CenterCardLayout>
  );
}
