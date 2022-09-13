import clsx from 'clsx';
import { useState } from 'react';

export default function AutoCompleteTextBox({
	initValue = '',
	candidates,
	className,
	...props
}: React.ComponentProps<'input'> & {
	initValue: string;
	candidates?: string[];
}) {
	const [value, setValue] = useState(initValue);

	const isValid =
		value.length > 0 &&
		(candidates === undefined || candidates.includes(value));

	// 😱
	const recommendation = candidates?.filter(
		(candi) => candi.includes(value),
	).slice(0, 10);

	return (
		<div>
			<input
				autoComplete="off"
				{...props}
				className={clsx(
					'input input-bordered',
					className,
					isValid && 'input-success',
				)}
				value={value}
				onChange={(e) => setValue(e.currentTarget.value)}
				list="skill-slugs"
			/>
			<datalist id="skill-slugs">
				{recommendation?.map(
					(candi) => (
						<option key={candi} value={candi} />
					),
				)}
			</datalist>
		</div>
	);
}
