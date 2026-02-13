# Estradas que Contam Histórias

Este projeto é uma plataforma para explorar, compartilhar e celebrar roteiros e conquistas de viagens por estradas brasileiras, com foco em experiências, cultura, história e inspiração para motociclistas e viajantes.

## ✨ Sobre o Projeto

- Descubra roteiros detalhados, com mapas interativos, dicas e curiosidades.
- Veja conquistas de outros viajantes, inspire-se e compartilhe suas próprias histórias.
- Visualize rotas, pontos de interesse e informações relevantes para planejar sua próxima aventura.
- Projeto construído com [Astro](https://astro.build), focado em performance, acessibilidade e experiência do usuário.

## 🚀 Estrutura do Projeto

```text
/
├── public/
│   ├── favicon.svg
│   ├── assets/
│   │   ├── home.svg
│   │   ├── whatsapp.svg
│   │   ├── instagram.svg
│   │   ├── email.svg
│   │   ├── source-marker.png
│   │   └── target-marker.png
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   └── pages/
└── package.json
```

## 🧭 Como rodar o projeto localmente

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Crie um arquivo `.env` com sua chave do Google Maps:
   ```
   PUBLIC_GOOGLE_MAPS_API_KEY=sua_chave_aqui
   ```
3. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```
4. Acesse em [http://localhost:4321](http://localhost:4321)

## 🗺️ Funcionalidades

- **Mapa das conquistas:** Visualize conquistas no mapa, com rotas e detalhes.
- **Roteiros detalhados:** Cada roteiro traz história, caminho, dicas e experiências.
- **Compartilhamento:** Links para WhatsApp, Instagram e contato direto.
- **Design responsivo:** Navegação otimizada para desktop e mobile.

## ⚡ Deploy no Vercel

Para publicar o projeto no [Vercel](https://vercel.com):

1. **Arquivos estáticos:**  
   Mova todos os arquivos SVG/PNG que precisam ser públicos para a pasta `/public/assets`.  
   Atualize os caminhos nos componentes/páginas para `/assets/arquivo.svg`.

2. **Configuração do build:**  
   O Astro funciona nativamente no Vercel.  
   - O build será feito automaticamente.
   - Certifique-se de que o arquivo `.env` com a chave do Google Maps está presente no painel de variáveis do projeto no Vercel (Settings > Environment Variables).
   - Use o nome `PUBLIC_GOOGLE_MAPS_API_KEY`.

3. **Configuração do domínio personalizado:**  
   - No painel do projeto Vercel, vá em **Domains** e adicione `estradasquecontamhistorias.com.br`.
   - Vercel irá mostrar os registros DNS necessários.

## 🌐 Configuração do domínio no registro.br

Para apontar o domínio `estradasquecontamhistorias.com.br` para o Vercel:

1. Acesse [registro.br](https://registro.br/) e faça login.
2. Selecione seu domínio e clique em **Editar Zona DNS**.
3. Adicione os registros fornecidos pelo Vercel, normalmente:
   - **CNAME** para `www` apontando para `cname.vercel-dns.com`.
   - **A** para o root/apex do domínio (ex: `estradasquecontamhistorias.com.br`) apontando para os IPs do Vercel.
4. Aguarde a propagação DNS (pode levar algumas horas).
5. No painel do Vercel, verifique se o domínio está verificado e ativo.

## 🤝 Contribuição

Sugestões, correções e novas histórias são bem-vindas!  
Abra uma issue ou envie um pull request.

## 📚 Mais informações

- [Documentação do Astro](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)
- [Vercel Docs](https://vercel.com/docs)

---

> Feito com paixão por viagens e tecnologia.  
> Compartilhe sua estrada, inspire outros viajantes!
