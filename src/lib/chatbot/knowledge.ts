/**
 * Curated knowledge base for the portfolio chatbot.
 *
 * The bot is restricted to answering ONLY from this KB. The system prompt
 * enforces "if it's not here, say you don't know and redirect to email".
 *
 * Bilingual content (EN + ES) — the model picks the right language based on
 * the user's last message. Keep both versions in sync when editing.
 *
 * This whole string is sent inside the system prompt with cache_control,
 * so it stays cached across turns and only pays the write premium once.
 */

export const KNOWLEDGE_BASE = `
# Kevin Reyes — Knowledge Base

## IDENTITY / IDENTIDAD

EN: Kevin Reyes is a Chilean technologist working at the intersection of data engineering, machine learning, and engineering leadership. He is currently CTO at FlowPagos, a payments platform, where he leads three technology teams — Software Development, Infrastructure, and Data & Analytics — totaling 25+ people.

ES: Kevin Reyes es un tecnólogo chileno que trabaja en la intersección de data engineering, machine learning y liderazgo de ingeniería. Actualmente es CTO en FlowPagos, una plataforma de pagos, donde lidera tres equipos de tecnología — Desarrollo de Software, Infraestructura y Datos y Analítica — sumando 25+ personas.

Location / Ubicación: Chile.
Languages / Idiomas: Spanish (native), English (professional).

---

## CAREER TIMELINE / TRAYECTORIA

### CTO at FlowPagos (Jul 2025 — Present / Presente)

EN: Leads three technology teams — Software Development, Infrastructure, and Data & Analytics — totaling 25+ people. Owns the technical roadmap and aligns it with business priorities. Stepped into the role after building and leading the data and analytics area as Data & Analytics Lead.

ES: Lidera tres equipos de tecnología — Desarrollo de Software, Infraestructura y Datos y Analítica — sumando 25+ personas. Es dueño del roadmap técnico y lo alinea con las prioridades del negocio. Asumió el rol después de construir y liderar el área de datos y analítica como Data & Analytics Lead.

### Data & Analytics Lead at FlowPagos (Jun 2024 — Jul 2025)

EN: Founded the data and analytics area from scratch — structure, processes, and a 4-person team. Co-authored the IEEE CAI 2025 transformer-for-fraud-detection paper. Built the standard AI repository (GitLab CI/CD, AWS CDK, SageMaker, FastAPI, EKS, LLM development with LangChain). Designed a multi-agent architecture for an enterprise chatbot (internal and customer-facing). Extended ML capabilities with SII (Chile) and SAT (Mexico) code classifiers and Jira-LLM automations.

ES: Fundó el área de datos y analítica desde cero — estructura, procesos y un equipo de 4 personas. Co-autor del paper de IEEE CAI 2025 sobre transformers para detección de fraude. Construyó el repositorio estándar de IA (CI/CD en GitLab, AWS CDK, SageMaker, FastAPI, EKS, desarrollo de LLMs con LangChain). Diseñó una arquitectura multiagente para un chatbot empresarial (uso interno y de cara a clientes). Extendió capacidades de ML con clasificadores de giro SII (Chile) y código SAT (México), y automatizaciones de Jira con LLMs.

### Data Scientist at FlowPagos (Jun 2022 — May 2024)

EN: Built the data warehouse with end-to-end incremental loading — cut load times and costs by 85%, handling millions of transactional records. Shipped the real-time fraud detection model (under 300ms, end-to-end to production). Led the BI platform's design and implementation, including data quality and dashboard usage monitoring. Built the MCC classifier for merchant onboarding and the ETL code generator for AWS Glue.

ES: Construyó el data warehouse con carga incremental end-to-end — redujo tiempos y costos de carga en 85%, manejando millones de registros transaccionales. Lanzó el modelo de detección de fraude en tiempo real (bajo 300ms, end-to-end hasta producción). Lideró el diseño e implementación de la plataforma de BI, incluyendo monitoreo de calidad de datos y de uso de paneles. Construyó el clasificador de MCC para onboarding de comercios y el generador de código de ETLs para AWS Glue.

### MLOps Consultant — Independent (Jan 2025 — Jul 2025 / Ene — Jul 2025)

EN: Designed and implemented MLOps pipelines on AWS SageMaker, automating the complete cycle: preprocessing, training, evaluation, deployment, and model monitoring.

ES: Diseñó e implementó pipelines de MLOps en AWS SageMaker, automatizando el ciclo completo: preprocesamiento, entrenamiento, evaluación, despliegue y monitoreo de modelos.

### Codelco — Thesis Student (Dec 2021 — May 2022 / Dic 2021 — May 2022)

EN: Built a neural network that predicted the SAG Mill's effective treatment 1 hour ahead with 4.38% MAPE on the test set — applied ML on mining operations data. This was his university thesis project.

ES: Construyó una red neuronal que predecía el tratamiento efectivo del Molino SAG con 1 hora de anticipación, logrando un MAPE de 4.38% en el conjunto de pruebas — ML aplicado a datos de operaciones mineras. Fue su memoria de título.

### Codelco — Engineering Specialist Intern (Jan — Mar 2020 / Ene — Mar 2020)

EN: Implemented the division's first BI dashboards — some used in daily analysis meetings — and trained 20+ workers in Power BI through an intensive theoretical-practical course. This was his professional internship.

ES: Implementó los primeros paneles de BI de la división — algunos usados en reuniones diarias de análisis — y capacitó a más de 20 trabajadores en Power BI mediante un curso intensivo teórico-práctico. Fue su práctica profesional.

### UTFSM University (2017 — 2022)

EN: Computer Science Engineering at Universidad Técnica Federico Santa María. Co-founded the DataLab initiative — a proposal for a data science and AI laboratory that secured UTFSM-Scotiabank funding and was implemented across both campuses (Casa Central Valparaíso and San Joaquín). Lab teaching assistant for Databases (data models, normalization, SQL, web development, query optimization, contributed to the official course gitbook). Research assistant on a CS curriculum improvement project. IT Project Management diploma via scholarship. 1st place at UTFSM's XXIX Software Exposition (annual university competition, 10 teams).

ES: Ingeniería Civil Informática en la Universidad Técnica Federico Santa María. Co-fundó la iniciativa DataLab — una propuesta de laboratorio de data science e IA que obtuvo financiamiento UTFSM-Scotiabank y se implementó en ambos campus (Casa Central Valparaíso y San Joaquín). Ayudante de laboratorio de Bases de Datos (modelos de datos, normalización, SQL, desarrollo web, optimización de queries, contribuyó al gitbook oficial). Ayudante de investigación en proyecto de mejora del currículum. Diplomado en Dirección de Proyectos de TI con beca. 1er lugar en la XXIX Exposición de Software UTFSM (competencia universitaria anual, 10 equipos).

---

## KEY ACHIEVEMENTS / LOGROS DESTACADOS

EN:
- **Data Warehouse**: 85% reduction in data loading time and costs at FlowPagos. Built a complete DW with new data model, ETLs, and end-to-end incremental loading. Includes an ETL code generator for AWS Glue.
- **Real-time Fraud Detection**: anomaly-detection-based model with <300ms response times, end-to-end production deployment.
- **BI Platform**: led design and implementation of FlowPagos' BI platform with high decision-making adoption. Built data quality monitoring and dashboard usage monitoring panels.
- **MLOps Standards**: implemented standard AI repository with GitLab CI/CD, AWS CDK, SageMaker pipelines, FastAPI/SageMaker endpoints, EKS deployment, pre-commit analysis, and LangChain LLM examples.
- **Multi-agent Chatbot Architecture**: designed for an enterprise customer-facing chatbot with multiple functionalities.
- **MCC Classifier**: streamlined merchant onboarding; later expanded to SII (Chile) and SAT (Mexico) codes.
- **IEEE Paper**: co-authored "Transformers for Fraud Detection: Temporal Positional Encoding" — accepted at IEEE CAI 2025, presented in Silicon Valley.
- **Team Leadership**: led 4-person team as Data & Analytics Lead; now leads three technology teams (25+ people in total) as CTO.

ES:
- **Data Warehouse**: 85% de reducción en tiempos y costos de carga en FlowPagos. DW completo con nuevo modelo de datos, ETLs y carga incremental end-to-end. Incluye generador de código de ETLs para AWS Glue.
- **Detección de Fraude en Tiempo Real**: modelo basado en detección de anomalías con tiempos de respuesta <300ms, despliegue end-to-end en producción.
- **Plataforma BI**: lideró el diseño e implementación de la plataforma de BI de FlowPagos con alta adopción en la toma de decisiones. Construyó paneles de monitoreo de calidad de datos y de uso de paneles.
- **Estándares MLOps**: repositorio estándar de IA con CI/CD GitLab, AWS CDK, pipelines SageMaker, endpoints FastAPI/SageMaker, despliegue EKS, análisis pre-commit y ejemplos LLM con LangChain.
- **Arquitectura Multi-agente**: chatbot empresarial de cara a clientes con múltiples funcionalidades.
- **Clasificador MCC**: agilizó onboarding de comercios; luego extendido a giro SII (Chile) y código SAT (México).
- **Paper IEEE**: co-autor de "Transformers for Fraud Detection: Temporal Positional Encoding" — aceptado en IEEE CAI 2025, presentado en Silicon Valley.
- **Liderazgo de Equipos**: lideró equipo de 4 personas como Data & Analytics Lead; ahora lidera tres equipos de tecnología (25+ personas en total) como CTO.

---

## TECHNICAL SKILLS / SKILLS TÉCNICOS

- **Languages / Lenguajes**: Python, SQL.
- **ML / DL**: TensorFlow, PyTorch, scikit-learn, transformers, anomaly detection, transfer learning, attention mechanisms.
- **Data Engineering**: AWS Glue, ETLs, data warehousing, incremental loading, data quality monitoring.
- **Cloud & MLOps**: AWS (SageMaker, CDK, EKS, Lambda), Docker, GitLab CI/CD, FastAPI.
- **BI**: Power BI, dashboards, decision-support analytics.
- **LLMs / Agents**: LangChain, multi-agent architectures, prompt engineering, RAG.

---

## IEEE PAPER / PAPER IEEE

EN: "Transformers for Fraud Detection: Temporal Positional Encoding" — co-authored with Vasco Cortez. Modifies the standard transformer positional encoding to represent the actual temporal distance between transactions in a sequence, rather than just their order. Tested on transactional fraud detection. Accepted at IEEE CAI 2025; Kevin presented it in Silicon Valley.

ES: "Transformers for Fraud Detection: Temporal Positional Encoding" — co-autoría con Vasco Cortez. Modifica el positional encoding estándar de transformers para representar la distancia temporal real entre transacciones en una secuencia, en lugar de solo su orden. Probado en detección de fraude transaccional. Aceptado en IEEE CAI 2025; Kevin lo presentó en Silicon Valley.

---

## LIVE INTERACTIVE DEMOS / DEMOS INTERACTIVAS EN VIVO

Six demos run directly in the browser, hosted on Hugging Face Spaces. Featured on the home page: signlang, monkeys-cam, attention-feelings, clustering-comparison.

EN summaries / ES resúmenes:

1. **Sign Language Recognition / Reconocimiento de Lenguaje de Señas** (signlang)
   EN: 3-block CNN trained on Sign Language MNIST. Recognizes 24 ASL alphabet letters (A-Y, no J/Z — they require motion). Webcam, upload, or pick a sample.
   ES: CNN de 3 bloques entrenada en Sign Language MNIST. Reconoce 24 letras del alfabeto ASL (A-Y, sin J/Z — requieren movimiento). Webcam, subir imagen o elegir muestra.

2. **Monkey Species Classifier with Grad-CAM / Clasificador de Especies de Monos con Grad-CAM** (monkeys-cam)
   EN: VGG16 transfer learning classifying 10 monkey species, with Grad-CAM heatmap showing what the model looks at.
   ES: Transfer learning con VGG16 clasificando 10 especies de monos, con heatmap Grad-CAM que muestra dónde mira el modelo.

3. **Sentiment with Attention Visualization / Sentimiento con Visualización de Atención** (attention-feelings)
   EN: Bidirectional LSTM with Bahdanau-style attention trained on IMDB movie reviews. Shows per-token attention heatmap revealing which words drove the decision.
   ES: LSTM bidireccional con atención Bahdanau entrenado en reseñas de IMDB. Muestra heatmap de atención por token revelando qué palabras impulsaron la decisión.

4. **Clustering Comparison / Comparación de Clustering** (clustering-comparison)
   EN: Side-by-side comparison of clustering algorithms (KMeans, DBSCAN, Hierarchical, etc.) on different toy datasets.
   ES: Comparación lado a lado de algoritmos de clustering (KMeans, DBSCAN, Jerárquico, etc.) en distintos datasets de juguete.

5. **Fashion Autoencoder** (fashion-autoencoder)
   EN: Three-tab demo of dense, convolutional, and denoising autoencoders trained on Fashion MNIST.
   ES: Demo de tres pestañas con autoencoders densos, convolucionales y de denoising entrenados en Fashion MNIST.

6. **Text Entities (NER) / Entidades de Texto (NER)** (text-entities)
   EN: Named Entity Recognition with spaCy's en_core_web_sm — extracts persons, organizations, locations, dates, etc.
   ES: Reconocimiento de Entidades Nombradas con spaCy en_core_web_sm — extrae personas, organizaciones, lugares, fechas, etc.

All demos have source code linked on GitHub (Portfolio-KRV organization). They run on free-tier HF Spaces and may take a few seconds to wake up on first visit.

---

## OTHER PORTFOLIO PROJECTS / OTROS PROYECTOS DEL PORTFOLIO

EN: Beyond the live demos, the portfolio contains ~15 additional academic projects across deep learning, computer vision, NLP, Bayesian networks, clustering, graphs, generative models, machine learning fundamentals, and recommendation systems. They live as notebooks and source code on GitHub. Examples: Heart Attack Prediction (Bayesian Networks), Credit Risk Assessment (Bayesian Networks with Hill-Climbing), Communities in Graphs (Louvain), Digital Nomads recommendation system, and more.

ES: Además de las demos en vivo, el portfolio contiene ~15 proyectos académicos adicionales en deep learning, computer vision, NLP, redes bayesianas, clustering, grafos, modelos generativos, fundamentos de ML y sistemas de recomendación. Viven como notebooks y código fuente en GitHub. Ejemplos: Predicción de Ataque Cardíaco (Redes Bayesianas), Evaluación de Riesgo Crediticio (Redes Bayesianas con Hill-Climbing), Comunidades en Grafos (Louvain), sistema de recomendación de Nómadas Digitales, y más.

These academic projects were built to go deep into techniques and fundamentals. The production systems Kevin shipped professionally (fraud models, data warehouses, MLOps pipelines) are confidential and not shared on the portfolio.

---

## CONTACT / CONTACTO

EN: The preferred contact channel is LinkedIn. Do NOT share or mention his email address — always direct visitors to LinkedIn for any contact, hiring, consulting, or collaboration question.

ES: El canal de contacto preferido es LinkedIn. NO compartas ni menciones su email — siempre redirige a los visitantes a LinkedIn para cualquier consulta de contacto, contratación, consultoría o colaboración.

- **LinkedIn**: https://linkedin.com/in/kevin-reyes-cs
- **GitHub (portfolio org)**: https://github.com/Portfolio-KRV
- **Site**: https://kevinreyesv.dev

---

## POSITIONING / POSICIONAMIENTO

EN: Kevin is open to conversations about interesting projects in data engineering, AI/ML, or technical leadership. He is not actively seeking employment — he's CTO at FlowPagos and committed there. But he's happy to talk about consulting (he ran independent MLOps consulting between Jan-Jul 2025), advisory, partnerships, or interesting collaborations. The way to reach him is LinkedIn (https://linkedin.com/in/kevin-reyes-cs) with specifics about the problem.

ES: Kevin está abierto a conversaciones sobre proyectos interesantes en data engineering, IA/ML o liderazgo técnico. No está buscando trabajo activamente — es CTO en FlowPagos y está comprometido ahí. Pero está disponible para hablar de consultoría (hizo consultoría independiente de MLOps entre enero-julio 2025), advisory, partnerships o colaboraciones interesantes. La forma de contactarlo es por LinkedIn (https://linkedin.com/in/kevin-reyes-cs) con detalles del problema.

---

## FAQ / PREGUNTAS FRECUENTES

**Q: Is Kevin available for hire? / ¿Kevin está disponible para contratar?**
EN: He's CTO at FlowPagos and not actively looking. He's open to consulting, advisory, or interesting collaborations — best path is LinkedIn with details: https://linkedin.com/in/kevin-reyes-cs
ES: Es CTO en FlowPagos y no está buscando activamente. Está abierto a consultoría, advisory o colaboraciones interesantes — el mejor camino es LinkedIn con detalles: https://linkedin.com/in/kevin-reyes-cs

**Q: Where is he based? / ¿Dónde vive?**
EN/ES: Chile.

**Q: What's his strongest skill? / ¿Cuál es su skill más fuerte?**
EN: He works at the intersection of three areas — data engineering, ML/AI, and engineering leadership. The combination is what's distinctive: he's shipped production fraud detection AND built data warehouses AND now runs an engineering org of 25+ people across three teams. Most people specialize in one of these; he operates across all three.
ES: Trabaja en la intersección de tres áreas — data engineering, ML/IA y liderazgo de ingeniería. La combinación es lo distintivo: ha lanzado detección de fraude en producción Y construido data warehouses Y ahora dirige una gerencia de tecnología de 25+ personas en tres equipos. La mayoría se especializa en una de estas; él opera en las tres.

**Q: Can I see his production code? / ¿Puedo ver su código de producción?**
EN: No — production work at FlowPagos (fraud models, DW, MLOps pipelines) is confidential. The portfolio shows academic projects that demonstrate the techniques. For production-relevant questions, LinkedIn is the path.
ES: No — el trabajo en producción en FlowPagos (modelos de fraude, DW, pipelines MLOps) es confidencial. El portfolio muestra proyectos académicos que demuestran las técnicas. Para preguntas sobre producción, el camino es LinkedIn.

**Q: What languages does he speak? / ¿Qué idiomas habla?**
EN/ES: Spanish (native / nativo), English (professional working proficiency / nivel profesional).

**Q: How do I try the demos? / ¿Cómo pruebo las demos?**
EN: Click any demo card on the home page or /projects. They run on Hugging Face Spaces — free tier, so first load may take a few seconds to wake up.
ES: Click en cualquier card de demo en la home o /projects. Corren en Hugging Face Spaces — tier gratuito, así que la primera carga puede demorar unos segundos en despertar.

**Q: What's the IEEE paper about? / ¿De qué trata el paper de IEEE?**
EN: A modification to transformer positional encoding so it represents temporal distance between transactions, not just sequence order. Tested on fraud detection. Co-authored with Vasco Cortez, presented at IEEE CAI 2025 in Silicon Valley.
ES: Una modificación al positional encoding de transformers para que represente la distancia temporal entre transacciones, no solo el orden de secuencia. Probada en detección de fraude. Co-autoría con Vasco Cortez, presentado en IEEE CAI 2025 en Silicon Valley.
`.trim();
