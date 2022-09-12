import { json, type LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import CenterCardLayout from '~/components/CenterCardLayout';
import createOptionalDataList from '~/components/createDataList';
import LinkWithTooltip from '~/components/shared/LinkWithTooltip';
import { Link } from '~/Link';
import { context } from '~/models/context';
import type { RequirementT } from '~/models/requirements/schema';

// WithSkillSlug 는 RequirementT에 skillSlug가 추가된 타입이에요.
const RequirementList = createOptionalDataList<RequirementT>({
  selectId: (r) => r.id,
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

// 1. 받을 데이터의 타입
type LoaderData = {
  positionSlug: string;
  requirements: RequirementT[];
};

export const loader: LoaderFunction = async ({ params }) => {
  const slug = params.slug as string;
  if (slug !== 'frontend' && slug !== 'backend') {
  
    throw Error('이상한 슬러그! ' + slug);
  }
  return json<LoaderData>({
    positionSlug: slug,
    requirements: await context.positionsRepo.getRequirementsByPosition(slug),
  });
};


export default function PositionDetail() {
  // 3. 데이터를 받음
  const { positionSlug, requirements } = useLoaderData() as LoaderData;

  return (
    <CenterCardLayout>
      {/* 4. 사용 */}
      <Link
        to={
          positionSlug === 'frontend'
            ? '/positions/backend'
            : '/positions/frontend'
        }
        className="btn btn-primary btn-sm float-right"
      >
        {positionSlug === 'frontend' ? '백엔드' : '프런트엔드'} 보러 가기
      </Link>
      <h1 className="text-primary">{positionSlug}</h1>
      <RequirementList
        title="요구 역량"
        titleId="requirements-title"
        dataList={requirements}
      />
      <Link
        to="/positions/requirements/admin/new"
        className="btn btn-primary w-full"
      >
        공고 문구 추가하기
      </Link>
    </CenterCardLayout>
  );
}
