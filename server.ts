import * as serverBuild from '@remix-run/dev/server-build';
import { remixFastifyPlugin } from '@mcansh/remix-fastify';
import fastify from 'fastify';
// import lcache from 'fastify-lcache';
import compress from '@fastify/compress';
import { logger } from '~/logger';

// import Keyv from '@keyvhq/core';
// const _keyv = new Keyv();

const MODE = process.env.NODE_ENV;

async function start() {
	const app = fastify({ logger });

	// await app.register(lcache, {
	// 	ttlInMinutes: 1,
	// });

	await app.register(compress);

	await app.register(remixFastifyPlugin, {
		assetsBuildDirectory: serverBuild.assetsBuildDirectory,
		build: serverBuild,
		mode: MODE,
		publicPath: serverBuild.publicPath,
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
