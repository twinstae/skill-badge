import Tooltip from '~/components/shared/Tooltip';
import {
  CommandLineIcon,
  MagnifyingGlassIcon,
  RectangleGroupIcon,
} from '@heroicons/react/24/outline';

declare module 'csstype' {
  interface Properties {
    '--value'?: number;
    '--thickness'?: string;
    '--size'?: string;
  }
}

const badgeSizeDict = {
  sm: 4,
  base: 5,
  lg: 6,
} as const;

const iconSizeDict = {
  sm: 'w-10 h-10',
  base: 'w-12 h-12',
  lg: 'w-14 h-14',
} as const;

const iconDict = {
  commandLine: CommandLineIcon,
  rectangleGroup: RectangleGroupIcon,
  magnifyingGlass: MagnifyingGlassIcon,
} as const;

function ProgressBadge({
  now,
  max,
  icon,
  size = 'base',
}: {
  now: number;
  max: number;
  icon: keyof typeof iconDict,
  size?: 'sm' | 'base' | 'lg';
}) {
  const progress = Math.floor((now / max) * 100);
  const Icon = iconDict[icon];
  return (
    <div
      className="radial-progress bg-quote text-primary mr-2 flex-none"
      style={{
        '--value': progress,
        '--thickness': badgeSizeDict[size]+'px',
        '--size': badgeSizeDict[size]+'rem',
      }}
    >
      <Tooltip tooltip={`${now} / ${max} 완료`}>
        <Icon className={'text-black ' + iconSizeDict[size]} />
      </Tooltip>
    </div>
  );
}

export default ProgressBadge;
