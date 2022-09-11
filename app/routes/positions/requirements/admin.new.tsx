import type { ZodFormattedError } from 'zod';
import {
  type ActionFunction,
  type LoaderFunction,
  json,
} from '@remix-run/node';
import {
  Form,
} from '@remix-run/react';
import CenterCardLayout from '~/components/CenterCardLayout';
import { type SkillT } from '~/models/skills/schema';
import { context } from '~/models/context';
import { flatSlug } from '~/models/skills/transformUtil';
import { requirementSchema } from '~/models/requirements/schema';

type LoaderData = {
  allSkillSlugs: string[];
};

export const loader: LoaderFunction = async () => {
  const allSkills = await context.skillsRepo.getAllList();

  return json<LoaderData>({
    allSkillSlugs: allSkills.map(flatSlug),
  });
};

type ActionData = ZodFormattedError<SkillT> | undefined;

export const action: ActionFunction = async ({ request }) => {
  const result = await request
    .formData()
    .then((formData) => ({
      skillSlug: formData.get('skillSlug'),
      // ???
    }))
    .then(requirementSchema.omit({ id: true }).safeParse);
  await new Promise((resolve) => setTimeout(resolve, 3000));

  if (!result.success) {
    return json<ActionData>(result.error.format());
  }

  await context.positionsRepo.addRequirement(result.data);
};

export default function NewSkill() {
  // 자동 완성을 위한 allSkillSlugs 를 loader로 불러오기
  
  /* https://remix.run/docs/en/v1/tutorials/blog#actions */

  return (
    <CenterCardLayout>
      <Form method="post" className="flex flex-col">
        {/* 라벨 */}
        <input
          // ???
          name="skillSlug" // slug가 아니라 skillSlug로!
          // ???
        />
        {/* 에러 메세지 */}
        
        {/* 내용 */}
        
        {/* 직군 */}
        {/* https://daisyui.com/components/radio/ */}

        {/* submit button */}
      </Form>
    </CenterCardLayout>
  );
}
