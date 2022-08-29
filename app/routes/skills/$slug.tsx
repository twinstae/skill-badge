import { json, type LoaderFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { getSkill, type Skill } from "~/models/skills.server";
import invariant from "tiny-invariant";

type LoaderData = { skill: Skill };

export const loader: LoaderFunction = async ({ params }) => {

  invariant(params.slug, `params.slug is required`);

  const skill = await getSkill(params.slug)

  invariant(skill, `skill not found: ${params.slug}`);
  return json<LoaderData>({ skill });
};

export default function SkillDetail() {
  const { skill } = useLoaderData() as LoaderData;
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">
        역량: {skill.title}
      </h1>
      <ul>{skill.tags.map(tag => <li key="tag" className="badge badge-primary m-1">{tag}</li>)}</ul>
    </main>
  );
}