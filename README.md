# Middleware IA Universal

Middleware em Node.js para conectar APIs externas de Inteligência Artificial como OpenRouter, Gemini e HuggingFace.

## Requisitos

- Node.js 18 ou superior
- Conta nas plataformas de IA com chaves de API

## Como usar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor:

```bash
npm start
```

3. Use as rotas:
- `/api/openrouter`
- `/api/gemini`
- `/api/huggingface`

## Deploy na Vercel

1. Faça upload deste repositório no GitHub.
2. Acesse [vercel.com/import](https://vercel.com/import) e importe o repositório.
3. Configure como projeto Node.js (não Next.js).
4. Defina `index.js` como arquivo de entrada (`Build Command: npm install`, `Output Directory: .`)
5. Deploy!

---
Feito por Ivantrader ☕
