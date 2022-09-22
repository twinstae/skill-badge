import invariant from 'tiny-invariant';
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
import { type SkillT, skillSchema } from '~/models/skills/schema';
import { context } from '~/models/context';
import { TextEditor } from '~/components/form/TextEditor';
import CenterCardLayout from '~/components/CenterCardLayout';
import Spinner from '~/components/shared/Spinner';
import TagsInput from '~/components/form/TagsInput';
import ErrorMessages, {
	type FieldErrors,
} from '~/components/form/ErrorMessage';
import { getFormData, useFormInputProps } from 'remix-params-helper';

type LoaderData = {
	skill: SkillT;
	allSkillSlugs: string[];
};

export const loader: LoaderFunction = async ({ params }) => {
	invariant(params.slug, 'params.slug is required');

	const skill = await context.skillsRepo.getOneBySlug(params.slug);

	if (skill === null) {
		return redirect(`/skills/admin/new?slug=${params.slug}`);
	}

	const allSkills = await context.skillsRepo.getAllList();

	return json<LoaderData>({
		skill,
		allSkillSlugs: allSkills.slug,
	});
};

type ActionData = FieldErrors<SkillT> | undefined;

export const action: ActionFunction = async ({ request }) => {
	// https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
	const result = await getFormData(request, skillSchema);

	if (!result.success) {
		return json<ActionData>(result.errors);
	}

	await context.skillsRepo.update(result.data);

	return redirect(`/skills/${result.data.slug}`);
};

export default function NewSkill() {
	const { skill, allSkillSlugs } = useLoaderData() as LoaderData;
	const errors = useActionData() as ActionData;

	const transition = useTransition();
	const isCreating = Boolean(transition.submission);

	const inputProps = useFormInputProps(skillSchema);
	return (
		<CenterCardLayout>
			<Form method="post" className="flex flex-col">
				<label className="label" htmlFor="input-slug">
					슬러그
				</label>
				<input
					id="input-slug"
					{...inputProps('slug')}
					value={skill.slug}
					placeholder="ex) design-system"
					className="input input-bordered mb-2 w-full"
					readOnly={true}
				/>
				<ErrorMessages errors={errors} name="slug" />
				<label className="label" htmlFor="input-title">
					역량 제목
				</label>
				<input
					id="input-title"
					{...inputProps('title')}
					defaultValue={skill.title}
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
					initValue={skill.parents}
				/>
				<TagsInput
					className="mb-2"
					labelText="하위 역량"
					name="children"
					placeholder="ex) react"
					errors={errors}
					maxLength={16}
					candidates={allSkillSlugs}
					initValue={skill.children}
				/>
				<TextEditor label="설명" name="content" initValue={skill.content} />
				<ErrorMessages errors={errors} name="content" />
				<button type="submit" className="btn btn-primary" disabled={isCreating}>
					{isCreating ? <Spinner message="수정 중..." /> : '역량 수정하기'}
				</button>
			</Form>
		</CenterCardLayout>
	);
}
