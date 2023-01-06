import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import DarkModeButton from './DarkModeButton';
import { DarkModeProvider } from './DarkModeContext';

describe('DarkModeButton', () => {
	it('다크 모드 버튼을 클릭하면, 라이트 모드로 바뀐다', async () => {
		render(<DarkModeButton />, {
			wrapper: DarkModeProvider,
		});
		const button = screen.getByRole('button', {
			name: '어둠',
		});

		await userEvent.click(button);

		expect(button).toHaveAccessibleName('밝음');
	});
});
