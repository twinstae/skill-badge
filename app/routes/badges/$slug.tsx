import { useLoaderData } from '@remix-run/react';
import { json, redirect } from '@remix-run/node';
import type { LoaderFunction } from '@remix-run/node';
import invariant from 'tiny-invariant';

import CenterCardLayout from '~/components/CenterCardLayout';
import SkillList from '~/components/SkillList';
import ProgressBadge from '~/components/ProgressBadge';
import fakeBadgeRepo from '~/models/badges/fakeRepo';
import type { BadgeT } from '~/models/badges/schema';
import { count } from '~/funcUtil';

type LoaderData = BadgeT;

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, `params.slug is required`);

  const badge = fakeBadgeRepo.find((badge) => badge.slug === params.slug);

  if (badge === undefined) {
    return redirect('/badges');
  }

  return json<LoaderData>(badge);
};

export default function BadgeDetailPage() {
  const { title, slug, pieces, skillSlugs, icon } = useLoaderData() as LoaderData;

  return (
    <CenterCardLayout>
      <header className="flex flex-row">
        <ProgressBadge
          max={pieces.length}
          now={count(pieces, (piece) => piece.isDone)}
          icon={icon}
          size="lg"
        />
        <h1>
          {title}<br/>
          <span className="font-normal text-lg text-primary">{slug}</span>
        </h1>
      </header>
      <SkillList title="역량" dataList={skillSlugs} />
      <h2 id="pieces-title">조각들</h2>
      <ul aria-labelledby="pieces-title" className="flex flex-col">
        {pieces.map(({ id, title, isDone }) => (
          <li className="form-control p-2" key={id}>
            <label className="label font-normal justify-start">
              <input
                type="checkbox"
                checked={isDone}
                className="checkbox checkbox-primary mr-2 cursor-default"
                readOnly
              />
              <span className="label-text">{title}</span>
            </label>
          </li>
        ))}
      </ul>
    </CenterCardLayout>
  );
}
