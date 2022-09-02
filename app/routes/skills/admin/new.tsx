import type { ZodFormattedError } from 'zod';
import { type ActionFunction, redirect, json } from '@remix-run/cloudflare';
import { Form, useActionData, useTransition } from '@remix-run/react';
import CenterCardLayout from '~/components/CenterCardLayout';
import { createSkill, skillSchema, type Skill } from '~/models/skills.server';
import Spinner from '~/components/Spinner';
import ErrorMessage from '~/components/form/ErrorMessage';
import TagsInput from '~/components/TagsInput';

type ActionData = ZodFormattedError<Skill> | undefined;

export const action: ActionFunction = async ({ request }) => {
  // https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
  const result = await request.formData()
    .then(formData => ({
      slug: formData.get('slug'),
      parents: formData.getAll('parents'),
      children: formData.getAll('children'),
      content: formData.get('content'),
    }))
    .then(skillSchema.omit({ slug: true }).safeParse);
  console.log(result);
  if (!result.success) {
    return json<ActionData>(result.error.format());
  }

  await createSkill({
    slug: result.data.title.replace(/ /g, '-'),
    ...result.data,
  });

  return redirect('/skills');
};

export default function NewSkill() {
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
        />
        <TagsInput
          id="children-input"
          className="mb-2"
          labelText="하위 역량"
          name="children"
          placeholder="ex) react"
          errors={errors}
          maxLength={16}
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
