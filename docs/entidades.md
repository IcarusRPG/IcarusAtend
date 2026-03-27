# Entidades do Domínio — Icarus Atend

Este documento descreve as entidades centrais do domínio de atendimento e seus relacionamentos.

## 1) Acesso e organização

### User
Representa um atendente, supervisor ou administrador.
- Pertence a um ou mais departamentos (`departmentIds`).
- Possui papéis (`roleIds`) que agrupam permissões.

### Role
Agrupa permissões de acesso por função operacional.

### Permission
Permissão atômica de ação (ex.: `ticket.assign`, `sla.manage`).

### Department
Unidade organizacional de atendimento.
- Pode possuir múltiplas filas (`queueIds`).

### DepartmentQueue
Fila operacional de um departamento.
- Recebe tickets antes da atribuição ao agente.

## 2) Cliente e atendimento

### Customer
Entidade do consumidor atendido.
- Mantém múltiplos contatos por canal (WhatsApp, webchat, e-mail, API).

### Ticket
Representa **um atendimento completo**.
- Sempre vinculado a um cliente.
- Possui status, prioridade, canal e conversa única.
- Pode iniciar com IA e ser transferido para humano sem perda de histórico.

### Conversation
Timeline única do ticket.
- Lista ordenada de mensagens (`messageIds`).

### Message
Evento de comunicação na timeline.
- Tipos: texto, sistema, nota interna, áudio, imagem, documento.
- Remetentes: cliente, agente, sistema ou IA.

### Attachment
Arquivo vinculado a uma mensagem.

### TemplateMessage
Mensagem modelo reutilizável por operação.

## 3) Operação e governança

### QueueItem
Representa a entrada de um ticket em fila.
- Guarda posição, prioridade e timestamps de entrada/atribuição.

### SLAConfig
Configuração de SLA por prioridade e departamento.
- Define metas de primeira resposta e resolução.

### AuditLog
Registro de auditoria para ações críticas.
- Armazena ator, ação, entidade afetada e payload de mudanças.

### Handoff
Transferência IA → humano.
- Mantém resumo gerado pela IA, intenção detectada, prioridade sugerida e dados coletados.
- Status do handoff: `PENDING`, `ACCEPTED`, `REJECTED`, `COMPLETED`.

## Relacionamentos principais

- `User` N:N `Department`
- `User` N:N `Role` e `Role` N:N `Permission`
- `Department` 1:N `DepartmentQueue`
- `Customer` 1:N `Ticket`
- `Ticket` 1:1 `Conversation`
- `Conversation` 1:N `Message`
- `Message` 1:N `Attachment`
- `Ticket` 1:N `QueueItem`
- `Department` + `TicketPriority` 1:1 `SLAConfig`
- `Ticket` 1:N `AuditLog`
- `Ticket` 1:N `Handoff`
