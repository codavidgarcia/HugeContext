# HugeContext – Brand & Design System v1.0

---

## 1. Resumen ejecutivo

|                     |                                                                                                           |
|---------------------|-----------------------------------------------------------------------------------------------------------|
| **Esencia**         | **Signal over noise para código.** HugeContext convierte repos enormes en contexto relevante y accionable para IA. |
| **Personalidad**    | Preciso, confiable, silenciosamente potente, developer-first, nada estridente.                           |
| **Valores clave**   | Relevancia, privacidad local, control del desarrollador, velocidad, transparencia técnica.               |

---

## 2. Concepto creativo («Brand DNA»)

**Metáfora central:**  
> **“La lente de contexto”**: un lens circular que vive dentro de un cuadrado. Ve todo el código, pero resalta un solo arco (el snippet correcto) sobre un fondo oscuro de ruido.

**Adjetivos rectores**

1. Signal-first  
2. Deep technical, low drama  
3. Dev-empowering  
4. Quietly intelligent  

**Justificación**

- El fondo **ink profundo** representa el repositorio completo y el trabajo real del día a día.
- Los anillos **slate claros** son las capas semánticas, la estructura del sistema.
- El segmento **cian eléctrico** es la “señal”: el contexto que la IA necesita ahora mismo.
- El wordmark sobrio, sin efectos, refuerza que HugeContext es una **herramienta seria de ingeniería**, no un juguete de marketing.

---

## 3. Paleta cromática (HugeContext)

> BG de referencia para dark UI: `HC-INK` = **#020617**

| **Nombre interno** | **HEX**   | **RGB**           | **Uso principal**                                  | **Contraste vs #020617** | **WCAG**                        |
|--------------------|-----------|-------------------|----------------------------------------------------|--------------------------|---------------------------------|
| **HC-INK**         | `#020617` | 2 6 23            | BG principal dark, shells, hero backgrounds        | —                        | —                               |
| **HC-SLATE-900**   | `#0B1120` | 11 17 32          | Panels, tarjetas oscuras                          | 2.4:1 (como texto)       | No texto, solo fondos           |
| **HC-SLATE-800**   | `#111827` | 17 24 39          | Surfaces elevados, cards                          | 2.9:1 (como texto)       | No texto, solo fondos           |
| **HC-SLATE-700**   | `#1E293B` | 30 41 59          | Bordes, outlines suaves                           | 4.2:1                    | AA para texto grande            |
| **HC-SLATE-500**   | `#64748B` | 100 116 139       | Íconos muted, strokes secundarios                  | 4.2:1                    | AA para texto ≥18px; no body    |
| **HC-SLATE-300**   | `#CBD5F5` | 203 213 245       | Rings claros, divisores en dark, fondos en light  | 9.8:1                    | AAA como texto sobre INK        |
| **HC-SIGNAL**      | `#06B6D4` | 6 182 212         | Arco destacado del lens, CTAs primarios           | 8.3:1                    | AAA sobre INK                   |
| **HC-SIGNAL-SOFT** | `#22D3EE` | 34 211 238        | Hovers, halos suaves                              | 9.0:1                    | AAA sobre INK                   |
| **HC-FOCUS**       | `#22C55E` | 34 197 94         | Estados “Ready / Healthy / Top match”             | 8.9:1                    | AAA sobre INK                   |
| **HC-TEXT-PRIMARY**| `#E5E7EB` | 229 231 235       | Texto principal en dark                           | 16.3:1                   | AAA                             |
| **HC-TEXT-SECONDARY**| `#9CA3AF` | 156 163 175    | Texto secundario en dark                          | 7.9:1                    | AAA                             |
| **HC-WARN**        | `#F59E0B` | 245 158 11        | Warnings, “indexing lento”                        | 9.4:1                    | AAA sobre INK                   |
| **HC-ERROR**       | `#EF4444` | 239 68 68         | Errores críticos, MCP offline                     | 5.4:1                    | AA para texto normal            |
| **White**          | `#FFFFFF` | 255 255 255       | BG light, texto sobre fondos oscuros              | 16.9:1                   | AAA                             |

**Notas de contraste (WCAG)**

- Texto principal en dark: `#E5E7EB` sobre `#020617` o `#0B1120` ⇒ **AAA**.  
- Texto secundario en dark: `#9CA3AF` sobre `#020617` ⇒ **AAA**.  
- Cian `#06B6D4` sobre `#020617` ⇒ **AAA** (apto para texto, pero lo reservamos para acentos y labels cortos).  
- Cian `#06B6D4` sobre blanco `#FFFFFF` ⇒ ~2.4:1 ⇒ **no usar para texto principal en light**, solo íconos, chips o decoraciones.

