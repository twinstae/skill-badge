import { json, redirect, type LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import CenterCardLayout from '~/components/CenterCardLayout';
import createOptionalDataList from '~/components/createDataList';
import LinkWithTooltip from '~/components/LinkWithTooltip';
import { Link } from '~/Link';
import { logger } from '~/logger';
import { fakeRequirementList } from '~/models/requirements/fakeRepo';
import type { RequirementT } from '~/models/requirements/schema';
import type { WithSkillSlug } from '~/models/skills/schema';

// 1. 받을 데이터의 타입
type LoaderData = {
  position: string;
  requirements: WithSkillSlug<RequirementT>[];
};

export const loader: LoaderFunction = async ({ params }) => {
  const slug = params.slug as string;
  if (slug !== 'frontend' && slug !== 'backend') {
    // 이상한 슬러그가 들어오면 선택 페이지로 되돌려보냄!
    return redirect('/positions');
  }
  // 2. 타입에 맞게 데이터를 넘겨줌
  // slug: "frontend" | "backend"
  logger.position.detail(slug);
  return json<LoaderData>({
    position: slug,
    requirements: fakeRequirementList
      .filter(item => item.position === slug)
      .sort((a,b) => b.count - a.count),
  });
};

// WithSkillSlug 는 RequirementT에 skillSlug가 추가된 타입이에요.
const RequirementList = createOptionalDataList<WithSkillSlug<RequirementT>>({
  selectId: (r) => r.content,
  Item: ({ data: r }) => (
    <LinkWithTooltip
      to={'/skills/' + r.skillSlug}
      tooltip={'/skills/' + r.skillSlug}
      className="p-2"
      tooltipClass="text-left"
    >
      - <span>{r.content}</span>
    </LinkWithTooltip>
  ),
});

export default function PositionDetail() {
  // 3. 데이터를 받음
  const { position, requirements } = useLoaderData() as LoaderData;

  return (
    <CenterCardLayout>
      {/* 4. 사용 */}
      <Link
        to={position === 'frontend' ? '/positions/backend' : '/positions/frontend'}
        className="btn btn-primary btn-sm float-right"
      >
        {position === 'frontend' ? '백엔드' : '프런트엔드'} 보러 가기
      </Link>
      <h1 className="text-primary">{position}</h1>
      <RequirementList
        title="요구 역량"
        titleId="requirements-title"
        dataList={requirements}
      />
    </CenterCardLayout>
  );
}
