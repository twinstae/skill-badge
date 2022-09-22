import { useEffect, useState } from 'react';

export function useDarkMode(){
	const [isDark, setIsDark] = useState(true);

	useEffect(() => {
		if (typeof window?.matchMedia !== 'undefined') {
			const mql = window.matchMedia('(prefers-color-scheme:dark)');
			setIsDark(mql.matches);
			
			const handler = (event: MediaQueryListEvent) => {
				setIsDark(event.matches)
			};
			mql.addEventListener("change", handler);
			return () => mql.removeEventListener("change", handler)
		}
	}, []);

	useEffect(() => {
		const $html = document.getElementsByTagName('html')[0];
		$html.setAttribute('data-theme', isDark ? 'forest' : 'emerald');
	}, [isDark]);

	function toggleDark() {
		setIsDark((old) => !old);
	}
	return { isDark, toggleDark };
}
