import { CommandLineIcon } from '@heroicons/react/24/outline';
import CenterCardLayout from '~/components/CenterCardLayout';
import SkillList from '~/components/SkillList';
import Tooltip from '~/components/shared/Tooltip';
import { count } from '~/funcUtil';

declare module 'csstype' {
  interface Properties {
    '--value'?: number;
    '--thickness'?: string;
  }
}

export default function BadgeDetailPage() {
  return (
    <CenterCardLayout>
      <div className="hero border-primary border-4 rounded-lg h-48">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-4xl">탐정토끼</h1>
            <p className="text-xl">서로 다른 사람들이 함께 나아갈 수 있는... 진리의 배를 만듭니다.</p>
          </div>
        </div>
      </div>
      <div className="p-2">
        <h2>핵심 역량</h2>
        <ul>
          <li>
            
            <div tabIndex={0} className="collapse collapse-arrow">
              <div className="collapse-title">
              <h3 className="badge badge-primary">리액트</h3> Hook은 물론 suspense나
            portal, useId 등의 새로운 기능도 이해하고 활용할 수 있습니다.
              </div>
              <div className="collapse-content"> 
                <p tabIndex={0}> 저의 프로젝트를 보세요! </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </CenterCardLayout>
  );
}
