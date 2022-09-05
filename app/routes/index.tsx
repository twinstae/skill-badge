import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import type { RequirementT } from '~/models/requirements/schema';
import { fakeRequirementList } from '~/models/requirements/fakeRepo';
import CenterCardLayout from '~/components/CenterCardLayout';
import createOptionalDataList from '~/components/createDataList';
import LinkWithTooltip from '~/components/LinkWithTooltip';
import { context } from '~/models/context';
import { flatSlug } from '~/models/skills/transformUtil';
import type { WithSkillSlug } from '~/models/skills/schema';

type LoaderData = {
  allSlugs: string[];
  requirements: WithSkillSlug<RequirementT>[];
};

export const loader = async () => {
  const allSkills = await context.skillsRepo.getAllList();

  return json<LoaderData>({
    allSlugs: allSkills.map(flatSlug),
    requirements: fakeRequirementList,
  });
};

const RequirementList = createOptionalDataList<WithSkillSlug<RequirementT>>({
  selectId: (r) => r.content,
  Item: ({ data: r }) => (
    <LinkWithTooltip to={'/skills/' + r.skillSlug} tooltip={'/skills/' + r.skillSlug}>
      {r.content}
    </LinkWithTooltip>
  ),
});

export default function Position() {
  const { allSlugs, requirements } = useLoaderData() as LoaderData;

  return (
    <CenterCardLayout>
      <h1>신입 프런트엔드 엔지니어</h1>
      <RequirementList
        title="자격 조건"
        titleId="required-title"
        dataList={requirements.filter(item => allSlugs.includes(item.skillSlug))}
      />
      <RequirementList
        title="정의가 필요"
        titleId="skill-not-defined"
        dataList={requirements.filter(item => !allSlugs.includes(item.skillSlug))}
      />
    </CenterCardLayout>
  );
}
