import {
  CommandLineIcon,
  MagnifyingGlassIcon,
  RectangleGroupIcon,
} from '@heroicons/react/24/outline';
import { json, type LoaderFunction } from '@remix-run/node';
import { Form, Link, useLoaderData } from '@remix-run/react';
import CenterCardLayout from '~/components/CenterCardLayout';
import AutoCompleteTextBox from '~/components/form/AutoCompleteTextBox';
import type { IconT } from '~/components/icons/HoverableIcon';
import ProgressBadge from '~/components/ProgressBadge';
import { SkillLink } from '~/components/SkillList';
import type { BadgeT } from '~/models/badges/schema';
import { context } from '~/models/context';
import { flatSlug } from '~/models/skills/transformUtil';

type LoaderData = {
  search: string | null;
  filteredList: typeof fakeBadgeList;
  allSkillSlugs: string[]
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get('skillSlug');
  const allSkills = await context.skillsRepo.getAllList();
  const allSkillSlugs = allSkills.map(flatSlug);

  const filteredList =
    !search
      ? fakeBadgeList
      : fakeBadgeList.filter((badge) => badge.skillSlugs.includes(search));
  return json<LoaderData>({ search, filteredList, allSkillSlugs });
};

const fakeBadgeList: (Omit<BadgeT, 'pieces'> & {
  max: number;
  now: number;
  icon: string;
})[] = [
  {
    slug: 'linux-cli-fs',
    title: '리눅스 명령줄로 파일 시스템을 탐색하고 조작할 수 있습니다',
    skillSlugs: ['linux'],
    max: 7,
    now: 4,
    icon: 'commandLine',
  },
  {
    slug: 'css-flex',
    title:
      'css flex의 direction, grow & shrink, wrap, justify 등을 활용해서 layout을 만들 수 있습니다',
    skillSlugs: ['frontend', 'css'],
    max: 6,
    now: 1,
    icon: 'rectangleGroup',
  },
  {
    slug: 'component-testing-library',
    title: '컴포넌트를 testing-library를 이용해서 테스트할 수 있습니다',
    skillSlugs: ['frontend', 'test'],
    max: 6,
    now: 6,
    icon: 'magnifyingGlass',
  },
];

const iconDict = {
  commandLine: CommandLineIcon,
  rectangleGroup: RectangleGroupIcon,
  magnifyingGlass: MagnifyingGlassIcon,
} as Record<string, IconT>;

export default function BadgeListPage() {
  const { search, filteredList, allSkillSlugs } = useLoaderData() as LoaderData;

  return (
    <CenterCardLayout>
      <header className="flex flex-row">
        <h1>배지 검색하기</h1>
        {search && (
          <Link
            to="/badges/"
            className="self-center btn btn-primary btn-sm ml-2"
          >
            검색 초기화
          </Link>
        )}
      </header>
      <Form  method="get" action="/badges">
        <AutoCompleteTextBox
          type="search"
          className="input input-bordered"
          name="skillSlug"
          initValue={search ?? ''}
          candidates={allSkillSlugs}
        />
      </Form>
      <ul className="p-2 m-2 menu">
        {filteredList
          .slice(0, 10)
          .map(({ slug, title, max, now, skillSlugs, icon }) => (
            <li key={slug}>
              <Link to={'/badges/detail'} className="flex flex-row">
                <div className="indicator w-1/6 flex-none">
                  {max === now && (
                    <span className="indicator-item indicator-start badge badge-primary badge-xs">
                      획득!
                    </span>
                  )}
                  <ProgressBadge
                    max={max}
                    now={now}
                    size="sm"
                    Icon={iconDict[icon]}
                  />
                </div>

                <div className="flex flex-col w-5/6">
                  <span>{title}</span>
                  <ul className="flex flex-row flex-wrap">
                    {skillSlugs.map((skillSlug) => (
                      <li key={skillSlug}>
                        <SkillLink slug={skillSlug} className="w-fit" />
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </li>
          ))}
        {filteredList.length > 10 && (
          <li className="text-xl text-center">
            ...{filteredList.length - 10} 개
          </li>
        )}
      </ul>
    </CenterCardLayout>
  );
}
