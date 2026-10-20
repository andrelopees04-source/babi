# Devlog

## 2026-10-18 — Codex — Landing page Babi
- Perfil consultado no navegador; confirmados Fabrícia Leão, 16 anos, mechas, visagismo, cor, terapia capilar e cachos.
- Implementada página em Poppins, tons café/champagne, hero em arco, serviços com foto dinâmica, sobre, quatro resultados reais, filtros, lightbox, processo, FAQ e contato.
- Usuária escolheu Instagram, sem telefone/endereço disponíveis.
- Nenhuma imagem gerada ou depoimento inventado. Fotografias e fontes documentadas.
- QA desktop: hero e portfólio inspecionados; filtro de cachos, modal e troca para cor funcionando.
- QA concluído em desktop, mobile 390/320 px e painel estreito; menu mobile, FAQ e contato verificados. Ajustados espaços entre frases no mobile e título em 320 px.
- Gate: 8/8; verificador de camadas com fixture permitida e proibida aprovado.
- Ainda aberto nesta revisão de fonte: operação de sincronização e publicação privada. O serviço Sites deve confirmar sucesso antes da entrega.

## 2026-10-18 — Entrega confirmada
- Fonte sincronizada no commit 74b8e613dd4b67e2275f5be4f52f0e37cf9d921d. Empacotamento corrigido no Windows usando Git Bash e TAR_OPTIONS=--force-local, sem alterar a página.
- Sites confirmou succeeded, URL https://babi-instituto-beleza.diegomicael.chatgpt.site , acesso privado.
- Servidores de QA encerrados; prévia salva em ../babi-preview.png. Nenhum trabalho de produto pendente.
- Os registros de entrega foram atualizados localmente após a publicação; apenas esta documentação deve ser sincronizada na próxima edição. dist permanece igual ao publicado.

## 2026-10-18 — MVP de agendamentos
- Usuária pediu admin primeiro e página da cliente em seguida; escolheu confirmação automática.
- Implementados admin responsivo, agenda, busca e filtros, detalhes, cancelamento, conclusão, reagendamento, serviços, durações, horários e bloqueios. Cliente em três etapas com comprovante e consulta por token.
- Backend Node 24 com SQLite nativo, transações e slots únicos, idempotência, revisão otimista, origem validada, limites de corpo e taxa e sessão local em cookie HttpOnly.
- Preservada a identidade visual da landing e ligados os CTAs à nova página de agendamento.
- Teste completo no navegador em banco isolado: reserva 09:00, gestão no admin, reagendamento 11:00 e cancelamento. Configurações salvas e mobile 390 px inspecionado.
- Gate: 12/12; testes: 12 aprovados. Persistência verificada reabrindo banco em arquivo.
- A usuária inicialmente considerou internet, depois decidiu manter MVP local e conectar o GitHub posteriormente. Nenhuma nova publicação, push ou mudança de audiência. Preparação de Worker/D1 removida, assim como a variável temporária no Sites; mantida somente a fonte útil do MVP local.
- Servidor final em localhost:4173. Banco real começa vazio, agenda pausada. Login local é de desenvolvimento; autenticação de produção e hospedagem ficam para etapa futura.
- Raia liberada. Próxima ação: usuária revisar os horários reais no admin. Dados, logs e banco de QA ignorados pelo Git.

## 2026-10-18 — Conexão GitHub
- Usuária informou https://github.com/andrelopees04-source/babi.git e autorizou a conexão, sem deploy na Vercel.
- Repositório remoto confirmado vazio, branch padrão main. Raiz Git do aplicativo: babi-beleza.
- Gate executado novamente: 12/12 critérios e 12 testes aprovados. Banco, logs, arquivos .env e metadados locais excluídos do envio.
- Acesso disponível inicialmente: conector sem push e Git local sem login. Fonte e commit preparados antes de solicitar a etapa de autenticação.
- Origin configurado e commit local do MVP criado. Fluxo de login oficial do Git Credential Manager iniciado; envio aguarda a usuária concluir a autenticação. Nenhuma integração com Vercel ou deploy foi configurada.
- Login concluído pela usuária. Como havia múltiplas contas no computador, selecionada a conta andrelopees04-source na configuração local deste repositório, sem incluir credenciais na URL ou na fonte.
- Push main concluído; upstream origin/main configurado. HEAD local e remoto comparados e iguais em 03303e9b2fb8ec2c6ad842d804e12fe092d30922. Nenhum deploy. Raia liberada.

## 2026-10-20 — Unificação da raiz e envio ao GitHub
- Estrutura unificada diretamente na raiz do projeto (eliminada a pasta aninhada babi-beleza).
- package.json acessível na raiz; npm run dev e npm test validados diretamente no diretório principal.
- Configurada tarefa .vscode/tasks.json com runOn: folderOpen para iniciar npm run dev ao abrir o projeto no editor.
- Atualizado .gitignore para ignorar artefatos de empacotamento (*.tar.gz) e prévias (*-preview.png).
- Gate 12/12 e 12 testes automatizados verificados com sucesso.
- Sincronização e push efetuados para https://github.com/andrelopees04-source/babi.git na branch main.
