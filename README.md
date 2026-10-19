# Babi Instituto de Beleza

Landing page e MVP de agendamentos, em Poppins e tons café/champagne.

Repositório de destino: https://github.com/andrelopees04-source/babi . O envio de código ao GitHub não inclui deploy na Vercel. A raiz do projeto Git é esta pasta, `babi-beleza`.

## Rodar

Requisito: Node.js 24 ou superior. Não há dependências externas para instalar.

```powershell
npm start
```

- Site: http://localhost:4173/
- Administração: http://localhost:4173/admin/
- Cliente: http://localhost:4173/agendar/

No admin, clique em **Acessar painel local**. Abra **Serviços e horários**, revise durações e dias de atendimento, marque **Ativar agendamento online** e salve. As reservas serão confirmadas automaticamente e aparecerão na agenda. A versão inicial começa pausada porque os horários reais do salão ainda não foram fornecidos.

O painel permite buscar clientes e serviços, consultar datas, concluir, cancelar e reagendar. É possível bloquear dias ou intervalos, desde que não haja atendimento no período. A cliente recebe uma página de confirmação com link para consultar a reserva.

## Dados e testes

Os dados persistem em `data/appointments.sqlite`, fora do Git. Para copiar o banco, utilize um backup SQLite ou encerre o servidor antes da cópia. Nome, telefone e observações não devem ser enviados ao repositório.

```powershell
npm run check
npm test
```

O gate agrega verificações de código e 12 testes de reserva, conflitos, permissões, bloqueios, cancelamento, reagendamento e persistência. O catálogo está em `docs/acceptance.json`.

## Limite deste MVP

Por decisão da usuária, esta etapa não foi publicada. O servidor atende apenas `127.0.0.1`. O botão de acesso administrativo cria uma sessão local de desenvolvimento com cookie HttpOnly; ele não é um login de produção. Hospedar no futuro exigirá autenticação real, HTTPS e armazenamento persistente no ambiente escolhido. A conexão com GitHub não faz essa configuração automaticamente.

Não há pagamentos, SMS, e-mail ou envio automático de mensagens. Valores e local de atendimento são consultados pelo Instagram oficial. `.openai/hosting.json` identifica a landing anterior; não use seu deploy estático para hospedar a nova API.
