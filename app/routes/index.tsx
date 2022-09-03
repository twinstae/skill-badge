import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import {
  fakeRequirementList,
  type RequirementT,
} from '~/models/requirements.server';
import CenterCardLayout from '~/components/CenterCardLayout';
import createOptionalDataList from '~/components/createDataList';
import LinkWithTooltip from '~/components/LinkWithTooltip';
import { context } from '~/models/context';
import { flatSlug } from '~/models/skills/transformUtil';

type LoaderData = {
  requirements: RequirementT[];
};

export const loader = async () => {
  const allSkills = await context.skillsRepo.getAllList();
  const allSlugs = new Set(allSkills.map(flatSlug));
  return json<LoaderData>({
    requirements: fakeRequirementList
      .filter(requirement => allSlugs.has(requirement.skill))
      .sort((a,b) => b.count - a.count),
  });
};

const RequirementList = createOptionalDataList<RequirementT>({
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
