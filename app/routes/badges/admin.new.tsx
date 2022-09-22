import React, { useState } from 'react';
import CenterCardLayout from '~/components/CenterCardLayout';
import {
	Form,
	useActionData,
	useLoaderData,
	useTransition,
} from '@remix-run/react';
import TagsInput from '~/components/form/TagsInput';
import {
	type ActionFunction,
	json,
	type LoaderFunction,
	redirect,
} from '@remix-run/node';
import { context } from '~/models/context';
import type { BadgeT } from '~/models/badges/schema';
import ErrorMessages, {
	type FieldErrors,
} from '~/components/form/ErrorMessage';
import fakeBadgeRepo from '~/models/badges/fakeRepo';
import Spinner from '~/components/shared/Spinner';
import { createBadgeSchema } from '~/models/badges/IRepo.d';
import AutoCompleteTextBox from '~/components/form/AutoCompleteTextBox';
import {
	type HeroIconName,
	HeroIconNameList,
} from '~/components/icons/HeroIconName';
import ProgressBadge from '~/components/ProgressBadge';
import { getFormData } from 'remix-params-helper';

type LoaderData = {
	allSkillSlugs: string[];
};

export const loader: LoaderFunction = async () => {
	const allSkills = await context.skillsRepo.getAllList();

	return json<LoaderData>({
		allSkillSlugs: allSkills.slug,
	});
};

type ActionData = FieldErrors<BadgeT> | undefined;

export const action: ActionFunction = async ({ request }) => {
	const result = await getFormData(request, createBadgeSchema);

	if (!result.success) {
		return json<ActionData>(result.errors);
	}

	await fakeBadgeRepo.createBadge(result.data);

	return redirect('/badges');
};

function DynamicTextBoxList({ name }: { name: string }) {
	const [count, setCount] = useState(1);

	return (
		<>
			<label id="badge-pieces">조각들 </label>
			<ul aria-labelledby="badge-pieces">
				{Array.from({ length: count }, (_, i) => {
					return (
						<li key={i}>
							<input
								type="text"
								name={name}
								className="input input-bordered input-sm w-full mb-2"
								aria-label={`${i + 1}번째 조각`}
							/>
						</li>
					);
				})}
				<button
					type="button"
					className="btn btn-primary btn-sm w-full text-xl"
					onClick={() => setCount((old) => old + 1)}
				>
					+ 조각 추가하기
				</button>
			</ul>
		</>
	);
}

function BadgeIconInput({ initValue }: { initValue: HeroIconName | '' }) {
	const [value, setValue] = useState(initValue as string);
	return (
		<>
			{HeroIconNameList.includes(value as HeroIconName) && (
				<ProgressBadge now={4} max={4} icon={value as HeroIconName} />
			)}
			<label className="mb-2 mt-2" htmlFor="badge-icon-input">
				아이콘
			</label>
			<AutoCompleteTextBox
				id="badge-icon-input"
				name="icon"
				initValue="CommandLineIcon"
				candidates={HeroIconNameList}
				candidateLimit={HeroIconNameList.length}
				value={value}
				onChange={(e) => setValue(e.currentTarget.value)}
			/>
			<a
				href="https://heroicons.com/"
				target="_blank"
				rel="noreferrer"
				className="link link-primary text-sm"
			>
				아이콘 구경하기
			</a>
		</>
	);
}

export default function NewBadgePage() {
	const { allSkillSlugs } = useLoaderData() as LoaderData;

	const errors = useActionData() as ActionData;

	const transition = useTransition();
	const isCreating = Boolean(transition.submission);

	return (
		<CenterCardLayout>
			<Form method="post" className="flex flex-col">
				<label className="label" htmlFor="input-slug">
					슬러그
				</label>
				<input
					id="input-slug"
					type="text"
					name="slug"
					maxLength={16}
					required={true}
					placeholder="ex) design-system"
					autoComplete="off"
					className="input input-bordered mb-2 w-full"
				/>
				<ErrorMessages errors={errors} name="slug" />
				<label htmlFor="badge-title">배지 제목</label>
				<input
					id="badge-title"
					type="text"
					name="title"
					required={true}
					placeholder="ex) 리눅스 명령줄로 파일 시스템을 탐색하고 조작할 수 있습니다"
					className="input input-bordered"
				/>
				<ErrorMessages errors={errors} name="title" />
				<TagsInput
					name="skillSlugs" // html 역사를 함께하는 키. remix get에서 쓰는 키 (form)
					labelText="역량 목록"
					errors={errors}
					initValue={[]}
					placeholder="ex) react, linux, react-query"
					className=""
					maxLength={4}
					candidates={
						allSkillSlugs
					} // taginput에넣을수잇는자동완성의후보들 (allSkillSlugs)
				/>

				<BadgeIconInput initValue="" />
				<ErrorMessages errors={errors} name="icon" />
				<DynamicTextBoxList name="pieces" />
				<ErrorMessages errors={errors} name="pieces" />
				<button
					type="submit"
					className="btn btn-primary mt-2"
					disabled={isCreating}
				>
					{isCreating ? <Spinner message="공유 중..." /> : '배지 만들기!'}
				</button>
			</Form>
		</CenterCardLayout>
	);
}
