# MOOVNG — React + Vite + Vercel

Site institucional em React/Vite preparado para deploy na Vercel.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy na Vercel

1. Suba o projeto para um repositório GitHub.
2. Na Vercel, importe o repositório.
3. Framework: Vite (a Vercel normalmente detecta automaticamente).
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Não é necessário criar uma API para esta versão.

## Atenção antes de publicar

- Confirme todos os dados cadastrais da empresa.
- Substitua o domínio `moovng.vercel.app` em `public/robots.txt` e `public/sitemap.xml` pelo endereço exato da Vercel caso seja diferente.
- Configure um canal de contato oficial real antes de anunciar.
- Revise a Política de Privacidade conforme o tratamento de dados efetivamente realizado.
- O formulário atual é demonstrativo e não envia dados a um servidor.
- Não inclua marcas de terceiros nem alegações de afiliação sem autorização/documentação.
- Use no Google Ads somente anúncios e palavras-chave coerentes com o conteúdo e os serviços efetivamente oferecidos.

## Estrutura

- `/` início
- `/sobre`
- `/servicos`
- `/contato`
- `/politica-de-privacidade`
- `/termos-de-uso`

## Correção de build Vercel

O script de produção chama `vite/bin/vite.js` diretamente pelo Node em vez de depender da permissão executável de `node_modules/.bin/vite`. Isso evita o erro Linux `Permission denied` que pode aparecer quando o projeto foi versionado a partir do Windows.
