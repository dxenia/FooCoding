import http from 'node:http';

if (!globalThis.URLPattern) {
  await import('urlpattern-polyfill');
}

import { requestHandler } from './utils/index.js';

const HOST = '127.0.0.1';
const PORT = process.env.PORT ?? 3000;

export const server = http.createServer(requestHandler);

server.listen(PORT, HOST, () => {
  const { address, port } = server.address();
  const serverUrl = `http://${address}:${port}/`;

  console.log('Server running at: %s', serverUrl);
});