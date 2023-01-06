import { remixFastifyPlugin } from '@mcansh/remix-fastify';
import fastify from 'fastify';
import compress from '@fastify/compress';
import { logger } from '~/logger';
import path from 'node:path';

// import Keyv from '@keyvhq/core';
// const _keyv = new Keyv();

const MODE = process.env.NODE_ENV;

async function start() {
	const app = fastify({ logger });

	await app.register(compress);

	await app.register(remixFastifyPlugin, {
		build: path.join(process.cwd(), "build/index.js"),
		mode: MODE,
		getLoadContext() {
      return { loadContextName: "John Doe" };
    },
	});

	const port = parseInt(process.env.PORT ?? '3000');
	const host = '0.0.0.0';
	app.listen({ port, host }, () => {
		console.log(
			`Fastify server listening on\nhttp://${host}:${port}\nhttp://localhost:${port}`,
		);
	});
}

start().catch((error) => {
	console.error(error);
	process.exit(1);
});
