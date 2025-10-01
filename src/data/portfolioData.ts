export const portfolioData = {
  name: "Cristóbal Moraga Guerrero",
  title: "Ingeniero Civil Telemático en Formación",
  contact: {
    email: "Cristobal.moragag@gmail.com",
    phone: "+56 9 8276 4428",
    location: "Av. Jardines de Reñaca 50",
    github: "https://github.com/crismoraga",
    linkedin: "https://linkedin.com/in/cristobalmoraga",
  },
  about: "Ingeniero Civil Telemático en formación, especializado en ciberseguridad y tecnologías de la información y comunicación (TICs). Altamente apasionado por la innovación, la integración tecnológica y el desarrollo de software, con experiencia en la gestión de proyectos, diseño de redes, infraestructura y hardening. Estoy en busca de oportunidades donde pueda aplicar y demostrar mis conocimientos y aptitudes, generar un impacto y enfrentar retos, para así crecer y desarrollarme como profesional.",
  
  // Competencias técnicas agrupadas según el CV
  technicalCompetencies: {
    "Gobierno y cumplimiento": [
      "ISO/IEC 27001–27002",
      "Políticas de seguridad",
      "Clasificación y etiquetado de activos",
      "Gestión de accesos",
      "Matriz de riesgos",
      "Continuidad operacional"
    ],
    "Infraestructura segura": [
      "Hardening de servidores Linux",
      "Gestión de servicios y puertos",
      "Segmentación y políticas de red",
      "Registro y trazabilidad"
    ],
    "Monitoreo y respuesta": [
      "IDS/IPS (Suricata)",
      "Dashboards y correlación Elastic/Kibana",
      "Alertas en tiempo real",
      "Respuesta a incidentes"
    ],
    "Pruebas de seguridad": [
      "Pentesting controlado",
      "Análisis de vulnerabilidades",
      "Priorización y remediación"
    ],
    "Automatización e IA": [
      "Scripts de monitoreo con IA local",
      "Generación automática de informes",
      "Orquestación de tareas de seguridad"
    ]
  },

  aptitudes: [
    "Pensamiento analítico",
    "Comunicación técnica escrita",
    "Documentación clara",
    "Trabajo colaborativo",
    "Liderazgo",
    "Gestión del tiempo",
    "Ética profesional",
    "Orientación a resultados"
  ],
  
  skills: {
    "Lenguajes": [
      "Python (Avanzado)",
      "C (Avanzado)",
      "C++ (Intermedio)", 
      "JavaScript (Avanzado)",
      "TypeScript",
      "Java (Intermedio)",
      "Bash (Intermedio)",
      "SQL (Intermedio)"
    ],
    "Frameworks & Librerías": [
      "React.js", "Next.js", "Vite", 
      "React Native", "Expo",
      "Tailwind CSS", "Node.js"
    ],
    "Ciberseguridad": [
      "ISO/IEC 27001-27002",
      "Hardening de Servidores",
      "IDS/IPS (Suricata)",
      "Pentesting",
      "Análisis de Vulnerabilidades",
      "T-Pot Honeypot",
      "FortiClient VPN",
      "Elastic/Kibana"
    ],
    "Infraestructura & DevOps": [
      "Linux (Debian/Ubuntu)",
      "Docker & Docker Compose",
      "Git & GitHub",
      "VirtualBox (Avanzado)",
      "CLI Cisco (Routers/Switches)",
      "CLI Huawei (Routers/Switches)"
    ],
    "Herramientas": [
      "VS Code",
      "Photoshop (Intermedio)",
      "Excel (Básico)",
      "Postman"
    ]
  },
  
  projects: [
    {
      name: "PokémonAI",
      description: "Agente autónomo inteligente con capacidades de jugar a diversas versiones de Pokémon en emulador de manera independiente. Proyecto actualmente en desarrollo.",
      technologies: ["Python", "Machine Learning", "Reinforcement Learning", "Emuladores"],
      url: "https://github.com/crismoraga",
      highlights: [
        "Agente autónomo capaz de aprender y jugar Pokémon",
        "Implementación de algoritmos de aprendizaje por refuerzo",
        "Integración con emuladores de Game Boy",
        "Sistema de toma de decisiones basado en IA"
      ],
      image: "/projects/pokemonai.webp"
    },
    {
      name: "MiniMentesBrillantes",
      description: "Aplicación móvil desarrollada en Expo, enfocada en el aprendizaje didáctico y lúdico de habilidades matemáticas y razonamiento para niños entre 4 y 6 años mediante juegos y actividades acordes a su edad.",
      technologies: ["React Native", "Expo", "JavaScript", "Mobile Development"],
      url: "https://github.com/crismoraga",
      highlights: [
        "Interfaz intuitiva diseñada para niños pequeños",
        "Juegos educativos de matemáticas y razonamiento",
        "Sistema de seguimiento de progreso",
        "Actividades adaptadas a edades de 4-6 años"
      ],
      image: "/projects/minimentes.webp"
    },
    {
      name: "SeniorConsultant",
      description: "Aplicación web hecha en React y hosteada a través de Vercel, con un enfoque en los profesionales de 50+ años, para fomentar y facilitar su aprendizaje continuo a través de capacitaciones y cursos, impulsando su empleabilidad y vigencia en el mercado.",
      technologies: ["React", "Vercel", "JavaScript", "CSS"],
      url: "https://github.com/crismoraga",
      highlights: [
        "Plataforma de capacitación para profesionales senior",
        "Sistema de cursos y seguimiento de aprendizaje",
        "Interfaz accesible y fácil de usar",
        "Deployment continuo en Vercel"
      ],
      image: "/projects/senior.webp"
    },
    {
      name: "F29",
      description: "Alusivo al formulario 29 del servicio de impuestos internos (SII), aplicación web basada en NextJS para empresas, con opciones y funcionalidades para recordar y hacer el proceso de pago y seguimiento de fecha de impuestos agradable y fácil.",
      technologies: ["Next.js", "TypeScript", "React", "API SII"],
      url: "https://github.com/crismoraga",
      highlights: [
        "Integración con sistema del SII",
        "Recordatorios automáticos de fechas de pago",
        "Dashboard de gestión de impuestos",
        "Interfaz simplificada para procesos tributarios"
      ],
      image: "/projects/f29.webp"
    },
    {
      name: "Angry Toaster",
      description: "Proyecto de introducción a ingeniería programado en Python y ejecutado en un Raspberry Pi conectada a una tostadora con IA integrada, capaz de reconocer patrones de comportamiento en las conversaciones e interacciones con ella, generando una salida (respuesta hablada y toma de decisión) correspondiente al análisis de la interacción inicial dada.",
      technologies: ["Python", "Raspberry Pi", "NLP", "IoT", "Machine Learning"],
      url: "https://github.com/crismoraga",
      highlights: [
        "IA capaz de analizar tono de conversación",
        "Respuestas de voz integradas",
        "Control de hardware (tostadora) basado en interacciones",
        "Interacción negativa = pan quemado, amable = tostado perfecto"
      ],
      image: "/projects/toaster.webp"
    }
  ],
  
  experience: [
    {
      position: "Analista de Seguridad de la Información y Ciberseguridad (Práctica Profesional)",
      company: "Servicio Nacional de Geología y Minería (SERNAGEOMIN)",
      location: "Chile",
      startDate: "Enero 2025",
      endDate: "Marzo 2025",
      description: "Auditoría, implementación y fortalecimiento de controles de seguridad conforme a ISO/IEC 27002:2013. Implementación de servidor honeypot T-Pot con Suricata, desarrollo de herramientas de monitoreo con IA y automatización de procesos de seguridad.",
      achievements: [
        "Auditoría y cumplimiento: Revisión de políticas internas conforme a ISO/IEC 27002:2013, identificación de brechas y propuesta de remediación",
        "Implementación técnica: Instalación y configuración de Servidor Debian 11 con T-Pot, habilitando múltiples servicios de honeypot",
        "Monitoreo y detección: Integración de Suricata y visualización en ELK/Kibana, optimización del pipeline de logs",
        "Automatización e IA: Desarrollo de script de monitoreo con IA local, alertas por correo en tiempo real e informes PDF automáticos",
        "Pentesting controlado y corrección de hallazgos, reforzando el hardening del servidor",
        "Documentación técnica completa: Manual T-Pot, informe de seguridad e informe final de práctica"
      ]
    }
  ],
  
  education: [
    {
      degree: "Ingeniería Civil Telemática",
      institution: "Universidad Técnica Federico Santa María",
      location: "Valparaíso, Chile",
      startYear: 2021,
      endYear: null,
      description: "Especialización en ciberseguridad, redes de comunicaciones y tecnologías de la información. Formación integral en diseño, implementación y gestión de sistemas telemáticos.",
      courses: [
        "Redes de Computadores",
        "Seguridad de la Información",
        "Ingeniería de Software",
        "Sistemas Operativos"
      ]
    },
    {
      degree: "Educación Media Científico Humanista",
      institution: "Colegio Particular Leonardo Da Vinci",
      location: "Chile",
      startYear: 2008,
      endYear: 2020,
      description: "Formación científico humanista con excelencia académica.",
      courses: []
    }
  ],
  
  certifications: [
    {
      name: "Foundations of Purple Teaming",
      issuer: "AttackIQ",
      date: "2025",
      url: "https://www.attackiq.com/"
    },
    {
      name: "Capacitación interna en ISO/IEC 27002:2013",
      issuer: "SERNAGEOMIN",
      date: "2025",
      url: ""
    }
  ],
  
  teachingAssistant: [
    {
      course: "INF225 - Ingeniería de Software",
      role: "Ayudante de Corrección y Contacto",
      institution: "Universidad Técnica Federico Santa María",
      period: "2024 - Presente",
      description: "Guiar, orientar y dar herramientas y soluciones para el desarrollo del proyecto semestral a cada uno de los grupos de la asignatura."
    },
    {
      course: "Mantención Servidores y Servicios",
      role: "Ayudante de Infraestructura",
      institution: "Departamento de Ingeniería Civil Mecánica UTFSM",
      period: "2025 - Presente",
      description: "Encargado de garantizar disponibilidad, resolución de problemas, y securización de la infraestructura tanto virtual como física."
    }
  ],

  extracurricular: [
    {
      role: "Vicepresidente",
      organization: "Centro de Estudiantes Ingeniería Civil Telemática",
      period: "2023 - 2025",
      description: "Liderazgo estudiantil y representación de la carrera."
    },
    {
      role: "Líder de Desarrollo de Software",
      organization: "Difusión Telemática",
      period: "2024 - Presente",
      description: "Rama encargada de difundir y expandir el conocimiento sobre la carrera de Ingeniería Civil Telemática mediante talleres, charlas, y actividades."
    }
  ],
  
  languages: [
    {
      name: "Español",
      level: "Nativo"
    },
    {
      name: "Inglés",
      level: "Avanzado (lectura, escritura y conversacional)"
    }
  ],
  
  achievements: [
    "Excelencia Académica 2019-2020",
    "Implementación exitosa de servidor honeypot T-Pot en SERNAGEOMIN",
    "Desarrollo de herramientas de automatización con IA para monitoreo de seguridad",
    "Liderazgo estudiantil como Vicepresidente del Centro de Estudiantes"
  ],
  
  interests: [
    "Deportes (fútbol, básquetbol, ping-pong, tenis)",
    "Lectura y escritura artística",
    "Pentesting y hacking ético",
    "Capture The Flag (CTFs) y eventos de ciberseguridad",
    "Programación y desarrollo de software",
    "Composición musical",
    "Cinematografía"
  ],

  personalInfo: {
    nationality: "Chilena",
    birthDate: "17/09/2002",
    rut: "21.051.332-9"
  }
};
