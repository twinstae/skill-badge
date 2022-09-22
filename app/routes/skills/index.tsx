import React, { useState } from 'react';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import type { SkillT } from '~/models/skills/schema';
import { context } from '~/models/context';
import CenterCardLayout from '~/components/CenterCardLayout';
import { Link } from '~/Link';

type LoaderData = {
	skills: Pick<SkillT, 'slug' | 'title'>[];
};

export const loader = async () => {
	const skills = await context.skillsRepo.getAllList();
	return json<LoaderData>({ skills });
};

export default function SkillListPage() {
	const { skills } = useLoaderData() as LoaderData;
	const [search, setSearch] = useState('');
	const lowerSearch = search.toLowerCase();

	const filteredSkills = skills.filter(
		(skill) =>
			skill.slug.includes(lowerSearch) ||
			skill.title.toLowerCase().includes(lowerSearch),
	);
	return (
		<CenterCardLayout>
			<h1>역량 목록</h1>
			<Link
				className="btn btn-sm btn-primary w-full mb-2"
				to="/skills/admin/new"
			>
				새 역량 만들기
			</Link>
			<label>
				검색하기
				<input
					type="search"
					className="input input-bordered mt-2 w-full"
					value={search}
					placeholder="ex) database, 데이터베이스, react, 오픈 소스"
					onChange={(e) => setSearch(e.target.value)}
				/>
			</label>
			<ul className="p-2 m-2 menu">
				{filteredSkills.slice(0, 10).map(
					(skill) => (
						<li key={skill.slug}>
							<Link to={`/skills/${skill.slug}`} className="p-2">
								{skill.title}
								{' '}
								<span className="text-sm text-primary">{skill.slug}</span>
							</Link>
						</li>
					),
				)}
				{filteredSkills.length > 10 && (
					<li className="text-xl text-center">
						...{filteredSkills.length - 10} 개
					</li>
				)}
			</ul>
		</CenterCardLayout>
	);
}
