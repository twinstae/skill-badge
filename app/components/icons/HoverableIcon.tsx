export type IconT = (props: React.ComponentProps<'svg'>) => JSX.Element;

function HoverableIcon({ icons: [SolidIcon, OutlineIcon], label }: {
	icons: [IconT, IconT];
	label: string;
}) {
	return (
		<div className="swap hover:swap-active p-2" aria-label={label}>
			<SolidIcon className="h-6 w-6 swap-on" />
			<OutlineIcon className="h-6 w-6 swap-off" />
		</div>
	);
}

export default HoverableIcon;
