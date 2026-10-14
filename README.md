# Portafolio de José Antonio Martínez Alvarado

Primera versión de un portafolio personal con enfoque en **Backend**. La organización de secciones se inspiró en la referencia compartida por el usuario, con diseño propio.

## Requisitos
- Node.js 20.19+ o 22.12+
- npm

## Ejecutar
```bash
npm install
npm run dev
```

## Compilar
```bash
npm run build
npm run preview
```

## Personalizar antes de publicar
- `src/profile.js`: correo, ubicación, GitHub, LinkedIn, enlace al CV y fichas de proyectos.
- `src/App.jsx`: contenido de trayectoria, habilidades y presentación.
- `src/styles.css`: paleta, diseño y animaciones.
- Para habilitar el botón de CV, coloca el archivo PDF en `public/` y define su ruta en `profile.cv`.
- No se incluye un backend de formulario de contacto; el botón abre tu cliente de correo.

## Publicación
Puede desplegarse como sitio estático en Netlify o Vercel. Build command: `npm run build`; output directory: `dist`.

## Nota
El portafolio es independiente de Pizza Mya; no modifica ni reutiliza su repositorio.

## Proyectos añadidos

Se incluyen **Youtube** (TypeScript), **CalculadoraIngresos** (CSS) y **Telegram_replica** (HTML), según las capturas proporcionadas. Las descripciones funcionales y URL de estos repositorios se dejan sin inventar: completa los campos `summary`, `details` y `link` en `src/profile.js` cuando puedas verificarlos.


## Contacto directo

El contacto por WhatsApp se configura en `src/profile.js`, campo `whatsapp`. El número `5210000000000` es un **ejemplo no operativo**: cámbialo por tu número con código de país, solo dígitos. Los botones de contacto abren `wa.me` directamente; no hay alertas de JavaScript. El botón de Pizza Mya abre su web real; los proyectos cuyo repositorio no se ha proporcionado conservan una ficha de detalles dentro del portafolio en vez de redirigir a enlaces inventados. Configura `link` de cada proyecto en `src/profile.js` para activar su enlace directo.
