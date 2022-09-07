import { json, redirect, type LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import CenterCardLayout from "~/components/CenterCardLayout";
import createOptionalDataList from "~/components/createDataList";
import LinkWithTooltip from "~/components/LinkWithTooltip";
import { fakeRequirementList } from "~/models/requirements/fakeRepo";
import type { RequirementT } from "~/models/requirements/schema";
import type { WithSkillSlug } from "~/models/skills/schema";

// 1. 받을 데이터의 타입
type LoaderData = {
  position: string,
  requirements: WithSkillSlug<RequirementT>[]
}

const fakeRepuirementsRepo: Record<"frontend" | "backend", WithSkillSlug<RequirementT>[]> = {
  "frontend": fakeRequirementList,
  "backend": fakeRequirementList,
}

export const loader: LoaderFunction = async ({ 
  params, 
}) => {
  const slug = params.slug as string;
  if(slug !== "frontend" && slug !== "backend"){
    // 이상한 슬러그가 들어오면 선택 페이지로 되돌려보냄!
    return redirect('/positions');
  }
  // 2. 타입에 맞게 데이터를 넘겨줌
  // slug: "frontend" | "backend"
  return json<LoaderData>({ position: slug, requirements: fakeRepuirementsRepo[slug] })
};

// WithSkillSlug 는 RequirementT에 skillSlug가 추가된 타입이에요.
const RequirementList = createOptionalDataList<WithSkillSlug<RequirementT>>({
  selectId: (r) => r.content,
  Item: ({ data: r }) => (
    <LinkWithTooltip to={'/skills/' + r.skillSlug} tooltip={'/skills/' + r.skillSlug}>
      {r.content}
    </LinkWithTooltip>
  ),
});

export default function PositionDetail() {
  // 3. 데이터를 받음
  const { position, requirements } =
    useLoaderData() as LoaderData;

  return (
    <CenterCardLayout>
      {/* 4. 사용 */}
      <h1>{position}</h1>
      <RequirementList
        title="자격 조건"
        titleId="requirements"
        dataList={requirements}
      />   
    </CenterCardLayout>
  );
}
