# Babi Instituto de Beleza

Landing page de Fabrícia Leão e MVP local de agendamento. HTML, CSS e JavaScript nativos; servidor Node 24+ e SQLite nativo. Fonte Poppins, fotografias reais e contato pelo Instagram.

## Comece aqui
Leia `plan/STATUS.md`, `plan/execution-plan.md`, `ROADMAP.md` e a última entrada em `log/devlog.md`. Registre a frente em `plan/LANES.md` antes de editar. Uma única frente por arquivo. A memória acompanha o código para permitir futuras edições do Site em outro checkout.

## Regras
- Preserve a identidade editorial em café, champagne e off-white, e a fonte Poppins.
- Não invente telefone, endereço, preços, depoimentos, certificados ou resultados. Dados confirmados: `docs/fontes.md`.
- Use o Instagram oficial para dúvidas. O formulário de reserva chama o backend e confirma automaticamente; nunca simule confirmação sem persistência.
- A usuária autorizou conectar e enviar o projeto para https://github.com/andrelopees04-source/babi.git . Não fazer deploy na Vercel ou em outro serviço sem novo pedido. A versão anterior publicada é uma landing estática; seu manifesto foi preservado, sem representar o novo backend.
- A agenda inicia pausada: horários e durações sugeridos só passam a valer depois de revisados e salvos no admin. Não adicione dados de demonstração ao banco real.
- Preserve acessibilidade, redução de movimento e funcionamento sem dependências JavaScript externas.
- Nunca grave credenciais. Registre a origem de novas fotografias.
- Execute `node scripts/gate.mjs` antes de commits. Mudanças de UI exigem inspeção visual.

## Arquitetura e ações
Mapa em `docs/arquitetura.md`. UI em `dist/`; regras em `server/core.mjs`; HTTP, sessão local e SQLite em `server/local.mjs`. `data/` é privado e ignorado pelo Git. O acesso local é uma sessão de desenvolvimento em loopback, não autenticação pronta para produção.

## Rodar e verificar
Rode `npm start`, em `http://localhost:4173`. Um servidor puramente estático não suporta agendamentos. `npm run check` verifica sintaxe, referências, camadas e testes de comportamento; gera `docs/checklist-paridade.md`. Browser QA usa CUA; mobile pode usar iframe temporário de 390 px, removido ao terminar. QA manual usa banco separado na porta 4174, sem configurar o banco real.

Catálogo: `docs/acceptance.json` (12 critérios, ampliado para o novo escopo). Evidência visual: `docs/qa.md`. Atualize STATUS, gaps, roadmap e devlog e libere a raia. Esta etapa é local por decisão da usuária.
