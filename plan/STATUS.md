# Status — Babi Instituto de Beleza

Atualizado: 2026-10-18.

Marco atual: MVP local de agendamentos concluído. Admin e página da cliente integrados com confirmação automática, SQLite persistente e bloqueio de sobreposições. Gate 12/12 e 12 testes aprovados; fluxo no navegador verificado com banco de QA separado.

Links locais: http://localhost:4173/admin/ e http://localhost:4173/agendar/ . Servidor Node em segundo plano, loopback, banco real em data/appointments.sqlite. Agenda real vazia e pausada até a usuária revisar e salvar os horários e durações sugeridos.

Decisão final: manter esta etapa como MVP local, sem publicação; a usuária conectará o GitHub depois. Não houve deploy ou push da atualização. A configuração temporária de ambiente no Sites foi removida e a audiência não foi alterada. O site publicado continua na landing anterior (commit 74b8e613dd4b67e2275f5be4f52f0e37cf9d921d).

GitHub solicitado: https://github.com/andrelopees04-source/babi.git , branch main. Repositório remoto vazio confirmado. O código e a conexão local estão sendo preparados para envio. Bloqueio de envio identificado: Git local sem autenticação; conector GitHub disponível não tem permissão de escrita nesse repositório. Login no GitHub ainda necessário.

Próxima tarefa: concluir autenticação e push, sem deploy na Vercel. Login do MVP continua de desenvolvimento. Banco e logs ficam fora do Git. A raiz Git do aplicativo é babi-beleza, dentro da pasta de trabalho.
