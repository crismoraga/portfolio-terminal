type ContactInfo = {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
};

type TimelineItem = {
  startDate: string;
  endDate: string;
};

type Project = {
  name: string;
  description: string;
  technologies: string[];
  url: string;
  highlights: string[];
  image: string;
  demoUrl?: string;
};

type Experience = TimelineItem & {
  position: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
};

type Education = {
  degree: string;
  institution: string;
  location: string;
  startYear: number;
  endYear: number | null;
  description: string;
  courses: string[];
};

type Certification = {
  name: string;
  issuer: string;
  date: string;
  url: string;
};

type TeachingAssistant = {
  course: string;
  role: string;
  institution: string;
  period: string;
  description: string;
};

type Extracurricular = {
  role: string;
  organization: string;
  period: string;
  description: string;
};

type LanguageLevel = {
  name: string;
  level: string;
};

type PortfolioData = {
  name: string;
  title: string;
  contact: ContactInfo;
  about: string;
  technicalCompetencies: Record<string, string[]>;
  aptitudes: string[];
  skills: Record<string, string[]>;
  projects: Project[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  teachingAssistant: TeachingAssistant[];
  extracurricular: Extracurricular[];
  languages: LanguageLevel[];
  achievements: string[];
  interests: string[];
  personalInfo: {
    nationality: string;
    birthDate: string;
    rut: string;
  };
};

export const portfolioData: PortfolioData = {
  name: "Cristóbal Moraga Guerrero",
  title: "Ingeniero Civil Telemático | Ciberseguridad, IA y Desarrollo de Software",
  contact: {
    email: "Cristobal.moragag@gmail.com",
    phone: "+56 9 8276 4428",
    location: "Av. Jardines de Reñaca 50",
    github: "https://github.com/crismoraga",
    linkedin: "https://linkedin.com/in/cristobalmoraga",
  },
  about: "Ingeniero Civil Telemático en formación con foco en ciberseguridad aplicada, ciencia de datos y desarrollo de software. Me especializo en convertir problemas complejos en soluciones productivas con trazabilidad, automatización y estándares de calidad. He trabajado en proyectos de riesgo crediticio, hardening y monitoreo de seguridad, y además desarrollo productos web/móviles con enfoque en experiencia de usuario y despliegue continuo.",
  
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
      "Tailwind CSS", "Node.js", "FastAPI",
      "Pandas", "scikit-learn"
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
      name: "portfolio-terminal",
      description: "Portafolio interactivo en formato terminal con interfaz dual (CLI + GUI), tematización, sonido contextual y navegación por comandos para explorar experiencia, proyectos y competencias técnicas.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      url: "https://github.com/crismoraga/portfolio-terminal",
      highlights: [
        "Arquitectura data-driven centralizada para contenido curricular",
        "Experiencia interactiva con comandos, autocompletado e interfaz visual",
        "Diseño orientado a performance y mantenibilidad en frontend moderno",
        "Despliegue en producción con configuración para Vercel"
      ],
      image: "/projects/portfolio-terminal.webp",
      demoUrl: "https://portfolio-terminal-tawny.vercel.app"
    },
    {
      name: "ProyectoCiberseguridad_EquipoA",
      description: "Plataforma web de ciberseguridad construida en equipo, con despliegue en Vercel y enfoque en concientización, buenas prácticas y visualización de controles de seguridad.",
      technologies: ["React", "JavaScript", "CSS", "Vercel"],
      url: "https://github.com/crismoraga/ProyectoCiberseguridad_EquipoA",
      highlights: [
        "Desarrollo colaborativo y coordinación de entregas por iteraciones",
        "Enfoque práctico en comunicación de riesgos y controles",
        "Deploy público para validación continua",
        "Repositorio con actividad reciente y evolución activa"
      ],
      image: "/projects/ciberseguridad-equipo-a.webp",
      demoUrl: "https://proyecto-ciberseguridad-equipo-a.vercel.app"
    },
    {
      name: "LLM-BK",
      description: "Exploración aplicada de modelos de lenguaje para casos de negocio en contexto financiero, orientada a clasificación, soporte analítico y automatización de decisiones asistidas.",
      technologies: ["Python", "LLMs", "NLP", "Data Science"],
      url: "https://github.com/crismoraga/LLM-BK",
      highlights: [
        "Prototipado rápido de flujos con IA aplicada",
        "Experimentación sobre datos del dominio financiero",
        "Base para integrar capacidades de análisis inteligente",
        "Enfoque en explicabilidad y utilidad operativa"
      ],
      image: "/projects/llm-bk.webp"
    },
    {
      name: "FootOracle",
      description: "Proyecto en Python orientado a analítica predictiva en contexto deportivo, con pipeline reproducible para experimentación y evaluación de hipótesis.",
      technologies: ["Python", "Machine Learning", "Data Analysis"],
      url: "https://github.com/crismoraga/FootOracle",
      highlights: [
        "Estructura de proyecto enfocada en iteración y validación",
        "Tratamiento de datos para inferencias y predicción",
        "Diseño modular para extender modelos",
        "Repositorio reciente que muestra continuidad de trabajo en IA"
      ],
      image: "/projects/footoracle.webp"
    },
    {
      name: "ValpoPlanning",
      description: "Trabajo analítico sobre planificación urbana y modelamiento de escenarios, combinando análisis de datos y notebooks para documentar hallazgos y decisiones.",
      technologies: ["Python", "Jupyter Notebook", "Data Analysis", "Optimization"],
      url: "https://github.com/crismoraga/ValpoPlanning",
      highlights: [
        "Modelamiento reproducible de escenarios",
        "Documentación técnica orientada a decisiones",
        "Uso de notebooks para trazabilidad analítica",
        "Aplicación de pensamiento sistémico en problemas territoriales"
      ],
      image: "/projects/valpoplanning.webp"
    },
    {
      name: "e2ee_chat",
      description: "Sistema de chat con cifrado de extremo a extremo como ejercicio práctico de seguridad aplicada, abordando confidencialidad y diseño de comunicación segura.",
      technologies: ["Python", "Cryptography", "Security Engineering"],
      url: "https://github.com/crismoraga/e2ee_chat",
      highlights: [
        "Implementación de fundamentos de cifrado E2EE",
        "Diseño orientado a privacidad y minimización de exposición",
        "Estructura base para ampliar funciones de mensajería segura",
        "Práctica aplicada de seguridad ofensiva/defensiva"
      ],
      image: "/projects/e2ee-chat.webp"
    },
    {
      name: "MiniMentesBrillantesApp",
      description: "Aplicación móvil educativa para niños, desarrollada con enfoque didáctico y lúdico para reforzar habilidades matemáticas y de razonamiento en etapas tempranas.",
      technologies: ["React Native", "Expo", "JavaScript", "Mobile Development"],
      url: "https://github.com/crismoraga/MiniMentesBrillantesApp",
      highlights: [
        "Diseño de interacción adaptado a público infantil",
        "Mecánicas de aprendizaje gamificado",
        "Seguimiento de progreso y actividades por nivel",
        "Trabajo interdisciplinario entre producto, UX y desarrollo"
      ],
      image: "/projects/minimentes-app.webp"
    }
  ],
  
  experience: [
    {
      position: "Practicante en Data Science y Riesgo Crediticio (Práctica Profesional)",
      company: "BK Servicios Financieros (BK SpA)",
      location: "Chile",
      startDate: "Diciembre 2025",
      endDate: "Febrero 2026",
      description: "Diseño e implementación end-to-end de un modelo de aprobación automática de solicitudes de crédito para el segmento de camionetas, abarcando limpieza e integración de datos, ingeniería de variables, entrenamiento de modelos, calibración y despliegue productivo con trazabilidad.",
      achievements: [
        "Implementé un proceso de concordancia difusa jerárquica (marca/modelo) para identificar camionetas en bases históricas con inconsistencias ortográficas, mejorando precisión y eficiencia del filtrado inicial",
        "Construí un pipeline ETL modular para integrar fuentes transaccionales, patrimoniales y de comportamiento crediticio, con reglas de calidad, eliminación de duplicados y auditoría de datos",
        "Automaticé el análisis exploratorio y la selección de variables usando métricas de riesgo crediticio, control de multicolinealidad y prevención de fuga de información",
        "Apliqué discretización supervisada y transformación Weight of Evidence (WoE), validando monotonicidad e incorporando esquemas de partición estratificada y validación cruzada repetida",
        "Entrené y comparé múltiples modelos de clasificación (incluyendo regresión logística regularizada, boosting y redes neuronales), optimicé hiperparámetros y desarrollé un ensamble calibrado con umbral de decisión orientado a rentabilidad/riesgo",
        "Desplegué el motor de decisión como API productiva con contenerización, integración y despliegue continuo (CI/CD), además de módulos de explicabilidad y trazabilidad para auditoría normativa"
      ]
    },
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
    },
    {
      course: "TEL341 - Redes de Computadores",
      role: "Ayudante de Cátedra y Apoyo Técnico",
      institution: "Universidad Técnica Federico Santa María",
      period: "2026-1",
      description: "Apoyo en sesiones prácticas, resolución de dudas técnicas y acompañamiento en laboratorios de redes, protocolos y troubleshooting aplicado."
    },
    {
      course: "TEL354 - Seguridad en Redes",
      role: "Ayudante de Cátedra",
      institution: "Universidad Técnica Federico Santa María",
      period: "2026-1",
      description: "Refuerzo de contenidos de seguridad en redes, análisis de escenarios de ataque/defensa y guía metodológica en actividades de laboratorio."
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
    "Despliegue productivo de modelo de riesgo crediticio en BK Servicios Financieros",
    "Consolidación de más de 25 repositorios públicos en GitHub con foco en software, ciberseguridad e IA",
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
