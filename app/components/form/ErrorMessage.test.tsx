import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorMessages, { getFieldErrors } from './ErrorMessage';
import { z } from 'zod';
import invariant from 'tiny-invariant';

const schema = z.object({
  name: z.string().min(1),
  age: z.number().min(1).int(),
});

describe('ErrorMessages', () => {
  it('이름에는 에러가 없는 경우', async () => {
    const result = schema.safeParse({
      name: 'taehee',
      age: 0,
    });

    invariant(result.success === false);
    render(<ErrorMessages errors={getFieldErrors(result)} name="name" />);

    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  it('에러가 없는 경우', async () => {
    render(<ErrorMessages errors={undefined} name="name" />);

    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  it('에러가 하나인 경우', async () => {
    render(
      <ErrorMessages
        errors={{ age: ['Number must be greater than or equal to 1'] }}
        name="age"
      />
    );

    expect(screen.getByRole('listitem')).toHaveTextContent(
      'Number must be greater than or equal to 1'
    );
  });

  it('에러가 여럿인 경우', async () => {
    render(
      <ErrorMessages
        errors={{
          age: [
            'Number must be greater than or equal to 1',
            'Number must be int',
          ],
        }}
        name="age"
      />
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});
