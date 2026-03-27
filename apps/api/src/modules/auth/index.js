const authModule = {
  basePath: '/auth',
  routes: [
    {
      method: 'GET',
      path: '/status',
      handler: () => ({ module: 'auth', status: 'ready' })
    }
  ]
};

export { authModule };
