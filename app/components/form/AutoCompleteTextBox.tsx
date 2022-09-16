import clsx from 'clsx';
import { useId, useState } from 'react';

export default function AutoCompleteTextBox({
	initValue = '',
	candidates,
	candidateLimit = 10,
	className,
	...props
}: React.ComponentProps<'input'> & {
	initValue: string;
	candidates?: readonly string[];
	candidateLimit?: number;
}) {
	const [value, setValue] = useState(initValue);

	const isValid =
		value.length > 0 &&
		(candidates === undefined || candidates.includes(value));

	// 😱
	const recommendation = candidates?.filter(
		(candi) => candi.includes(value),
	).slice(0, candidateLimit);

	const dataListId = useId();

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
				value={props.value ?? value}
				onChange={(e) => {
					setValue(e.currentTarget.value);
					if (props.onChange) {
						props.onChange(e);
					}
				}}
				list={dataListId}
			/>
			<datalist id={dataListId}>
				{recommendation?.map(
					(candi) => (
						<option key={candi} value={candi} />
					),
				)}
			</datalist>
		</div>
	);
}
