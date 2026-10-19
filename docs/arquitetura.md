# Arquitetura

MVP local em Node 24+ sem dependências externas. HTML, CSS e módulos JavaScript no navegador; node:sqlite para persistência no servidor. A landing foi preservada e ligada ao agendamento.

| Módulo | Pode depender de | Responsabilidade |
| --- | --- | --- |
| dist/assets | Nenhum módulo | Fotografias e favicon |
| dist/app.js | DOM | Interações da landing |
| dist/booking/shared.js | DOM e fetch | Formatação, cliente da API e feedback |
| dist/admin/admin.js | shared.js | Agenda, detalhes, configurações e bloqueios |
| dist/agendar/booking.js | shared.js | Serviço, calendário, dados e comprovante |
| server/core.mjs | APIs JavaScript padrão | Validação, disponibilidade, reserva e gestão |
| server/local.mjs | Node nativo e core.mjs | HTTP, sessão de desenvolvimento e SQLite |
| migrations/0001-bookings.sql | SQLite | Schema inicial aplicado no startup |
| scripts e tests | Node nativo e core | Gate e testes |

O servidor não importa a UI. A UI não importa Node ou o banco. check-layers.mjs valida imports e exercita fixtures permitidas e proibidas; a validação é lexical.

## API e ações

Públicas: GET /api/config, GET /api/availability, POST /api/bookings e GET /api/receipt/:token. O comprovante usa token aleatório de 192 bits e não retorna telefone ou observações. Não existe listagem pública de clientes.

Admin: GET/PUT /api/admin/settings, GET /api/admin/bookings, PATCH /api/admin/bookings/:id, GET /api/admin/availability e GET/POST/DELETE /api/admin/blocks. Exigem sessão gerada pelo adaptador local. POST /api/local-login e POST /api/local-logout são acessos de desenvolvimento. Cookies são isolados por porta, HttpOnly e SameSite=Strict. Cabeçalhos externos de identidade não concedem acesso.

Mutações exigem origem igual à aplicação e JSON; parâmetros e tamanho são validados no servidor. O servidor só escuta loopback e rejeita Host diferente de localhost ou 127.0.0.1. Estes controles não transformam o acesso local em autenticação de produção.

## Consistência

Reservas são confirmadas imediatamente. Cada intervalo de 15 minutos tem chave única (data, minuto); todos os slots e a reserva são salvos em transação. Inícios aparecem em passos de 30 minutos. Duração e nome do serviço são gravados para preservar histórico após mudanças nos serviços.

Idempotência evita duplicação no reenvio. Revisões e chave de operação protegem mudanças administrativas concorrentes. Cancelar libera slots; concluir preserva histórico e ocupação. Bloqueios conflitantes com atendimento são rejeitados. Verificação dentro da transação protege contra bloqueios ou configurações alteradas depois da consulta de disponibilidade.

Configuração inicial: agenda pausada, durações e semana sugeridas, sem reserva real. Fuso America/Bahia, comparação UTC-03:00 para Salvador. Antecedência e horizonte configuráveis.

## Execução e limites

npm start mantém API e arquivos em localhost:4173. Dados em data/appointments.sqlite, ignorados pelo Git. PORT e BABI_DB_PATH permitem QA separado. Não há backend em nuvem nesta etapa e não deve haver publicação sem novo pedido. Os dados locais não são sincronizados com a landing anteriormente publicada.
