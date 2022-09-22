import { describe, it, expect } from 'vitest';
import { screen, getByRole } from '@testing-library/dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Dialog } from './Dialog';
import { TrashIcon } from '@heroicons/react/24/solid';

describe('Dialog', () => {
	it('dialog를 띄우고 액션을 할 수 있다', async () => {
		let deleted = false;
		render(
			<Dialog
				label="삭제하기"
				button={<TrashIcon />}
				title="역량을 삭제하기"
				description="정말 삭제하시겠어요?"
			>
				<button
					onClick={() => {
						deleted = true;
					}}
				>
					삭제하겠습니다
				</button>
			</Dialog>,
		);

		await userEvent.click(screen.getByRole('button', { name: '삭제하기' }));

		const $modal = screen.getByLabelText('역량을 삭제하기');

		await userEvent.click(getByRole($modal, 'button', { name: '삭제하겠습니다' }));

		expect(deleted).toBe(true);
	});
});
