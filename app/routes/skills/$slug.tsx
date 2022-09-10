import {
  json,
  redirect,
  type ActionFunction,
  type LoaderFunction,
} from '@remix-run/node';
import { Form, useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';
import { marked } from 'marked';
import { useState } from 'react';
import clsx from 'clsx';
import { TrashIcon as TrashOutlineIcon, PencilSquareIcon as PencilSquareOutlineIcon } from '@heroicons/react/24/outline'
import { TrashIcon as TrashSolidIcon, PencilSquareIcon as PencilSquareSolidIcon} from '@heroicons/react/24/solid'

import CenterCardLayout from '~/components/CenterCardLayout';
import SkillList from '~/components/SkillList';
import createOptionalDataList from '~/components/createDataList';
import LinkWithTooltip from '~/components/LinkWithTooltip';
import Divider from '~/components/Divider';
import Tooltip from '~/components/Tooltip';
import { Dialog } from '~/components/Dialog';

import { context } from '~/models/context';
import type { SkillWithRequirementsAndResourcesT } from '~/models/skills/IRepo';
import type { ResourceT } from '~/models/resources/schema';
import type { RequirementT } from '~/models/requirements/schema';
import { slugSchema } from '~/models/skills/schema';
import { logger } from '~/logger';
import HoverableIcon from '~/components/icons/HoverableIcon';

type LoaderData = SkillWithRequirementsAndResourcesT;

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, `params.slug is required`);
  const skill =
    await context.skillsRepo.getOneBySlugWithRequirementsAndResources(
      params.slug
    );

  if (skill === null) {
    return redirect('/skills/admin/new?slug=' + params.slug);
  }
  logger.skill.detail(params.slug);

  return json<LoaderData>({
    ...skill,
    content: marked(skill.content),
  });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const slug = slugSchema.parse(formData.get('slug'));
  invariant(formData.get('message') === `${slug}를 삭제하겠습니다.`);

  await context.skillsRepo.delete(slug);

  return redirect('/skills');
};
// await res.json() // 받은 json data를 parse 하는 것

const RequirementList = createOptionalDataList<RequirementT>({
  selectId: (data) => data.content.replace(/ /g, '-'),
  Item: ({ data }) => (
    <LinkWithTooltip to={"/positions/" + data.position} tooltip={data.position + ' 직무'} className="p-2">
      {data.content}
    </LinkWithTooltip>
  ),
});

const ResourceList = createOptionalDataList<ResourceT>({
  selectId: (data) => data.slug,
  Item: ({ data }) => (
    <a
      href={data.href}
      className="w-full rounded-lg"
      target="_blank"
      rel="noreferrer"
    >
      <Tooltip className="w-full" tooltip={data.href}>
        <h3>{data.title}</h3>
        <blockquote>{data.content}</blockquote>
      </Tooltip>
    </a>
  ),
});

function DeleteForm({ slug }: { slug: string }) {
  const [message, setMessage] = useState('');
  const expected = `${slug}를 삭제하겠습니다.`;
  const isValid = message === expected;
  return (
    <Form method="post" className="flex flex-col">
      <label className="w-full">
        {expected}
        <input
          type="text"
          name="message"
          placeholder={expected}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={clsx(
            'input input-bordered mb-2 w-full',
            isValid && 'input-success'
          )}
        />
      </label>
      <input type="text" name="slug" value={slug} hidden readOnly />
      <button type="submit" className="btn btn-error" disabled={!isValid}>
        삭제하겠습니다
      </button>
    </Form>
  );
}

export default function SkillDetail() {
  const { slug, title, content, parents, children, requirements, resources } =
    useLoaderData() as LoaderData;

  return (
    <CenterCardLayout>
      <h1>{title}</h1>
      <RequirementList
        title="채용공고"
        titleId="position-title"
        dataList={requirements}
      />
      <Divider />
      <SkillList title="상위 역량" titleId="parents-title" dataList={parents} />
      <SkillList
        title="하위 역량"
        titleId="children-title"
        dataList={children}
      />
      <Divider />
      <h2 id="content-title">소개</h2>
      <div
        aria-labelledby="content-title"
        className="content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <LinkWithTooltip
        className="float-right"
        to={`/skills/${slug}/edit`}
        tooltip="수정하기"
      >
        <HoverableIcon icons={[PencilSquareSolidIcon, PencilSquareOutlineIcon]} label="수정하기" />
      </LinkWithTooltip>
      <Dialog
        label="삭제하기"
        button={<HoverableIcon icons={[TrashSolidIcon, TrashOutlineIcon]} label=""/>}
        title={`역량 ${slug}를 삭제하기`}
        description="역량과 관련된 모든 자료와 공고가 삭제됩니다. 정말 삭제하시려면 다음을 똑같이 입력해주세요."
      >
        <DeleteForm slug={slug} />
      </Dialog>
      <Divider />
      <ResourceList
        title="학습 자료"
        titleId="resource-title"
        dataList={resources}
      />
    </CenterCardLayout>
  );
}
