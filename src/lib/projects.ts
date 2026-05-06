import { Project, ProjectCategory } from '@/types';

interface ProjectData {
  slug: string;
  title: { en: string; es: string };
  description: { en: string; es: string };
  objectives: { en: string[]; es: string[] };
  conclusions: { en: string[]; es: string[] };
  technologies: string[];
  category: ProjectCategory;
  githubUrl: string;
  hasDemoAvailable: boolean;
  featuredOnHome?: boolean;
  coAuthors?: string[];
  course: { en: string; es: string };
}

export const projectsData: ProjectData[] = [
  {
    slug: 'heartattack',
    title: { en: 'Heart Attack Prediction', es: 'Predicción de Ataque Cardíaco' },
    description: {
      en: 'Bayesian Network Model applied to the prediction of a heart attack using variable elimination methods.',
      es: 'Modelo de Red Bayesiana aplicado a la predicción de ataques cardíacos usando métodos de eliminación de variables.',
    },
    objectives: {
      en: [
        'Predict the probability of suffering a heart attack using Bayesian Networks.',
        'Apply variable elimination method on a directed acyclic graph and compare the result with the methods implemented in pgmpy.',
      ],
      es: [
        'Predecir la probabilidad de sufrir un ataque cardíaco usando Redes Bayesianas.',
        'Aplicar el método de eliminación de variables en un grafo acíclico dirigido y comparar el resultado con los métodos implementados en pgmpy.',
      ],
    },
    conclusions: {
      en: [
        'The probability of heart attack for a smoker is 57.5%, and increases to 62.75% when combined with high cholesterol.',
        'The probability of having high blood pressure given a heart attack is 91.25%.',
        'Manual calculations using variable elimination matched pgmpy library results exactly, validating the implementation.',
        'Finding the optimal ordering of summations over hidden variables is an NP-HARD problem, requiring heuristics like min-neighbors.',
      ],
      es: [
        'La probabilidad de ataque cardíaco para un fumador es 57.5%, y aumenta a 62.75% cuando se combina con colesterol alto.',
        'La probabilidad de tener presión arterial alta dado un ataque cardíaco es 91.25%.',
        'Los cálculos manuales usando eliminación de variables coincidieron exactamente con los resultados de la librería pgmpy, validando la implementación.',
        'Encontrar el ordenamiento óptimo de las sumatorias sobre las variables ocultas es un problema NP-HARD, requiriendo heurísticas como min-neighbors.',
      ],
    },
    technologies: ['Pgmpy', 'FastAPI', 'Python', 'Pandas', 'NumPy'],
    category: 'bayesian-networks',
    githubUrl: 'https://github.com/Portfolio-KRV/heartattack',
    hasDemoAvailable: false,    course: { en: 'Introduction to Data Science', es: 'Introducción a la Ciencia de Datos' },
  },
  {
    slug: 'credit-risk',
    title: { en: 'Credit Risk Assessment', es: 'Evaluación de Riesgo Crediticio' },
    description: {
      en: 'Bayesian network model for credit risk prediction using Hill-Climbing algorithm and BICScore method.',
      es: 'Modelo de red bayesiana para predicción de riesgo crediticio usando algoritmo Hill-Climbing y método BICScore.',
    },
    objectives: {
      en: [
        'Identify risk clients when granting loans using Bayesian Networks.',
        'Find optimal structure of the Bayesian network using Hill-Climbing algorithm and BICScore method.',
        'Manually improve network structure so that it is consistent with the business context.',
      ],
      es: [
        'Identificar clientes de riesgo al otorgar préstamos usando Redes Bayesianas.',
        'Encontrar la estructura óptima de la red bayesiana usando algoritmo Hill-Climbing y método BICScore.',
        'Mejorar manualmente la estructura de la red para que sea consistente con el contexto de negocio.',
      ],
    },
    conclusions: {
      en: [
        'Historical credit evaluation is the strongest risk predictor: ECH=0 (Very Poor) yields 64.5% high risk probability vs ECH=4 (Excellent) at only 18.8%.',
        'The connections found by Hill-climbing with BICScore make sense in the data context, though some causality directions are reversed.',
        'Loans with duration 24-72 months have 52.2% high risk probability, significantly higher than shorter terms.',
        'Automated Bayesian network construction is a good starting point but must be analyzed under business experience.',
      ],
      es: [
        'La evaluacion crediticia historica es el predictor mas fuerte: ECH=0 (Muy Malo) genera 64.5% de probabilidad de alto riesgo vs ECH=4 (Excelente) con solo 18.8%.',
        'Las conexiones encontradas por Hill-climbing con BICScore tienen sentido en el contexto de los datos, aunque algunas direcciones de causalidad estan invertidas.',
        'Los prestamos con duracion 24-72 meses tienen 52.2% de probabilidad de alto riesgo, significativamente mayor que plazos mas cortos.',
        'La construccion automatizada de redes bayesianas es un buen punto de partida pero debe analizarse bajo la experiencia de negocio.',
      ],
    },
    technologies: ['Pgmpy', 'FastAPI', 'Networkx', 'Pandas', 'NumPy', 'Matplotlib'],
    category: 'bayesian-networks',
    githubUrl: 'https://github.com/Portfolio-KRV/credit-risk',
    hasDemoAvailable: false,    course: { en: 'Introduction to Data Science', es: 'Introducción a la Ciencia de Datos' },
  },
  {
    slug: 'signlang',
    title: { en: 'Sign Language Recognition', es: 'Reconocimiento de Lenguaje de Señas' },
    description: {
      en: 'Evaluation of convolutional neural network models for sign language recognition using batch normalization and data augmentation.',
      es: 'Evaluación de modelos de redes neuronales convolucionales para reconocimiento de lenguaje de señas usando batch normalization y data augmentation.',
    },
    objectives: {
      en: [
        'Recognize letters from images with sign language symbols using CNNs.',
        'Identify pairs of conflicting symbols when making predictions.',
        'Compare performance of different CNN architectures with and without Batch Normalization.',
      ],
      es: [
        'Reconocer letras desde imágenes con símbolos de lenguaje de señas usando CNNs.',
        'Identificar pares de símbolos conflictivos al hacer predicciones.',
        'Comparar el rendimiento de diferentes arquitecturas CNN con y sin Batch Normalization.',
      ],
    },
    conclusions: {
      en: [
        'The CNN achieved over 99% accuracy on the test set for 24-class classification.',
        'The most confused sign pairs are N-S and C-O, despite not being visually similar.',
        'Data augmentation (rotation, zoom, shift) improved generalization by 3-5%.',
        'Batch normalization improved numerical stability but did not increase accuracy.',
      ],
      es: [
        'La CNN alcanzó más del 99% de precisión en el conjunto de prueba para clasificación de 24 clases.',
        'Los pares de señas más confundidos son N-S y C-O, a pesar de no ser visualmente similares.',
        'Data augmentation (rotación, zoom, desplazamiento) mejoró la generalización en 3-5%.',
        'Batch normalization mejoró la estabilidad numérica pero no aumentó la precisión.',
      ],
    },
    technologies: ['TensorFlow', 'Keras', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
    category: 'computer-vision',
    githubUrl: 'https://github.com/Portfolio-KRV/signlang',
    hasDemoAvailable: true,
    featuredOnHome: true,    coAuthors: ['Diego Quezada'],
    course: { en: 'Neural Networks', es: 'Redes Neuronales' },
  },
  {
    slug: 'mnist-gan',
    title: { en: 'MNIST GAN', es: 'GAN para MNIST' },
    description: {
      en: 'Generative Adversarial Network (GAN) for generating handwritten numbers from random noise.',
      es: 'Red Generativa Adversaria (GAN) para generar números escritos a mano desde ruido aleatorio.',
    },
    objectives: {
      en: [
        'Implement a GAN to generate handwritten numbers from initial random noise.',
        'Compare results of random noise generated by two numbers and the average of both.',
      ],
      es: [
        'Implementar una GAN para generar números escritos a mano desde ruido aleatorio inicial.',
        'Comparar resultados del ruido aleatorio generado por dos números y el promedio de ambos.',
      ],
    },
    conclusions: {
      en: [
        'The GAN generates recognizable digits after 50 epochs, with discriminator loss stabilizing around 0.5.',
        'Training stability requires balancing discriminator and generator learning rates to prevent mode collapse.',
        'Interpolating between two latent vectors produces smooth transitions with hybrid digit characteristics.',
      ],
      es: [
        'La GAN genera dígitos reconocibles después de 50 épocas, con la pérdida del discriminador estabilizándose alrededor de 0.5.',
        'La estabilidad del entrenamiento requiere balancear las tasas de aprendizaje del discriminador y generador para prevenir mode collapse.',
        'Interpolar entre dos vectores latentes produce transiciones suaves con características híbridas de dígitos.',
      ],
    },
    technologies: ['Keras', 'NumPy', 'Matplotlib'],
    category: 'generative-models',
    githubUrl: 'https://github.com/Portfolio-KRV/mnist-gan',
    hasDemoAvailable: false,    coAuthors: ['Diego Quezada'],
    course: { en: 'Neural Networks', es: 'Redes Neuronales' },
  },
  {
    slug: 'attention-feelings',
    title: { en: 'Attention Mechanisms in Sentiment Analysis', es: 'Mecanismos de Atención en Análisis de Sentimiento' },
    description: {
      en: 'Analysis of attention mechanism variations in recurrent neural networks for sentiment prediction.',
      es: 'Análisis de variaciones en mecanismos de atención en redes neuronales recurrentes para predicción de sentimiento.',
    },
    objectives: {
      en: [
        'Evaluate the effectiveness of increasing or decreasing attention levels after training.',
      ],
      es: [
        'Evaluar la efectividad de aumentar o disminuir los niveles de atención después del entrenamiento.',
      ],
    },
    conclusions: {
      en: [
        'Inverting the attention mechanism post-training worsens network performance considerably.',
        'Slightly maximizing attention post-training can yield small improvements in generalization.',
        'Significantly maximizing the attention mechanism worsens network performance.',
      ],
      es: [
        'Invertir el mecanismo de atención post-entrenamiento empeora considerablemente el rendimiento.',
        'Maximizar ligeramente la atención post-entrenamiento puede generar pequeñas mejoras en generalización.',
        'Maximizar significativamente el mecanismo de atención empeora el rendimiento.',
      ],
    },
    technologies: ['TensorFlow', 'Keras', 'NLTK', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Pandas'],
    category: 'nlp',
    githubUrl: 'https://github.com/Portfolio-KRV/attention-feelings',
    hasDemoAvailable: false,    course: { en: 'Quantitative Methods and Models', es: 'Métodos y Modelos Cuantitativos' },
  },
  {
    slug: 'fashion-autoencoder',
    title: { en: 'Fashion Autoencoder', es: 'Autoencoder de Moda' },
    description: {
      en: 'Analysis of Autoencoder use cases for clothing images: dimensionality reduction, denoising, and generation.',
      es: 'Análisis de casos de uso de Autoencoders en imágenes de ropa: reducción de dimensionalidad, eliminación de ruido y generación.',
    },
    objectives: {
      en: [
        'Compare fully connected versus convolutional autoencoder architectures for image compression.',
        'Evaluate autoencoders for three use cases: dimensionality reduction, denoising, and image generation.',
        'Analyze how latent space dimensionality affects reconstruction quality.',
      ],
      es: [
        'Comparar arquitecturas de autoencoder fully connected versus convolucional para compresión de imágenes.',
        'Evaluar autoencoders para tres casos de uso: reducción de dimensionalidad, eliminación de ruido y generación de imágenes.',
        'Analizar cómo la dimensionalidad del espacio latente afecta la calidad de reconstrucción.',
      ],
    },
    conclusions: {
      en: [
        'Convolutional autoencoders achieve 40% lower reconstruction error than fully connected architectures.',
        'A 32-dimensional latent space preserves essential visual features while achieving 24x compression.',
        'Denoising autoencoders effectively remove Gaussian noise but tend to over-smooth fine details.',
        'Image generation from random latent samples produces recognizable silhouettes but lacks texture detail.',
      ],
      es: [
        'Los autoencoders convolucionales logran 40% menos error de reconstrucción que las arquitecturas fully connected.',
        'Un espacio latente de 32 dimensiones preserva características visuales esenciales logrando compresión de 24x.',
        'Los autoencoders de eliminación de ruido remueven efectivamente ruido Gaussiano pero tienden a suavizar detalles finos.',
        'La generación de imágenes desde muestras latentes aleatorias produce siluetas reconocibles pero carece de detalle de textura.',
      ],
    },
    technologies: ['TensorFlow', 'Keras', 'NumPy', 'Matplotlib'],
    category: 'generative-models',
    githubUrl: 'https://github.com/Portfolio-KRV/fashion-autoencoder',
    hasDemoAvailable: false,    coAuthors: ['Diego Quezada'],
    course: { en: 'Neural Networks', es: 'Redes Neuronales' },
  },
  {
    slug: 'movies-and-sentiment',
    title: { en: 'Movie Sentiment Analysis', es: 'Análisis de Sentimiento de Películas' },
    description: {
      en: 'Comparative study of ML methods and neural networks for sentiment classification of movie reviews.',
      es: 'Estudio comparativo de métodos de ML y redes neuronales para clasificación de sentimiento de reseñas de películas.',
    },
    objectives: {
      en: [
        'Classify sentiment in movie reviews comparing traditional ML methods versus neural networks.',
        'Compare text vectorization methods: bag of words, TF-IDF, and word embeddings.',
        'Analyze the effectiveness of regularization techniques (dropout) to reduce overfitting.',
      ],
      es: [
        'Clasificar sentimiento en reseñas de películas comparando métodos tradicionales de ML versus redes neuronales.',
        'Comparar métodos de vectorización de texto: bag of words, TF-IDF y word embeddings.',
        'Analizar la efectividad de técnicas de regularización (dropout) para reducir el overfitting.',
      ],
    },
    conclusions: {
      en: [
        'Logistic Regression with TF-IDF achieved 88% accuracy, comparable to LSTM networks with less complexity.',
        'Word embeddings capture semantic relationships but require more data to outperform TF-IDF on this dataset.',
        'Dropout (0.3-0.5) reduces LSTM overfitting by 10-15% on validation accuracy.',
        'Traditional ML models generalize better on limited data, while neural networks require larger datasets.',
      ],
      es: [
        'Regresión Logística con TF-IDF alcanzó 88% de precisión, comparable a redes LSTM con menor complejidad.',
        'Los word embeddings capturan relaciones semánticas pero requieren más datos para superar TF-IDF en este dataset.',
        'Dropout (0.3-0.5) reduce el overfitting de LSTM en 10-15% en precisión de validación.',
        'Los modelos tradicionales de ML generalizan mejor con datos limitados, mientras las redes neuronales requieren datasets más grandes.',
      ],
    },
    technologies: ['NumPy', 'Matplotlib', 'Scikit-learn', 'TensorFlow', 'Keras'],
    category: 'nlp',
    githubUrl: 'https://github.com/Portfolio-KRV/movies-and-sentiment',
    hasDemoAvailable: false,    course: { en: 'Introduction to Data Science', es: 'Introducción a la Ciencia de Datos' },
  },
  {
    slug: 'clustering',
    title: { en: 'Clustering Algorithms Comparison', es: 'Comparación de Algoritmos de Clustering' },
    description: {
      en: 'Comparative study of clustering algorithms: K-means, hierarchical agglomerative clustering and DBSCAN.',
      es: 'Estudio comparativo de algoritmos de clustering: K-means, clustering jerárquico aglomerativo y DBSCAN.',
    },
    objectives: {
      en: [
        'Compare K-means, hierarchical agglomerative clustering and DBSCAN on three different datasets.',
        'Identify advantages and disadvantages of each algorithm.',
      ],
      es: [
        'Comparar K-means, clustering jerárquico aglomerativo y DBSCAN en tres datasets diferentes.',
        'Identificar ventajas y desventajas de cada algoritmo.',
      ],
    },
    conclusions: {
      en: [
        'K-means recognizes circular clusters of similar size well but fails with different sizes and complex shapes.',
        'DBSCAN detects clusters of any shape and density but fails when clusters are joined by outliers.',
        'HAC detects complete shape clusters but is sensitive to outliers that can create bridges between clusters.',
      ],
      es: [
        'K-means reconoce bien clusters circulares de tamaño similar pero falla con diferentes tamaños y formas complejas.',
        'DBSCAN detecta clusters de cualquier forma y densidad pero falla cuando los clusters están unidos por outliers.',
        'HAC detecta clusters de forma completa pero es sensible a outliers que pueden crear puentes entre clusters.',
      ],
    },
    technologies: ['Scikit-learn', 'FastAPI', 'Matplotlib', 'NumPy'],
    category: 'clustering',
    githubUrl: 'https://github.com/Portfolio-KRV/clustering',
    hasDemoAvailable: true,
    featuredOnHome: true,    course: { en: 'Pattern Recognition in Data Mining', es: 'Reconocimiento de Patrones en Minería de Datos' },
  },
  {
    slug: 'communities-graph',
    title: { en: 'Community Detection in Graphs', es: 'Detección de Comunidades en Grafos' },
    description: {
      en: 'Detection of communities in email interaction graphs using Louvain algorithm.',
      es: 'Detección de comunidades en grafos de interacciones por email usando algoritmo de Louvain.',
    },
    objectives: {
      en: [
        'Detect communities in email interaction graphs using the Louvain algorithm.',
        'Analyze the modularity metric to evaluate community quality.',
      ],
      es: [
        'Detectar comunidades en grafos de interacciones por email usando el algoritmo de Louvain.',
        'Analizar la métrica de modularidad para evaluar la calidad de las comunidades.',
      ],
    },
    conclusions: {
      en: [
        'The Louvain algorithm identifies coherent communities that correspond to organizational departments.',
        'Modularity optimization effectively groups nodes with dense internal connections.',
      ],
      es: [
        'El algoritmo de Louvain identifica comunidades coherentes que corresponden a departamentos organizacionales.',
        'La optimización de modularidad agrupa efectivamente nodos con conexiones internas densas.',
      ],
    },
    technologies: ['Community', 'NetworkX', 'Matplotlib'],
    category: 'graphs',
    githubUrl: 'https://github.com/Portfolio-KRV/communities-graph',
    hasDemoAvailable: true,    course: { en: 'Pattern Recognition in Data Mining', es: 'Reconocimiento de Patrones en Minería de Datos' },
  },
  {
    slug: 'text-entities',
    title: { en: 'Named Entity Recognition', es: 'Reconocimiento de Entidades Nombradas' },
    description: {
      en: 'Application of RNNs for NLP tasks: entity prediction and next character prediction.',
      es: 'Aplicación de RNNs para tareas de NLP: predicción de entidades y predicción del siguiente carácter.',
    },
    objectives: {
      en: [
        'Recognize named entities in text using recurrent neural networks.',
        'Compare unidirectional versus bidirectional RNN architectures for entity recognition.',
        'Generate text sequences using character-level language models.',
      ],
      es: [
        'Reconocer entidades nombradas en texto usando redes neuronales recurrentes.',
        'Comparar arquitecturas RNN unidireccionales versus bidireccionales para reconocimiento de entidades.',
        'Generar secuencias de texto usando modelos de lenguaje a nivel de carácter.',
      ],
    },
    conclusions: {
      en: [
        'The RNN achieved 89% F1-score for named entity recognition on the CoNLL dataset.',
        'Bidirectional RNNs did not significantly improve performance over unidirectional architectures for this task.',
        'Character-level language models learn syntactic patterns and generate coherent text after sufficient training.',
      ],
      es: [
        'La RNN alcanzó 89% de F1-score para reconocimiento de entidades nombradas en el dataset CoNLL.',
        'Las RNNs bidireccionales no mejoraron significativamente el rendimiento sobre arquitecturas unidireccionales para esta tarea.',
        'Los modelos de lenguaje a nivel de carácter aprenden patrones sintácticos y generan texto coherente después de suficiente entrenamiento.',
      ],
    },
    technologies: ['spaCy', 'FastAPI', 'Keras', 'TensorFlow', 'Matplotlib', 'NumPy', 'Pandas', 'Scikit-learn'],
    category: 'nlp',
    githubUrl: 'https://github.com/Portfolio-KRV/text-entities',
    hasDemoAvailable: false,    coAuthors: ['Diego Quezada'],
    course: { en: 'Neural Networks', es: 'Redes Neuronales' },
  },
  {
    slug: 'monkeys',
    title: { en: 'Monkey Breed Classification', es: 'Clasificación de Razas de Monos' },
    description: {
      en: 'CNNs for monkey breed classification using Transfer Learning and CAM for visualization.',
      es: 'CNNs para clasificación de razas de monos usando Transfer Learning y CAM para visualización.',
    },
    objectives: {
      en: [
        'Apply CNNs to monkey breed classification using Transfer Learning.',
        'Visualize CNN internal state using CAM method.',
        'Compare VGG16 and VGG19 network performance.',
        'Compare CNN with skip connections vs Transfer Learning networks.',
      ],
      es: [
        'Aplicar CNNs a clasificación de razas de monos usando Transfer Learning.',
        'Visualizar estado interno de la CNN usando método CAM.',
        'Comparar rendimiento de redes VGG16 y VGG19.',
        'Comparar CNN con skip connections vs redes con Transfer Learning.',
      ],
    },
    conclusions: {
      en: [
        'Transfer Learning with VGG16 achieved 96% accuracy versus 78% for CNNs trained from scratch.',
        'VGG16 and VGG19 showed similar performance, with VGG16 being more efficient due to fewer parameters.',
        'CAM visualizations reveal the network focuses on facial features, particularly eyes and nose, for classification.',
        'Skip connections improve gradient flow but do not outperform pre-trained ImageNet weights for this dataset size.',
      ],
      es: [
        'Transfer Learning con VGG16 alcanzó 96% de precisión versus 78% para CNNs entrenadas desde cero.',
        'VGG16 y VGG19 mostraron rendimiento similar, siendo VGG16 más eficiente por tener menos parámetros.',
        'Las visualizaciones CAM revelan que la red se enfoca en características faciales, particularmente ojos y nariz, para clasificar.',
        'Las skip connections mejoran el flujo de gradientes pero no superan los pesos pre-entrenados de ImageNet para este tamaño de dataset.',
      ],
    },
    technologies: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'OpenCV', 'Keras', 'TensorFlow', 'VGG16', 'VGG19', 'FastAPI'],
    category: 'computer-vision',
    githubUrl: 'https://github.com/Portfolio-KRV/monkeys',
    hasDemoAvailable: true,
    featuredOnHome: true,    coAuthors: ['Diego Quezada'],
    course: { en: 'Neural Networks', es: 'Redes Neuronales' },
  },
  {
    slug: 'k-segmentation',
    title: { en: 'Image Segmentation with K-Means', es: 'Segmentación de Imágenes con K-Means' },
    description: {
      en: 'Image segmentation using K-Means algorithm.',
      es: 'Segmentación de imágenes usando algoritmo K-Means.',
    },
    objectives: {
      en: [
        'Segment images using K-Means algorithm.',
      ],
      es: [
        'Segmentar imágenes usando algoritmo K-Means.',
      ],
    },
    conclusions: {
      en: [
        'Increasing K improves segmentation detail but introduces diminishing returns beyond K=8 for most images.',
        'K-Means segmentation is computationally efficient, processing 512x512 images in under 1 second.',
        'The algorithm struggles with objects of similar colors, as it only considers RGB color space information.',
      ],
      es: [
        'Aumentar K mejora el detalle de segmentación pero presenta rendimientos decrecientes más allá de K=8 para la mayoría de imágenes.',
        'La segmentación con K-Means es computacionalmente eficiente, procesando imágenes de 512x512 en menos de 1 segundo.',
        'El algoritmo tiene dificultades con objetos de colores similares, ya que solo considera información del espacio de color RGB.',
      ],
    },
    technologies: ['OpenCV', 'FastAPI', 'NumPy', 'Matplotlib'],
    category: 'computer-vision',
    githubUrl: 'https://github.com/Portfolio-KRV/k-segmentation',
    hasDemoAvailable: false,    course: { en: 'Pattern Recognition in Data Mining', es: 'Reconocimiento de Patrones en Minería de Datos' },
  },
  {
    slug: 'daphnia',
    title: { en: 'Aquatic Toxicity Prediction', es: 'Predicción de Toxicidad Acuática' },
    description: {
      en: 'Deep neural networks study for predicting acute aquatic toxicity to Daphnia Magna.',
      es: 'Estudio de redes neuronales profundas para predecir toxicidad acuática aguda a Daphnia Magna.',
    },
    objectives: {
      en: [
        'Predict acute aquatic toxicity to Daphnia Magna using deep neural networks.',
        'Analyze the impact of hyperparameters (learning rate, optimizers, initialization) on training convergence.',
        'Compare regularization techniques (L1, L2, Dropout) to reduce overfitting.',
        'Evaluate Extreme Learning Machines as an alternative to traditional deep learning.',
      ],
      es: [
        'Predecir toxicidad acuática aguda a Daphnia Magna usando redes neuronales profundas.',
        'Analizar el impacto de hiperparámetros (learning rate, optimizadores, inicialización) en la convergencia del entrenamiento.',
        'Comparar técnicas de regularización (L1, L2, Dropout) para reducir el overfitting.',
        'Evaluar Extreme Learning Machines como alternativa al deep learning tradicional.',
      ],
    },
    conclusions: {
      en: [
        'High Learning Decay values generate very slow training.',
        'SGD increases generalization slowly and continuously. Adam and RMSprop learn fast but overfit.',
        'Incorrect learning rate can cause training divergence.',
        'L1 rule generates zero-value weights, L2 generates scattered weights centered at zero.',
        'Dropout effectively decreases overfitting.',
        'Extreme Learning Machines have remarkable performance with no overfitting.',
      ],
      es: [
        'Valores altos de Learning Decay generan entrenamiento muy lento.',
        'SGD aumenta generalización lenta y continuamente. Adam y RMSprop aprenden rápido pero sobreajustan.',
        'Learning rate incorrecto puede causar divergencia en entrenamiento.',
        'La regla L1 genera pesos con valor cero, L2 genera pesos dispersos centrados en cero.',
        'El Dropout disminuye efectivamente el overfitting.',
        'Las Extreme Learning Machines tienen rendimiento notable sin overfitting.',
      ],
    },
    technologies: ['Pandas', 'NumPy', 'Matplotlib', 'Plotly', 'Seaborn', 'Scikit-learn', 'TensorFlow', 'Keras'],
    category: 'deep-learning',
    githubUrl: 'https://github.com/Portfolio-KRV/daphnia',
    hasDemoAvailable: false,    coAuthors: ['Diego Quezada'],
    course: { en: 'Neural Networks', es: 'Redes Neuronales' },
  },
  {
    slug: 'distributions-and-lda',
    title: { en: 'Distributions and LDA', es: 'Distribuciones y LDA' },
    description: {
      en: 'Study of approximations of continuous probability distributions with discrete ones and evaluation of LDA linear frontiers.',
      es: 'Estudio de aproximaciones de distribuciones de probabilidad continuas con discretas y evaluación de fronteras lineales de LDA.',
    },
    objectives: {
      en: [
        'Visualize the approximation of a continuous probability distribution with a discrete one.',
        'Relate the approximation error with the parameter of number of approximation rectangles.',
        'Study the effect of sample size on the approximation error.',
        'Evaluate linear frontiers of LDA in non-linear frontiers of bivariate normal distributions.',
      ],
      es: [
        'Visualizar la aproximación de una distribución de probabilidad continua con una discreta.',
        'Relacionar el error de aproximación con el parámetro del número de rectángulos de aproximación.',
        'Estudiar el efecto del tamaño de muestra en el error de aproximación.',
        'Evaluar fronteras lineales de LDA en fronteras no lineales de distribuciones normales bivariadas.',
      ],
    },
    conclusions: {
      en: [
        'As the sample size increases, the shape of the distribution approaches the theoretical model.',
        'The error in the mean tends to be very high for very small sample sizes.',
        'The linear borders of LDA can approximate simple nonlinear borders, as long as the data are not superimposed.',
      ],
      es: [
        'A medida que aumenta el tamaño de muestra, la forma de la distribución se aproxima al modelo teórico.',
        'El error en la media tiende a ser muy alto para tamaños de muestra muy pequeños.',
        'Las fronteras lineales de LDA pueden aproximar fronteras no lineales simples, siempre que los datos no estén superpuestos.',
      ],
    },
    technologies: ['Matplotlib', 'Scipy', 'NumPy', 'Seaborn', 'Pandas', 'FastAPI'],
    category: 'machine-learning',
    githubUrl: 'https://github.com/Portfolio-KRV/distributions-and-lda',
    hasDemoAvailable: false,    coAuthors: ['Javier Mendoza'],
    course: { en: 'Computational Statistics', es: 'Estadística Computacional' },
  },
  {
    slug: 'dnomads',
    title: { en: 'Digital Nomads Travel Cost Prediction', es: 'Predicción de Costos de Viaje para Nómadas Digitales' },
    description: {
      en: 'Linear model to predict the cost of travel packages for digital nomads with feature engineering and NLP methods.',
      es: 'Modelo lineal para predecir el costo de paquetes de viaje para nómadas digitales con ingeniería de características y métodos de NLP.',
    },
    objectives: {
      en: [
        'Predict the cost of travel packages using linear models.',
        'Identify and correct non-compliance with theoretical requirements of linear models.',
        'Apply feature engineering using internal and external information, including NLP methods.',
      ],
      es: [
        'Predecir el costo de paquetes de viaje usando modelos lineales.',
        'Identificar y corregir incumplimientos de requisitos teóricos de modelos lineales.',
        'Aplicar ingeniería de características usando información interna y externa, incluyendo métodos de NLP.',
      ],
    },
    conclusions: {
      en: [
        'Feature engineering improved R² from 0.45 to 0.72, demonstrating its critical role in linear models.',
        'Ridge regularization handles multicollinearity better than variable elimination, preserving predictive information.',
        'NLP-derived features (destination sentiment, description length) contributed 15% to model performance.',
        'Log-transforming the target variable corrected heteroscedasticity and improved residual normality.',
      ],
      es: [
        'La ingeniería de características mejoró R² de 0.45 a 0.72, demostrando su rol crítico en modelos lineales.',
        'La regularización Ridge maneja mejor la multicolinealidad que la eliminación de variables, preservando información predictiva.',
        'Las características derivadas de NLP (sentimiento de destino, longitud de descripción) contribuyeron 15% al rendimiento del modelo.',
        'La transformación logarítmica de la variable objetivo corrigió heterocedasticidad y mejoró la normalidad de residuos.',
      ],
    },
    technologies: ['Spacy', 'Scipy', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
    category: 'machine-learning',
    githubUrl: 'https://github.com/Portfolio-KRV/dnomads',
    hasDemoAvailable: true,    coAuthors: ['Fernanda Avendaño', 'Diego Quezada'],
    course: { en: 'Machine Learning', es: 'Machine Learning' },
  },
  {
    slug: 'movies-and-jokes',
    title: { en: 'Movies and Jokes Recommender', es: 'Recomendador de Películas y Chistes' },
    description: {
      en: 'Movie and joke recommender system using collaborative filtering methods based on users and items.',
      es: 'Sistema de recomendación de películas y chistes usando métodos de filtrado colaborativo basados en usuarios e ítems.',
    },
    objectives: {
      en: [
        'Build a recommendation system using collaborative filtering methods.',
        'Compare user-based versus item-based collaborative filtering approaches.',
        'Determine the optimal number of neighbors for accurate recommendations.',
      ],
      es: [
        'Construir un sistema de recomendación usando métodos de filtrado colaborativo.',
        'Comparar enfoques de filtrado colaborativo basados en usuarios versus ítems.',
        'Determinar el número óptimo de vecinos para recomendaciones precisas.',
      ],
    },
    conclusions: {
      en: [
        'Item-based filtering outperforms user-based when items are fewer than users, reducing computation by 60%.',
        'Optimal neighbor count is K=20-30; fewer neighbors increase variance, more add noise without improving accuracy.',
        'Normalizing ratings by user mean bias improves RMSE by 8-12% across both filtering approaches.',
      ],
      es: [
        'El filtrado basado en ítems supera al basado en usuarios cuando hay menos ítems que usuarios, reduciendo cómputo en 60%.',
        'El número óptimo de vecinos es K=20-30; menos vecinos aumentan varianza, más agregan ruido sin mejorar precisión.',
        'Normalizar ratings por el sesgo promedio del usuario mejora RMSE en 8-12% en ambos enfoques de filtrado.',
      ],
    },
    technologies: ['Pandas', 'NumPy', 'Scikit-learn', 'FastAPI'],
    category: 'recommendation-systems',
    githubUrl: 'https://github.com/Portfolio-KRV/movies-and-jokes',
    hasDemoAvailable: false,    coAuthors: ['Stephanie Riff'],
    course: { en: 'Pattern Recognition in Data Mining', es: 'Reconocimiento de Patrones en Minería de Datos' },
  },
  {
    slug: 'noise-l2',
    title: { en: 'White Noise vs L2 Regularization', es: 'Ruido Blanco vs Regularización L2' },
    description: {
      en: 'Investigation of the equivalence between white noise application and L2 regularizer using different datasets.',
      es: 'Investigación de la equivalencia entre la aplicación de ruido blanco y el regularizador L2 usando diferentes datasets.',
    },
    objectives: {
      en: [
        'Verify the equivalence of white noise application and the use of L2 regularizer.',
      ],
      es: [
        'Verificar la equivalencia de la aplicación de ruido blanco y el uso del regularizador L2.',
      ],
    },
    conclusions: {
      en: [
        'The performance of models when applying white noise or L2 regularizer is practically the same on average.',
        'In the three datasets there are lambda values such that the effectiveness of the models, measured through MSE, is the same.',
      ],
      es: [
        'El rendimiento de los modelos al aplicar ruido blanco o regularizador L2 es prácticamente el mismo en promedio.',
        'En los tres datasets existen valores de lambda tales que la efectividad de los modelos, medida a través del MSE, es la misma.',
      ],
    },
    technologies: ['NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'FastAPI'],
    category: 'machine-learning',
    githubUrl: 'https://github.com/Portfolio-KRV/noise-l2',
    hasDemoAvailable: false,    coAuthors: ['Fernanda Avendaño', 'Diego Quezada'],
    course: { en: 'Machine Learning', es: 'Machine Learning' },
  },
  {
    slug: 'radiation',
    title: { en: 'Solar Radiation Prediction', es: 'Predicción de Radiación Solar' },
    description: {
      en: 'Recurrent neural network model to predict solar radiation for the next 24 hours.',
      es: 'Modelo de red neuronal recurrente para predecir radiación solar en las próximas 24 horas.',
    },
    objectives: {
      en: [
        'Predict solar radiation for the next 24 hours using recurrent neural networks.',
        'Identify correlations between meteorological variables to improve prediction accuracy.',
        'Evaluate different temporal feature representations for time series forecasting.',
      ],
      es: [
        'Predecir radiación solar para las próximas 24 horas usando redes neuronales recurrentes.',
        'Identificar correlaciones entre variables meteorológicas para mejorar la precisión de predicción.',
        'Evaluar diferentes representaciones de características temporales para pronóstico de series de tiempo.',
      ],
    },
    conclusions: {
      en: [
        'There is a relationship in the behavior of average hourly temperature and humidity by displacing temperature over time.',
        'There is a high correlation between temperature and radiation per hour.',
        'Using a two-dimensional representation for the time of day increases network performance.',
      ],
      es: [
        'Existe una relación en el comportamiento de temperatura y humedad promedio por hora al desplazar la temperatura en el tiempo.',
        'Existe una alta correlación entre temperatura y radiación por hora.',
        'Usar una representación bidimensional para la hora del día aumenta el rendimiento de la red.',
      ],
    },
    technologies: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'TensorFlow', 'Keras'],
    category: 'deep-learning',
    githubUrl: 'https://github.com/Portfolio-KRV/radiation',
    hasDemoAvailable: false,    coAuthors: ['Diego Quezada'],
    course: { en: 'Neural Networks', es: 'Redes Neuronales' },
  },
  {
    slug: 'simbiontes',
    title: { en: 'Microbiome Disease Prediction', es: 'Predicción de Enfermedades por Microbioma' },
    description: {
      en: 'Predictive model to predict diseases based on patient microbiota data using machine learning methods.',
      es: 'Modelo predictivo para predecir enfermedades basándose en datos de microbiota del paciente usando métodos de machine learning.',
    },
    objectives: {
      en: [
        'Predict diseases from high-dimensional human microbiome data.',
        'Compare machine learning classifiers for small-sample, high-dimensional scenarios.',
        'Identify key microbial species associated with each disease.',
      ],
      es: [
        'Predecir enfermedades a partir de datos de microbioma humano de alta dimensionalidad.',
        'Comparar clasificadores de machine learning para escenarios de pocas muestras y alta dimensionalidad.',
        'Identificar especies microbianas clave asociadas a cada enfermedad.',
      ],
    },
    conclusions: {
      en: [
        'SVM with linear kernel achieved 85% accuracy, outperforming Random Forest and XGBoost in this high-dimensional scenario.',
        'PCA reduced 154,000+ features to 25 components while retaining 90% of variance, enabling effective model training.',
        'Specific bacterial species (e.g., Bacteroides, Prevotella) emerged as key biomarkers for different diseases.',
        'The model shows disease-specific patterns: increasing one disease probability decreases others due to single-diagnosis training data.',
      ],
      es: [
        'SVM con kernel lineal alcanzó 85% de precisión, superando Random Forest y XGBoost en este escenario de alta dimensionalidad.',
        'PCA redujo más de 154,000 características a 25 componentes reteniendo 90% de varianza, permitiendo entrenamiento efectivo.',
        'Especies bacterianas específicas (ej. Bacteroides, Prevotella) emergieron como biomarcadores clave para diferentes enfermedades.',
        'El modelo muestra patrones específicos por enfermedad: aumentar la probabilidad de una disminuye las otras debido a datos de entrenamiento con diagnósticos únicos.',
      ],
    },
    technologies: ['NumPy', 'Pandas', 'Matplotlib', 'Plotly', 'Scikit-learn', 'XGBoost', 'FastAPI'],
    category: 'machine-learning',
    githubUrl: 'https://github.com/Portfolio-KRV/simbiontes',
    hasDemoAvailable: false,    coAuthors: ['Diego Quezada'],
    course: { en: 'Introduction to Data Science', es: 'Introducción a la Ciencia de Datos' },
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsData.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory | 'all'): ProjectData[] {
  if (category === 'all') return projectsData;
  return projectsData.filter((p) => p.category === category);
}

export function getAllCategories(): ProjectCategory[] {
  return [...new Set(projectsData.map((p) => p.category))];
}
