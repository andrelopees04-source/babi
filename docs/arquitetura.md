# Arquitetura

Site estático e responsivo, sem gerenciador de pacotes ou etapa de build. A stack foi definida pelo fluxo Sites para uma landing page de apresentação. Não há requisito de servidor que justifique um framework.

| Arquivo | Camada | Dependências | Responsabilidade |
| --- | --- | --- | --- |
| `dist/assets/*` | Base | Nenhuma | Fotografias e favicon |
| `dist/index.html` | Apresentação | CSS, JS e assets | Conteúdo, links, semântica |
| `dist/styles.css` | Apresentação | Poppins do Google Fonts | Layout e animações |
| `dist/app.js` | Interações | DOM nativo e assets | Menu, especialidades, filtro, ampliação |
| `scripts/*` | Ferramentas locais | Node nativo | Gate e relatório |

Não são permitidos imports, require, código de servidor ou dependências de ferramenta em `dist/app.js`. A apresentação não depende das ferramentas locais. Verificador: `node scripts/check-layers.mjs`; exercita uma fixture permitida e uma violação. Limite: verificação lexical, adequada ao arquivo atual sem módulos; novos módulos exigem evoluir o verificador.

Contratos de ações: `menu.toggle` recebe clique no botão e atualiza expanded e visibilidade; `services.select` recebe um details aberto, fecha os demais e troca a foto; `portfolio.filter` recebe uma categoria dos botões e atualiza cards e status anunciado; `portfolio.open` recebe um card e abre dialog nativo com foto e link de origem; `portfolio.close` é acionado pelo botão, backdrop ou Escape e devolve o foco pelo comportamento nativo. Sem persistência ou permissões adicionais. Os links de contato abrem o perfil e o visitante inicia a conversa.

Publicação: `.openai/hosting.json`, diretório `dist`, Site privado por padrão. Poppins depende da conectividade com Google Fonts; há fallback sans-serif. Fotografias estão hospedadas junto do Site e não dependem das URLs temporárias do Instagram.
