import { CommandLineIcon } from '@heroicons/react/24/outline';
import CenterCardLayout from '~/components/CenterCardLayout';
import SkillList from '~/components/SkillList';
import Tooltip from '~/components/shared/Tooltip';
import { count } from '~/funcUtil';
import { type BadgeT } from '~/models/badges/schema';

const fakeBadge: BadgeT = {
  slug: 'linux-cli-fs',
  title: '리눅스 명령줄로 파일 시스템을 탐색하고 조작할 수 있습니다',
  skillSlugs: ['linux'],
  pieces: [
    'pwd, ls, cd, tree 명령어로 파일 시스템을 탐색할 수 있습니다',
    'cp, mv, rm 명령어로 파일을 복사, 이동, 삭제할 수 있습니다',
    'mkdir과 -r flag로 디렉토리를 다룰 수 있습니다',
    'ln으로 링크를 생성하고 활용할 수 있습니다',
    '상대 경로와 절대 경로를 이해하고 활용할 수 있습니다',
    '. 으로 시작하는 숨김 파일을 다룰 수 있습니다',
    '파일을 다룰 때 흔한 실수를 알고 예방할 수 있습니다',
  ].map((title, index) => ({
    id: (Math.random() * 1_000_000_000).toString(),
    title,
    isDone: index < 3,
  })),
};


declare module "csstype" {
  interface Properties {
    "--value"?: number,
    "--thickness"?: string,
  }
}

function ProgressBadge({ pieces }: { pieces: {isDone: boolean}[]}){
  const doneCount = count(pieces, (piece) => piece.isDone);
  const max = pieces.length;
  const progress = Math.floor(doneCount / max * 100)
  return (
    <div className="radial-progress bg-quote text-primary float-left mr-2" style={{"--value":progress, "--thickness": "4px"}}>
      <Tooltip tooltip={`${doneCount} / ${max} 완료`}>
        <CommandLineIcon className="w-12 h-12 text-black"/>
      </Tooltip>
    </div>
  )
}

export default function BadgeDetailPage() {
  const pieces = fakeBadge.pieces;
  return (
    <CenterCardLayout>
      <ProgressBadge pieces={pieces} />
      <h1>{fakeBadge.title}</h1>
      <SkillList
        title="역량"
        titleId="skills-title"
        dataList={fakeBadge.skillSlugs}
      />
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
