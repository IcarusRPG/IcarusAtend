# Regras de Negócio — Icarus Atend

## 1. Regras centrais de atendimento

1. Um `Ticket` representa um atendimento completo de ponta a ponta.
2. Todo `Ticket` possui exatamente uma `Conversation` (timeline única).
3. A transferência IA → humano não pode remover histórico.
4. Mensagens de sistema devem registrar eventos críticos (transferência, encerramento, mudança de status).

## 2. Fluxo IA → humano

1. Ticket pode ser iniciado por automação/IA.
2. IA coleta contexto inicial e gera resumo.
3. Cria-se um `Handoff` com:
   - `ticketId`
   - `origem = AI`
   - `destino = HUMAN`
   - resumo, intenção, prioridade sugerida, dados coletados
4. Agente humano aceita/rejeita handoff.
5. Ao aceitar, ticket segue com histórico integral da conversa.

## 3. Fila e atribuição

1. Todo ticket novo entra em fila (`QueueItem`) antes de atribuição, salvo exceções configuradas.
2. Fila é vinculada a departamento.
3. Critérios de ordenação combinam posição de entrada e prioridade.
4. Supervisão pode reordenar/redistribuir com trilha de auditoria.

## 4. SLA

1. SLA é definido por `Department` + `TicketPriority`.
2. Métricas mínimas:
   - tempo de primeira resposta
   - tempo de resolução
3. Violações devem gerar eventos auditáveis.

## 5. Auditoria

Ações críticas devem gerar `AuditLog`, incluindo:
- criação/encerramento de ticket
- mudança de status/prioridade
- transferência de fila/departamento
- atribuição/reatribuição de agente
- handoff IA → humano

## 6. Estados oficiais

### TicketStatus
- `NEW`
- `IN_QUEUE`
- `IN_PROGRESS`
- `WAITING_CUSTOMER`
- `TRANSFERRED`
- `CLOSED`

### MessageType
- `TEXT`
- `SYSTEM`
- `INTERNAL_NOTE`
- `AUDIO`
- `IMAGE`
- `DOCUMENT`

### MessageSender
- `CUSTOMER`
- `AGENT`
- `SYSTEM`
- `AI`

### TicketPriority
- `LOW`
- `MEDIUM`
- `HIGH`
- `CRITICAL`

### HandoffStatus
- `PENDING`
- `ACCEPTED`
- `REJECTED`
- `COMPLETED`

### Channel
- `WHATSAPP`
- `WEBCHAT`
- `EMAIL`
- `API`
