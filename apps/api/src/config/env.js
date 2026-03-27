const env = {
  apiName: process.env.API_NAME ?? 'icarus-atend-api',
  port: Number(process.env.API_PORT ?? 4000),
  prefix: process.env.API_PREFIX ?? '/api',
  corsOrigin: process.env.API_CORS_ORIGIN ?? '*'
};

export { env };
