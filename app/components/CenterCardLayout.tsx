import clsx from 'clsx';
import React from 'react';
import NavigationBar from './NavigationBar';

export default function CenterCardLayout({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div className="flex flex-row justify-center min-h-screen">
			<div className="static flex flex-col sm:rounded-xl m-0 md:m-2 shadow-2xl md:border-2 max-w-xl w-full h-fit max-h-screen overflow-y-auto">
				<NavigationBar />
				<main id="main" className={clsx('h-full w-full p-4', className)}>
					{children}
				</main>
			</div>
		</div>
	);
}
