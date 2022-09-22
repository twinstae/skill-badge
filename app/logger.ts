import pino from 'pino';
import path from 'path';

import { pick } from '~/functional/Object';

const MODE = process.env.NODE_ENV;

const logPath = path.resolve(__dirname, '../.log');
console.log(`log saved at: ${logPath}`);

const transport =
	MODE === 'development'
		? {
				target: 'pino-pretty',
				options: {
					translateTime: 'HH:MM:ss Z',
					ignore: 'pid,hostname',
				},
		  }
		: {
				level: ['info', 'error'],
				target: 'pino/file',
				options: { destination: logPath },
		  };

export const logger = pino({
	transport,
	serializers: {
		res(reply) {
			return {
				statusCode: reply.statusCode,
			};
		},
		req(request) {
			return pick(request, ['method', 'url']);
		},
	},
});
