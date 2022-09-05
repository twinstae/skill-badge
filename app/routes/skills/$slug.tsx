import { json, redirect, type LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';
import { marked } from 'marked';

import CenterCardLayout from '~/components/CenterCardLayout';
import SkillList from '~/components/SkillList';
import createOptionalDataList from '~/components/createDataList';
import LinkWithTooltip from '~/components/LinkWithTooltip';
import PencilWithSquare from '~/components/PencilWithSquareIcon';
import Divider from '~/components/Divider';
import Tooltip from '~/components/Tooltip';

import { context } from '~/models/context';
import type { SkillWithRequirementsAndResourcesT } from '~/models/skills/IRepo';
import type { ResourceT } from '~/models/resources/schema';
import type { RequirementT } from '~/models/requirements/schema';

type LoaderData = SkillWithRequirementsAndResourcesT;

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, `params.slug is required`);
  const skill = await context.skillsRepo.getOneBySlugWithRequirementsAndResources(params.slug);

  if(skill === null){
    return redirect('/skills/admin/new?slug='+params.slug)
  }

  return json<LoaderData>({
    ...skill,
    content: marked(skill.content),
  });
};

// await res.json() // 받은 json data를 parse 하는 것

const RequirementList = createOptionalDataList<RequirementT>({
  selectId: (data) => data.rawText.replace(/ /g, '-'),
  Item: ({ data }) => (
    <LinkWithTooltip to="/" tooltip="프런트엔드 엔지니어">
      {data.rawText}
    </LinkWithTooltip>
  ),
});

const ResourceList = createOptionalDataList<ResourceT>({
  selectId: (data) => data.slug,
  Item: ({ data }) => (
    <a href={data.href} className="w-full rounded-lg" target="_blank" rel="noreferrer">
      <Tooltip className="w-full" tooltip={data.href}>
        <h3>{data.title}</h3>
        <blockquote>{data.content}</blockquote>
      </Tooltip>
    </a>
  ),
});


export default function SkillDetail() {
  const { slug, title, content, parents, children, requirements, resources } = useLoaderData() as LoaderData;

  return (
    <CenterCardLayout>
      <h1>{title}</h1>
      <RequirementList
        title="채용공고"
        titleId="position-title"
        dataList={requirements}
      />
      <Divider />
      <SkillList
        title="상위 역량"
        titleId="parents-title"
        dataList={parents}
      />
      <SkillList
        title="하위 역량"
        titleId="children-title"
        dataList={children}
      />
      <Divider />
      <h2>소개</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <LinkWithTooltip className="btn btn-ghost float-right" to={`/skills/${slug}/edit`} tooltip="수정하기">
        <PencilWithSquare />
      </LinkWithTooltip>
      <Divider />
      <ResourceList
        title="학습 자료"
        titleId="resource-title"
        dataList={resources}
      />
    </CenterCardLayout>
  );
}
