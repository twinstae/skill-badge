import { json, redirect, type LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';
import CenterCardLayout from '~/components/CenterCardLayout';
import SkillList from '~/components/SkillList';
import { marked } from 'marked';
import createOptionalDataList from '~/components/createDataList';
import { fakeRequirementList } from '~/models/requirements.server';
import { id } from '~/funcUtil';
import { fakeReactResources, type ResourceT } from '~/models/resource.server';
import LinkWithTooltip from '~/components/LinkWithTooltip';
import Divider from '~/components/Divider';
import Tooltip from '~/components/Tooltip';
import type { Skill } from '~/models/skills/schema';
import { context } from '~/models/context';
import PencilWithSquare from '~/components/PencilWithSquareIcon';

type LoaderData = {
  skill: Skill;
  requirements: string[];
  resources: ResourceT[];
};

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, `params.slug is required`);
  const skill = await context.skillsRepo.getOneBySlug(params.slug);

  if(skill === null){
    return redirect('/skills/admin/new?slug='+params.slug)
  }

  return json<LoaderData>({
    skill: { ...skill, content: marked(skill.content) },
    requirements: fakeRequirementList
      .filter((r) => r.skill === skill.slug)
      .map((r) => r.rawText),
    resources: fakeReactResources.filter((r) => r.skillId === skill.slug),
  });
};

// await res.json() // 받은 json data를 parse 하는 것

const RequirementList = createOptionalDataList<string>({
  selectId: id,
  Item: ({ data: text }) => (
    <LinkWithTooltip to="/" tooltip="프런트엔드 엔지니어">
      {text}
    </LinkWithTooltip>
  ),
});

const ResourceList = createOptionalDataList<ResourceT>({
  selectId: (data) => data.slug,
  Item: ({ data }) => (
    <a href={data.link} className="w-full rounded-lg" target="_blank" rel="noreferrer">
      <Tooltip className="w-full" tooltip={data.link}>
        <h3>{data.title}</h3>
        <blockquote>{data.description}</blockquote>
      </Tooltip>
    </a>
  ),
});


export default function SkillDetail() {
  const { skill, requirements, resources } = useLoaderData() as LoaderData;

  return (
    <CenterCardLayout>
      <h1>{skill.title}</h1>
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
      <LinkWithTooltip className="btn btn-ghost" to={`/skills/${skill.slug}/edit`} tooltip="수정하기">
        <PencilWithSquare />
      </LinkWithTooltip>
    </CenterCardLayout>
  );
}
