import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorMessages from './ErrorMessage';

describe('ErrorMessages', () => {
	it('이름에는 에러가 없는 경우', async () => {
		render(
			<ErrorMessages
				errors={{
					age: '에러',
				}}
				name="name"
			/>,
		);

		expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
	});

	it('에러가 없는 경우', async () => {
		render(<ErrorMessages errors={undefined} name="name" />);

		expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
	});

	it('에러가 하나인 경우', async () => {
		render(
			<ErrorMessages
				errors={{ age: 'Number must be greater than or equal to 1' }}
				name="age"
			/>,
		);

		expect(screen.getByRole('listitem')).toHaveTextContent(
			'Number must be greater than or equal to 1',
		);
	});
});
