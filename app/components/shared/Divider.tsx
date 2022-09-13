import React from 'react';

export default function Divider(props: React.ComponentProps<'div'>) {
	return (
		<div
			{...props}
			className={`divider w-full mb-2 mt-2${(props.className ?? '')}`}
		/>
	);
}
