# Guia de direção e implementação

## Visão do projeto

Este material é um laboratório para escolher a linguagem do futuro site de Ítala Sarah Tattoo. As páginas não devem ser tratadas como produto pronto. Elas demonstram composição, atmosfera, ritmo, hierarquia, movimento e aplicação das fotografias reais.

O objetivo comercial comum é fazer uma pessoa interessada em tatuagem autoral perceber valor, entender a experiência e iniciar uma conversa pelo WhatsApp.

## Princípios comuns às seis direções

1. A fotografia da tatuagem é a principal prova de valor.

2. O texto deve reforçar autoria, processo, cuidado e permanência.

3. O mobile possui composição própria. Não é apenas o desktop reduzido.

4. Toda animação precisa aceitar movimento reduzido.

5. A página deve continuar compreensível quando vídeo ou JavaScript não estiverem disponíveis.

6. Nenhum depoimento deve ser publicado sem fonte real e autorização.

7. O contato principal permanece no WhatsApp da artista.

## Arquitetura recomendada

1. Hero com posicionamento e uma chamada principal.

2. Seleção curta de trabalhos com contexto de linguagem.

3. Manifesto ou explicação do processo.

4. Provas de cuidado, experiência e cicatrização.

5. Chamada final para iniciar um projeto.

## Tecnologia base

Para o site final, a menor stack adequada é HTML semântico, CSS moderno e JavaScript leve. Se o conteúdo precisar de atualização frequente, pode ser usado Astro ou Next com geração estática. Não há necessidade de WebGL para nenhuma direção.

Motion pode ser feito com CSS e Intersection Observer. GSAP com ScrollTrigger só deve entrar quando a direção escolhida exigir sequências com controle preciso. Nunca sincronizar o tempo de um vídeo longo diretamente com cada pixel da rolagem.

Imagens devem usar AVIF e WebP com JPG de reserva. O navegador recebe tamanhos diferentes para mobile e desktop. Vídeos precisam de MP4 e WebM curtos, sem áudio, com imagem de capa e carregamento adiado.

## Solução para o vídeo atual

O efeito quadro por quadro costuma acontecer quando o código altera `currentTime` continuamente durante a rolagem. Em celular, a decodificação e a busca por quadros não acompanham o dedo, principalmente com vídeo longo, taxa de quadros alta ou poucos quadros chave.

A solução recomendada é separar narrativa de navegação. O vídeo funciona como uma abertura curta que toca sozinho uma vez. Depois dele, a página usa imagens estáticas, transições de opacidade e deslocamento com transform. Quando houver uma cena que realmente precise acompanhar a rolagem, exportar uma sequência de imagens reduzida, pré carregar apenas o trecho próximo e desenhar em Canvas com atualização limitada por `requestAnimationFrame`.

Orçamento sugerido para celular: vídeo inicial entre quatro e oito segundos, resolução máxima de 1080 por 1920, taxa de vinte e quatro ou trinta quadros por segundo e peso ideal abaixo de quatro megabytes. O primeiro conteúdo textual precisa aparecer antes de o vídeo terminar de carregar.

## Conceito 01 | Brutalismo de ateliê

### Ideia

Uma declaração gráfica direta. Trata a artista como autora e a tatuagem como obra, com tensão entre papel cru, tinta preta e carmim.

### Sistema visual

Fundo principal em `#EBE5D9`. Texto em `#161616`. Acento em `#B31323`. Linhas estruturais com dois pixels. Títulos em Archivo Black. Informações e menus em Libre Franklin e IBM Plex Mono.

Grid desktop dividido em duas massas assimétricas. No mobile, texto e imagem ocupam capítulos separados. Cantos retos, bordas visíveis e nenhuma decoração delicada.

### Movimento e interação

Entradas verticais rápidas. Imagens começam em preto e branco e recebem cor no hover. Botões usam sombra rígida que desaparece quando pressionados. A composição não usa vídeo.

### Melhor uso

Direção adequada quando a prioridade é impacto imediato, personalidade forte e diferenciação. O risco é parecer agressiva demais se a comunicação pessoal da Ítala for muito acolhedora.

## Conceito 02 | Galeria rubi

### Ideia

Uma galeria particular, silenciosa e sofisticada. A tatuagem recebe espaço, escala e contemplação.

### Sistema visual

Fundo em `#120B0C`. Marfim em `#E9DFD0`. Rubi contido em `#B89288` e `#C34C56`. Títulos em Cormorant Garamond. Interface e textos em Manrope.

O layout usa grandes áreas vazias e alternância entre imagem e legenda. No mobile, as peças viram capítulos verticais com respiro generoso.

### Movimento e interação

Vídeo curto apenas na abertura. O vídeo toca uma vez, sem áudio e sem depender da rolagem. As obras entram com opacidade e pequeno deslocamento. Links usam sublinhado rubi. As imagens recebem apenas alteração discreta de saturação.

### Melhor uso

É a direção mais premium e atemporal. Favorece trabalhos fotográficos fortes e clientes que valorizam exclusividade. Precisa de ótima curadoria de imagens e texto econômico.

## Conceito 03 | Arquivo orgânico

### Ideia

Um caderno de pesquisa vivo. Valoriza símbolos, cicatrização, documentação e processo autoral.

### Sistema visual

Papel em `#E5E4D7`. Verde profundo em `#1D2A23`. Carmim em `#9A2831`. Cartões em `#F1F0E5`. Títulos em Unbounded. Dados em IBM Plex Mono. Texto corrido em DM Sans.

