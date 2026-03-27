const TicketStatus = {
  NEW: 'NEW',
  IN_QUEUE: 'IN_QUEUE',
  IN_PROGRESS: 'IN_PROGRESS',
  WAITING_CUSTOMER: 'WAITING_CUSTOMER',
  TRANSFERRED: 'TRANSFERRED',
  CLOSED: 'CLOSED'
};

const MessageType = {
  TEXT: 'TEXT',
  SYSTEM: 'SYSTEM',
  INTERNAL_NOTE: 'INTERNAL_NOTE',
  AUDIO: 'AUDIO',
  IMAGE: 'IMAGE',
  DOCUMENT: 'DOCUMENT'
};

const MessageSender = {
  CUSTOMER: 'CUSTOMER',
  AGENT: 'AGENT',
  SYSTEM: 'SYSTEM',
  AI: 'AI'
};

const TicketPriority = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

const HandoffStatus = {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  COMPLETED: 'COMPLETED'
};

const Channel = {
  WHATSAPP: 'WHATSAPP',
  WEBCHAT: 'WEBCHAT',
  EMAIL: 'EMAIL',
  API: 'API'
};

const users = [
  { id: 'u-1', name: 'Ana Silva', email: 'ana@icarus.com', departmentIds: ['dep-cx'], roleIds: ['role-agent'] },
  { id: 'u-2', name: 'Bruno Lima', email: 'bruno@icarus.com', departmentIds: ['dep-cx'], roleIds: ['role-agent'] },
  { id: 'u-3', name: 'Carla Prado', email: 'carla@icarus.com', departmentIds: ['dep-supervisao'], roleIds: ['role-supervisor'] }
];

const departments = [
  { id: 'dep-cx', name: 'Atendimento CX', queueIds: ['queue-cx-geral'] },
  { id: 'dep-fin', name: 'Financeiro', queueIds: ['queue-fin'] },
  { id: 'dep-supervisao', name: 'Supervisão', queueIds: [] }
];

const customers = [
  { id: 'c-1', name: 'Camila Torres', identifier: '+55 11 98888-0001', channel: Channel.WHATSAPP, tags: ['vip', 'recorrente'] },
  { id: 'c-2', name: 'Rafael Moraes', identifier: 'rafael@email.com', channel: Channel.EMAIL, tags: ['financeiro'] },
  { id: 'c-3', name: 'Livraria Aurora', identifier: 'contato@aurora.com', channel: Channel.WEBCHAT, tags: ['b2b'] },
  { id: 'c-4', name: 'Patrícia Nunes', identifier: '+55 21 97777-1000', channel: Channel.WHATSAPP, tags: ['novo-cliente'] }
];

const tickets = [
  {
    id: 'ATD-1298',
    customerId: 'c-1',
    departmentId: 'dep-cx',
    queueId: 'queue-cx-geral',
    assignedUserId: 'u-1',
    conversationId: 'conv-1',
    status: TicketStatus.IN_PROGRESS,
    priority: TicketPriority.HIGH,
    channel: Channel.WHATSAPP,
    startedByAI: true,
    transferredToHuman: true,
    subject: 'Atraso na entrega',
    waitingMinutes: 6,
    protocol: '2026-0001298',
    slaMinutesRemaining: 24
  },
  {
    id: 'ATD-1297',
    customerId: 'c-2',
    departmentId: 'dep-fin',
    queueId: 'queue-fin',
    assignedUserId: 'u-2',
    conversationId: 'conv-2',
    status: TicketStatus.WAITING_CUSTOMER,
    priority: TicketPriority.MEDIUM,
    channel: Channel.EMAIL,
    startedByAI: false,
    transferredToHuman: false,
    subject: 'Dúvida de cobrança',
    waitingMinutes: 42,
    protocol: '2026-0001297',
    slaMinutesRemaining: 80
  },
  {
    id: 'ATD-1296',
    customerId: 'c-3',
    departmentId: 'dep-cx',
    queueId: 'queue-cx-geral',
    assignedUserId: null,
    conversationId: 'conv-3',
    status: TicketStatus.IN_QUEUE,
    priority: TicketPriority.CRITICAL,
    channel: Channel.WEBCHAT,
    startedByAI: true,
    transferredToHuman: false,
    subject: 'Falha no checkout',
    waitingMinutes: 19,
    protocol: '2026-0001296',
    slaMinutesRemaining: 8
  },
  {
    id: 'ATD-1295',
    customerId: 'c-4',
    departmentId: 'dep-cx',
    queueId: 'queue-cx-geral',
    assignedUserId: null,
    conversationId: 'conv-4',
    status: TicketStatus.NEW,
    priority: TicketPriority.LOW,
    channel: Channel.WHATSAPP,
    startedByAI: true,
    transferredToHuman: false,
    subject: 'Informações de plano',
    waitingMinutes: 2,
    protocol: '2026-0001295',
    slaMinutesRemaining: 170
  }
];

