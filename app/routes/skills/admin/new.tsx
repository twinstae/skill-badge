import type { ZodFormattedError } from 'zod';
import { type ActionFunction, redirect, json } from '@remix-run/cloudflare';
import { Form, useActionData, useTransition } from '@remix-run/react';
import CenterCardLayout from '~/components/CenterCardLayout';
import { createSkill, skillSchema, type Skill } from '~/models/skills.server';
import Spinner from '~/components/Spinner';
import ErrorMessage from '~/components/form/ErrorMessage';

type ActionData = ZodFormattedError<Skill> | undefined;

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const rawData = {
    title: formData.get('title'),
    childrens: (formData.get('childrens') as string).split(','),
    parents: (formData.get('parents') as string).split(','),
  };

  const result = skillSchema.omit({slug: true}).safeParse(rawData);
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
  const errors = useActionData() as ActionData;

  const transition = useTransition();
  const isCreating = Boolean(transition.submission);

  return (
    <CenterCardLayout>
      <Form method="post" className="flex flex-col">
        <label>
          역량 제목
          <br />
          <ErrorMessage errors={errors} name="title" />
          <input
            type="text"
            name="title"
            className="input input-bordered mb-2"
          />
        </label>
        <label>
          하위 역량
          <br />
          <ErrorMessage errors={errors} name="childrens" />
          <input
            type="text"
            name="childrens"
            className="input input-bordered mb-2"
          />
        </label>
        <label>
          상위 역량
          <br />
          <ErrorMessage errors={errors} name="childrens" />
          <input
            type="text"
            name="childrens"
            className="input input-bordered mb-2"
          />
        </label>
        <button type="submit" className="btn btn-primary" disabled={isCreating}>
          {isCreating ? <><Spinner />공유 중...</> : '역량 공유하기'}
        </button>
      </Form>
    </CenterCardLayout>
  );
}
