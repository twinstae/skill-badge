import React from 'react';
import clsx from 'clsx';
import { useNavigate } from '@remix-run/react';

// 4-1 prop에 타입을 정의한다
function FirstPathDropdown({
	current,
	currentPath,
}: {
	current: string;
	currentPath: string;
}) {
	const navigate = useNavigate();
	return (
		<select
			onChange={(e) => {
				navigate((e.target as HTMLSelectElement).value);
			}}
			className={clsx(
				'select select-ghost select-sm text-lg w-36 font-normal',
				currentPath === `/${current}` && 'link-primary',
			)}
			defaultValue={current}
		>
			<option value={current} disabled={true}>
				{current}
			</option>
			<option value="/positions">positions 직군</option>
			<option value="/skills">skills 역량</option>
			<option value="/badges">badges 배지</option>
		</select>
	);
}

export default FirstPathDropdown;
