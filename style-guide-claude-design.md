# Estilo visual — Gisela Ramos (portfolio)

Sitio minimal, monocromático, con un acento celeste-verde en degradado. Modo claro y oscuro.

## Colores

**Modo claro**
- Fondo: #FFFFFF
- Superficie: #F4F4F2
- Superficie 2: #ECECE9
- Texto principal: #14181A
- Texto secundario: #5B6467
- Borde: #14181A
- Acento: #9ED8FE (celeste)
- Acento (texto sobre acento): #14181A
- Degradado de acento: linear-gradient(135deg, #9ED8FE, #EFFF5F) — celeste a lima

**Modo oscuro**
- Fondo: #0D0F10
- Superficie: #16191B
- Superficie 2: #1E2224
- Texto principal: #F1F1EE
- Texto secundario: #9BA3A5
- Acento: #9ED8FE (se mantiene igual en ambos modos)

**Bandas de contraste fijas** (footer, quotes — siempre oscuras, no cambian con el tema)
- Ink: #14181A / #23282A
- Texto sobre ink: #F5F5F0 / #9BA3A5

## Tipografía

- Familia: Google Sans (fallback Helvetica Neue, sans-serif)
- Un solo peso liviano (400) para títulos/display, 500 para textos con énfasis y botones
- Títulos con letter-spacing levemente negativo (-0.01em), sin mayúsculas forzadas salvo "eyebrows"
- "Eyebrow" = etiqueta pequeña en mayúsculas, tracking abierto, arriba de cada título de sección

## Formas y espaciado

- Radio de tarjetas: 26px
- Radio de tarjetas grandes (footer, hero media): 36px
- Radio de píldora (botones, chips): 999px (full pill)
- Ancho máximo de contenido: 1180px / bloques de texto: 720px

## Componentes clave

**Botón primario**: fondo acento celeste (#9ED8FE), texto oscuro, full pill, padding 16px 30px, 14.5px/500. Hover: fondo pasa a tinta oscura, texto blanco, leve elevación (translateY -1px).

**Botón secundario**: transparente, borde 1px sólido, texto normal, full pill. Hover: se llena con el acento celeste.

**Chip / tag**: texto 12.5px, padding 5px 12px, full pill, fondo superficie neutra.

**Tarjeta de caso** (case-card): fondo blanco/superficie, radio 26px, sombra sutil que crece en hover (0 1px 2px → 0 20px 44px), sin transición brusca (300ms ease).

**Theme toggle**: switch tipo pastilla con punto deslizante, para alternar claro/oscuro.

**Foto con "ventana" interactiva** (foto-focus): retrato en blanco y negro con una trama de fondo, y una ventana que revela detalle siguiendo el cursor/touch.

## Tono general

Minimalista, mucho blanco/negro, un solo color de acento usado con moderación (botones, bordes, subrayados), tipografía con peso liviano, animaciones suaves (fade + slight rise), sin iconografía decorativa recargada.
