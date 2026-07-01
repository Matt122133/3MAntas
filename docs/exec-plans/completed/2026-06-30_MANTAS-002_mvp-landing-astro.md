---
status: completed
id: MANTAS-002
slug: mvp-landing-astro
covers:
  - src/
  - public/
  - astro.config.mjs
  - package.json
  - package-lock.json
  - tsconfig.json
  - tailwind.config.mjs
  - .github/workflows/
  - .gitignore
  - README.md
  - ARCHITECTURE.md
verify: npm run build && test -d dist && grep -r "whatsapp.com" dist/index.html
adrs:
  - docs/decisions/frontend-stack.md
  - docs/decisions/mvp-promotional-site-direction.md
---

# MANTAS-002 — MVP landing: sitio Astro deployado en GitHub Pages

This ExecPlan is a living document, maintained per [`../../PLANS.md`](../../PLANS.md).
Keep `Plan of Work` and `Decision Log` current as work proceeds.

## Goal

Al finalizar este plan existe un sitio web funcional, deployado publicamente en
GitHub Pages, que le permite a cualquier persona:

1. Leer quienes son y que hacen (hero con propuesta de valor).
2. Ver las mantas disponibles (2–3 productos con foto y color).
3. Contactar por WhatsApp con un click o enviar un mail.
4. Entender el esquema de envios (por zona, se coordina charlando).

El sitio es una sola pagina HTML con secciones; carga rapido en celular; y se
puede actualizar cambiando texto e imagenes sin tocar logica.

## Out of scope

- Ecommerce, carrito ni pasarela de pago.
- Panel de administracion o CMS.
- Autenticacion de usuarios.
- Mas de una pagina (no hay `/productos`, `/nosotros` separados en el MVP).
- Animaciones complejas o librerias de UI pesadas.
- Descripcion final del hero — el usuario la provee antes de ejecutar el paso 2.

## Plan of Work

### Paso 1 — Scaffold Astro + Tailwind + GitHub Actions

Crear el proyecto Astro con integracion oficial de Tailwind y el workflow de
deploy para GitHub Pages.

Archivos a generar:
- `package.json` — dependencias: `astro`, `@astrojs/tailwind`, `tailwindcss`.
- `astro.config.mjs` — `output: 'static'`, `site:` con la URL de GitHub Pages,
  integracion Tailwind, `base:` si el repo no es `<usuario>.github.io`.
- `tsconfig.json` — configuracion base recomendada por Astro.
- `tailwind.config.mjs` — config base, paleta de colores del proyecto.
- `.github/workflows/deploy.yml` — workflow oficial Astro GH Pages
  (build → upload artifact → deploy Pages).
- `public/favicon.svg` — favicon minimal.
- `src/layouts/Layout.astro` — HTML base: `<head>`, meta SEO, Open Graph,
  fuente tipografica (Google Fonts via CDN).
- `src/pages/index.astro` — pagina unica que importa las secciones.

### Paso 2 — Componente Hero

Archivo: `src/components/Hero.astro`.

Contiene: titulo principal ("Mantas de lana corriedal" o el que el usuario
defina), subtitulo/descripcion corta (texto provisto por el usuario antes de
ejecutar este paso), y un boton CTA primario que lleva a la seccion de contacto.

Estilo: full-width, fondo con imagen o color solido neutro, texto centrado.

### Paso 3 — Componente Products

Archivo: `src/components/Products.astro`.

Muestra 2–3 tarjetas de producto. Cada tarjeta tiene:
- Foto del producto (imagen en `src/assets/products/`).
- Nombre (ej. "Manta Natural", "Manta Ocre").
- Color/descripcion breve en una linea.
- Boton "Consultar por WhatsApp" que abre `https://wa.me/<numero>?text=<mensaje
  precompletado con el nombre del producto>`.

Los datos de los productos se definen como un array de objetos inline en el
componente (no hay CMS ni base de datos). Para agregar o cambiar un producto
en el futuro: editar ese array y reemplazar la foto en `src/assets/`.

### Paso 4 — Componente Contact

Archivo: `src/components/Contact.astro`.

Contiene dos canales de contacto:
- **WhatsApp**: boton grande con icono que abre `https://wa.me/<numero>` con
  mensaje generico de consulta. El numero se define como constante en el
  componente.
- **Email**: enlace `mailto:<mail>` con texto visible del mail. Sirve para
  contacto mas formal. El mail se define como constante en el componente.

No hay formulario de backend; el mail es un `mailto:` simple.

### Paso 5 — Componente Shipping

Archivo: `src/components/Shipping.astro`.

Seccion corta (no es una pagina separada). Contiene:
- Texto explicativo: "Realizamos envios a todo el pais. El costo depende de la
  zona y se coordina por WhatsApp."
- Posiblemente una mencion de la ubicacion base (ej. "Somos de [ciudad]").
- Boton o enlace rapido al WhatsApp para coordinar envio.

### Paso 6 — Footer

Archivo: `src/components/Footer.astro`.

Contiene copyright (`© 3MAntas <año>`) e iconos/enlaces a WhatsApp y mail.
Simple, sin navegacion.

### Paso 7 — Wiring y revision final

En `src/pages/index.astro`, importar y ensamblar todos los componentes en orden:
`Hero → Products → Contact → Shipping → Footer`.

Revisar:
- Que el enlace de WhatsApp tenga el numero real.
- Que el mail sea el real.
- Que las fotos de producto esten en `src/assets/products/` y referenciadas.
- Que `astro.config.mjs` tenga el `site:` correcto para GitHub Pages.

### Paso 8 — Build y test local

Ejecutar `npm run build` y verificar que `dist/` se genera sin errores.
Abrir `dist/index.html` o usar `npm run preview` para revisar el resultado.

### Paso 9 — Push y verificacion del deploy

Hacer push a `main`. El GitHub Actions workflow corre automaticamente. Verificar
en la pestaña Actions del repo que el deploy sea exitoso. Abrir la URL publica
y confirmar que el sitio carga.

## Verify

    npm run build && test -d dist && grep -r "whatsapp.com" dist/index.html

El sitio producido en `dist/` compila sin errores y contiene el enlace de
WhatsApp. Verificacion manual adicional: abrir la URL de GitHub Pages y confirmar
que hero, productos, contacto y envios son visibles en celular.

## Decision Log

- Decision: Usar Astro + Tailwind CSS sobre React o HTML puro.
  Rationale: genera HTML estatico puro sin JS en el cliente, optimo para
  performance movil. Detalle en ADR frontend-stack.
  Date: 2026-06-30

- Decision: No usar formulario de contacto con backend.
  Rationale: el MVP centraliza todo en WhatsApp. El mail es un `mailto:` para
  formalidad; no requiere servidor.
  Date: 2026-06-30

- Decision: Datos de producto hardcodeados en el componente.
  Rationale: 2–3 productos que cambian raramente. Un CMS agrega complejidad
  innecesaria. Cambiar un producto = editar un array y subir una foto.
  Date: 2026-06-30

- Decision: Una sola pagina con secciones (no multi-page).
  Rationale: el volumen de contenido es minimo; una sola pagina es mas rapida
  de cargar y mas simple de mantener. Si crece se puede dividir en el futuro.
  Date: 2026-06-30

- Decision: Descripcion del hero queda pendiente hasta que el usuario la provea.
  Rationale: el texto de marca es decision del usuario, no del agente.
  Date: 2026-06-30
