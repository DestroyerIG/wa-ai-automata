# 🤖 WhatsApp Bot com IA

Sistema completo de automação para WhatsApp com Inteligência Artificial, dashboard web e integração com Meta Cloud API.

## ✨ Funcionalidades

- 🤖 **Bot WhatsApp Inteligente** - Respostas automáticas com IA
- 📱 **Cloud API + Baileys** - Meta oficial + alternativa não-oficial
- 🧠 **IA Configurável** - OpenAI ou provedores compatíveis
- 💻 **Dashboard Web** - Interface completa para gestão
- ⚡ **Motor de Regras** - Automação baseada em padrões
- 📚 **Base de Conhecimento** - FAQs e respostas inteligentes
- 📊 **Analytics** - Métricas e relatórios em tempo real
- 🔐 **Autenticação** - Sistema seguro de usuários
- 🐳 **Docker Ready** - Deploy simplificado

## 🚀 Quick Start

### 1. Setup Inicial

```bash
# Clone o repositório
git clone <your-repo-url>
cd whatsapp-bot

# Configure variáveis de ambiente
make setup
# Edite o arquivo .env com suas credenciais

# Inicie o ambiente de desenvolvimento
make dev
```

### 2. Configure WhatsApp API

1. Acesse [Facebook Developers](https://developers.facebook.com/)
2. Crie um app WhatsApp Business
3. Obtenha suas credenciais:
   - `WA_WABA_ID`
   - `WA_PHONE_NUMBER_ID` 
   - `WA_ACCESS_TOKEN`
   - `WA_VERIFY_TOKEN`

### 3. Configure IA

1. Obtenha uma API key da [OpenAI](https://platform.openai.com/)
2. Configure no `.env`:
   ```env
   AI_API_KEY=sk-your-openai-key
   AI_MODEL=gpt-4o-mini
   ```

### 4. Configure Webhook

```bash
# Em desenvolvimento (com ngrok)
make dev

# Configure no Meta:
# URL: https://your-ngrok-url.ngrok.io/webhook/whatsapp
# Token: valor do WA_VERIFY_TOKEN
```

## 🏗️ Arquitetura

```
├── apps/
│   ├── server/          # API Node.js
│   │   ├── src/
│   │   │   ├── lib/
│   │   │   │   ├── whatsapp/    # Cloud API + Baileys
│   │   │   │   └── ai/          # Integração IA
│   │   │   ├── modules/
│   │   │   │   ├── messages/    # Mensagens
│   │   │   │   ├── rules/       # Motor de regras
│   │   │   │   ├── faqs/        # Base conhecimento
│   │   │   │   └── analytics/   # Métricas
│   │   │   └── routes/          # Endpoints API
│   │   └── prisma/              # Banco de dados
│   └── web/             # Dashboard Next.js
│       ├── app/
│       │   ├── dashboard/       # Páginas admin
│       │   └── (auth)/          # Autenticação
│       └── components/          # UI Components
├── docker-compose.yml
└── .env.example
```

## 🛠️ Comandos Disponíveis

```bash
# Desenvolvimento
make dev              # Iniciar ambiente dev
make logs             # Ver logs
make shell-server     # Acessar container server

# Banco de dados
make db-migrate       # Executar migrations
make db-seed          # Popular dados iniciais
make db-reset         # Resetar banco (cuidado!)

# Build e Deploy
make build            # Build das imagens
make up               # Ambiente produção
make down             # Parar serviços

# Testes
make test             # Executar testes
make test-coverage    # Testes com cobertura

# Limpeza
make clean            # Limpar containers
make clean-all        # Limpeza completa
```

## 🔧 Configuração Avançada

### Motor de Regras

Configure regras automáticas no dashboard:

```json
{
  "name": "Saudação",
  "pattern": "oi|olá|bom dia",
  "matchType": "REGEX",
  "action": "REPLY_TEXT",
  "response": "Olá! Como posso ajudar?",
  "priority": 1
}
```

### Sistema de IA

Personalize o comportamento da IA:

```env
AI_SYSTEM_PROMPT="Você é um atendente profissional..."
AI_TEMPERATURE=0.3
AI_MAX_HISTORY=10
```

### WhatsApp Providers

Alterne entre Cloud API e Baileys:

```env
# Meta Cloud API (recomendado)
WA_PROVIDER=cloud

# Baileys (alternativo)
WA_PROVIDER=baileys
BAILEYS_ENABLED=true
```

## 📊 Analytics e Monitoramento

- **Métricas em tempo real** - Mensagens, usuários, performance
- **Logs estruturados** - Rastreamento completo de atividades
- **Health checks** - Monitoramento de saúde dos serviços
- **Rate limiting** - Proteção contra spam

## 🔐 Segurança

- ✅ Validação de webhook signatures
- ✅ Rate limiting por IP
- ✅ Autenticação JWT
- ✅ Sanitização de inputs
- ✅ RBAC (Admin/Agent)

## 🧪 Testes

```bash
# Executar suite de testes
make test

# Teste manual de regras
curl -X POST http://localhost:3001/rules/test \
  -H "Content-Type: application/json" \
  -d '{"text": "oi", "waNumber": "5511999999999"}'
```

## 📚 API Reference

### Endpoints Principais

```bash
# Webhook WhatsApp
GET  /webhook/whatsapp     # Verificação
POST /webhook/whatsapp     # Recebimento

# Mensagens
POST /messages/send        # Enviar mensagem
GET  /messages/history     # Histórico

# Regras
GET  /rules                # Listar regras
POST /rules                # Criar regra
POST /rules/test           # Testar regra

# IA
POST /ai/reply             # Resposta IA

# Health
GET  /health               # Status da API
```

## 🚢 Deploy em Produção

### Docker Compose

```bash
# Configure .env para produção
cp .env.example .env.production

# Deploy
make deploy
```

### Variáveis Críticas

```env
# Produção
NODE_ENV=production
NEXTAUTH_SECRET=<secret-forte>
API_SECRET_KEY=<api-key-forte>

# Database
DATABASE_URL=postgresql://user:pass@host:port/db

# WhatsApp
WA_ACCESS_TOKEN=<token-producao>
WA_VERIFY_TOKEN=<token-webhook>
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
3. Commit: `git commit -m 'Adiciona nova funcionalidade'`
4. Push: `git push origin feature/nova-funcionalidade`
5. Abra um Pull Request

## 📝 License

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🆘 Suporte

- 📖 [Documentação](docs/)
- 🐛 [Issues](https://github.com/your-repo/issues)
- 💬 [Discussions](https://github.com/your-repo/discussions)

---

Feito com ❤️ para automatizar seu WhatsApp Business