O fundo usa uma grade leve. Fotografias aparecem como espécimes catalogados. No mobile, os cartões se tornam uma pilha única e preservam a sensação de arquivo físico.

### Movimento e interação

Cartões levantam levemente no hover, recebem sombra seca e rotação mínima. Selos e metadados ajudam a criar reconhecimento. Não usa vídeo.

### Melhor uso

É o conceito que melhor explica valor, método e longevidade. Pode converter bem pessoas que pesquisam com cuidado. O risco é ficar intelectual demais se não houver calor na fotografia e na escrita.

## Conceito 04 | Noite viva

### Ideia

Um filme curto sobre presença, transformação e permanência. A tatuagem aparece como parte de uma história maior.

### Sistema visual

Preto em `#070707`. Marfim em `#EEE8DF`. Rubi em `#B22D38`. Títulos em Cormorant Garamond com itálico expressivo. Interface em Manrope e IBM Plex Mono.

O desktop trabalha com planos largos e texto deslocado. No mobile, a imagem ocupa quase toda a tela e o título se aproxima do corpo fotografado.

### Movimento e interação

Vídeo curto na abertura, sem controle por rolagem. Galeria horizontal no mobile com encaixe natural de cada obra. Revelações lentas e discretas. Links permanecem sublinhados em rubi.

### Melhor uso

É o caminho mais emocional e cinematográfico. Funciona quando a marca quer criar desejo antes de explicar. Exige vídeo muito bem dirigido e comprimido.

## Conceito 05 | Fluxo Sumi

### Ideia

Tinta, corpo e movimento formam uma única matéria. O fundo abstrato fornecido se torna assinatura e não mero efeito.

### Sistema visual

Preto em `#080808`. Marfim em `#E6DFD3`. Vermelho laqueado em `#AD2632`. Títulos em Cormorant Garamond. Interface em Manrope, Unbounded e IBM Plex Mono.

A composição deixa uma área escura para leitura e concentra o gesto abstrato no lado oposto. A galeria alterna escalas para criar ritmo semelhante a uma pintura contínua.

### Movimento e interação

No desktop, o fundo responde suavemente à posição do ponteiro usando apenas `transform`. Não há busca de quadros de vídeo. A resposta é desligada em telas de toque e com movimento reduzido. As obras entram com opacidade e deslocamento.

### Melhor uso

É a direção mais exclusiva e própria. Tem potencial para virar uma assinatura visual reconhecível da Ítala. O risco é o fundo abstrato competir com as tatuagens se o contraste não for controlado em cada seção.

## Conceito 06 | Gravura carmim

### Ideia

Uma colagem oriental contemporânea inspirada no ritmo underground da referência enviada, reinterpretada com símbolos, tatuagens e matéria visual da Ítala.

### Sistema visual

Preto em `#090909`. Marfim em `#EEE9DF`. Vermelho intenso em `#D01629`. Títulos em Unbounded. Interface em Libre Franklin e IBM Plex Mono.

O hero mistura fundo abstrato, dois recortes fotográficos, selo autoral e título compacto de grande impacto. A galeria parece um baralho de gravuras. No mobile, a colagem é reduzida para preservar leitura e os trabalhos formam duas colunas.

### Movimento e interação

Cartões usam pequenas rotações e se alinham no hover. Botões recebem preenchimento vermelho. Rasgos são construídos com máscara CSS e não com imagens copiadas da referência. Não usa vídeo contínuo.

### Melhor uso

É a opção mais jovem, intensa e próxima da cultura visual underground. Preserva a energia da referência sem reproduzir sua identidade. O risco é envelhecer mais rápido do que Galeria rubi ou Fluxo Sumi.

## Comparação para decisão

| Direção | Percepção principal | Movimento | Força no mobile | Complexidade final |
| --- | --- | --- | --- | --- |
| Brutalismo de ateliê | Coragem e autoria | Baixo | Muito alta | Baixa |
| Galeria rubi | Exclusividade e elegância | Médio | Alta | Média |
| Arquivo orgânico | Método e confiança | Baixo | Alta | Baixa |
| Noite viva | Emoção e presença | Médio | Muito alta | Média |
| Fluxo Sumi | Assinatura própria | Médio | Muito alta | Média |
| Gravura carmim | Energia underground | Médio | Muito alta | Média |

## Recomendação criativa

Fluxo Sumi é a direção mais singular para posicionar a Ítala como artista com universo próprio. Galeria rubi é a opção mais segura para um premium atemporal. Gravura carmim é a alternativa mais intensa para aproximar a marca de uma estética underground contemporânea.

Uma síntese final possível é usar Fluxo Sumi como linguagem principal, o silêncio editorial de Galeria rubi nas páginas de obra e a energia de Gravura carmim apenas em campanhas ou lançamentos especiais.

## Checklist para o site final

1. Validar textos, especialidades, cidade e dados de contato com a artista.

2. Selecionar entre doze e vinte fotografias em alta resolução.

3. Criar versões de imagem específicas para telas pequenas.

4. Confirmar autorização para qualquer depoimento publicado.

5. Medir carregamento em conexão móvel e aparelho intermediário.

6. Validar teclado, foco, contraste, texto alternativo e movimento reduzido.

7. Testar o fluxo completo até o WhatsApp.

8. Publicar apenas depois da aprovação visual e de conteúdo.