---

## 4. Tipografía

| **Uso**             | **Familia primaria**                 | **Fallbacks web**                                   | **Razonamiento**                                                   |
|---------------------|--------------------------------------|-----------------------------------------------------|--------------------------------------------------------------------|
| Headings (H1–H3)    | **Inter SemiBold**                  | "Inter", -apple-system, system-ui, sans-serif       | Moderna, técnica, muy legible en UI + marketing.                  |
| Body / UI copy      | **Inter Regular / Medium**          | "Inter", -apple-system, system-ui, sans-serif       | Mantiene consistencia, reduce ruido tipográfico.                  |
| Code / snippets     | **Fira Code / JetBrains Mono**      | Menlo, SF Mono, monospace                           | Legible para bloques de código, soporte de ligaduras opcional.    |

### Jerarquía sugerida (web / docs / dashboard)

| Estilo      | Definición                              | Tracking | Ejemplo contraste                                 |
|-------------|------------------------------------------|----------|---------------------------------------------------|
| H1          | Inter 600 / 40px / 1.2                  | -1%      | Texto #E5E7EB sobre BG #020617 ⇒ AAA              |
| H2          | Inter 600 / 32px / 1.25                 | -1%      | idem                                              |
| H3          | Inter 600 / 24px / 1.3                  | -0.5%    | idem                                              |
| H4          | Inter 600 / 20px / 1.35                 | 0        | idem                                              |
| Body L      | Inter 400 / 18px / 1.6                  | 0        | Texto #E5E7EB / BG #020617 ⇒ AAA                  |
| Body M      | Inter 400 / 16px / 1.6                  | 0        | idem                                              |
| Caption     | Inter 400 / 12px / 1.4                  | +2%      | Para texto secundario con #9CA3AF / BG #020617    |
| Code        | Fira Code 400 / 13–14px / 1.5           | 0        | Código en bloques con BG #0B1120 y texto #E5E7EB  |

**Reglas clave**

- Nunca usar weights < 400 en dark (pierdes contraste percibido).
- Evitar cian `#06B6D4` para párrafos completos; usarlo solo en:
  - links cortos,
  - labels,
  - badges,
  con tamaño ≥ 14px y fondo oscuro.

---

## 5. Iconografía

**Grid base**

- Iconos UI: **16×16 px** y **20×20 px** con padding interno de 2 px.  
- Marketing / docs: **24×24 px**, versiones más detalladas.

**Peso de línea**

- UI: 1.5 px  
- Marketing: 2 px

**Estilo general**

- Esquinas externas: radio 2–3 px (eco de las esquinas del icono cuadrado de HugeContext).  
- Terminações redondeadas (round caps / round joins).  
- Sin degradados ni sombras: **flat line icons** consistentes con el lens.

**Pictogramas clave (descriptivos)**

| Función            | Diseño recomendado                                                                 |
|--------------------|-------------------------------------------------------------------------------------|
| Context query      | Mini lens con un punto cian en el anillo exterior.                                |
| Workspace / repo   | Carpeta o cubo con un pequeño arco cian dentro.                                   |
| Heat / activity    | Pequeño grid 3×3 con una celda cian y otras en slate.                             |
| MCP status         | Dos nodos conectados por línea + check mint.                                      |
| Indexing           | Círculo con segmentos, uno resaltado y un pequeño “spinner” discretamente hinted. |
| Errors             | Triángulo minimal con borde rojo y punto interno.                                 |

**Estados**

- **Activo / seleccionado**:  
  - trazo `HC-SIGNAL` sobre BG oscuro, relleno 4–8% de cian (opcional).  
- **Inactivo**:  
  - trazo `HC-SLATE-500`, sin relleno.  
