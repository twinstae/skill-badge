import { marked } from 'marked';
import React, { useId, useState } from 'react';
import Tooltip from '~/components/shared/Tooltip';

export function TextEditor(
	rawProps: React.ComponentProps<'textarea'> & {
		label: string;
		initValue?: string;
	},
) {
	const { name, label, initValue = '', ...props } = rawProps;
	const id = useId();
	const [value, setValue] = useState(initValue);
	return (
		<div className="flex flex-col">
			<label className="label" htmlFor={id}>
				{label}
			</label>
			<Tooltip tooltip="미리보기" className="text-left">
				<div
					aria-label="미리보기"
					dangerouslySetInnerHTML={{ __html: marked(value) }}
					className="content textarea textarea-bordered mb-4"
				/>
			</Tooltip>
			<textarea
				{...props}
				id={id}
				name={name}
				value={value}
				onChange={(e) => setValue(e.currentTarget.value)}
				className="textarea textarea-bordered mb-2 w-full h-fit"
			/>
		</div>
	);
}
