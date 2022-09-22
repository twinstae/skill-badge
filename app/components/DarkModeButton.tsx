import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { DarkModeContext } from './DarkModeContext';

function DarkModeButton() {
	const { isDark, toggleDark } = useContext(DarkModeContext);
	return (
		<button type="button" className="flex flex-col" onClick={() => toggleDark()}>
			<div className="p-2">
			{isDark ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
			</div>
			<span className="text-center w-full">{isDark ? '어둠' : '밝음'}</span>
		</button>
	);
}

export default DarkModeButton;
