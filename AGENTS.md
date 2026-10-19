# Babi Instituto de Beleza

Landing page de apresentação de Fabrícia Leão. HTML, CSS e JavaScript nativos, sem build. Fonte Poppins, fotografias reais e contato pelo Instagram.

## Comece aqui
Leia `plan/STATUS.md`, `plan/execution-plan.md`, `ROADMAP.md` e a última entrada em `log/devlog.md`. Registre a frente em `plan/LANES.md` antes de editar. Uma única frente por arquivo. A memória acompanha o código para permitir futuras edições do Site em outro checkout.

## Regras
- Preserve a identidade editorial em café, champagne e off-white, e a fonte Poppins.
- Não invente telefone, endereço, preços, depoimentos, certificados ou resultados. Dados confirmados: `docs/fontes.md`.
- Use o Instagram oficial para contato, conforme escolha da usuária. Nenhum formulário simula envio ou agendamento.
- Preserve acessibilidade, redução de movimento e funcionamento sem dependências JavaScript externas.
- Nunca grave credenciais. Registre a origem de novas fotografias.
- Execute `node scripts/gate.mjs` antes de commits. Mudanças de UI exigem inspeção visual.

## Arquitetura e ações
Mapa em `docs/arquitetura.md`. A UI está em `dist/`. `dist/app.js` implementa menu, troca de especialidade, filtro do portfólio e modal; não há backend, banco ou coleta de dados. Navegação e contato usam links HTML reais.

## Rodar e verificar
Sirva `dist/` com qualquer servidor HTTP estático, por exemplo `python -m http.server 4174 --bind 127.0.0.1 --directory dist`. `node scripts/gate.mjs` verifica JavaScript, referências locais, contrato estático e camadas, e gera `docs/checklist-paridade.md`. Browser QA usa CUA no navegador, incluindo um iframe temporário de 390 px para o layout mobile quando não há emulação de dispositivo. O iframe temporário não integra a publicação.

Catálogo fixo: `docs/acceptance.json`. Evidência visual e interações: `docs/qa.md`. Atualize STATUS, gaps, roadmap e devlog ao terminar e libere a raia. Não declare publicação concluída sem sucesso do serviço Sites.
