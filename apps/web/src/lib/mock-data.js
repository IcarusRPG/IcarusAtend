const metrics = [
  { label: 'Atendimentos em aberto', value: '42', footer: '+8 nas últimas 2h' },
  { label: 'Em fila', value: '17', footer: '4 com prioridade alta' },
  { label: 'Tempo médio (TMA)', value: '06m 14s', footer: '-12% vs. ontem' }
];

const recentTickets = [
  { id: 'ATD-1298', customer: 'Camila Torres', channel: 'Chat', status: 'Em andamento' },
  { id: 'ATD-1297', customer: 'Rafael Moraes', channel: 'E-mail', status: 'Aguardando cliente' },
  { id: 'ATD-1296', customer: 'Livraria Aurora', channel: 'Portal', status: 'Novo' }
];

export { metrics, recentTickets };
