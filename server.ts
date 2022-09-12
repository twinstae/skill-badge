import * as serverBuild from '@remix-run/dev/server-build';
import { remixFastifyPlugin } from '@mcansh/remix-fastify';
import fastify from 'fastify';
import lcache from 'fastify-lcache';
import compress from '@fastify/compress';

// import Keyv from '@keyvhq/core';
// const _keyv = new Keyv();

let MODE = process.env.NODE_ENV;

async function start() {
  let app = fastify({ logger: true });
  await app.register(lcache, {
    ttlInMinutes: 1,
  });

  await app.register(remixFastifyPlugin, {
    assetsBuildDirectory: serverBuild.assetsBuildDirectory,
    build: serverBuild,
    mode: MODE,
    publicPath: serverBuild.publicPath,
  });

  await app.register(compress)

  const port = parseInt(process.env.PORT ?? '3000');
  const host = '0.0.0.0';
  app.listen({ port, host }, () => {
    console.log(
      `Fastify server listening\non http://${host}:${port}\n http://localhost:${port}`
    );
  });
}

start().catch((error) => {
  console.error(error);
  process.exit(1);
});
