import { describe, it, expect } from 'vitest';
import { screen, getAllByRole } from '@testing-library/dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { TextEditor } from './TextEditor';

describe('TextEditor', () => {
	it('preview', async () => {
		render(
			<TextEditor id="input-content" label="설명" name="content" initValue="" />,
		);

		const $editor = screen.getByLabelText('설명');
		const $preview = screen.getByLabelText('미리보기');

		await userEvent.type($editor, '# 큰제목{enter} ## 소제목{enter}> 인용문');

		expect($editor).toHaveValue('# 큰제목\n ## 소제목\n> 인용문');

		const $headings = getAllByRole($preview, 'heading');
		expect($headings[0]).toHaveTextContent('큰제목');
		expect($headings[1]).toHaveTextContent('소제목');
	});
});
