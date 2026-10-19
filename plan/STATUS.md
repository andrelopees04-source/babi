# Status — Babi Instituto de Beleza

Atualizado: 2026-10-18.

Marco atual: MVP local de agendamentos concluído. Admin e página da cliente integrados com confirmação automática, SQLite persistente e bloqueio de sobreposições. Gate 12/12 e 12 testes aprovados; fluxo no navegador verificado com banco de QA separado.

Links locais: http://localhost:4173/admin/ e http://localhost:4173/agendar/ . Servidor Node em segundo plano, loopback, banco real em data/appointments.sqlite. Agenda real vazia e pausada até a usuária revisar e salvar os horários e durações sugeridos.

Decisão final: manter esta etapa como MVP local, sem publicação; a usuária conectará o GitHub depois. Não houve deploy ou push da atualização. A configuração temporária de ambiente no Sites foi removida e a audiência não foi alterada. O site publicado continua na landing anterior (commit 74b8e613dd4b67e2275f5be4f52f0e37cf9d921d).

GitHub conectado: https://github.com/andrelopees04-source/babi.git , branch main rastreando origin/main. Push confirmado por comparação de HEAD local com refs/heads/main remoto. Commit do MVP: 96b801b; estado sincronizado verificado em 03303e9. Autenticação oficial concluída pela usuária; conta andrelopees04-source selecionada apenas para este repositório. Nenhuma senha, token ou código de autenticação gravado na fonte.

Próxima tarefa: somente alterações solicitadas; sem bloqueios. Não há autorização para deploy na Vercel ou em outro serviço. Login do MVP continua de desenvolvimento. Banco e logs ficam fora do Git. A raiz Git do aplicativo é babi-beleza, dentro da pasta de trabalho.
