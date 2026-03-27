const usersModule = {
  basePath: '/users',
  routes: [
    {
      method: 'GET',
      path: '/status',
      handler: () => ({ module: 'users', status: 'ready' })
    }
  ]
};

export { usersModule };
