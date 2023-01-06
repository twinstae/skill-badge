import Tooltip from '~/components/shared/Tooltip';

import React, { Suspense } from 'react';
import type { HeroIconName } from './icons/HeroIconName';
import { iconDict } from './icons/iconDict';
import clsx from 'clsx';

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

function ProgressBadge({
	now,
	max,
	icon,
	size = 'base',
}: {
	now: number;
	max: number;
	icon: HeroIconName;
	size?: 'sm' | 'base' | 'lg';
}) {
	const progress = Math.floor((now / max) * 100);
	const Icon = iconDict[icon];
	return (
		<div
			className="radial-progress bg-quote text-primary mr-2 flex-none"
			style={{
				'--value': progress,
				'--thickness': `${badgeSizeDict[size]}px`,
				'--size': `${badgeSizeDict[size]}rem`,
			}}
		>
			<Tooltip tooltip={`${now} / ${max} 완료`}>
				<Suspense fallback={<span>{icon}</span>}>
					<Icon className={clsx('text-base-content', iconSizeDict[size])} />
				</Suspense>
			</Tooltip>
		</div>
	);
}

export default ProgressBadge;