const conversations = [
  { id: 'conv-1', ticketId: 'ATD-1298' },
  { id: 'conv-2', ticketId: 'ATD-1297' },
  { id: 'conv-3', ticketId: 'ATD-1296' },
  { id: 'conv-4', ticketId: 'ATD-1295' }
];

const messages = [
  { id: 'm-1', ticketId: 'ATD-1298', conversationId: 'conv-1', sender: MessageSender.AI, type: MessageType.TEXT, content: 'Olá, sou o assistente virtual. Vou te ajudar com sua entrega.', createdAt: '09:12' },
  { id: 'm-2', ticketId: 'ATD-1298', conversationId: 'conv-1', sender: MessageSender.CUSTOMER, type: MessageType.TEXT, content: 'Meu pedido atrasou dois dias.', createdAt: '09:13' },
  { id: 'm-3', ticketId: 'ATD-1298', conversationId: 'conv-1', sender: MessageSender.SYSTEM, type: MessageType.SYSTEM, content: 'Handoff IA → humano iniciado.', createdAt: '09:14' },
  { id: 'm-4', ticketId: 'ATD-1298', conversationId: 'conv-1', sender: MessageSender.AGENT, type: MessageType.TEXT, content: 'Oi Camila, já acionei o time logístico.', createdAt: '09:15' },
  { id: 'm-5', ticketId: 'ATD-1298', conversationId: 'conv-1', sender: MessageSender.AGENT, type: MessageType.INTERNAL_NOTE, content: 'Cliente insatisfeita. Priorizar solução ainda hoje.', createdAt: '09:16' },
  { id: 'm-6', ticketId: 'ATD-1298', conversationId: 'conv-1', sender: MessageSender.CUSTOMER, type: MessageType.IMAGE, content: 'Comprovante de prazo no app.', createdAt: '09:19', attachments: [{ id: 'a-1', fileName: 'screenshot-pedido.png', mimeType: 'image/png' }] },
  { id: 'm-7', ticketId: 'ATD-1297', conversationId: 'conv-2', sender: MessageSender.CUSTOMER, type: MessageType.TEXT, content: 'A fatura veio em duplicidade.', createdAt: '08:02' },
  { id: 'm-8', ticketId: 'ATD-1297', conversationId: 'conv-2', sender: MessageSender.AGENT, type: MessageType.TEXT, content: 'Enviei detalhes por e-mail, pode confirmar?', createdAt: '08:20' },
  { id: 'm-9', ticketId: 'ATD-1296', conversationId: 'conv-3', sender: MessageSender.AI, type: MessageType.DOCUMENT, content: 'Relatório de erro coletado automaticamente.', createdAt: '09:05', attachments: [{ id: 'a-2', fileName: 'checkout-error-log.pdf', mimeType: 'application/pdf' }] }
];

const handoffs = [
  {
    id: 'h-1',
    ticketId: 'ATD-1298',
    origem: 'AI',
    destino: 'HUMAN',
    resumoGeradoIA: 'Cliente relata atraso de entrega superior ao prazo prometido.',
    intencaoDetectada: 'Acompanhar pedido',
    prioridadeSugerida: TicketPriority.HIGH,
    dadosColetadosCliente: { pedido: 'PED-8831', prazoPrometido: '2 dias úteis', atraso: '2 dias' },
    status: HandoffStatus.ACCEPTED
  }
];

const queueItems = [
  { id: 'q-1', ticketId: 'ATD-1296', queueId: 'queue-cx-geral', position: 1, priority: TicketPriority.CRITICAL, enteredAt: '09:05' },
  { id: 'q-2', ticketId: 'ATD-1295', queueId: 'queue-cx-geral', position: 2, priority: TicketPriority.LOW, enteredAt: '09:20' }
];

const auditLogs = [
  { id: 'log-1', ticketId: 'ATD-1298', action: 'TICKET_TRANSFERRED_TO_HUMAN', at: '09:14', actor: 'SYSTEM' },
  { id: 'log-2', ticketId: 'ATD-1298', action: 'AGENT_ASSIGNED', at: '09:15', actor: 'u-1' },
  { id: 'log-3', ticketId: 'ATD-1298', action: 'INTERNAL_NOTE_CREATED', at: '09:16', actor: 'u-1' }
];

const slaConfigs = [
  { id: 'sla-1', departmentId: 'dep-cx', priority: TicketPriority.CRITICAL, firstResponseMinutes: 5, resolutionMinutes: 30 },
  { id: 'sla-2', departmentId: 'dep-cx', priority: TicketPriority.HIGH, firstResponseMinutes: 10, resolutionMinutes: 60 },
  { id: 'sla-3', departmentId: 'dep-fin', priority: TicketPriority.MEDIUM, firstResponseMinutes: 30, resolutionMinutes: 180 }
];

export {
  TicketStatus,
  MessageType,
  MessageSender,
  TicketPriority,
  HandoffStatus,
  Channel,
  users,
  departments,
  customers,
  tickets,
  conversations,
  messages,
  handoffs,
  queueItems,
  auditLogs,
  slaConfigs
};
