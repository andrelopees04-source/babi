# Status — Babi Instituto de Beleza

Atualizado: 2026-10-20.

Marco atual: Projeto unificado na raiz da área de trabalho, eliminando a subpasta intermediária. npm run dev funciona imediatamente a partir da raiz e pode ser acionado automaticamente ao abrir a pasta (.vscode/tasks.json). Gate 12/12 e 12 testes aprovados; fluxo verificado.

Links locais: http://localhost:4173/admin/ e http://localhost:4173/agendar/ . Servidor Node em segundo plano, loopback, banco real em data/appointments.sqlite. Agenda real vazia e pausada até a usuária revisar e salvar os horários e durações sugeridos.

Decisão final: manter esta etapa como MVP local, sem publicação. Não há deploy na Vercel ou em outro serviço sem novo pedido.

GitHub conectado: https://github.com/andrelopees04-source/babi.git , branch main rastreando origin/main. Sincronizado na branch main.

Próxima tarefa: somente alterações solicitadas; sem bloqueios. Banco e logs ficam fora do Git. A raiz Git do aplicativo agora é a própria raiz do projeto.
