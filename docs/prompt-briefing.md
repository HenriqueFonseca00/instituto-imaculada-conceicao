# Prompt — Protótipo do site institucional do Instituto Imaculada Conceição

Use este prompt para gerar o protótipo (HTML/CSS/JS ou React) do site institucional.

---

## Objetivo

Criar o protótipo de uma landing page/site institucional para o **Instituto Imaculada Conceição**, escola beneditina de Itapetininga-SP com 105 anos de história. O site deve captar interesse de pais para agendar visita/matrícula, transmitir tradição + modernidade, e refletir fielmente a identidade visual já usada nas redes sociais da escola.

## Identidade visual (obrigatória)

**Paleta de cores oficial:**
- Azul-marinho `#1664AB` — cor-base: header, footer, títulos, faixas
- Azul vivo `#1BA2DD` — cor secundária: destaques, ondas, segunda camada dos títulos
- Vermelho `#E73B3F` — cor de ação: botões CTA, badges de urgência, palavras-chave
- Grafite `#373332` — texto de corpo (nunca preto puro `#000`)
- Branco `#FFFFFF` — fundos de contraste, contorno dos textos "sticker"
- Dourado `#EF9F27` — uso pontual e restrito ao medalhão de São Bento, não usar como cor de sistema

**Tipografia:**
- Títulos/headlines: fonte sans-serif **bold arredondada** (estilo "balão", tipo Baloo 2, Fredoka ou Nunito Black), sempre caixa alta, com contorno branco grosso + leve sombra (efeito sticker/die-cut). Cada palavra/linha do título pode trocar de cor (azul-marinho, azul vivo, vermelho, grafite).
- Corpo de texto: sans-serif bold comum, boa legibilidade, com palavras-chave em azul ou vermelho dentro do texto em grafite.
- Assinatura da marca (uso pontual, tipo tagline/CTA de contato): fonte script/caligráfica elegante em azul ou vermelho — ex. "Educação que Transforma", "entre em contato".
- Anotações informais (uso pontual, tipo call-out): fonte manuscrita "marcador" (traço grosso, mais crua) — ex. "vem ver...", "de muita história".
- Sem serifa em nenhum elemento.

**Logotipo:**
- Símbolo: pomba estilizada em azul formando a letra "I".
- Lockup: símbolo + "Instituto Imaculada Conceição" (bold, 2–3 linhas) + "ESCOLA BENEDITINA" menor em vermelho, ou variante com linha vermelha fina sublinhando cada linha do nome.
- Sobre fundo escuro/fotográfico, aplicar o logo em card branco arredondado para manter contraste.

## Elementos gráficos que devem aparecer no site

1. **Faixas diagonais** azul-marinho/vermelho/azul-vivo atrás de títulos de seção (estilo "MATRÍCULAS ABERTAS").
2. **Divisor em onda** (curva suave orgânica) separando blocos de foto do conteúdo — em contorno duplo azul+vermelho ou bloco sólido azul-vivo.
3. **Blobs/manchas orgânicas** vermelhas ou azuis como elementos decorativos de canto entre seções.
4. **Balões "speech bubble"** (contorno recortado, não retângulo) para badges de destaque — "Matrículas abertas", "Agende sua visita", descontos/urgência.
5. **Selo "105 anos"**: pomba + número grande estilo caligráfico azul/vermelho — usar como marca d'água sutil em alguma seção (ex. "Nossa história") e como badge decorativo no hero.
6. **Selo oval script** "ensinando valores para a vida".
7. **Seta desenhada à mão** (traço preto curvo) apontando para o botão de WhatsApp/CTA.
8. **Molduras estilo Polaroid** para fotos de equipe/depoimentos.
9. **Textura de doodle escolar** (livros, lápis, fórmulas) como fundo leve em seções mais soltas (opcional, baixa opacidade).
10. Ícone de WhatsApp verde no botão de contato fixo.

## Fotografias necessárias (usar como placeholders identificáveis, o cliente substitui pelas reais)

- Fachada histórica em tijolo/terracota do prédio principal (foto hero)
- Pátio coberto com quadra poliesportiva azul
- Aluno(s) em sala de aula / carteira escolar
- Grupo de estudantes/jovens (foto de corpo, ambiente descontraído)
- Fotos de professores/coordenadores em formato retrato (para seção de equipe/depoimentos, estilo polaroid)
- Foto do medalhão de São Bento (elemento de marca, uso pontual em seção de valores/tradição)
- Logos de parceiros: Poliedro Sistema de Ensino, Richmond Solution, Laboratório Inteligência de Vida (L.I.V), Tutor Mundi
- Logos da rede de escolas beneditinas: Santa Escolástica, Cristo Rei

## Elementos com movimento/interação (obrigatório no protótipo)

