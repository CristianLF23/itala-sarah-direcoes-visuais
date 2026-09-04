# Ítala Sarah Tattoo | Laboratório visual

Esta pasta contém seis conceitos navegáveis para orientar a futura reconstrução do site. Eles não são o site final e não substituem a etapa de conteúdo, refinamento de marca, validação com a artista e implementação de produção.

## Como abrir

Abra `index.html` no navegador. Escolha uma direção e navegue pela página. Os controles fixos permitem alternar entre os conceitos.

## Conceitos

1. Brutalismo de ateliê: impacto editorial, contraste direto e imagem crua.
2. Galeria rubi: luxo silencioso, espaço negativo e contemplação.
3. Arquivo orgânico: processo, autoria e permanência documentados.
4. Noite viva: presença cinematográfica e narrativa emocional.
5. Fluxo Sumi: gesto de tinta, movimento leve e expressão oriental.
6. Gravura carmim: colagem underground reinterpretada com gravura japonesa e linguagem própria da Ítala.

## Movimento e tecnologia sugerida

O protótipo usa HTML, CSS e JavaScript sem dependências. No produto final, a menor stack recomendada é uma página estática ou React leve, imagens em AVIF e WebP, vídeo curto em MP4 e WebM somente nas aberturas que precisarem dele e animações por transformações e opacidade.

Não é recomendado controlar `currentTime` de um vídeo comum a cada evento de rolagem. Para uma sequência realmente ligada ao scroll, use uma sequência de imagens otimizada desenhada em Canvas e carregada por partes. Para celulares, prefira uma cena curta automática, uma imagem estática expressiva ou movimento por camadas. O modo de movimento reduzido deve desligar toda animação não essencial.

## Uso por outra inteligência artificial

Os arquivos `preview.html`, `styles.css` e `app.js` formam uma especificação visual executável. Cada conceito está isolado por uma classe própria. Uma futura implementação deve preservar a direção escolhida, mas substituir textos provisórios por conteúdo validado, revisar acessibilidade, comprimir mídia e medir desempenho em aparelhos reais.
