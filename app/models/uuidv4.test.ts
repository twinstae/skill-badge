import { it } from 'vitest';
import { z } from 'zod';
import { uuidv4 } from './uuidv4';

it('uuidv4 return uuid format string', () => {
	z.string().uuid().parse(uuidv4());
});
