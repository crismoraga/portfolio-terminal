export const portfolioData = {
  name: "Cristóbal Moraga Guerrero.",
  title: "Ingeniero Civil Telemático en Formación",
  contact: {
    email: "Cristobal.moragag@gmail.com",
    phone: "+56 9 8276 4248",
    location: "Santiago, Chile",
    github: "https://github.com/crismoraga",
    linkedin: "https://linkedin.com/in/cristobalmoraga",
  },
  about: "Desarrollador Full Stack con experiencia en creación de aplicaciones web y móviles. Especializado en tecnologías modernas como React, Node.js y servicios Cloud. Apasionado por crear soluciones innovadoras, optimizar el rendimiento y aplicar las mejores prácticas de desarrollo. Enfocado en entregar valor a través de código limpio y soluciones elegantes.",
  
  skills: {
    "Frontend": [
      "HTML5", "CSS3", "JavaScript (ES6+)", 
      "TypeScript", "React.js", "Next.js", 
      "Redux", "Tailwind CSS", "Bootstrap",
      "Angular", "Vue.js", "SASS/SCSS"
    ],
    "Backend": [
      "Node.js", "Express.js", "Python",
      "Django", "PHP", "Laravel",
      "SQL", "MongoDB", "PostgreSQL",
      "Firebase", "GraphQL", "RESTful APIs"
    ],
    "DevOps": [
      "Git", "GitHub Actions", "Docker",
      "AWS", "Vercel", "Netlify",
      "CI/CD", "Kubernetes", "Terraform"
    ],
    "Testing": [
      "Jest", "React Testing Library", "Cypress",
      "Mocha", "Chai", "Selenium"
    ],
    "Herramientas": [
      "VS Code", "Figma", "Adobe XD",
      "JIRA", "Trello", "Notion",
      "Slack", "Postman", "npm/yarn"
    ]
  },
  
  projects: [
    {
      name: "E-commerce Platform",
      description: "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos integrada y panel de administración para gestionar productos, usuarios y pedidos.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe", "AWS S3"],
      url: "https://github.com/cristobalmg",
      highlights: [
        "Incremento del 35% en conversiones después del rediseño de la experiencia de usuario",
        "Optimización del rendimiento con un tiempo de carga reducido en un 40%",
        "Implementación de sistema de pagos seguros con múltiples opciones",
        "Dashboard administrativo con estadísticas en tiempo real y reportes personalizables"
      ],
      image: "/projects/ecommerce.webp"
    },
    {
      name: "Task Manager",
      description: "Aplicación de gestión de tareas con características avanzadas como tableros Kanban, etiquetas personalizables, recordatorios y seguimiento del tiempo.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Vuex", "Cloud Functions"],
      url: "https://github.com/cristobalmg",
      highlights: [
        "Interfaz de arrastrar y soltar para gestionar tareas entre diferentes estados",
        "Sistema de notificaciones en tiempo real con Firebase",
        "Integración con Google Calendar para sincronizar eventos",
        "Aplicación PWA con funcionalidad offline"
      ],
      image: "/projects/taskmanager.webp"
    },
    {
      name: "Portfolio Terminal",
      description: "Portafolio interactivo con estilo de terminal Linux y estética Matrix, ofreciendo una experiencia única para mostrar habilidades y proyectos.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Hooks"],
      url: "https://github.com/crismoraga",
      highlights: [
        "Modo dual de visualización: terminal de comandos e interfaz gráfica",
        "Animación de lluvia de caracteres estilo Matrix con Canvas API",
        "Sistema completo de comandos para navegar por el contenido",
        "Diseño responsive adaptado a todos los dispositivos"
      ],
      image: "/projects/terminal.webp"
    },
    {
      name: "Weather Dashboard",
      description: "Aplicación meteorológica que muestra pronósticos actuales y futuros con mapas interactivos, alertas y datos históricos de diferentes ubicaciones.",
      technologies: ["React", "OpenWeatherMap API", "Chart.js", "Leaflet", "Redux Toolkit"],
      url: "https://github.com/cristobalmg",
      highlights: [
        "Visualización de datos meteorológicos con gráficos interactivos",
        "Geolocalización para detectar automáticamente la ubicación del usuario",
        "Sistema de alertas para condiciones meteorológicas extremas",
        "Modo oscuro y claro adaptado a las preferencias del usuario"
      ],
      image: "/projects/weather.webp"
    }
  ],
  
  experience: [
    {
      position: "Desarrollador Full Stack Senior",
      company: "TechCorp Solutions",
      location: "Santiago, Chile (Remoto)",
      startDate: "Enero 2022",
      endDate: "Presente",
      description: "Desarrollo y mantenimiento de aplicaciones web empresariales utilizando React, Node.js y AWS. Liderazgo técnico de un equipo de desarrolladores y mentoría a desarrolladores junior.",
      achievements: [
        "Implementación de arquitectura serverless que redujo costos de infraestructura en un 30%",
        "Optimización del rendimiento de aplicación principal, mejorando tiempos de carga en un 45%",
        "Diseño e implementación de sistema de autenticación multifactor para más de 10,000 usuarios",
        "Automatización de procesos de CI/CD que redujo el tiempo de despliegue en un 70%"
      ]
    },
    {
      position: "Desarrollador Frontend",
      company: "Digital Innovation Labs",
      location: "Santiago, Chile",
      startDate: "Marzo 2020",
      endDate: "Diciembre 2021",
      description: "Desarrollo de interfaces de usuario con React y TypeScript para aplicaciones web y móviles. Implementación de pruebas automatizadas y optimización del rendimiento frontend.",
      achievements: [
        "Rediseño de la interfaz de usuario principal que aumentó la retención de usuarios en un 25%",
        "Creación de biblioteca de componentes reutilizables que aceleró el desarrollo en un 40%",
        "Implementación de estrategias de testing que redujeron bugs en producción en un 60%",
        "Migración exitosa de aplicación legacy a React con zero downtime"
      ]
    },
    {
      position: "Desarrollador Web Junior",
      company: "CreaTech Agency",
      location: "Santiago, Chile",
      startDate: "Junio 2018",
      endDate: "Febrero 2020",
      description: "Desarrollo de sitios web responsivos utilizando HTML5, CSS3, JavaScript y WordPress. Colaboración con diseñadores para implementar interfaces de usuario conforme a las especificaciones.",
      achievements: [
        "Desarrollo de 15+ sitios web para clientes de diversos sectores",
        "Implementación de sistema de cache que mejoró velocidad de carga en un 35%",
        "Creación de temas WordPress personalizados con funcionalidades avanzadas",
        "Optimización SEO que aumentó el tráfico orgánico en un 45% para clientes clave"
      ]
    }
  ],
  
  education: [
    {
      degree: "Ingeniería en Informática",
      institution: "Universidad de Chile",
      location: "Santiago, Chile",
      startYear: 2014,
      endYear: 2018,
      description: "Formación en fundamentos de programación, algoritmos, estructuras de datos y sistemas informáticos. Especialización en Ingeniería del Software.",
      courses: [
        "Algoritmos y Estructuras de Datos",
        "Bases de Datos Avanzadas",
        "Desarrollo de Aplicaciones Web",
        "Inteligencia Artificial"
      ]
    },
    {
      degree: "Diplomado en Desarrollo Web Full Stack",
      institution: "Universidad Católica de Chile",
      location: "Santiago, Chile",
      startYear: 2019,
      endYear: 2019,
      description: "Especialización en tecnologías web modernas, arquitecturas cliente-servidor y desarrollo de APIs RESTful.",
      courses: [
        "Arquitectura de Software",
        "Desarrollo Frontend con React",
        "Desarrollo Backend con Node.js",
        "DevOps y Despliegue Continuo"
      ]
    }
  ],
  
  certifications: [
    {
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      url: "https://aws.amazon.com/certification/certified-developer-associate/"
    },
    {
      name: "Professional Scrum Master I (PSM I)",
      issuer: "Scrum.org",
      date: "2022",
      url: "https://www.scrum.org/professional-scrum-certifications/professional-scrum-master-i-certification"
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2021",
      url: "https://university.mongodb.com/certification"
    },
    {
      name: "React Advanced Patterns",
      issuer: "Frontend Masters",
      date: "2020",
      url: "https://frontendmasters.com/"
    }
  ],
  
  languages: [
    {
      name: "Español",
      level: "Nativo"
    },
    {
      name: "Inglés",
      level: "Profesional (C1)"
    },
    {
      name: "Francés",
      level: "Básico (A2)"
    }
  ],
  
  achievements: [
    "Desarrollador destacado en programa de innovación tecnológica 2023",
    "Mentor de estudiantes de programación en bootcamp de desarrollo web",
    "Participación en hackathons nacionales con dos proyectos finalistas",
    "Contribuidor activo en proyectos open source relacionados con React y Node.js"
  ],
  
  interests: [
    "Inteligencia Artificial y Machine Learning",
    "Desarrollo de videojuegos independientes",
    "Optimización de rendimiento web",
    "Seguridad informática y criptografía",
    "Astronomía y exploración espacial"
  ]
};
