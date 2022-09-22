import React from 'react';
import * as dialog from '@zag-js/dialog';
import { Portal } from '@reach/portal';
import { useMachine, normalizeProps } from '@zag-js/react';
import clsx from 'clsx';
import Tooltip from '~/components/shared/Tooltip';
import { XMarkIcon } from '@heroicons/react/24/outline';

export function Dialog({ label, children, title, description, button }: {
	label: string;
	button: React.ReactNode;
	children: React.ReactNode;
	title: string;
	description: string;
}) {
	const [state, send] = useMachine(dialog.machine({ id: '1' }));

	const api = dialog.connect(state, send, normalizeProps);

	return (
		<>
			<button
				{...api.triggerProps}
				aria-label={label}
				className="text-primary float-right p-0"
			>
				<Tooltip tooltip={label}>{button}</Tooltip>
			</button>
			{api.isOpen && (
				<Portal>
					<div {...api.backdropProps} />
					<div
						{...api.underlayProps}
						className={clsx('modal', api.isOpen && 'modal-open')}
					>
						<div {...api.contentProps} className="modal-box">
							<h2 className="text-2xl" {...api.titleProps}>
								{title}
							</h2>
							<p {...api.descriptionProps}>{description}</p>
							<div className="modal-action">{children}</div>

							<button
								className="btn btn-ghost btn-circle absolute top-2 right-2"
								{...api.closeButtonProps}
							>
								<XMarkIcon className="w-6 h-6" />
							</button>
						</div>
					</div>
				</Portal>
			)}
		</>
	);
}
