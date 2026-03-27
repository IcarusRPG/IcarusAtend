const ticketsModule = {
  basePath: '/tickets',
  routes: [
    {
      method: 'GET',
      path: '/status',
      handler: () => ({ module: 'tickets', status: 'ready' })
    }
  ]
};

export { ticketsModule };
