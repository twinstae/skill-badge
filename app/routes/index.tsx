import { json } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { skillIdList } from '~/models/skills.server';
import {
  fakeRequirementList,
  type RequirementT,
} from '~/models/requirements.server';
import CenterCardLayout from '~/components/CenterCardLayout';
import createDataList from '~/components/createDataList';
import LinkWithTooltip from '~/components/LinkWithTooltip';

type LoaderData = {
  requirements: RequirementT[];
};

export const loader = async () => {
  return json<LoaderData>({
    requirements: fakeRequirementList
      .filter((r) =>skillIdList.includes(r.skill))
      .sort((a,b) => b.count - a.count),
  });
};

const RequirementList = createDataList<RequirementT>({
  selectId: (r) => r.skill,
  Item: ({ data: r }) => (
    <LinkWithTooltip to={'/skills/' + r.skill} tooltip={'/skills/' + r.skill}>
      {r.rawText} <span className="badge">{r.count}</span>
    </LinkWithTooltip>
  ),
});

export default function Position() {
  const { requirements } = useLoaderData() as LoaderData;

  return (
    <CenterCardLayout>
      <h1>신입 프런트엔드 엔지니어</h1>
      <RequirementList
        title="자격 조건"
        titleId="required-title"
        dataList={requirements}
      />
    </CenterCardLayout>
  );
}
