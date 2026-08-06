# Instituto Imaculada Conceição — Site institucional (protótipo)

Protótipo de site institucional para o Instituto Imaculada Conceição, escola beneditina de Itapetininga-SP com 105 anos de história. HTML/CSS/JS puro, sem framework e sem build step — funciona abrindo o `index.html` direto no navegador ou publicando em qualquer hospedagem estática.

## Como rodar localmente

Não precisa de instalação. Duas opções:

1. **Abrir direto**: dê duplo clique em `index.html`.
2. **Servidor local** (recomendado, evita bloqueios de módulo ES no `file://`):
   ```bash
   npx serve .
   # ou
   python3 -m http.server 8000
   ```
   Depois acesse `http://localhost:8000`.

> O JavaScript usa `<script type="module">`, e alguns navegadores restringem módulos ES quando o arquivo é aberto direto do disco (`file://`). Se as animações não funcionarem ao abrir direto, use um servidor local.

## Estrutura de pastas

```
instituto-imaculada-conceicao/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   ├── base.css          # tokens de marca (:root), reset, tipografia
│   │   ├── components.css    # botões, badges, cards, formulário, FAQ, placeholders de foto
│   │   ├── layout.css        # header, hero, grids de cada seção, footer
│   │   └── animations.css    # reveal on scroll, prefers-reduced-motion
│   ├── js/
│   │   ├── header.js         # scroll shrink + menu mobile
│   │   ├── parallax.js       # parallax do hero
│   │   ├── reveal.js         # IntersectionObserver (reveal + contadores)
│   │   ├── faq.js            # acordeão de perguntas frequentes
│   │   ├── carousel.js       # carrossel de depoimentos
│   │   ├── form.js           # formulário "Agende sua visita" (simulado)
│   │   └── main.js           # importa e inicializa todos os módulos acima
│   ├── img/                  # fotos reais entram aqui (ver READMEs em cada subpasta)
│   └── fonts/                # opcional — hospedar as fontes localmente
└── docs/
    └── prompt-briefing.md    # brief original de identidade visual + registro de ajustes
```

## Antes de publicar

- [ ] **Fotos reais**: substituir os placeholders (blocos coloridos com texto tipo "FOTO — Fachada histórica") pelas fotos reais em `assets/img/`, trocando as `<div class="ph">` por `<img>` no `index.html`.
- [ ] **Endereço e mapa**: no rodapé, `index.html` tem o endereço como placeholder (`[Rua/Av. — inserir endereço completo]`) e um bloco de mapa a trocar por um `<iframe>` real do Google Maps.
- [ ] **Números e selos**: a seção "Resultados que a gente comprova" tem estatísticas ilustrativas (92% aprovação, 12+ anos de permanência, selos de certificação) — substituir pelos dados reais da escola.
- [ ] **Formulário**: `assets/js/form.js` só simula o envio (mostra "sucesso" no front-end). Precisa conectar a um backend real — Google Sheets via Apps Script, FormSubmit, ou o CRM/app de matrícula da escola.
- [ ] **Redes sociais**: os ícones do footer (Instagram, Facebook, YouTube) apontam para `#` — trocar pelos links reais.
- [ ] **Favicon**: adicionar um favicon real em `assets/img/marca/` e referenciar no `<head>`.
- [ ] **LGPD**: o checkbox de consentimento do formulário linka para "#" — criar e linkar a política de privacidade real.

## Identidade visual

Paleta, tipografia e elementos gráficos obrigatórios estão documentados em `docs/prompt-briefing.md`. Resumo rápido:

| Cor | Hex | Uso |
|---|---|---|
| Azul-marinho | `#1664AB` | header, footer, títulos |
| Azul vivo | `#1BA2DD` | destaques, ondas |
| Vermelho | `#E73B3F` | CTAs, badges |
| Grafite | `#373332` | texto de corpo |
| Dourado | `#EF9F27` | uso pontual (medalhão de São Bento) |

Fontes: **Baloo 2** (títulos), **Nunito** (corpo), **Caveat** (assinatura/script), **Kalam** (anotações manuscritas) — carregadas via Google Fonts no `<head>` do `index.html`.

## Contato configurado

WhatsApp: `https://wa.me/5515998280136` (com mensagem pré-preenchida) — usado no header, botão flutuante, CTA final e footer.
