import {
  type ActionFunction,
  type LoaderFunction,
  json,
  redirect,
} from '@remix-run/node';
import {
  Form,
  useActionData,
  useLoaderData,
  useTransition,
} from '@remix-run/react';
import CenterCardLayout from '~/components/CenterCardLayout';
import { slugRegex } from '~/models/skills/schema';
import { context } from '~/models/context';
import { flatSlug } from '~/models/skills/transformUtil';
import {
  requirementSchema,
  type RequirementT,
} from '~/models/requirements/schema';
import ErrorMessages, {
  type FieldErrors,
} from '~/components/form/ErrorMessage';
import Spinner from '~/components/shared/Spinner';
import AutoCompleteTextBox from '~/components/form/AutoCompleteTextBox';

type LoaderData = {
  allSkillSlugs: string[];
};

export const loader: LoaderFunction = async () => {
  const allSkills = await context.skillsRepo.getAllList();

  return json<LoaderData>({
    allSkillSlugs: allSkills.map(flatSlug),
  });
};

type ActionData = FieldErrors<RequirementT> | undefined;

export const action: ActionFunction = async ({ request }) => {
  const allSkills = await context.skillsRepo.getAllList();
  const allSkillSlugs = allSkills.map(flatSlug);
  const result = await request
    .formData()
    .then((formData) => ({
      skillSlug: formData.get('skillSlug'),
      content: formData.get('content'),
      positionSlug: formData.get('positionSlug'),
    }))
    .then(
      requirementSchema
        .omit({ id: true })
        .refine(({ skillSlug }) => allSkillSlugs.includes(skillSlug), {
          message: '존재하지 않는 역량의 슬러그에요!',
        }).safeParse
    );

  if (!result.success) {
    return json<ActionData>(result.error.formErrors.fieldErrors);
  }

  await context.positionsRepo.addRequirement(result.data);

  return redirect('/skills/' + result.data.skillSlug);
};

export default function NewSkill() {
  const { allSkillSlugs } = useLoaderData() as LoaderData;
  const errors = useActionData() as ActionData;

  const transition = useTransition();
  const isCreating = Boolean(transition.submission);

  return (
    <CenterCardLayout>
      {JSON.stringify(errors)}
      <Form method="post" className="flex flex-col">
        <label className="label" htmlFor="input-skill-slug">
          슬러그
        </label>
        <AutoCompleteTextBox
          id="input-skill-slug"
          name="skillSlug"
          placeholder="ex) design-system"
          className="w-full"
          initValue=""
          required
          pattern={slugRegex}
          candidates={allSkillSlugs}
        />
        <ErrorMessages errors={errors} name="skillSlug" />
        <label className="label" htmlFor="content-input">
          내용
        </label>
        <input
          id="content-input"
          type="text"
          name="content"
          required
          placeholder="react 경험이 있으신 분"
          className="input input-bordered mb-2 w-full"
        />
        <ErrorMessages errors={errors} name="content" />
        <label htmlFor="position-slug-radio-group" className="label">
          직군
        </label>
        <div id="position-slug-radio-group" className="form-control">
          <label className="cursor-pointer flex items-center mb-2">
            <input
              type="radio"
              name="positionSlug"
              value="frontend"
              className="radio checked:bg-green-400 transition-all"
              checked
            />
            <span className="pl-2 text-base">프런트엔드</span>
          </label>
          <label className="cursor-pointer flex items-center">
            <input
              type="radio"
              name="positionSlug"
              value="backend"
              className="radio checked:bg-green-400 transition-all"
            />
            <span className="pl-2 text-base">백엔드</span>
          </label>
        </div>
        <ErrorMessages errors={errors} name="positionSlug" />
        <button type="submit" className="btn btn-primary mt-4">
          {isCreating ? (
            <Spinner message="공유 중..." />
          ) : (
            '직군별 자격 추가하기'
          )}
        </button>
      </Form>
    </CenterCardLayout>
  );
}
