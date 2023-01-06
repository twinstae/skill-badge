import * as tagsInput from '@zag-js/tags-input';
import { useMachine, normalizeProps } from '@zag-js/react';
import clsx from 'clsx';

import ErrorMessages, {
	type FieldErrors,
} from '~/components/form/ErrorMessage';
import Tooltip from '~/components/shared/Tooltip';
import { useId } from 'react';

export default function TagsInput<S>({
	className = '',
	name,
	initValue = [],
	labelText,
	errors,
	placeholder = '',
	maxLength = 16,
	candidates = [],
}: {
	name: string;
	labelText: string;
	errors: FieldErrors<S> | undefined;
	initValue?: string[];
	placeholder?: string;
	className?: string;
	maxLength?: number;
	candidates?: string[];
}) {
	const id = useId();
	const addInputId = `tags-input:${id}:input`;
	function validate({
		values,
		inputValue,
	}: {
		values: string[];
		inputValue: string;
	}) {
		return (
			inputValue.length > 0 &&
			!values.includes(inputValue) &&
			(candidates.length === 0 || candidates.includes(inputValue))
		);
	}
	const [state, send] = useMachine(
		tagsInput.machine({
			id,
			name,
			value: initValue,
			max: maxLength,
			validate,
			onChange: () => {
				document.getElementById(addInputId)?.focus();
			},
		}),
	);

	const api = tagsInput.connect(state, send, normalizeProps);

	const recommendation = candidates
		.filter((candi) => candi.startsWith(api.inputValue))
		.slice(0, 5);

	const isValid = validate({
		values: api.value,
		inputValue: api.inputValue,
	});
	return (
		<>
			<label htmlFor={addInputId} className="label">
				{labelText}
			</label>

			<div
				{...api.rootProps}
				className={clsx(
					'flex flex-row flex-wrap p-1 border-1 rounded-xl',
					className,
				)}
			>
				{api.value.map((value, index) => (
					<span key={index} className="p-2 bg-slate-100 m-1 rounded-md">
						<div {...api.getTagProps({ index, value })}>
							{/* 사람들눈에보이는value */}
							<span>{value}</span>
							<button
								{...api.getTagDeleteTriggerProps({ index, value })}
								tabIndex={1}
								aria-label={`${value} 태그를 삭제`}
							>
								&#x2715;
							</button>
						</div>
						{/* 수정 용*/}
						<input {...api.getTagInputProps({ index, value })} />
						{/* 실제로 보내는 값 */}
						<input
							type="text"
							hidden={true}
							name={name}
							value={value}
							readOnly={true}
						/>
					</span>
				))}
				<Tooltip tooltip="추가하려면 Enter" isOpen={isValid}>
					{api.value.length < maxLength && (
						<input
							type="text"
							id={addInputId}
							className={clsx(
								'input input-bordered w-32 h-10 rounded-md p-2 m-1',
								isValid && 'input-success',
							)}
							placeholder={placeholder}
							list="skill-slugs"
							autoComplete="off"
							{...api.inputProps}
						/>
					)}
					<datalist id="skill-slugs">
						{recommendation?.map((candi) => (
							<option key={candi} value={candi} />
						))}
					</datalist>
				</Tooltip>
				<ErrorMessages errors={errors} name={name} />
			</div>
			<progress
				className={clsx(
					'progress w-full',
					api.value.length < maxLength ? 'progress-info' : 'progress-primary',
				)}
				value={api.value.length}
				max={maxLength}
			/>
		</>
	);
}
