export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      publications: 'Publications',
      contact: 'Contact',
    },
    home: {
      greeting: "Hi, I'm",
      name: 'Kevin Reyes',
      role: 'CTO at FlowPagos',
      tagline: 'Leadership | Data Science | Project Management | MLOps',
      description: 'Before choosing a tool or technology, I think about how to solve the problem conceptually. This approach has allowed me to build everything from data warehouses that reduced time and costs by 85%, to real-time fraud detection models with responses under 300ms.',
      viewProjects: 'View Projects',
      aboutMe: 'About Me',
      available: 'Available for opportunities',
      yearsExp: 'Years Experience',
      teamSize: 'People Led',
      published: 'Published',
      techStack: 'Tech Stack',
      scroll: 'Scroll',
      liveDemosLabel: 'Interactive demos',
      liveDemosTagline: 'Pick one and try it — they run in your browser, no setup.',
      tryDemo: 'Try',
      seeAllProjects: 'See all projects',
    },
    about: {
      title: 'About Me',
      intro: "I have a profile that combines technical excellence with well-developed interpersonal skills. My ability to communicate complex ideas clearly and translate technical relevance into business value has been key in my career. Before focusing on any tool or technology, I always think about how to solve problems conceptually—then I apply the available tools on top of that foundation.",
      hook: "I'm passionate about building things that matter: scalable data systems, intelligent models, and high-performing teams. My journey has taken me from building the first BI dashboards at a mining division to presenting research at IEEE in Silicon Valley, and now leading technology strategy as CTO.",

      // Current Role
      currentRole: 'Current Role',
      currentRoleContent: "As CTO at FlowPagos, I lead the technology strategy of a team of over 25 people across three areas: Software Development, Infrastructure, and Data & Analytics. I define the technical roadmap and align team capabilities with business objectives. I've been in this role for 6 months, so I consider it early to talk about results, but I'm focused on building a solid technological foundation for the company's growth.",

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
      approach: "More than focusing on a specific tool, technology, or technical topic, I always think about how to solve problems conceptually first. My passion for improving things and achieving the best results spans from technical aspects to business matters. I believe many ideas that apply at a technical level are also useful when applied at a human level, and vice versa. I tend to have a process-focused view, but rather than adjusting reality to fit the structure, I prefer to unravel the structure of reality and optimize from there.",

      // What drives me
      drivesTitle: 'What Drives Me',
      drives: "I'm passionate about both the technical side and leading teams, managing projects, and understanding the business. I'm always looking for opportunities for improvement and impact in any of these dimensions. I love challenges and learning new things—this has been a constant throughout my career, from building data warehouses to presenting research at international conferences.",

      // Career Journey
      careerTitle: 'Career Journey',
      career: {
        flow: {
          title: 'FlowPagos',
          period: '2021 - Present',
          roles: 'CTO → Data & Analytics Lead → Data Scientist',
          description: "I've grown from Data Scientist to CTO at this payments platform company. Built the data infrastructure, led AI initiatives, and now oversee all technology strategy.",
        },
        consulting: {
          title: 'MLOps Consulting',
          period: 'Jan 2025 - Jul 2025',
          roles: 'Independent Consultant',
          description: 'Designed and implemented MLOps pipelines on AWS SageMaker, automating the complete cycle: preprocessing, training, evaluation, deployment, and model monitoring.',
        },
        codelco: {
          title: 'Codelco',
          period: '2019 - 2020',
          roles: 'Professional Internship & Thesis',
          description: "Implemented the division's first BI dashboards and trained 20+ workers in Power BI. Developed my engineering thesis focused on data-driven decision making.",
        },
        university: {
          title: 'UTFSM University',
          period: '2015 - 2020',
          roles: 'Computer Science Engineering',
          description: 'Research Assistant and co-founder of DataLab initiative. Completed a diploma in IT Project Management through a scholarship.',
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

      // IEEE Experience
      ieeeTitle: 'IEEE CAI 2025 Experience',
      ieeeContent: "I conducted research on transformer neural networks applied to transactional fraud detection. In the paper, together with Vasco Cortez, we proposed a modification to positional encoding to adapt it to an explicit representation of temporal distance between transactions in a sequence of interest. We submitted it to IEEE CAI 2025 and it was accepted. I traveled to Silicon Valley to present it, which was an enriching experience from many perspectives.",
    },
    projects: {
      title: 'Projects',
      subtitle: 'Explore my machine learning and data science projects. Each project showcases different techniques and approaches—from deep learning and computer vision to NLP and Bayesian networks. These represent my academic work and continuous learning journey.',
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
    publications: {
      title: 'Publications',
      subtitle: 'Research papers and academic contributions',
      ieeeTitle: 'Transformers for Fraud Detection: Temporal Positional Encoding',
      ieeeDescription: 'Research on transformers for fraud detection, proposing a modification to positional encoding to represent temporal distance between transactions. Presented at IEEE CAI 2025 in Silicon Valley.',
      ieeeVenue: 'IEEE CAI 2025 - Silicon Valley',
      viewPaper: 'View Paper',
    },
    contact: {
      title: 'Contact',
      subtitle: "Let's connect! Feel free to reach out through any of these channels.",
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
      projects: 'Proyectos',
      publications: 'Publicaciones',
      contact: 'Contacto',
    },
    home: {
      greeting: 'Hola, soy',
      name: 'Kevin Reyes',
      role: 'CTO en FlowPagos',
      tagline: 'Liderazgo | Data Science | Gestión de Proyectos | MLOps',
      description: 'Antes de elegir una herramienta o tecnología, pienso en cómo resolver el problema de manera conceptual. Esa forma de trabajar me ha permitido construir desde data warehouses que redujeron tiempos y costos en 85%, hasta modelos de detección de fraude en tiempo real con respuestas bajo 300ms.',
      viewProjects: 'Ver Proyectos',
      aboutMe: 'Sobre Mí',
      available: 'Disponible para oportunidades',
      yearsExp: 'Años de Experiencia',
      teamSize: 'Personas Lideradas',
      published: 'Publicado',
      techStack: 'Stack Tecnológico',
      scroll: 'Desplazar',
      liveDemosLabel: 'Demos interactivas',
      liveDemosTagline: 'Elige una y pruébala — corre en tu navegador, sin instalar nada.',
      tryDemo: 'Probar',
      seeAllProjects: 'Ver todos los proyectos',
    },
    about: {
      title: 'Sobre Mí',
      intro: "Tengo un perfil que combina excelencia técnica con habilidades interpersonales bien desarrolladas. Mi capacidad para comunicar ideas complejas de manera clara y traducir la relevancia técnica a valor de negocio ha sido clave en mi carrera. Antes de centrarme en cualquier herramienta o tecnología, siempre pienso en cómo resolver los problemas de manera conceptual—luego sobre eso aplico las distintas herramientas disponibles.",
      hook: "Me apasiona construir cosas que importan: sistemas de datos escalables, modelos inteligentes y equipos de alto rendimiento. Mi camino me ha llevado desde construir los primeros paneles de BI en una división minera hasta presentar investigación en IEEE en Silicon Valley, y ahora liderar la estrategia tecnológica como CTO.",

      // Current Role
      currentRole: 'Rol Actual',
      currentRoleContent: "Como CTO en FlowPagos, lidero la estrategia de tecnología de un equipo de más de 25 personas en tres áreas: Desarrollo de Software, Infraestructura, y Datos y Analítica. Defino el roadmap técnico y alineo las capacidades del equipo con los objetivos del negocio. Llevo 6 meses en el cargo, así que considero que es pronto para hablar de resultados, pero estoy enfocado en construir una base tecnológica sólida para el crecimiento de la empresa.",

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
      approach: "Más que centrarme en una herramienta, tecnología o tema técnico específico, siempre pienso primero en cómo resolver los problemas de manera conceptual. Mi pasión por mejorar las cosas y llegar al mejor resultado va desde lo técnico hasta lo de negocio. Creo que muchas de las ideas que se aplican a nivel técnico también son útiles cuando se llevan a nivel humano y viceversa. Suelo tener una mirada muy enfocada en los procesos, pero más que ajustar la realidad a la estructura, prefiero desentrañar la estructura de la realidad y a partir de ahí optimizar.",

      // What drives me
      drivesTitle: 'Lo que Me Motiva',
      drives: "Me apasiona tanto el lado técnico como liderar equipos, gestionar proyectos y entender el negocio. Siempre busco oportunidades de mejora e impacto en cualquiera de estas dimensiones. Me encantan los desafíos y aprender cosas nuevas—esto ha sido una constante a lo largo de mi carrera, desde construir data warehouses hasta presentar investigación en conferencias internacionales.",

      // Career Journey
      careerTitle: 'Trayectoria Profesional',
      career: {
        flow: {
          title: 'FlowPagos',
          period: '2021 - Presente',
          roles: 'CTO → Líder de Datos y Analítica → Data Scientist',
          description: "He crecido desde Data Scientist hasta CTO en esta empresa de plataforma de pagos. Construí la infraestructura de datos, lideré iniciativas de IA, y ahora superviso toda la estrategia tecnológica.",
        },
        consulting: {
          title: 'Consultoría MLOps',
          period: 'Ene 2025 - Jul 2025',
          roles: 'Consultor Independiente',
          description: 'Diseñé e implementé pipelines de MLOps en AWS SageMaker, automatizando el ciclo completo: preprocesamiento, entrenamiento, evaluación, despliegue y monitoreo de modelos.',
        },
        codelco: {
          title: 'Codelco',
          period: '2019 - 2020',
          roles: 'Práctica Profesional y Memoria',
          description: "Implementé los primeros paneles de BI de la división y capacité a más de 20 trabajadores en Power BI. Desarrollé mi memoria de ingeniería enfocada en toma de decisiones basada en datos.",
        },
        university: {
          title: 'Universidad UTFSM',
          period: '2015 - 2020',
          roles: 'Ingeniería Civil Informática',
          description: 'Ayudante de Investigación y co-fundador de la iniciativa DataLab. Completé un diplomado en Dirección de Proyectos de TI gracias a una beca.',
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

      // IEEE Experience
      ieeeTitle: 'Experiencia IEEE CAI 2025',
      ieeeContent: "Realicé una investigación sobre redes neuronales transformer aplicadas a la detección de fraude transaccional. En el paper, junto a Vasco Cortez, propusimos una modificación al positional encoding para adaptarlo a una representación explícita de la distancia temporal entre las transacciones en una secuencia de interés. Lo postulamos al IEEE CAI 2025 y fue aceptado. Viajé a Silicon Valley a presentarlo, lo que fue una experiencia muy enriquecedora desde distintos puntos de vista.",
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Explora mis proyectos de machine learning y ciencia de datos. Cada proyecto muestra diferentes técnicas y enfoques—desde deep learning y visión por computador hasta NLP y redes bayesianas. Estos representan mi trabajo académico y mi camino de aprendizaje continuo.',
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
    publications: {
      title: 'Publicaciones',
      subtitle: 'Papers de investigación y contribuciones académicas',
      ieeeTitle: 'Transformers para Detección de Fraude: Codificación Posicional Temporal',
      ieeeDescription: 'Investigación sobre transformers para detección de fraude, proponiendo una modificación al positional encoding para representar distancia temporal entre transacciones. Presentado en IEEE CAI 2025 en Silicon Valley.',
      ieeeVenue: 'IEEE CAI 2025 - Silicon Valley',
      viewPaper: 'Ver Paper',
    },
    contact: {
      title: 'Contacto',
      subtitle: '¡Conectemos! No dudes en contactarme a través de cualquiera de estos canales.',
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
