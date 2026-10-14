// Edita los enlaces antes de publicar. No se incluyen URLs inventadas.
export const profile = {
  name: "José Antonio Martínez Alvarado",
  email: "20230087@uthh.edu.mx",
  whatsapp: "5217712401753", // NÚMERO DE EJEMPLO. Sustituir por tu número real con código de país, solo dígitos.
  location: "Huejutla de Reyes, Hidalgo, México",
  github: "https://github.com/Jos3MA56", // Ejemplo: 'https://github.com/tu-usuario'
  linkedin: "", // Opcional
  cv: "", // Coloca un PDF en public/ y usa '/cv-jose-antonio.pdf'
};
export const projects = [
  {
    number: "01",
    name: "Pizza Mya",
    category: "Plataforma web · Full Stack",
    summary:
      "Sistema para pedidos en línea, gestión administrativa y operación de una pizzería.",
    role: "Backend, integración de API y base de datos",
    details: [
      "API REST para productos, pedidos y administración.",
      "Autenticación y permisos según el rol del usuario.",
      "Persistencia y consultas con PostgreSQL.",
      "Integraciones y pruebas de endpoints.",
    ],
    stack: ["Node.js", "Express", "PostgreSQL", "Supabase", "React"],
    link: "https://pizzamya.netlify.app/",
    linkLabel: "Ver sitio",
    accent: "pizza",
  },
  {
    number: "02",
    name: "API para Programa Educativo de TI",
    category: "API académica · Backend",
    summary:
      "Servicio para consultar y consumir información de un sistema educativo, desarrollado durante la estadía de TSU.",
    role: "Desarrollo de API y acceso a datos",
    details: [
      "Desarrollo de endpoints para consulta de información.",
      "Integración con una base de datos documental.",
      "Preparación del servicio para consumo desde otros sistemas.",
    ],
    stack: ["Node.js", "MongoDB", "API REST"],
    link: "",
    linkLabel: "Ver repositorio",
    accent: "api",
  },
  {
    number: "03",
    name: "Youtube",
    category: "Proyecto personal · TypeScript",
    summary:
      "Proyecto publicado en un repositorio público, desarrollado con TypeScript.",
    role: "Proyecto de desarrollo y práctica con TypeScript",
    details: [
      "Repositorio público identificado como Youtube.",
      "Lenguaje principal registrado: TypeScript.",
      "Descripción funcional y enlace al repositorio pendientes de confirmar.",
    ],
    stack: ["TypeScript"],
    link: "",
    linkLabel: "Ver repositorio",
    accent: "typescript",
  },
  {
    number: "04",
    name: "CalculadoraIngresos",
    category: "Proyecto personal · CSS",
    summary:
      "Proyecto publicado en un repositorio público, con CSS como lenguaje principal registrado.",
    role: "Proyecto de desarrollo web",
    details: [
      "Repositorio público identificado como CalculadoraIngresos.",
      "Lenguaje principal registrado: CSS.",
      "Descripción funcional y enlace al repositorio pendientes de confirmar.",
    ],
    stack: ["CSS"],
    link: "",
    linkLabel: "Ver repositorio",
    accent: "css",
  },
  {
    number: "05",
    name: "Telegram_replica",
    category: "Proyecto personal · HTML",
    summary:
      "Proyecto publicado en un repositorio público, con HTML como lenguaje principal registrado.",
    role: "Proyecto de desarrollo web",
    details: [
      "Repositorio público identificado como Telegram_replica.",
      "Lenguaje principal registrado: HTML.",
      "Descripción funcional y enlace al repositorio pendientes de confirmar.",
    ],
    stack: ["HTML"],
    link: "",
    linkLabel: "Ver repositorio",
    accent: "html",
  },
];
