import clsx from 'clsx';

export default function Tooltip({
	tooltip,
	isOpen = false,
	className = '',
	children,
}: {
	tooltip: string;
	isOpen?: boolean;
	className?: string;
	children: React.ReactNode;
}) {
	return (
		<div
			className={clsx(
				'tooltip rounded-lg',
				className,
				isOpen && 'tooltip-open',
			)}
			data-tip={tooltip}
		>
			{children}
		</div>
	);
}
