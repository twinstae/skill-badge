import {
	type ActionFunction,
	type LoaderFunction,
	redirect,
	json,
} from '@remix-run/node';
import {
	Form,
	useActionData,
	useLoaderData,
	useTransition,
} from '@remix-run/react';
import { useState } from 'react';
import clsx from 'clsx';
import { useSearchParam } from 'react-use';
import CenterCardLayout from '~/components/CenterCardLayout';
import Spinner from '~/components/shared/Spinner';
import ErrorMessages, {
	ErrorMessage,
	type FieldErrors,
	getFieldErrors,
} from '~/components/form/ErrorMessage';
import { type SkillT, skillSchema, slugRegex } from '~/models/skills/schema';
import { context } from '~/models/context';
import { selectSlug} from '~/models/skills/transformUtil';
import TagsInput from '~/components/form/TagsInput';
import { TextEditor } from '~/components/form/TextEditor';

type LoaderData = {
	allSkillSlugs: string[];
};

export const loader: LoaderFunction = async () => {
	const allSkills = await context.skillsRepo.getAllList();

	return json<LoaderData>({
		allSkillSlugs: allSkills.map(flatSlug),
	});
};

type ActionData = FieldErrors<SkillT> | undefined;

export const action: ActionFunction = async ({ request }) => {
	// https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
	const result = await request
		.formData()
		.then(
			(formData) => ({
				slug: formData.get('slug'),
				title: formData.get('title'),
				parents: formData.getAll('parents'),
				children: formData.getAll('children'),
				content: formData.get('content'),
			}),
		)
		.then(skillSchema.safeParse);

	if (!result.success) {
		return json<ActionData>(getFieldErrors(result));
	}

	await context.skillsRepo.create(result.data);

	return redirect(`/skills/${result.data.slug}`);
};

export default function NewSkill() {
	const { allSkillSlugs } = useLoaderData() as LoaderData;
	const errors = useActionData() as ActionData;

	const transition = useTransition();
	const isCreating = Boolean(transition.submission);

	const slugSearch = useSearchParam('slug');

	const [slug, setSlug] = useState(slugSearch ?? '');
	const isSlugDuplicated = allSkillSlugs.includes(slug);

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
					pattern={slugRegex}
					value={slug}
					placeholder="ex) design-system"
					onChange={(e) => setSlug(e.currentTarget.value)}
					autoComplete="off"
					className={clsx(
						'input input-bordered mb-2 w-full',
						isSlugDuplicated && 'input-error',
					)}
				/>
				{isSlugDuplicated && <ErrorMessage error="slug가 이미 있습니다." />}
				<ErrorMessages errors={errors} name="slug" />
				<label className="label" htmlFor="input-title">
					역량 제목
				</label>
				<input
					id="input-title"
					type="text"
					name="title"
					maxLength={16}
					required={true}
					placeholder="ex) 디자인 시스템"
					className="input input-bordered mb-2 w-full"
				/>
				<ErrorMessages errors={errors} name="title" />
				<TagsInput
					className="mb-2"
					labelText="상위 역량"
					name="parents"
					placeholder="ex) react"
					errors={errors}
					maxLength={4}
					candidates={allSkillSlugs}
				/>
				<TagsInput
					className="mb-2"
					labelText="하위 역량"
					name="children"
					placeholder="ex) react"
					errors={errors}
					maxLength={16}
					candidates={allSkillSlugs}
				/>

				<TextEditor label="설명" name="content" initValue="" />
				<ErrorMessages errors={errors} name="content" />
				<button type="submit" className="btn btn-primary" disabled={isCreating}>
					{isCreating ? <Spinner message="공유 중..." /> : '역량 공유하기'}
				</button>
			</Form>
		</CenterCardLayout>
	);
}
