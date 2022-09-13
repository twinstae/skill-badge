import { json, type LoaderFunction } from '@remix-run/node';
import { Form, Link, useLoaderData } from '@remix-run/react';
import CenterCardLayout from '~/components/CenterCardLayout';
import AutoCompleteTextBox from '~/components/form/AutoCompleteTextBox';

import ProgressBadge from '~/components/ProgressBadge';
import { SkillLink } from '~/components/SkillList';
import type { BadgeT } from '~/models/badges/schema';
import { context } from '~/models/context';
import { selectSlug } from '~/models/skills/transformUtil';
import fakeBadgeRepo from '~/models/badges/fakeRepo';
import { count } from '~/functional/Array';

type LoaderData = {
	search: string | null;
	filteredList: BadgeT[];
	allSkillSlugs: string[];
};

export const loader: LoaderFunction = async ({ request }) => {
	const url = new URL(request.url);
	const search = url.searchParams.get('skillSlug');
	const allSkills = await context.skillsRepo.getAllList();
	const allSkillSlugs = allSkills.map(selectSlug);

	const filteredList = search
		? fakeBadgeRepo.filter((badge) => badge.skillSlugs.includes(search))
		: fakeBadgeRepo.slice(0, 10);
	return json<LoaderData>({ search, filteredList, allSkillSlugs });
};

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
			<Form method="get" action="/badges">
				<AutoCompleteTextBox
					type="search"
					className="input input-bordered w-full"
					name="skillSlug"
					initValue={search ?? ''}
					candidates={allSkillSlugs}
				/>
			</Form>
			<ul className="p-2 m-2 menu">
				{filteredList.slice(0, 10).map(({
					slug,
					title,
					skillSlugs,
					icon,
					pieces,
				}) => {
					const max = pieces.length;
					const now = count(pieces, (piece) => piece.isDone);

					return (
						<li key={slug}>
							<Link to={`/badges/${slug}`} className="flex flex-row">
								<div className="indicator w-1/6 flex-none">
									{max === now && (
										<span className="indicator-item indicator-start badge badge-primary badge-xs">
											획득!
										</span>
									)}
									<ProgressBadge max={max} now={now} size="sm" icon={icon} />
								</div>

								<div className="flex flex-col w-5/6">
									<span>{title}</span>
									<ul className="flex flex-row flex-wrap">
										{skillSlugs.map(
											(skillSlug) => (
												<li key={skillSlug}>
													<SkillLink slug={skillSlug} className="w-fit" />
												</li>
											),
										)}
									</ul>
								</div>
							</Link>
						</li>
					);
				})}
				{filteredList.length > 10 && (
					<li className="text-xl text-center">
						...{filteredList.length - 10} 개
					</li>
				)}
			</ul>
			<Link to="/badges/admin/new" className="w-full btn btn-primary mb-2">
				배지 만들기
			</Link>
		</CenterCardLayout>
	);
}
