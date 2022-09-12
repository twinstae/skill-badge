import CenterCardLayout from '~/components/CenterCardLayout';
import SkillList from '~/components/SkillList';
import { count } from '~/funcUtil';
import ProgressBadge from '~/components/ProgressBadge';
import { CommandLineIcon } from '@heroicons/react/24/outline';
import fakeBadgeRepo from '~/models/badges/fakeRepo';

const fakeBadge = fakeBadgeRepo[0];

export default function BadgeDetailPage() {
  const pieces = fakeBadge.pieces;

  return (
    <CenterCardLayout>
      <header className="flex flex-row">
        <ProgressBadge
          max={pieces.length}
          now={count(pieces, (piece) => piece.isDone)}
          Icon={CommandLineIcon}
          size="lg"
        />
        <h1>{fakeBadge.title}</h1>
      </header>
      <SkillList title="역량" dataList={fakeBadge.skillSlugs} />
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
