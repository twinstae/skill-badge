import type { ZodFormattedError } from 'zod';
import { type ActionFunction, type LoaderFunction, redirect, json } from '@remix-run/node';
import { Form, useActionData, useLoaderData, useTransition } from '@remix-run/react';
import CenterCardLayout from '~/components/CenterCardLayout';
import Spinner from '~/components/Spinner';
import ErrorMessage from '~/components/form/ErrorMessage';
import TagsInput from '~/components/TagsInput';
import { type Skill, skillSchema } from '~/models/skills/schema';
import { context } from '~/models/context';

type LoaderData = {
  allSkillSlugs: string[];
};

export const loader: LoaderFunction = async () => {
  const allSkillSlugs = await context.skillsRepo.getAllSlugs();

  return json<LoaderData>({
    allSkillSlugs
  });
};

type ActionData = ZodFormattedError<Skill> | undefined;

export const action: ActionFunction = async ({ request }) => {
  // https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
  const result = await request.formData()
    .then(formData => ({
      slug: formData.get('slug'),
      title: formData.get('title'),
      parents: formData.getAll('parents'),
      children: formData.getAll('children'),
      content: formData.get('content'),
    }))
    .then(skillSchema.safeParse);

  if (!result.success) {
    return json<ActionData>(result.error.format());
  }

  await context.skillsRepo.create(result.data);

  return redirect('/skills');
};

export default function NewSkill() {
  const { allSkillSlugs } = useLoaderData() as LoaderData;
  const errors = useActionData() as
    | ZodFormattedError<Record<string, any>, string>
    | undefined;

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
          required
          className="input input-bordered mb-2 w-full"
        />
        <ErrorMessage errors={errors} name="slug" />
        <label className="label" htmlFor="input-title">
          역량 제목
        </label>
        <input
          id="input-title"
          type="text"
          name="title"
          maxLength={16}
          required
          className="input input-bordered mb-2 w-full"
        />
        <ErrorMessage errors={errors} name="title" />
        <TagsInput
          id="parents-input"
          className="mb-2"
          labelText="상위 역량"
          name="parents"
          placeholder="ex) react"
          errors={errors}
          maxLength={4}
          candidates={allSkillSlugs}
        />
        <TagsInput
          id="children-input"
          className="mb-2"
          labelText="하위 역량"
          name="children"
          placeholder="ex) react"
          errors={errors}
          maxLength={16}
          candidates={allSkillSlugs}
        />
        <label className="label" htmlFor="input-content">
          설명
        </label>
        <textarea
          id="input-content"
          name="content"
          className="textarea textarea-bordered mb-2 w-full h-64"
        />
        <ErrorMessage errors={errors} name="content" />
        <button type="submit" className="btn btn-primary" disabled={isCreating}>
          {isCreating ? <Spinner message="공유 중..." /> : '역량 공유하기'}
        </button>
      </Form>
    </CenterCardLayout>
  );
}