- **Error**:  
  - trazo `HC-ERROR`, con ícono interno claro (#FEE2E2) si hay fill.  

---

## 6. Estilo de imágenes e ilustración

### Enfoque general

- El protagonista es **el código y el contexto**, no “robots” ni stock genérico de IA.
- Estética: **editorial dev**: pantallas limpias, paneles, matrices, heatmaps.

### Ilustración vectorial

- Formas clave: círculos concéntricos, grids, bloques de código estilizados.
- Grosor de línea: 2 px en marketing, 1.5 px en UI.
- Paleta ilustraciones:
  - Fondo: `HC-INK` / `HC-SLATE-900`.
  - Elementos neutros: grises `HC-SLATE-300`–`500`.
  - Señales: `HC-SIGNAL` y `HC-FOCUS` en pequeñas dosis.
- Patrones recomendados:
  - Lentes, grids, arcos resaltados, códigos alineados horizontalmente.
  - Heatmaps con una celdilla brillando en cian.

### Fotografía (si se usa)

- Dev setups reales, pantallas con código legible (no fake code absurdo).
- Paleta fría y neutra: monitores, teclados, luz tenue.
- Evitar:
  - “Hacker hoodie en verde Matrix”.
  - Render 3D saturado sin propósito.
  - Representaciones antropomórficas de IA.

---

## 7. Sistema de layout y componentes UI

### Grid & spacing (web / marketing)

| Token         | Valor                               |
|---------------|-------------------------------------|
| Grid          | 12 columnas, max width 1120–1200 px |
| Gutter        | 16 px                               |
| Spacing base  | escala de 8 px (4–8–16–24–32–48…)   |
| Radius        | 4 px (small), 8 px (medium), 16 px (large, hero cards) |
| Elevation     | Card = sombra suave; Modal = más intensa |

### Cards y shells

- BG card: `HC-SLATE-900`.  
- Bordes: 1 px `HC-SLATE-800`.  
- Radius preferido: 12–16 px en marketing, 8–10 px en UI.

### Componentes clave

| Tipo             | Estados                              | Micro-interacción                               |
|------------------|--------------------------------------|-------------------------------------------------|
| **Button Primary** | BG `HC-SIGNAL`, texto `#0B1120`    | Hover: fondo `HC-SIGNAL-SOFT`; focus ring 2 px `HC-SIGNAL` (contraste AAA). |
| Button Ghost     | Borde `HC-SLATE-500`, texto `HC-TEXT-PRIMARY` | Hover: BG `rgba(100,116,139,0.15)`             |
| Input Field      | Stroke `HC-SLATE-700` → `HC-SIGNAL` on focus | Label siempre visible o floating label; error underline en `HC-ERROR`. |
| Card             | Radius 12 px, shadow suave, borde `HC-SLATE-800` | Hover: leve aumento de shadow y scale 1.01     |
| Badge / Pill     | BG `rgba(6,182,212,0.08)`, texto `HC-SIGNAL` | Para “Ready”, “MCP Connected”, etc.            |

**Importante (contrast-first)**

- Nunca texto < 14 px con colores por debajo de contraste 4.5:1.  
- No usar cian como texto principal sobre blanco.  
- Para light mode, texto principal (`H1–Body`) en `HC-SLATE-900` sobre BG `#FFFFFF`.

---

## 8. Accesibilidad y contraste

- **Texto normal (≤ 18px)**:
  - Requiere contraste ≥ 4.5:1.  
  - Combinaciones aprobadas:
    - `HC-TEXT-PRIMARY (#E5E7EB)` sobre `HC-INK / SLATE-900` ⇒ AAA.
    - `HC-TEXT-SECONDARY (#9CA3AF)` sobre `HC-INK` ⇒ AAA.
    - `HC-SLATE-900 / 700` sobre blanco ⇒ AAA.
- **Texto grande (≥ 18px)**:
  - Puede usar `HC-SLATE-500` sobre `HC-INK` (AA) si se limita a headings secundarios.

**Animaciones**

- Duración recomendada: 120–180 ms.  
- Respetar `prefers-reduced-motion: reduce`:
  - Desactivar transiciones innecesarias.
  - Evitar parallax o movimientos grandes.

**Foco y teclado**

- Navegación completa por teclado en dashboard.  
- `:focus-visible` con:
  - outline 2 px `HC-SIGNAL` sobre fondos oscuros,
  - o 2 px `HC-SLATE-900` sobre fondos claros.  
- Nunca ocultar focus rings con `outline: none` sin reemplazo accesible.

---

## 9. Tono y voz de la marca

**Principios**

- **Developer-to-developer**: cero humo, cero promesas mágicas.
- **Claro y honesto**: explicamos qué hace HugeContext, cómo y con qué límites.
- **Confianza local**: enfatizar que el código nunca sale de la máquina.

**No somos**

- Un asistente “cute” con chistes.
- Una IA con personalidad artificial exagerada.
- Marketing de “AGI tomorrow”.

### Microcopy de referencia

| Contexto                        | Texto sugerido                                      |
|--------------------------------|-----------------------------------------------------|
| Estado listo                   | “Indexing complete. Context is ready.”             |
| Estado conectando MCP          | “Wiring HugeContext into your AI assistant…”       |
| Error MCP                      | “We couldn’t reach the MCP server. Check the path and try again.” |
| CTA principal                  | “Install HugeContext” / “Connect to your assistant”|
| Tooltip de confianza           | “Runs fully local. Your code never leaves this machine.” |

---

## 10. Guía rápida Landing Page v1.0

1. **Hero**  
   - H1 claro: “Local context engine for AI coding assistants.”  
   - Subcopy breve explicando: signal over noise, privacidad local.  
   - Mockup: panel tipo VS Code mostrando el lens y una IA usando contexto.  
   - CTA: “Install HugeContext” (+ link a VSIX / repo).

2. **Sección “Why local context” (3 columnas)**  
   - Íconos: Privacy, Relevance, Speed.  
   - Bullets cortos, text body 16px, contraste AAA.

3. **Cómo funciona (3 pasos)**  
   - 1. Index your repo.  
   - 2. Plug it into your assistant (MCP).  
   - 3. Get ranked context per query.

4. **Compatibilidad**  
   - Logos discretos de Claude, Cursor, Kilo Code, Gemini, etc.  
   - Texto muy concreto: “HugeContext speaks MCP. One config, all tools.”

5. **Snippets técnicos / ejemplos**  
   - Bloques de código con configuración de MCP JSON.  
   - Contraste estricto: BG `#0B1120` + texto `#E5E7EB`.

6. **CTA final**  
   - Fondo `HC-SLATE-900`, título breve + botón primario.  
   - Texto: “Stop guessing what your AI sees. Control the context.”

---

## 11. Design Tokens JSON (base)

```json
{
  "colors": {
    "hc_ink": "#020617",
    "hc_slate_900": "#0B1120",
    "hc_slate_800": "#111827",
    "hc_slate_700": "#1E293B",
    "hc_slate_500": "#64748B",
    "hc_slate_300": "#CBD5F5",

    "hc_signal": "#06B6D4",
    "hc_signal_soft": "#22D3EE",
    "hc_focus": "#22C55E",

    "hc_text_primary": "#E5E7EB",
    "hc_text_secondary": "#9CA3AF",

    "hc_warn": "#F59E0B",
    "hc_error": "#EF4444",
    "white": "#FFFFFF"
  },
  "typography": {
    "font_heading": "\"Inter\", -apple-system, system-ui, sans-serif",
    "font_body": "\"Inter\", -apple-system, system-ui, sans-serif",
    "font_mono": "\"Fira Code\", \"JetBrains Mono\", Menlo, monospace",

    "h1": { "size": 40, "weight": 600, "lineHeight": 1.2, "letterSpacing": -0.01 },
    "h2": { "size": 32, "weight": 600, "lineHeight": 1.25, "letterSpacing": -0.01 },
    "h3": { "size": 24, "weight": 600, "lineHeight": 1.3, "letterSpacing": -0.005 },
    "h4": { "size": 20, "weight": 600, "lineHeight": 1.35, "letterSpacing": 0 },

    "body_l": { "size": 18, "weight": 400, "lineHeight": 1.6, "letterSpacing": 0 },
    "body":   { "size": 16, "weight": 400, "lineHeight": 1.6, "letterSpacing": 0 },
    "caption":{ "size": 12, "weight": 400, "lineHeight": 1.4, "letterSpacing": 0.02 },

    "code":   { "size": 13, "weight": 400, "lineHeight": 1.5, "letterSpacing": 0 }
  },
  "spacing": {
    "s0": 4,
    "s1": 8,
    "s2": 16,
    "s3": 24,
    "s4": 32,
    "s5": 48
  },
  "radius": {
    "sm": 4,
    "md": 8,
    "lg": 12,
    "xl": 16
  },
  "elevation": {
    "card": {
      "shadow": "0 12px 30px rgba(0,0,0,0.45)",
      "border": "1px solid #111827"
    },
    "modal": {
      "shadow": "0 24px 60px rgba(0,0,0,0.6)",
      "border": "1px solid #1E293B"
    }
  },
  "components": {
    "button_primary": {
      "bg": "hc_signal",
      "bg_hover": "hc_signal_soft",
      "text": "hc_slate_900",
      "radius": "999px",
      "paddingX": 16,
      "paddingY": 8
    },
    "badge_ready": {
      "bg": "rgba(6,182,212,0.08)",
      "border": "hc_signal",
      "text": "hc_signal"
    }
  }
}
