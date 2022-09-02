import { json, type LoaderFunction } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { getSkill, type Skill } from '~/models/skills.server';
import invariant from 'tiny-invariant';
import CenterCardLayout from '~/components/CenterCardLayout';
import SkillList from '~/components/SkillList';
import { marked } from 'marked';
import createDataList from '~/components/createDataList';
import { fakeRequirementList } from '~/models/requirements.server';
import { id } from '~/funcUtil';
import { fakeReactResources, type ResourceT } from '~/models/resource.server';
import LinkWithTooltip from '~/components/LinkWithTooltip';
import Divider from '~/components/Divider';

type LoaderData = {
  skill: Skill;
  requirements: string[];
  resources: ResourceT[];
};

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, `params.slug is required`);

  const skill = await getSkill(params.slug);

  invariant(skill, `skill not found: ${params.slug}`);

  // JSON.stringify해서 보내는 용도
  return json<LoaderData>({
    skill: { ...skill, content: marked(skill.content) },
    requirements: fakeRequirementList
      .filter((r) => r.skill === skill.slug)
      .map((r) => r.rawText),
    resources: fakeReactResources.filter((r) => r.skillId === skill.slug),
  });
};

// await res.json() // 받은 json data를 parse 하는 것

const RequirementList = createDataList<string>({
  selectId: id,
  Item: ({ data: text }) => (
    <LinkWithTooltip to="/" tooltip="프런트엔드 엔지니어">
      {text}
    </LinkWithTooltip>
  ),
});

const ResourceList = createDataList<ResourceT>({
  selectId: (data) => data.slug,
  Item: ({ data }) => (
    <div className="tooltip w-full rounded-lg p-2" data-tip={data.link}>
      <a href={data.link} className="w-full" target="_blank" rel="noreferrer">
        <h3>{data.title}</h3>
        <blockquote>{data.description}</blockquote>
      </a>
    </div>
  ),
});

export default function SkillDetail() {
  const { skill, requirements, resources } = useLoaderData() as LoaderData;

  return (
    <CenterCardLayout>
      <h1>
        {skill.title}{' '}
        <span className="text-lg text-gray-700 font-normal">/{skill.slug}</span>
      </h1>
      <RequirementList
        title="채용공고"
        titleId="position-title"
        dataList={requirements}
      />
      <Divider />
      <SkillList
        title="상위 역량"
        titleId="parents-title"
        dataList={skill.parents}
      />
      <SkillList
        title="하위 역량"
        titleId="children-title"
        dataList={skill.children}
      />
      <Divider />
      <h2>소개</h2>
      <div dangerouslySetInnerHTML={{ __html: skill.content }} />
      <Divider />
      <ResourceList
        title="학습 자료"
        titleId="resource-title"
        dataList={resources}
      />
    </CenterCardLayout>
  );
}
