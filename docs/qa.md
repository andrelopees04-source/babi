# Verificação — 2026-10-18

Prévia servida em HTTP local, status 200. Inspeção pelo navegador CUA.

| Verificação | Resultado observado |
| --- | --- |
| Desktop, viewport inicial 1280 px | Hero em duas colunas, imagem em arco, selo, logo, Poppins e CTAs inspecionados |
| Portfólio desktop | Quatro fotos reais, alturas alternadas e títulos inspecionados |
| Filtro de cachos | Um card visível, status anunciado “1 resultado”; retorno para todos funcionando |
| Modal | Foto correta, título e origem no Instagram; botão de fechar funcionando |
| Especialidades | Seleção de Cor & visagismo fecha a anterior e muda a foto para coloracao.jpg |
| Mobile 390 px | Hero e galeria em duas colunas inspecionadas em iframe temporário |
| Mobile 320 px | Título, CTA e hero inspecionados; tipografia ajustada para não exceder a tela |
| Menu mobile | Abre com expanded=true; clique em Transformações navega e fecha o menu |
| Prévia estreita 555 px | Documento com scrollWidth 540 px, sem excesso horizontal |
| FAQ | Pergunta de agendamento abre com a resposta real |
| Contato e rodapé | Layout inspecionado; botão aponta para o perfil oficial |
| Imagens após navegação | Nenhuma imagem carregada com naturalWidth zero |
| Acessibilidade | Dialog nativo, focus-visible, alt, skip link, status live e media query de redução de movimento presentes |
| Gate estático | `node scripts/gate.mjs`: 8/8; `node scripts/check-layers.mjs`: fixtures e fonte aprovadas |

Não foi realizado agendamento ou envio de mensagem. Não houve teste em aparelho físico; mobile foi verificado em viewport de iframe. Não se realizou auditoria formal de acessibilidade. O iframe temporário de QA foi removido antes do empacotamento.

## MVP de agendamento — 2026-10-18

- Node local 4173: login de desenvolvimento, admin vazio e agenda pausada verificados. Nenhum dado de QA no banco real.
- Banco de QA separado na porta 4174: cliente escolheu Cortes & cachos, 19/10 às 09:00, preencheu nome e contato de teste e recebeu confirmação automática com código e link.
- A mesma reserva apareceu no painel da administração na data correta. Reagendamento para 11:00 persistiu; cancelamento mudou o status e liberou o intervalo.
- Formulário de configurações foi salvo pelo navegador e retornou confirmação de sucesso.
- UI inspecionada em 1280 px e dois iframes de 390 px para admin e cliente. Sem teste em aparelho físico. Iframe de QA removido e servidor 4174 encerrado.
- 12 testes de comportamento aprovados: permissões e origem, configuração, reserva e privacidade, idempotência, cancelamento/revisão, duração histórica no reagendamento, bloqueios, datas/antecedência, duas reservas concorrentes, persistência em arquivo reaberto, conclusão e bloqueio concorrente à reserva.
- Gate ampliado de 8 para 12 critérios para acompanhar o escopo. Sintaxe, camadas e referências aprovadas.
- Prévia final do admin salva em ../babi-admin-preview.png. Nova funcionalidade não publicada por decisão final da usuária.