- **Header sticky** que reduz de altura ao rolar a página.
- **Botão flutuante de WhatsApp** fixo no canto inferior direito, com leve pulsação (animação de "respiração"/pulse contínua) e a seta desenhada à mão apontando para ele na primeira dobra.
- **Contadores animados** (count-up ao entrar na viewport) para números de destaque: "105 anos de história", quantidade de alunos, anos de tradição etc.
- **Reveal on scroll**: seções e cards sobem com fade-in suave conforme entram na tela.
- **Parallax leve** na foto de fundo do hero (a foto se move mais devagar que o scroll).
- **Blobs/ondas com movimento sutil** (animação CSS de flutuação lenta, tipo "float"), reforçando a sensação orgânica da marca.
- **Carrossel/slider automático** para depoimentos e fotos de alunos destaque, com transição suave.
- **Hover states**: cards de diferenciais/segmentos de ensino sobem levemente (translateY) e ganham sombra ao passar o mouse; botões CTA mudam de tom e escalam levemente (scale 1.03) no hover.
- **Menu mobile** com transição animada (slide-in) ao abrir.
- **Badge de urgência** (ex. "Matrículas abertas 2026" ou desconto) com leve destaque pulsante para chamar atenção sem ser irritante.

## Estrutura de seções sugerida

1. **Header** — logo, menu (Sobre, Ensino, Estrutura, Matrículas, Contato), botão CTA "Agende sua visita"
2. **Hero** — foto do prédio + faixa diagonal com "Venha conhecer de perto nossa escola" + subtítulo + CTA WhatsApp + selo "105 anos"
3. **Sobre/Nossa história** — texto institucional + selo "105 anos" em marca d'água + foto antiga (se houver) + valores (fé, disciplina, amor)
4. **Diferenciais** — cards com ícone: ambiente acolhedor, ensino de excelência, segurança, preparo para o futuro
5. **Segmentos de ensino** — Educação Infantil, Fundamental I, Fundamental II (ajustar conforme oferta real)
6. **Estrutura completa** — galeria de fotos do espaço físico (quadra, pátio, salas, laboratórios)
7. **Parceiros pedagógicos** — logos Poliedro, Richmond, L.I.V, TutorMundi
8. **Rede beneditina** — menção/logos de escolas irmãs
9. **Depoimentos/alunos destaque** — estilo moldura + nome + série
10. **Matrículas abertas / CTA final** — bloco de destaque com balão de urgência, WhatsApp, e link para o app de matrícula
11. **Footer** — endereço, telefone, redes sociais, logo, selo "ensinando valores para a vida"

## Tom de voz do copy

Acolhedor, motivacional, direto. Frases curtas de efeito ("Educação que Transforma", "O futuro do seu filho começa aqui"). Evitar jargão corporativo — falar diretamente com os pais.

## Requisitos técnicos

- Responsivo (mobile-first)
- Performance: imagens otimizadas, animações leves (CSS transform/opacity, evitar reflow)
- Acessibilidade básica: contraste adequado, alt text nas imagens, navegação por teclado
- Botão de WhatsApp com link direto `https://wa.me/5515998280136`

---

## Ajustes feitos após o protótipo inicial (registro de decisões)

- **Terminologia**: "rede de escolas beneditinas" foi corrigida para **"escolas da mesma congregação"** — são colégios parceiros cuidados pelas Irmãs da mesma congregação (Santa Escolástica, Cristo Rei), não uma rede formal.
- **Segmentos de ensino**: ajustado de 3 para 4 segmentos reais — Educação Infantil, Ensino Fundamental (Anos Iniciais), Ensino Fundamental (Anos Finais) e Ensino Médio.
- **Seção comercial**: adicionado formulário "Agende sua visita" (nome, WhatsApp, e-mail, série de interesse, melhor horário) como captação de lead — protótipo, sem backend real ainda.
- **FAQ**: adicionada seção de perguntas frequentes cobrindo período integral, transporte, mensalidade/desconto para irmãos, diferencial da escola e transferência no meio do ano.
- **Prova social**: adicionada seção com vídeo institucional (placeholder), estatísticas (aprovação em vestibular, tempo médio de permanência das famílias) e selos de certificação — todos com valores ilustrativos a substituir pelos dados reais.
- **Últimos eventos**: adicionada seção com 6 eventos — Festa Junina, Jogos Beneditinos (entre as 3 escolas da congregação), Especial de Natal, Show de Talentos, Projeto Corujinha e Pet Day.
- **WhatsApp**: todos os links passaram a abrir com mensagem pré-preenchida ("Olá! Gostaria de agendar uma visita ao Instituto Imaculada Conceição.").
- **Mapa/endereço**: adicionado bloco de endereço completo (placeholder) e mapa no rodapé, a substituir por embed real do Google Maps.
