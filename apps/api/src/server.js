import { createServer } from 'node:http';
import { env } from './config/env.js';
import { json } from './common/http.js';
import { buildRoutes } from './routes/index.js';

const routes = buildRoutes(env.prefix);

const setCorsHeaders = (response) => ({
  'Access-Control-Allow-Origin': env.corsOrigin,
  'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization'
});

const server = createServer((request, response) => {
  if (!request.url || !request.method) {
    return json(response, 400, { error: 'Invalid request' });
  }

  const corsHeaders = setCorsHeaders(response);

  if (request.method === 'OPTIONS') {
    response.writeHead(204, corsHeaders);
    response.end();
    return;
  }

  const url = new URL(request.url, `http://${request.headers.host}`);
  const route = routes.find((item) => item.method === request.method && item.path === url.pathname);

  if (!route) {
    return json(response, 404, { error: 'Route not found' }, corsHeaders);
  }

  const payload = route.handler({ request, url });
  return json(response, 200, payload, corsHeaders);
});

server.listen(env.port, () => {
  // eslint-disable-next-line no-console
  console.log(`[${env.apiName}] running on http://localhost:${env.port}`);
});
