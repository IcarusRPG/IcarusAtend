const createHomePage = () => {
  const container = document.createElement('main');
  container.style.fontFamily = 'Arial, sans-serif';
  container.style.padding = '2rem';

  const title = document.createElement('h1');
  title.textContent = 'Icarus Atend';

  const subtitle = document.createElement('p');
  subtitle.textContent = 'Base inicial do atendimento ao consumidor.';

  const apiStatus = document.createElement('p');
  apiStatus.id = 'api-status';
  apiStatus.textContent = 'Status API: verificando...';

  container.append(title, subtitle, apiStatus);
  return container;
};

export { createHomePage };
