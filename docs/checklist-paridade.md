# Checklist de aceitação

Gerado por `node scripts/gate.mjs`. Fonte: `docs/acceptance.json`.

Total: 12 | Concluídos: 12 | Progresso dos critérios do gate: 100%

| ID | Critério | Status | Evidência |
| --- | --- | --- | --- |
| A01 | Documento em português com título, descrição e um h1 | OK | check document |
| A02 | Poppins e layout responsivo com redução de movimento | OK | check design |
| A03 | Fotografias locais disponíveis | OK | check assets |
| A04 | Links internos com destinos existentes | OK | check anchors |
| A05 | Contato pelo Instagram oficial e links externos seguros | OK | check contact |
| A06 | JavaScript válido e dependências entre camadas respeitadas | OK | check syntax |
| A07 | Portfólio com filtros, fotos ampliáveis e diálogo acessível | OK | check portfolio |
| A08 | Serviços, apresentação, processo, FAQ e contato completos | OK | check sections |
| A09 | Admin com agenda, gestão e configurações, protegido no servidor | OK | check admin |
| A10 | Fluxo de cliente com serviço, calendário e comprovante integrado à landing | OK | check customer |
| A11 | SQLite com slots únicos e dados locais fora do Git | OK | check persistence |
| A12 | Testes de reserva, concorrência, autorização, cancelamento e reagendamento | OK | check runtime |

A inspeção visual e os testes interativos são registrados em `docs/qa.md`. O percentual mede os critérios deste gate, sem representar autenticação para produção ou publicação.
