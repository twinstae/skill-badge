import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import TagsInput from './TagsInput';

function renderTagsInput(initValue: string[]) {
	render(
		<TagsInput
			className="mb-2"
			labelText="역량"
			name="skills"
			placeholder="ex) react"
			errors={undefined}
			maxLength={2}
			initValue={initValue}
			candidates={['react', 'redux', 'rescript', 'svelte', 'vue']}
		/>,
	);
}

describe('TagsInput', () => {
	it('add and delete', async () => {
		renderTagsInput([]);
		const $addInput = screen.getByLabelText('역량');

		await userEvent.type($addInput, '{enter}react{enter}');

		const $reactDeleteTag = screen.getByRole('button', {
			name: 'react 태그를 삭제',
		});

		await userEvent.click($reactDeleteTag);
	});

	it('후보에 없는 값은 추가 되지 않는다', async () => {
		renderTagsInput([]);
		const $addInput = screen.getByLabelText('역량');

		await userEvent.type($addInput, '{enter}not-in-candidate{enter}');

		expect(screen.queryByRole('button')).not.toBeInTheDocument();
	});

	it('기존에 있는 값은 추가 되지 않는다', async () => {
		renderTagsInput(['react']);
		const $addInput = screen.getByLabelText('역량');
		expect(screen.getByRole('button')).toBeInTheDocument();

		await userEvent.type($addInput, 'react{enter}');

		expect(screen.getByRole('button')).toBeInTheDocument();
	});

	it('2개 제한을 넘으면 input이 보이지 않는다', async () => {
		renderTagsInput(['rescript', 'svelte']);
		expect(screen.getAllByRole('button')).toHaveLength(2);

		expect(screen.queryByLabelText('역량')).not.toBeInTheDocument();
		expect(screen.getByRole('progressbar')).toHaveValue(2);
	});

	it('자동완성에서 선택할 수 있다', async () => {
		renderTagsInput([]);
		const $addInput = screen.getByRole('combobox', { name: '역량' });

		await userEvent.type($addInput, 're');
		expect(screen.getAllByRole('option', { hidden: true })).toHaveLength(3);

		await userEvent.type($addInput, 'd');

		expect(screen.getByRole('option', { hidden: true })).toHaveValue('redux');
	});

	it('form으로 제출할 수 있다', async () => {
		renderTagsInput(['react', 'redux']);

		const values = [...document.getElementsByTagName('input')]
			.filter((input) => input.name === 'skills')
			.map((input) => input.value);
		expect(values).toEqual(['react', 'redux']);
	});
});
