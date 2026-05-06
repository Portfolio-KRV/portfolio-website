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
      tagline: 'Data, models, and the engineering teams behind them',
      description: "From building a data warehouse that cut load times by 85% at a payments platform, to leading an AI roadmap that shipped real-time fraud detection under 300ms, to running the technology strategy as CTO — four years and three roles.",
      viewProjects: 'View Projects',
      aboutMe: 'About Me',
      available: 'Available for opportunities',
      yearsExp: 'Years Experience',
      teamSize: 'People Led',
      published: 'Paper Published 2025',
      techStack: 'Tech Stack',
      scroll: 'Scroll',
      liveDemosLabel: 'Interactive demos',
      liveDemosTagline: 'Pick one and try it — they run in your browser, no setup.',
      tryDemo: 'Try',
      seeAllProjects: 'See all projects',
    },
    about: {
      title: 'About Me',
      intro: "I work at the intersection of data engineering, ML, and team leadership. My background spans building production fraud detection on real transactional data, designing data warehouses that compressed months of legacy work, and leading the technical roadmap of a 25-person organization. I'm drawn to systems-level questions: how data flows shape decisions, how teams compound over time, what keeps a platform — software, data, and infrastructure — quietly reliable.",
      hook: "From the first BI dashboards at a mining division to presenting transformer research at IEEE in Silicon Valley — and now leading technology at a payments platform. I work where data, models, and engineering teams meet.",

      // Current Role
      currentRole: 'Current Role',
      currentRoleContent: "CTO at FlowPagos since July 2025. I lead a 25-person organization across Software Development, Infrastructure, and Data & Analytics — owning the technical roadmap and aligning it with business priorities. Stepped into the role after building and leading the data and analytics area as Data & Analytics Lead.",

      // Achievements section
      achievements: 'Key Achievements',
      dataEngineering: {
        title: 'Data Warehouse & ETL Architecture',
        content: "Built a complete data warehouse with a new data model, new ETLs, and end-to-end incremental loading, achieving an 85% reduction in data loading time and equivalent cost reduction—even while moving more data and useful business information. The DW covers the main business data domains and consolidates information from different databases and platforms. I also implemented an ETL code generator for AWS Glue that significantly accelerated development while following standards and best practices.",
      },
      bi: {
        title: 'Business Intelligence Platform',
        content: "Led the design and implementation of a new BI platform with dashboards covering the most relevant information domains for business decisions, achieving significant adoption in decision-making. I also built an internal data quality monitoring dashboard and a BI dashboard usage monitoring panel, establishing continuous improvement of dashboards based on usage data. During my professional internship at Codelco, I implemented the division's first BI dashboards, some used in daily analysis meetings, and trained over 20 workers in Power BI design and implementation.",
      },
      ml: {
        title: 'Machine Learning & AI',
        content: "Implemented a real-time transactional fraud detection model based on anomaly detection, achieving response times under 300ms. I completed the entire project development: experimentation, results analysis, production deployment, real-time and batch data processing, and endpoint deployment. I also developed an MCC classifier to streamline merchant onboarding, and later expanded it to classify SII codes (Chile) and SAT codes (Mexico). Additionally, I designed a multi-agent architecture for an enterprise customer-facing chatbot with multiple functionalities.",
      },
      mlops: {
        title: 'MLOps & Development Standards',
        content: "Implemented a standard repository for AI project development with base CI/CD pipelines (GitLab) including Jira approval verification, quality tests, static code analysis, and automated deployment to AWS using AWS CDK. It includes example software with SageMaker pipelines, FastAPI and/or SageMaker endpoints, deployment to SageMaker or Kubernetes with EKS, pre-commit change analysis, and infrastructure as code with AWS CDK. I also included an example of LLM development with LangChain, and provided consulting on MLOps pipeline design and implementation.",
      },
      leadership: {
        title: 'Team & Area Leadership',
        content: "As Data and Analytics leader, I led a team of 4 people, executing data engineering, BI, and AI projects. I created team instances that built strong cohesion, established a standardized quarterly feedback process, and conducted hiring processes. I also implemented Jira automation to improve and standardize descriptions for different requirement types using LLMs, along with various other automations to improve and streamline project management.",
      },

      // My Approach section
      approachTitle: 'My Approach',
      approach: "I work problem-first, not tool-first. The choice of stack, model, or pattern is downstream of understanding what's actually broken and which constraint matters most. The same lens travels well across technical and people problems: a team's quarterly priorities and an ETL's bottleneck both reward whoever diagnoses before prescribing.",

      // What drives me
      drivesTitle: 'What Drives Me',
      drives: "What keeps pulling me is depth and breadth at the same time. The year I'm tuning a transformer for fraud detection is also the year I'm reorganizing how a team prioritizes its quarter. The two muscles feed each other: engineering taste sharpens leadership decisions, and operational reality sharpens the technical ones.",

      // Career Journey
      careerTitle: 'Career Journey',
      career: {
        flowCto: {
          title: 'CTO',
          period: 'FlowPagos · Jul 2025 — Present',
          roles: '',
          description: "Lead a 25-person organization across Software Development, Infrastructure, and Data & Analytics. Define the technical roadmap and align team capabilities with business priorities. Stepped into the role after building and leading the data and analytics area as Data & Analytics Lead.",
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
    },
    projects: {
      title: 'Projects',
      subtitle: 'Academic projects across deep learning, computer vision, NLP, Bayesian networks, and more. Five ship as interactive demos you can try in the browser; the rest live as notebooks on GitHub.',
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
      subtitle: 'Conference contributions to applied ML.',
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
      tagline: 'Datos, modelos, y los equipos de ingeniería detrás de ellos',
      description: "De construir un data warehouse que redujo los tiempos de carga en 85% en una plataforma de pagos, a liderar un roadmap de IA que lanzó detección de fraude en tiempo real bajo 300ms, a correr la estrategia tecnológica como CTO — cuatro años y tres roles.",
      viewProjects: 'Ver Proyectos',
      aboutMe: 'Sobre Mí',
      available: 'Disponible para oportunidades',
      yearsExp: 'Años de Experiencia',
      teamSize: 'Personas Lideradas',
      published: 'Paper Publicado 2025',
      techStack: 'Stack Tecnológico',
      scroll: 'Desplazar',
      liveDemosLabel: 'Demos interactivas',
      liveDemosTagline: 'Elige una y pruébala — corre en tu navegador, sin instalar nada.',
      tryDemo: 'Probar',
      seeAllProjects: 'Ver todos los proyectos',
    },
    about: {
      title: 'Sobre Mí',
      intro: "Trabajo en la intersección de data engineering, ML y liderazgo de equipos. Mi experiencia incluye construir detección de fraude en producción sobre datos transaccionales reales, diseñar data warehouses que comprimieron meses de trabajo legacy, y liderar el roadmap técnico de una organización de 25 personas. Me interesan las preguntas a nivel de sistema: cómo los flujos de datos moldean decisiones, cómo los equipos componen valor en el tiempo, qué hace que una plataforma — software, datos e infraestructura — sea silenciosamente confiable.",
      hook: "Desde los primeros paneles de BI en una división minera hasta presentar investigación con transformers en IEEE en Silicon Valley — y ahora liderando la tecnología en una plataforma de pagos. Trabajo donde se encuentran los datos, los modelos y los equipos de ingeniería.",

      // Current Role
      currentRole: 'Rol Actual',
      currentRoleContent: "CTO en FlowPagos desde julio de 2025. Lidero una organización de 25 personas que abarca Desarrollo de Software, Infraestructura y Datos y Analítica — siendo dueño del roadmap técnico y alineándolo con las prioridades del negocio. Asumí el rol después de construir y liderar el área de datos y analítica como Data & Analytics Lead.",

      // Achievements section
      achievements: 'Logros Destacados',
      dataEngineering: {
        title: 'Data Warehouse y Arquitectura ETL',
        content: "Construí un data warehouse completo con un nuevo modelo de datos, nuevas ETLs y carga incremental end-to-end, logrando una reducción del 85% en tiempo de carga de datos y una reducción de costos equivalente—incluso moviendo más datos e información útil para el negocio. El DW abarca los principales dominios de datos relevantes para el negocio y consolida información de distintas bases de datos y plataformas. También implementé un generador de código de ETLs para AWS Glue que aceleró considerablemente el desarrollo siguiendo estándares y buenas prácticas.",
      },
      bi: {
        title: 'Plataforma de Business Intelligence',
        content: "Lideré el diseño e implementación de una nueva plataforma de BI con paneles que abarcan los dominios de información más relevantes para las decisiones de negocio, logrando una importante adopción en la toma de decisiones. También construí un panel interno de monitoreo de calidad de datos y otro de monitoreo de uso de paneles de BI, instalando la mejora continua de los paneles basada en datos de uso. En mi práctica profesional en Codelco, implementé los primeros paneles de BI de la división, algunos utilizados en reuniones diarias de análisis, y capacité a más de 20 trabajadores en diseño e implementación de Power BI.",
      },
      ml: {
        title: 'Machine Learning e IA',
        content: "Implementé un modelo de detección de fraude transaccional basado en detección de anomalías en tiempo real logrando tiempos de respuesta menores a 300ms. Hice el desarrollo completo del proyecto: experimentación, análisis de resultados, puesta en producción, procesamiento de datos en tiempo real y batch, y despliegue de endpoints. También desarrollé un clasificador de MCC para agilizar el onboarding de comercios, y posteriormente lo expandí para clasificar giro SII (Chile) y código SAT (México). Además, diseñé una arquitectura multiagente para un chatbot empresarial de cara a clientes con múltiples funcionalidades.",
      },
      mlops: {
        title: 'MLOps y Estándares de Desarrollo',
        content: "Implementé un repositorio estándar para desarrollo de proyectos de IA con pipelines CI/CD base (GitLab) que incluyen verificación de aprobaciones en Jira, tests de calidad, análisis estático de código y despliegue automatizado a AWS usando AWS CDK. Incluye software de ejemplo con pipelines de SageMaker, endpoints con FastAPI y/o SageMaker, despliegue a SageMaker o Kubernetes con EKS, análisis de cambios con pre-commit, e infraestructura como código con AWS CDK. También incluí un ejemplo de desarrollo de LLM con LangChain, y realicé consultoría en diseño e implementación de pipelines de MLOps.",
      },
      leadership: {
        title: 'Liderazgo de Equipos y Áreas',
        content: "Como líder de Datos y Analítica, lideré un equipo de 4 personas, ejecutando proyectos de ingeniería de datos, BI e IA. Generé instancias de equipo que nos cohesionaron mucho, establecí un proceso de feedback trimestral estandarizado, y conduje procesos de contratación. También implementé automatización de Jira para mejorar y estandarizar descripciones de distintos tipos de requerimientos con ayuda de LLMs, además de otras automatizaciones para mejorar y agilizar la gestión de proyectos.",
      },

      // My Approach section
      approachTitle: 'Mi Enfoque',
      approach: "Trabajo desde el problema, no desde la herramienta. Qué stack, modelo o patrón se elige viene después de entender qué está realmente roto y qué restricción pesa más. Esa misma lente funciona bien en problemas técnicos y humanos: las prioridades trimestrales de un equipo y el cuello de botella de una ETL premian igual a quien diagnostica antes de prescribir.",

      // What drives me
      drivesTitle: 'Lo que Me Motiva',
      drives: "Lo que me sigue moviendo es la profundidad y la amplitud al mismo tiempo. El año que ajusto un transformer para detección de fraude es también el año que reorganizo cómo un equipo prioriza su trimestre. Los dos músculos se alimentan: el criterio de ingeniería afila las decisiones de liderazgo, y la realidad operacional afila las técnicas.",

      // Career Journey
      careerTitle: 'Trayectoria Profesional',
      career: {
        flowCto: {
          title: 'CTO',
          period: 'FlowPagos · Jul 2025 — Presente',
          roles: '',
          description: "Lidero una organización de 25 personas que abarca Desarrollo de Software, Infraestructura y Datos y Analítica. Defino el roadmap técnico y alineo las capacidades del equipo con las prioridades del negocio. Asumí el rol después de construir y liderar el área de datos y analítica como Data & Analytics Lead.",
        },
        flowLead: {
          title: 'Data & Analytics Lead',
          period: 'FlowPagos · Jun 2024 — Jul 2025',
          roles: '',
          description: "Fundé el área de datos y analítica desde cero — estructura, procesos y un equipo de 4 personas. Co-autor del paper de IEEE CAI 2025 sobre transformers para detección de fraude. Construí el repositorio estándar de IA (CI/CD en GitLab, AWS CDK, SageMaker, FastAPI, EKS, desarrollo de LLMs con LangChain). Diseñé una arquitectura multiagente para un chatbot empresarial (uso interno y de cara a clientes). Extendí capacidades de ML con clasificadores de giro SII (Chile) y código SAT (México), y automatizaciones de Jira con LLMs.",
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
        content: "Lideré un equipo al 1er lugar entre 10 equipos en la XXIX Exposición de Software de la UTFSM (competencia anual de software de la universidad) — evaluada sobre build, profundidad técnica y presentación.",
      },

      // IEEE Experience
      ieeeTitle: 'Experiencia IEEE CAI 2025',
      ieeeContent: "Con Vasco Cortez trabajamos en una modificación al positional encoding de los transformers — adaptándolo para representar la distancia temporal real entre transacciones en una secuencia, en vez de solo su orden. Lo probamos en detección de fraude transaccional. El paper fue aceptado en IEEE CAI 2025 y lo presenté en Silicon Valley. La parte más útil no fue la charla en sí, sino las conversaciones de después: la investigación aplicada de ML es un mundo pequeño, y estar ahí en persona cambia lo que construyes el año siguiente.",
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Proyectos académicos en deep learning, visión por computador, NLP, redes bayesianas y más. Cinco corren como demos interactivas que puedes probar en el navegador; el resto vive como notebooks en GitHub.',
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
      subtitle: 'De Data Scientist en FlowPagos a CTO — y el camino entre medio.',
    },
    publications: {
      title: 'Publicaciones',
      subtitle: 'Trabajo en conferencias de ML aplicado.',
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
