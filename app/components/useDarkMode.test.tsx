import { describe, it, expect } from 'vitest';
import { act, render, renderHook } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { useDarkMode } from './useDarkMode';
import { renderServerSide } from '~/utils/renderServerSide';
import { createListenerAndPublish } from '~/utils/createListenerAndPublish';

describe('useDarkMode', () => {
	const $html = document.getElementsByTagName('html')[0];

	it('isDark를 toggle하면, false로 바뀌고, 다시 toggle하면 true로 돌아온다', async () => {
		const { result } = renderHook(() => useDarkMode());
    
    expect(result.current.isDark).toBe(true);
    expect($html).toHaveAttribute('data-theme', 'forest');

    act(() => result.current.toggleDark());

    expect(result.current.isDark).toBe(false);
		expect($html).toHaveAttribute('data-theme', 'emerald');
    
    act(() => result.current.toggleDark());

    expect(result.current.isDark).toBe(true);
		expect($html).toHaveAttribute('data-theme', 'forest');

		$html.setAttribute('data-theme', '');
	});

  const { manager, publish } = createListenerAndPublish<{ matches: boolean }>()

  const matchMediaMock = (isDark: boolean) => () => ({
    matches: isDark,
    ...manager,
  } as MediaQueryList)

  it('SSR에서는 다크로 렌더되지만, 사용자가 라이트 모드를 선호하면, 라이트로 다시 렌더된다', () => {
    function Story(){
      const { isDark } = useDarkMode();
      return (<button>{isDark ? '다크' : '라이트'}</button>);
    }

    const { container } = renderServerSide(<Story />);

    const button = screen.getByRole('button', { name: '다크' });

    window.matchMedia = matchMediaMock(false);

    render(<Story />, { container, hydrate: true });

    expect(button).toHaveAccessibleName('라이트');

    Object.assign(window, { matchMedia: undefined });
  });

  it('사용자가 color scheme을 바꾸면, isDark도 바뀐다', () => {
    function Story(){
      const { isDark } = useDarkMode();
      return (<button>{isDark ? '다크' : '라이트'}</button>);
    }

    window.matchMedia = matchMediaMock(true);

    render(<Story />);

    const button = screen.getByRole('button', { name: '다크' });

    act(() => publish({ matches: false }));

    expect(button).toHaveAccessibleName('라이트');

    act(() => publish({ matches: true }));

    expect(button).toHaveAccessibleName('다크');

    Object.assign(window, { matchMedia: undefined });
  });
});