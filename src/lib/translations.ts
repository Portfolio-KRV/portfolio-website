export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      publications: 'Publications',
      contact: 'Contact',
    },
    home: {
      greeting: "Hi, I'm",
      name: 'Kevin Reyes',
      role: 'CTO at FlowPagos',
      tagline: 'Production AI, data infrastructure, and the teams that ship them',
      description: "Across 4 years at a payments platform I took on three roles, each with its own challenges, lessons, and achievements. As a Data Scientist I shipped a real-time fraud detection model under 300ms, built a new Data Warehouse that cut load times and costs by 85%, and rolled out a new BI platform. Later, as Data & Analytics Lead, I built out the function and the team, and owned the roadmap. Today, as CTO, I lead the tech strategy, aligning Data & Analytics, Infrastructure/SRE, and Software Development with the business strategy.",
      viewProjects: 'View Projects',
      aboutMe: 'About Me',
      available: 'Available for opportunities',
      yearsExp: 'Years Experience',
      teamSize: 'People Led',
      published: 'Paper Published 2025',
      scroll: 'Scroll',
      liveDemosLabel: 'Interactive demos',
      liveDemosTagline: 'Pick one and try it — they run in your browser, no setup.',
      tryDemo: 'Try',
      seeAllProjects: 'See all projects',
    },
    about: {
      title: 'About Me',
      intro: "I work across data engineering, ML, and team leadership. My background spans building production fraud detection on real transactional data and designing data warehouses that replaced months of legacy work — and I now lead the engineering org at a payments platform. I'm drawn to systems-level questions: how data flows shape decisions, how teams compound over time, what keeps a platform — software, data, and infrastructure — quietly reliable.",
      hook: "Started with BI dashboards in copper mining as a student intern. Now I co-author transformer research at IEEE and lead the engineering org of a payments platform.",

      // Current Role
      currentRole: 'Current Role',
      currentRoleContent: "CTO at FlowPagos since July 2025. I lead three technology teams — Software Development, Infrastructure, and Data & Analytics — totaling 25+ people. I own the technical roadmap and align it with business priorities. Stepped into the role after building and leading the data and analytics area as Data & Analytics Lead.",

      // Achievements section
      achievements: 'Key Achievements',
      dataEngineering: {
        title: 'Data Warehouse & ETL Architecture',
        content: "Built a complete data warehouse with a new data model and end-to-end incremental loading — cut data loading time and costs by 85% while expanding the scope of data handled. The DW covers the main business data domains and consolidates information across different databases and platforms. I also built an ETL code generator for AWS Glue that standardized common patterns and accelerated new ETL development.",
      },
      bi: {
        title: 'Business Intelligence Platform',
        content: "Led the design and implementation of FlowPagos' BI platform — dashboards across the main business domains, several used daily in operations and decision-making meetings. Also built two meta-dashboards: one for data quality monitoring, another that tracks dashboard usage across the org to drive continuous improvement based on real use.",
      },
      ml: {
        title: 'Machine Learning & AI',
        content: "Shipped a real-time transactional fraud detection model based on anomaly detection — under 300ms response, end-to-end from experimentation to production (real-time and batch data processing, endpoint deployment). Built an MCC classifier to streamline merchant onboarding, later extended to classify SII codes (Chile) and SAT codes (Mexico). Designed a multi-agent architecture for an enterprise customer-facing chatbot — sub-agents specialized by task domain.",
      },
      mlops: {
        title: 'MLOps & Development Standards',
        content: "Built a standard repository for AI projects: GitLab CI/CD with Jira approval gates, quality tests, static analysis, and automated AWS deploys via CDK. Includes reference scaffolds — SageMaker pipelines, FastAPI/SageMaker endpoints, EKS deployment, pre-commit checks, and infrastructure as code — plus a LangChain LLM template. Standardizes the team's path from prototype to production.",
      },
      leadership: {
        title: 'Team & Area Leadership',
        content: "As Data & Analytics Lead, led a team of 4 across data engineering, BI, and AI projects. Set up recurring team rituals that built cohesion, ran a standardized quarterly feedback process, and led hiring. Also built Jira automations using LLMs — auto-generating standardized descriptions for different requirement types — to keep project management consistent across the team.",
      },

      // My Approach section
      approachTitle: 'My Approach',
      approach: "I work problem-first, not tool-first. The choice of stack, model, or pattern is downstream of understanding what's actually broken and which constraint matters most. The same lens travels well across technical and people problems: a team's quarterly priorities and an ETL's bottleneck both reward whoever diagnoses before prescribing.",

      // What drives me
      drivesTitle: 'What Drives Me',
      drives: "What drives me is depth and breadth at the same time. The year I'm tuning a transformer for fraud detection is also the year I'm reorganizing how a team prioritizes its quarter. The two muscles feed each other: engineering taste sharpens leadership decisions, and operational reality sharpens the technical ones.",

      // Career Journey
      careerTitle: 'Career Journey',
      career: {
        flowCto: {
          title: 'CTO',
          period: 'FlowPagos · Jul 2025 — Present',
          roles: '',
          description: "Lead three technology teams (Software Development, Infrastructure, Data & Analytics) — 25+ people in total. Define the technical roadmap and align team capabilities with business priorities. Stepped into the role after building and leading the data and analytics area as Data & Analytics Lead.",
        },
        flowLead: {
          title: 'Data & Analytics Lead',
          period: 'FlowPagos · Jun 2024 — Jul 2025',
          roles: '',
          description: "Founded the data and analytics area from scratch — structure, processes, and a 4-person team. Co-authored the IEEE CAI 2025 transformer-for-fraud-detection paper. Built the standard AI repository (GitLab CI/CD, AWS CDK, SageMaker, FastAPI, EKS, LLM development with LangChain). Designed a multi-agent architecture for an enterprise chatbot (internal + customer-facing). Extended ML capabilities with SII (Chile) and SAT (Mexico) code classifiers and Jira-LLM automations.",
        },
        flowDs: {
          title: 'Data Scientist',
          period: 'FlowPagos · Jun 2022 — May 2024',
          roles: '',
          description: "Built the data warehouse with end-to-end incremental loading — cut load times and costs by 85%, handling millions of transactional records. Shipped the real-time fraud detection model (<300ms, end-to-end to production). Led the BI platform's design and implementation, including data quality and dashboard usage monitoring. Built the MCC classifier for merchant onboarding and the ETL code generator for AWS Glue.",
        },
        consulting: {
          title: 'MLOps Consulting',
          period: 'Freelance · Jan 2025 — Jul 2025',
          roles: 'Independent Consultant',
          description: 'Designed and implemented MLOps pipelines on AWS SageMaker, automating the complete cycle: preprocessing, training, evaluation, deployment, and model monitoring.',
        },
        codelcoThesis: {
          title: 'Codelco',
          period: 'Dec 2021 — May 2022',
          roles: 'Thesis Student',
          description: "Built a neural network that predicted the SAG Mill's effective treatment 1 hour ahead with 4.38% MAPE on the test set — applied ML on mining operations data.",
        },
        codelcoIntern: {
          title: 'Codelco',
          period: 'Jan — Mar 2020',
          roles: 'Engineering Specialist Intern',
          description: "Implemented the division's first BI dashboards — some used in daily analysis meetings — and trained 20+ workers in Power BI through an intensive theoretical-practical course.",
        },
        university: {
          title: 'UTFSM University',
          period: '2017 — 2022',
          roles: 'Computer Science Engineering',
          description: "Computer Science Engineering. Co-founded the DataLab initiative — a proposal for a data science and AI laboratory that secured UTFSM-Scotiabank funding and was implemented across both campuses. Lab teaching assistant for Databases (data models, normalization, SQL, web development, query optimization, contributed to the official course gitbook). Research assistant on a CS curriculum improvement project. IT Project Management diploma via scholarship.",
        },
      },

      // University initiatives
      universityTitle: 'University Initiatives',
      datalab: {
        title: 'DataLab Co-founder',
        content: "Together with Diego Quezada, a classmate from ML courses, we created a proposal for a Data Science and AI laboratory for the university. We laid the foundations for DataLab and secured funding from the UTFSM-Scotiabank alliance, which subsequently allowed the implementation of a laboratory at both Campus Casa Central Valparaíso and Campus San Joaquín.",
      },
      research: {
        title: 'Research Assistant',
        content: "I was invited to participate in a project to improve the Computer Science Engineering program, where we conducted interviews with students and professors, analyzed results, and produced conclusions and recommendations that were later used to improve the program.",
      },
      diploma: {
        title: 'IT Project Management Diploma',
        content: "Thanks to a scholarship, I completed a diploma in IT Project Management, which allowed me to enter the workforce with a project and team management perspective that complemented my technical interests very well.",
      },
      softwareExpo: {
        title: '1st Place — Software Exposition',
        content: "Led a team to 1st place out of 10 teams at UTFSM's XXIX Software Exposition (annual university software competition) — judged on build, technical depth, and presentation.",
      },

      // IEEE Experience
      ieeeTitle: 'IEEE CAI 2025 Experience',
      ieeeContent: "With Vasco Cortez I worked on a modification to positional encoding in transformers — adapting it to represent the actual temporal distance between transactions in a sequence, rather than just their order. We tested it on transactional fraud detection. The paper was accepted at IEEE CAI 2025 and I presented it in Silicon Valley. The most useful part wasn't the talk itself but the conversations afterwards: applied ML research is a small world, and being there in person changes what you ship the year after.",

      // Technical Skills section
      skillsTitle: 'Technical Skills',
      skillCategories: {
        languages: 'Languages',
        mlDl: 'ML / Deep Learning',
        cloudMlops: 'Cloud / MLOps',
        dataBi: 'Data & BI',
        llmsAgents: 'LLMs / Agents',
      },
    },
    projects: {
      title: 'Projects',
      subtitle: 'Academic projects across deep learning, computer vision, NLP, Bayesian networks, and more. Six ship as interactive demos you can try in the browser; the rest live as notebooks on GitHub.',
      viewProject: 'View Project',
      tryDemo: 'Try Demo',
      technologies: 'Technologies',
      objectives: 'Objectives',
      conclusions: 'Conclusions',
      viewOnGithub: 'View on GitHub',
      backToProjects: 'Back to Projects',
      course: 'Course',
      coAuthors: 'Co-authors',
      intro: "These are academic projects — I built them to go deep into the techniques and fundamentals. The production systems I've shipped professionally (fraud models, data warehouses, MLOps pipelines) are out there delivering real value, but I can't share them here.",
      featuredTitle: 'Interactive demos',
      featuredSubtitle: 'Click any card and try the model yourself — it runs in your browser, nothing to install.',
      othersTitle: 'Code & notebooks',
      othersSubtitle: "If you'd rather peek under the hood, the full notebook and source are on GitHub.",
      categories: {
        all: 'All',
        'deep-learning': 'Deep Learning',
        'computer-vision': 'Computer Vision',
        'nlp': 'NLP',
        'bayesian-networks': 'Bayesian Networks',
        'clustering': 'Clustering',
        'graphs': 'Graphs',
        'generative-models': 'Generative Models',
        'machine-learning': 'Machine Learning',
        'recommendation-systems': 'Recommendation Systems',
      },
    },
    experience: {
      title: 'Career Path',
      subtitle: 'From Data Scientist at FlowPagos to CTO — and the path between.',
    },
    publications: {
      title: 'Publications',
      subtitle: 'A conference contribution to applied ML.',
      ieeeTitle: 'Transformers for Fraud Detection: Temporal Positional Encoding',
      ieeeDescription: 'Research on transformers for fraud detection, proposing a modification to positional encoding to represent temporal distance between transactions. Presented at IEEE CAI 2025 in Silicon Valley.',
      ieeeVenue: 'IEEE CAI 2025 - Silicon Valley',
      viewPaper: 'View Paper',
    },
    contact: {
      title: 'Contact',
      subtitle: "If you're tackling something interesting in data, AI, or technical leadership — let's talk about how I can help.",
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Built with Next.js & Tailwind CSS',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      publications: 'Publicaciones',
      contact: 'Contacto',
    },
    home: {
      greeting: 'Hola, soy',
      name: 'Kevin Reyes',
      role: 'CTO en FlowPagos',
      tagline: 'IA en producción, infraestructura de datos, y los equipos detrás',
      description: "En 4 años de carrera en una plataforma de pagos asumí tres roles, cada uno con sus propios desafíos, aprendizajes y logros. Como Científico de Datos implementé un modelo de detección de fraude en tiempo real bajo 300ms, construí un nuevo Data Warehouse que redujo los tiempos y costos en un 85%, y lideré la implementación de una nueva plataforma de BI. Posteriormente, como Líder de Datos y Analítica formé el área y el equipo, y gestioné el roadmap. Actualmente, como CTO, lidero la estrategia tecnológica alineando las áreas de Datos y Analítica, Infraestructura/SRE y Desarrollo de Software con la estrategia del negocio.",
      viewProjects: 'Ver Proyectos',
      aboutMe: 'Sobre Mí',
      available: 'Disponible para oportunidades',
      yearsExp: 'Años de Experiencia',
      teamSize: 'Personas Lideradas',
      published: 'Paper Publicado 2025',
      scroll: 'Desplazar',
      liveDemosLabel: 'Demos interactivas',
      liveDemosTagline: 'Elige una y pruébala — corre en tu navegador, sin instalar nada.',
      tryDemo: 'Probar',
      seeAllProjects: 'Ver todos los proyectos',
    },
    about: {
      title: 'Sobre Mí',
      intro: "Trabajo en data engineering, ML y liderazgo de equipos. He construido detección de fraude en producción sobre datos transaccionales reales y diseñado data warehouses que reemplazaron meses de procesos legacy — y ahora lidero la gerencia de tecnología de una plataforma de pagos. Me interesan las preguntas a nivel de sistema: cómo los flujos de datos moldean decisiones, cómo los equipos acumulan valor con el tiempo, qué hace que una plataforma — software, datos e infraestructura — sea sólida sin hacer ruido.",
      hook: "Empecé con paneles de BI en minería de cobre como practicante. Hoy soy co-autor de investigación con transformers en IEEE y lidero la gerencia de tecnología en una plataforma de pagos.",

      // Current Role
      currentRole: 'Rol Actual',
      currentRoleContent: "CTO en FlowPagos desde julio de 2025. Lidero tres equipos de tecnología — Desarrollo de Software, Infraestructura, y el área de Datos y Analítica — sumando 25+ personas. Soy responsable del roadmap técnico y lo alineo con las prioridades del negocio. Asumí el rol después de crear y liderar el área de datos y analítica como Data & Analytics Lead.",

      // Achievements section
      achievements: 'Logros Destacados',
      dataEngineering: {
        title: 'Data Warehouse y Arquitectura ETL',
        content: "Construí un data warehouse completo con nuevo modelo de datos y carga incremental end-to-end — redujo tiempos y costos de carga en 85% mientras ampliaba el volumen de datos manejados. El DW abarca los principales dominios de datos del negocio y consolida información de distintas bases de datos y plataformas. También construí un generador de código de ETLs para AWS Glue que estandarizó patrones comunes y aceleró el desarrollo de nuevas ETLs.",
      },
      bi: {
        title: 'Plataforma de Business Intelligence',
        content: "Lideré el diseño e implementación de la plataforma de BI de FlowPagos — paneles para los principales dominios del negocio, varios usados diariamente en reuniones de operaciones y toma de decisiones. También construí dos meta-paneles: uno de monitoreo de calidad de datos, otro que mide el uso de paneles en la organización para impulsar la mejora continua basada en uso real.",
      },
      ml: {
        title: 'Machine Learning e IA',
        content: "Lancé un modelo de detección de fraude transaccional en tiempo real basado en detección de anomalías — con respuestas bajo 300ms, end-to-end desde experimentación a producción (procesamiento real-time y batch, despliegue de endpoint). Construí un clasificador de MCC para agilizar el onboarding de comercios, luego extendido para clasificar giro SII (Chile) y código SAT (México). Diseñé una arquitectura multi-agente para un chatbot empresarial orientado al cliente final — sub-agentes especializados por tipo de consulta.",
      },
      mlops: {
        title: 'MLOps y Estándares de Desarrollo',
        content: "Construí un repositorio estándar para proyectos de IA: CI/CD GitLab con verificación de aprobaciones en Jira, tests de calidad, análisis estático y despliegues automatizados a AWS vía AWS CDK. Incluye scaffolds de referencia — pipelines SageMaker, endpoints FastAPI/SageMaker, despliegue EKS, análisis pre-commit, e infraestructura como código — más una plantilla de LLM con LangChain. Estandariza el flujo del equipo desde prototipo hasta producción.",
      },
      leadership: {
        title: 'Liderazgo de Equipos y Áreas',
        content: "Como Data & Analytics Lead, lideré un equipo de 4 personas en proyectos de ingeniería de datos, BI e IA. Establecí rituales de equipo que dieron cohesión, implementé un proceso de feedback trimestral estandarizado, y lideré contrataciones. También construí automatizaciones de Jira usando LLMs — generando automáticamente descripciones estandarizadas para distintos tipos de requerimiento — para mantener consistencia en la gestión de proyectos.",
      },

      // My Approach section
      approachTitle: 'Mi Enfoque',
      approach: "Trabajo desde el problema, no desde la herramienta. Qué stack, modelo o patrón se elige viene después de entender qué está realmente roto y qué restricción pesa más. Esa misma lente funciona bien en problemas técnicos y humanos: las prioridades trimestrales de un equipo y el cuello de botella de una ETL premian igual a quien diagnostica antes de prescribir.",

      // What drives me
      drivesTitle: 'Lo que Me Motiva',
      drives: "Lo que me motiva es la profundidad y la amplitud al mismo tiempo. El año que ajusto un transformer para detección de fraude es también el año que reorganizo cómo un equipo prioriza su trimestre. Los dos músculos se alimentan: el criterio de ingeniería afila las decisiones de liderazgo, y la realidad operacional afila las técnicas.",

      // Career Journey
      careerTitle: 'Trayectoria Profesional',
      career: {
        flowCto: {
          title: 'CTO',
          period: 'FlowPagos · Jul 2025 — Presente',
          roles: '',
          description: "Lidero tres equipos de tecnología (Desarrollo de Software, Infraestructura, y Datos y Analítica) — 25+ personas en total. Defino el roadmap técnico y alineo las capacidades del equipo con las prioridades del negocio. Asumí el rol después de crear y liderar el área de datos y analítica como Data & Analytics Lead.",
        },
        flowLead: {
          title: 'Data & Analytics Lead',
          period: 'FlowPagos · Jun 2024 — Jul 2025',
          roles: '',
          description: "Fundé el área de datos y analítica desde cero — estructura, procesos y un equipo de 4 personas. Co-autor del paper de IEEE CAI 2025 sobre transformers para detección de fraude. Construí el repositorio estándar de IA (CI/CD en GitLab, AWS CDK, SageMaker, FastAPI, EKS, desarrollo de LLMs con LangChain). Diseñé una arquitectura multiagente para un chatbot empresarial (uso interno y orientado al cliente final). Extendí capacidades de ML con clasificadores de giro SII (Chile) y código SAT (México), y automatizaciones de Jira con LLMs.",
        },
        flowDs: {
          title: 'Data Scientist',
          period: 'FlowPagos · Jun 2022 — May 2024',
          roles: '',
          description: "Construí el data warehouse con carga incremental end-to-end — redujo tiempos y costos de carga en 85%, manejando millones de registros transaccionales. Lancé el modelo de detección de fraude en tiempo real (<300ms, end-to-end hasta producción). Lideré el diseño e implementación de la plataforma de BI, incluyendo monitoreo de calidad de datos y de uso de paneles. Construí el clasificador de MCC para onboarding de comercios y el generador de código de ETLs para AWS Glue.",
        },
        consulting: {
          title: 'Consultoría MLOps',
          period: 'Freelance · Ene 2025 — Jul 2025',
          roles: 'Consultor Independiente',
          description: 'Diseñé e implementé pipelines de MLOps en AWS SageMaker, automatizando el ciclo completo: preprocesamiento, entrenamiento, evaluación, despliegue y monitoreo de modelos.',
        },
        codelcoThesis: {
          title: 'Codelco',
          period: 'Dic 2021 — May 2022',
          roles: 'Memoria de Título',
          description: "Construí una red neuronal que predecía el tratamiento efectivo del Molino SAG con 1 hora de anticipación, logrando un MAPE de 4.38% en el conjunto de pruebas — ML aplicado a datos de operaciones mineras.",
        },
        codelcoIntern: {
          title: 'Codelco',
          period: 'Ene — Mar 2020',
          roles: 'Práctica Profesional',
          description: "Implementé los primeros paneles de BI de la división — algunos usados en reuniones diarias de análisis — y capacité a más de 20 trabajadores en Power BI mediante un curso intensivo teórico-práctico.",
        },
        university: {
          title: 'Universidad UTFSM',
          period: '2017 — 2022',
          roles: 'Ingeniería Civil Informática',
          description: 'Ingeniería Civil Informática. Co-fundé la iniciativa DataLab — una propuesta de laboratorio de data science e IA que obtuvo financiamiento UTFSM-Scotiabank y se implementó en ambos campus. Ayudante de laboratorio del curso de Bases de Datos (modelos de datos, normalización, SQL, desarrollo web, optimización de queries, contribuí al gitbook oficial). Ayudante de investigación en un proyecto de mejora del currículum de informática. Diplomado en Dirección de Proyectos de TI con beca.',
        },
      },

      // University initiatives
      universityTitle: 'Iniciativas Universitarias',
      datalab: {
        title: 'Co-fundador de DataLab',
        content: "Junto a Diego Quezada, compañero de ramos de ML, realizamos una propuesta de laboratorio de ciencia de datos e inteligencia artificial para la universidad. Sentamos las bases del DataLab y solicitamos financiamiento a la alianza UTFSM-Scotiabank, lo que permitió posteriormente implementar un laboratorio en Campus Casa Central Valparaíso y Campus San Joaquín.",
      },
      research: {
        title: 'Ayudante de Investigación',
        content: "Fui invitado a participar de un proyecto de mejora de la carrera de ingeniería civil informática, donde realizamos entrevistas a estudiantes y profesores, analizamos los resultados y produjimos conclusiones y recomendaciones que posteriormente fueron utilizadas para mejorar la carrera.",
      },
      diploma: {
        title: 'Diplomado en Dirección de Proyectos de TI',
        content: "Gracias a una beca pude realizar un diplomado en dirección de proyectos de TI, lo que me permitió entrar al mundo laboral con una visión de gestión de proyectos y equipos que complementó muy bien mis intereses técnicos.",
      },
      softwareExpo: {
        title: '1er Lugar — Exposición de Software',
        content: "Lideré un equipo al 1er lugar entre 10 equipos en la XXIX Exposición de Software de la UTFSM (competencia anual de software de la universidad) — evaluada por construcción, profundidad técnica y presentación.",
      },

      // IEEE Experience
      ieeeTitle: 'Experiencia IEEE CAI 2025',
      ieeeContent: "Con Vasco Cortez trabajamos en una modificación al positional encoding de los transformers — adaptándolo para representar la distancia temporal real entre transacciones en una secuencia, en vez de solo su orden. Lo probamos en detección de fraude transaccional. El paper fue aceptado en IEEE CAI 2025 y lo presenté en Silicon Valley. La parte más útil no fue la charla en sí, sino las conversaciones de después: la investigación aplicada de ML es un mundo pequeño, y estar ahí en persona cambia lo que construyes el año siguiente.",

      // Technical Skills section
      skillsTitle: 'Habilidades Técnicas',
      skillCategories: {
        languages: 'Lenguajes',
        mlDl: 'ML / Deep Learning',
        cloudMlops: 'Cloud / MLOps',
        dataBi: 'Datos y BI',
        llmsAgents: 'LLMs / Agentes',
      },
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Proyectos académicos en deep learning, visión por computador, NLP, redes bayesianas y más. Seis corren como demos interactivas que puedes probar en el navegador; el resto vive como notebooks en GitHub.',
      viewProject: 'Ver Proyecto',
      tryDemo: 'Probar Demo',
      technologies: 'Tecnologías',
      objectives: 'Objetivos',
      conclusions: 'Conclusiones',
      viewOnGithub: 'Ver en GitHub',
      backToProjects: 'Volver a Proyectos',
      course: 'Curso',
      coAuthors: 'Co-autores',
      intro: 'Estos son proyectos académicos — los hice para meterme a fondo en las técnicas y los fundamentos. Los sistemas en producción que he construido profesionalmente (modelos de fraude, data warehouses, pipelines de MLOps) están aportando valor real, pero no puedo compartirlos aquí.',
      featuredTitle: 'Demos interactivas',
      featuredSubtitle: 'Haz clic en cualquiera y prueba el modelo tú mismo — corre en tu navegador, sin instalar nada.',
      othersTitle: 'Código y notebooks',
      othersSubtitle: 'Si prefieres ver qué hay debajo del capó, el notebook completo y el código están en GitHub.',
      categories: {
        all: 'Todos',
        'deep-learning': 'Deep Learning',
        'computer-vision': 'Visión por Computador',
        'nlp': 'NLP',
        'bayesian-networks': 'Redes Bayesianas',
        'clustering': 'Clustering',
        'graphs': 'Grafos',
        'generative-models': 'Modelos Generativos',
        'machine-learning': 'Machine Learning',
        'recommendation-systems': 'Sistemas de Recomendación',
      },
    },
    experience: {
      title: 'Trayectoria',
      subtitle: 'De Data Scientist en FlowPagos a CTO — y el recorrido entre ambos.',
    },
    publications: {
      title: 'Publicaciones',
      subtitle: 'Una publicación en conferencia de ML aplicado.',
      ieeeTitle: 'Transformers para Detección de Fraude: Codificación Posicional Temporal',
      ieeeDescription: 'Investigación sobre transformers para detección de fraude, proponiendo una modificación al positional encoding para representar distancia temporal entre transacciones. Presentado en IEEE CAI 2025 en Silicon Valley.',
      ieeeVenue: 'IEEE CAI 2025 - Silicon Valley',
      viewPaper: 'Ver Paper',
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Si estás trabajando en algo interesante de datos, IA o liderazgo técnico — conversemos sobre cómo puedo ayudarte.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      builtWith: 'Construido con Next.js & Tailwind CSS',
    },
  },
};

export type Language = keyof typeof translations;
export type TranslationKey = typeof translations.en | typeof translations.es;
