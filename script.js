// Datos de proyectos basados en GitHub
const projectsData = [
    {
      id: "project1",
      title: "Aplicativo-Tesis",
      description:
        "Aplicación móvil desarrollada con Flutter y Dart para la gestión y seguimiento de tesis académicas, con integración de Firebase para autenticación y almacenamiento de datos.",
      category: "mobile",
      image: "Proyectos/LogoAppTesis.png?height=400&width=600",
      tech: ["Flutter", "Dart", "Firebase", "Mobile"],
      images: [
        { src: "Proyectos/AppTesis1.png?height=600&width=800", alt: "" },
        { src: "Proyectos/AppTesis2.png?height=600&width=800", alt: "" },
        { src: "Proyectos/AppTesis3.png?height=600&width=800", alt: "" },
        { src: "Proyectos/AppTesis4.png?height=600&width=800", alt: "" },
      ],
      detailedDescription:
        "Aplicativo-Tesis es una aplicación móvil desarrollada con Flutter y Dart que permite a estudiantes y profesores gestionar y dar seguimiento a proyectos de tesis académicas. La aplicación utiliza Firebase para la autenticación de usuarios, almacenamiento de datos en tiempo real y notificaciones. Incluye funcionalidades como seguimiento de avances, gestión de bibliografía, calendario de actividades, comunicación con tutores y generación de reportes.",
      githubUrl: "https://github.com/ChrisCodeX1/Aplicativo-Tesis",
    },
    {
      id: "project2",
      title: "Aplicacion-Web-Tesis",
      description:
        "Aplicación web monolítica desarrollada con Python, Django, Flask y HTML para la gestión completa de tesis académicas desde una interfaz web.",
      category: "fullstack",
      image: "Proyectos/WebTesisLogo.png?height=400&width=600",
      tech: ["Python", "Django", "Flask", "HTML", "CSS"],
      images: [
        { src: "Proyectos/WebTesis1.png?height=600&width=800", alt: "" },
        { src: "Proyectos/WebTesis.png?height=600&width=800", alt: "" },
        { src: "Proyectos/WebTesis2.png?height=600&width=800", alt: "" },
        { src: "Proyectos/WebTesis3.png?height=600&width=800", alt: "" },
      ],
      detailedDescription:
        "Aplicacion-Web-Tesis es una plataforma web monolítica desarrollada con Python, Django y Flask que proporciona una solución completa para la gestión de tesis académicas. La aplicación permite a estudiantes, profesores y administradores gestionar todo el ciclo de vida de los proyectos de tesis, desde la propuesta inicial hasta la defensa final. Incluye funcionalidades como gestión de documentos, seguimiento de avances, asignación de tutores, calendario de actividades y generación de reportes.",
      githubUrl: "https://github.com/ChrisCodeX1/Aplicacion-Web-Tesis",
    },
    {
      id: "project3",
      title: "Bot-Twitter",
      description:
        "Bot automatizado para Twitter desarrollado en Python que permite programar publicaciones, interactuar con usuarios y analizar tendencias en la plataforma.",
      category: "backend",
      image: "Proyectos/BotLogo.png?height=400&width=600",
      tech: ["Python", "Twitter API", "Automatización", "Análisis de datos"],
      images: [
        { src: "Proyectos/Bot Twitter.jpg?height=600&width=800", alt: "" },
      ],
      detailedDescription:
        "Bot-Twitter es una herramienta automatizada desarrollada en Python que permite gestionar cuentas de Twitter de forma eficiente. El bot puede programar publicaciones, responder automáticamente a menciones, seguir y dejar de seguir usuarios según criterios específicos, analizar tendencias y generar informes de engagement. Utiliza la API oficial de Twitter y técnicas de análisis de datos para optimizar la presencia en la plataforma.",
      githubUrl: "https://github.com/ChrisCodeX1/Bot-Twitter",
    },
    {
      id: "project4",
      title: "Riego-Automatico-IOT",
      description:
        "Sistema de riego automático basado en IoT que utiliza sensores para monitorear la humedad del suelo y controlar el riego de plantas de forma eficiente.",
      category: "backend",
      image: "Proyectos/IOTLogo.png?height=400&width=600",
      tech: ["Python", "IoT", "Raspberry Pi", "Sensores"],
      images: [
        { src: "Proyectos/IOT1.jpeg?height=600&width=800", alt: "" },
        { src: "Proyectos/IOT2.jpeg?height=600&width=800", alt: "" },
      ],
      detailedDescription:
        "Sistema de riego automático basado en IoT que utiliza sensores de humedad del suelo para determinar cuándo las plantas necesitan agua. El sistema está controlado por una Raspberry Pi que procesa los datos de los sensores y activa las válvulas de riego según sea necesario. Incluye una interfaz web para monitorear el estado del sistema y configurar horarios de riego personalizados.",
      githubUrl: "https://github.com/ChrisCodeX1/Riego-Automatico-IOT",
    },
    {
      id: "project5",
      title: "Juego-De-Peleas",
      description:
        "Juego de peleas desarrollado en JavaScript con animaciones fluidas, sistema de combos y diferentes personajes con habilidades únicas.",
      category: "web",
      image: "Proyectos/JuegoPeleas.png?height=400&width=600",
      tech: ["JavaScript", "HTML5 Canvas", "CSS3", "Web Audio API"],
      images: [
        { src: "Proyectos/Juegopeleas1.png?height=600&width=800", alt: "" },
        { src: "Proyectos/JuegoPeleas2.png?height=600&width=800", alt: "" },
      ],
      detailedDescription:
        "Juego de peleas desarrollado completamente en JavaScript utilizando HTML5 Canvas para renderizar gráficos y animaciones. El juego cuenta con un sistema de combate completo con combos, bloqueos y movimientos especiales. Incluye varios personajes con habilidades únicas, diferentes escenarios y un sistema de puntuación para seguir el progreso del jugador.",
      githubUrl: "https://github.com/ChrisCodeX1/Juego-De-Peleas",
    },
    {
      id: "project6",
      title: "Peliculas",
      description:
        "Aplicación web para explorar y descubrir películas, con funcionalidades de búsqueda, filtrado por géneros y guardado de favoritos.",
      category: "fullstack",
      image: "Proyectos/AngularPeliculas.png?height=400&width=600",
      tech: ["TypeScript", "Angular", "API REST", "Django"],
      images: [
        { src: "Proyectos/Angulalr.png?height=600&width=800", alt: "Página principal" },
      ],
      detailedDescription:
        "Aplicación web desarrollada con TypeScript y React que permite a los usuarios explorar un catálogo de películas, ver detalles como sinopsis, reparto y calificaciones, buscar por título o género, y guardar sus películas favoritas. La aplicación consume una API de películas para obtener datos actualizados y ofrece una interfaz de usuario intuitiva y responsive.",
      githubUrl: "https://github.com/ChrisCodeX1/Peliculas",
    },
    {
      id: "project7",
      title: "Newt",
      description:
        "CMS personalizado desarrollado en PHP para la gestión de contenidos web con editor WYSIWYG, gestión de usuarios y SEO integrado.",
      category: "web",
      image: "Proyectos/NEWTLogo.png?height=400&width=600",
      tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      images: [
        { src: "Proyectos/Newt1.png?height=600&width=800", alt: "" },
        { src: "Proyectos/Newt2.png?height=600&width=800", alt: "" },
        { src: "Proyectos/Newt3.png?height=600&width=800", alt: "" },
      ],
      detailedDescription:
        "CMS personalizado desarrollado en PHP que permite a los usuarios crear y gestionar contenido web sin conocimientos técnicos. Incluye un editor WYSIWYG intuitivo, sistema de gestión de usuarios con diferentes niveles de permisos, herramientas SEO integradas y una biblioteca de medios para organizar imágenes y archivos. El sistema es altamente personalizable y extensible mediante plugins.",
      githubUrl: "https://github.com/ChrisCodeX1/Newt",
    },
    {
      id: "project8",
      title: "Patinantes",
      description:
        "Sitio web para una escuela de patinaje con información sobre clases, instructores, eventos y sistema de registro para nuevos estudiantes.",
      category: "web",
      image: "Proyectos/PatinantesLogo.png?height=400&width=600",
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      images: [
        { src: "Proyectos/Patinantes1.png?height=600&width=800", alt: "" },
        { src: "Proyectos/Patinantes2.png?height=600&width=800", alt: "" },
        { src: "Proyectos/Patinantes3.png?height=600&width=800", alt: "" },
        { src: "Proyectos/Patinantes4.png?height=600&width=800", alt: "" },
      ],
      detailedDescription:
        "Sitio web completo para una escuela de patinaje que presenta información detallada sobre las clases ofrecidas, perfiles de los instructores, calendario de eventos y competiciones, galería de fotos y un sistema de registro para nuevos estudiantes. El diseño es moderno y responsive, optimizado para dispositivos móviles y de escritorio.",
      githubUrl: "https://github.com/ChrisCodeX1/Patinantes",
    },
    {
      id: "project9",
      title: "Rotafolios-Odontologia",
      description:
        "Plataforma educativa para estudiantes de odontología con material didáctico, ilustraciones interactivas y cuestionarios de autoevaluación.",
      category: "fullstack",
      image: "Proyectos/RotafolioOdo.png?height=400&width=600",
      tech: ["HTML", "CSS", "JavaScript", "SVG"],
      images: [
        { src: "Proyectos/Odo1.png?height=600&width=800", alt: "Página principal" },
        { src: "Proyectos/Odo2.png?height=600&width=800", alt: "Material didáctico" },
        { src: "Proyectos/Odo3.png?height=600&width=800", alt: "Ilustraciones interactivas" },
        { src: "Proyectos/Odo4.png?height=600&width=800", alt: "Cuestionarios" },
      ],
      detailedDescription:
        "Plataforma educativa diseñada específicamente para estudiantes de odontología que ofrece material didáctico organizado por temas, ilustraciones interactivas de anatomía dental y procedimientos odontológicos, cuestionarios de autoevaluación y recursos descargables. La plataforma utiliza SVG para crear ilustraciones detalladas e interactivas que ayudan a los estudiantes a comprender mejor los conceptos odontológicos.",
      githubUrl: "https://github.com/ChrisCodeX1/Rotafolios-Odontologia",
    },
    {
      id: "project10",
      title: "Shibarium",
      description:
        "Plataforma de información y análisis sobre la blockchain Shibarium, con datos en tiempo real, tutoriales y recursos para desarrolladores.",
      category: "web",
      image: "Proyectos/Logoshi.png?height=400&width=600",
      tech: ["PHP", "JavaScript", "API Integration", "Chart.js"],
      images: [
        { src: "Proyectos/Shi1.png?height=600&width=800", alt: "" },
        { src: "Proyectos/Shi2.png?height=600&width=800", alt: "" },
        { src: "Proyectos/Shi3.png?height=600&width=800", alt: "" },
        { src: "Proyectos/Shi4.png?height=600&width=800", alt: "" },
      ],
      detailedDescription:
        "Plataforma informativa sobre la blockchain Shibarium que proporciona datos en tiempo real sobre transacciones, contratos inteligentes y actividad de la red. Incluye tutoriales detallados para principiantes, recursos para desarrolladores que quieren construir en Shibarium, y herramientas de análisis de mercado con visualizaciones interactivas utilizando Chart.js.",
      githubUrl: "https://github.com/ChrisCodeX1/Shibarium",
    },
    {
      id: "project11",
      title: "Big-Popa",
      description:
        "Proyecto de diseño web con CSS avanzado, implementando animaciones y diseño responsivo para una experiencia de usuario moderna.",
      category: "web",
      image: "Proyectos/PoppaLogo.png?height=400&width=600",
      tech: ["HTML", "CSS", "JavaScript"],
      images: [
        { src: "Proyectos/Poppa.png?height=600&width=800", alt: "Página principal" },
        { src: "Proyectos/Poppa2.png?height=600&width=800", alt: "Sección de características" },
        { src: "Proyectos/Poppa3.png?height=600&width=800", alt: "Galería de imágenes" },
        { src: "Proyectos/Poppa4.png?height=600&width=800", alt: "Formulario de contacto" },
      ],
      detailedDescription:
        "Big-Popa es un proyecto de diseño web que utiliza CSS avanzado para crear una experiencia de usuario moderna y atractiva. Implementa animaciones suaves, transiciones y un diseño totalmente responsivo que se adapta a diferentes tamaños de pantalla. El proyecto demuestra habilidades avanzadas en CSS y buenas prácticas de diseño web.",
      githubUrl: "https://github.com/ChrisCodeX1/Big-Popa",
    },
    {
      id: "project12",
      title: "Capitan-Doge",
      description:
        "Sitio web temático con animaciones CSS personalizadas y efectos visuales interactivos para mejorar la experiencia del usuario.",
      category: "web",
      image: "Proyectos/LogoCapitan.jpg?height=400&width=600",
      tech: ["HTML", "CSS", "JavaScript"],
      images: [
        { src: "Proyectos/Capitan1.png?height=600&width=800", alt: "" },
        { src: "Proyectos/Capitan2.png?height=600&width=800", alt: "" },
        { src: "Proyectos/Capitan3.png?height=600&width=800", alt: "" },
        { src: "Proyectos/Capitan4.png?height=600&width=800", alt: "" },
      ],
      detailedDescription:
        "Capitan-Doge es un sitio web temático que utiliza animaciones CSS personalizadas y efectos visuales interactivos para crear una experiencia de usuario única. El proyecto incluye transiciones suaves, efectos hover, y elementos interactivos que responden a las acciones del usuario. Todo el diseño es completamente responsivo y optimizado para diferentes dispositivos.",
      githubUrl: "https://github.com/ChrisCodeX1/Capitan-Doge",
    },
    {
      id: "project13",
      title: "Gems-Hyper",
      description:
        "Interfaz de usuario moderna con efectos visuales avanzados en CSS y optimización para rendimiento en diferentes dispositivos.",
      category: "fullstack",
      image: "Proyectos/LogoGems.png?height=400&width=600",
      tech: ["HTML", "CSS", "JavaScript", "Django", "Tailwind"],
      images: [
        { src: "Proyectos/Gems1.png?height=600&width=800", alt: "" },
        { src: "Proyectos/Gems2.png?height=600&width=800", alt: "" },
        { src: "Proyectos/Gems3.png?height=600&width=800", alt: "" },
        { src: "Proyectos/Gems4.png?height=600&width=800", alt: "" },
      ],
      detailedDescription:
        "Gems-Hyper es un proyecto centrado en la creación de una interfaz de usuario moderna con efectos visuales avanzados en CSS. El proyecto implementa técnicas de optimización para garantizar un rendimiento fluido en diferentes dispositivos y navegadores. Incluye componentes UI reutilizables, animaciones optimizadas y un diseño limpio y atractivo.",
      githubUrl: "https://github.com/ChrisCodeX1/Gems-Hyper",
    },
    {
      id: "project14",
      title: "PalmiCafe",
      description:
        "Aplicación web para una cafetería con sistema de pedidos online, menú interactivo y gestión de reservas implementada con JavaScript.",
      category: "fullstack",
      image: "Proyectos/Palmicafe1.png?height=400&width=600",
      tech: ["HTML", "CSS", "JavaScript", "LocalStorage", "Express", "Node.js", "Docker", "PostgreSQL"],
      images: [
        { src: "Proyectos/Palmicafe11.png?height=600&width=800", alt: "" },
      ],
      detailedDescription:
        "PalmiCafe es una aplicación web completa para una cafetería que incluye un sistema de pedidos online, menú interactivo y gestión de reservas. Implementada con JavaScript puro, la aplicación permite a los usuarios explorar el menú, personalizar sus pedidos, añadirlos al carrito y realizar reservas. Utiliza LocalStorage para mantener el estado de la sesión del usuario y ofrece una experiencia fluida y agradable.",
      githubUrl: "https://github.com/ChrisCodeX1/PalmiCafe",
    },
    {
      id: "project15",
      title: "Microservicio_Pedidos",
      description:
        "Microservicio desarrollado en Java para la gestión de pedidos en un sistema de comercio electrónico con arquitectura orientada a servicios.",
      category: "backend",
      image: "Proyectos/LogoServicios.png?height=400&width=600",
      tech: ["Java", "Spring Boot", "JPA", "MySQL"],
      images: [
        { src: "Proyectos/Servi1.jpeg?height=600&width=800", alt: "Arquitectura del sistema" },
        { src: "Proyectos/Servi2.jpeg?height=600&width=800", alt: "Modelo de datos" },
      ],
      detailedDescription:
        "Microservicio_Pedidos es un componente backend desarrollado en Java con Spring Boot para la gestión de pedidos en un sistema de comercio electrónico. Implementa una arquitectura orientada a servicios (SOA) con comunicación a través de API REST. El microservicio gestiona el ciclo de vida completo de los pedidos, desde la creación hasta la entrega, con persistencia en MySQL y validación de datos robusta.",
      githubUrl: "https://github.com/ChrisCodeX1/Microservicio_Pedidos",
    },
    {
      id: "project16",
      title: "Jugos-Y-Juguitos",
      description:
        "Sitio web para una tienda de jugos naturales con diseño atractivo, información nutricional y sistema de pedidos implementado con HTML y CSS.",
      category: "web",
      image: "Proyectos/Logojugos.png?height=400&width=600",
      tech: ["HTML", "CSS", "JavaScript"],
      images: [
        { src: "Proyectos/Jugos1.png?height=600&width=800", alt: "" },
        { src: "Proyectos/Jugos2.png?height=600&width=800", alt: "" },
        { src: "Proyectos/Jugos3.png?height=600&width=800", alt: "" },
        { src: "Proyectos/Jugos4.png?height=600&width=800", alt: "" },
      ],
      detailedDescription:
        "Jugos-Y-Juguitos es un sitio web para una tienda de jugos naturales que combina un diseño atractivo con funcionalidad práctica. El sitio incluye un catálogo completo de productos con información nutricional detallada, un sistema de pedidos sencillo y secciones informativas sobre los beneficios de los jugos naturales. Implementado con HTML y CSS, con algunos elementos interactivos en JavaScript.",
      githubUrl: "https://github.com/ChrisCodeX1/Jugos-Y-Juguitos",
    },
    {
      id: "project17",
      title: "Aplicacion-VR-Neiro",
      description:
        "Aplicación VR Neiro es un proyecto de realidad virtual que ofrece una experiencia inmersiva e interactiva. Su objetivo es mostrar el potencial de la VR en áreas educativas, recreativas y de simulación, sirviendo como base para futuras mejoras y personalizaciones.",
      category: "mobile",
      image: "Proyectos/LogoNeiro.png?height=400&width=600",
      tech: ["C#", "Unity", "VR", "OpenGL"],
      images: [
        { src: "Proyectos/Neiro1.jpeg?height=600&width=800", alt: "" },
        { src: "Proyectos/Neiro2.jpeg?height=600&width=800", alt: "" },
        { src: "Proyectos/Neiro3.jpeg?height=600&width=800", alt: "" },
      ],
      detailedDescription:
        "Aplicación VR Neiro es un proyecto de realidad virtual desarrollado con el objetivo de ofrecer una experiencia inmersiva e interactiva que combina tecnología avanzada y diseño intuitivo. Esta aplicación está orientada a demostrar el potencial de la VR en entornos educativos, recreativos o de simulación, proporcionando una base sólida para futuras expansiones o personalizaciones.",
      githubUrl: "https://github.com/ChrisCodeX1/Inventory-Management",
    },
    {
      id: "project18",
      title: "Aplicacion TrackNariño",
      description:
        "Tracknariño es una aplicación móvil diseñada para mejorar la eficiencia y seguridad en el transporte de carga en el departamento de Nariño. La plataforma optimiza rutas mediante tecnologías como GPS, Big Data y Machine Learning, permite el seguimiento en tiempo real de los vehículos y conecta directamente a camioneros con contratistas.",
        category: "mobile",
      image: "Proyectos/TrackNarino.png?height=400&width=600",
      tech: ["React Native", "Node.js", "Flutter", "Express.js, MongoDB"],
      images: [
        { src: "Proyectos/Tracknarino1.png?height=600&width=800", alt: "Dashboard principal" },
      ],
      detailedDescription:
        "Tracknariño es una aplicación móvil diseñada para mejorar la eficiencia y seguridad en el transporte de carga en el departamento de Nariño. La plataforma optimiza rutas mediante tecnologías como GPS, Big Data y Machine Learning, permite el seguimiento en tiempo real de los vehículos y conecta directamente a camioneros con contratistas, reduciendo costos operativos y aumentando las oportunidades laborales. Además, busca modernizar el sector logístico local, promoviendo la competitividad y la sostenibilidad económica en la región.",
      githubUrl: "https://github.com/ChrisCodeX1/Social-Dashboard",
    },
  ]
  
  // Traducciones para el sitio
  const translations = {
    es: {
      nav: {
        home: "Inicio",
        about: "Sobre Mí",
        projects: "Proyectos",
        contact: "Contacto",
      },
      about: {
        title: "Sobre Mí",
        p1: "Soy un desarrollador experimentado especializado en frontend, backend y desarrollo móvil. Con fuertes habilidades técnicas y experiencia en varios frameworks, se destaca en la construcción de aplicaciones Web y móviles eficientes.",
        p2: "Soy también un líder natural, conocido por su mentalidad colaborativa, su capacidad para resolver problemas y su eficaz gestión del tiempo. Su dedicación al aprendizaje continuo y la innovación lo convierten en un jugador de equipo fiable y adaptable.",
        p3: "",
      },
      projects: {
        title: "Mis Proyectos",
        filter: {
          all: "Todos",
          web: "Web",
          mobile: "Mobile",
          backend: "Backend",
          fullstack: "Full Stack",
        },
        loadMore: "Cargar Más Proyectos",
      },
      contact: {
        title: "Contacto",
        subtitle: "¿Interesado en trabajar juntos?",
        description:
          "Estoy abierto a oportunidades de trabajo freelance, colaboraciones y posiciones a tiempo completo. Si tienes un proyecto en mente o simplemente quieres conectar, ¡no dudes en contactarme!",
      },
      footer: {
        rights: "Todos los derechos reservados.",
      },
    },
    en: {
      nav: {
        home: "Home",
        about: "About Me",
        projects: "Projects",
        contact: "Contact",
      },
      about: {
        title: "About Me",
        p1: "I am experienced developer specialized in frontend, backend, and mobile development. With strong technical skills and experience in various frameworks, he excels in building efficient web and mobile applications.",
        p2: "I am also a natural leader, known for his collaborative mindset, problem-solving abilities, and effective time management. His dedication to continuous learning and innovation makes him a reliable and adaptable team player.",
      },
      projects: {
        title: "My Projects",
        filter: {
          all: "All",
          web: "Web",
          mobile: "Mobile",
          backend: "Backend",
          fullstack: "Full Stack",
        },
        loadMore: "Load More Projects",
      },
      contact: {
        title: "Contact",
        subtitle: "Interested in working together?",
        description:
          "I'm open to freelance opportunities, collaborations, and full-time positions. If you have a project in mind or simply want to connect, don't hesitate to contact me!",
      },
      footer: {
        rights: "All rights reserved.",
      },
    },
  }
  
  // Esperar a que el DOM esté completamente cargado
  document.addEventListener("DOMContentLoaded", () => {
    // Mostrar pantalla de carga
    showLoadingScreen()
  
    // Inicializar todos los efectos y funcionalidades después de un tiempo
    setTimeout(() => {
      initMatrixEffect()
      initGalaxyBackground()
      initTypingEffect()
      initScrollAnimation()
      initMobileMenu()
      initGalleryModal()
      initProjects()
      initProjectFilters()
      initLanguageToggle()
  
      // Ocultar pantalla de carga después de inicializar todo
      hideLoadingScreen()
    }, 3000) // 3 segundos de pantalla de carga
  })
  
  // Pantalla de carga
  function showLoadingScreen() {
    const loadingScreen = document.getElementById("loading-screen")
    loadingScreen.style.display = "flex"
    document.body.style.overflow = "hidden"
  
    // Inicializar efecto matrix en la pantalla de carga
    initLoadingMatrixEffect()
  }
  
  function hideLoadingScreen() {
    const loadingScreen = document.getElementById("loading-screen")
    loadingScreen.style.opacity = "0"
    loadingScreen.style.transition = "opacity 1s ease"
  
    setTimeout(() => {
      loadingScreen.style.display = "none"
      document.body.style.overflow = "auto"
    }, 1000)
  }
  
  // Efecto Matrix para la pantalla de carga
  function initLoadingMatrixEffect() {
    const canvas = document.getElementById("loading-matrix")
    const ctx = canvas.getContext("2d")
  
    // Configurar el tamaño del canvas
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  
    // Caracteres para el efecto Matrix
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>[]{}|=+*/-_$#@!?"
  
    // Configuración de columnas
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
  
    // Array para seguir la posición Y de cada columna
    const drops = []
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }
  
    // Color del texto
    const textColor = "#64ffda"
  
    // Función para dibujar el efecto Matrix
    function drawMatrix() {
      // Fondo semi-transparente para crear el efecto de desvanecimiento
      ctx.fillStyle = "rgba(10, 25, 47, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
  
      // Configuración del texto
      ctx.fillStyle = textColor
      ctx.font = `${fontSize}px monospace`
  
      // Dibujar caracteres
      for (let i = 0; i < drops.length; i++) {
        // Seleccionar un caracter aleatorio
        const char = characters.charAt(Math.floor(Math.random() * characters.length))
  
        // Dibujar el caracter
        ctx.fillText(char, i * fontSize, drops[i] * fontSize)
  
        // Reiniciar la posición de la gota si ha llegado al final o aleatoriamente
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
  
        // Mover la gota hacia abajo
        drops[i]++
      }
    }
  
    // Actualizar el efecto Matrix
    const matrixInterval = setInterval(drawMatrix, 50)
  
    // Limpiar intervalo cuando se oculta la pantalla de carga
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        clearInterval(matrixInterval)
      }
    })
  }
  
  // Cambio de idioma
  function initLanguageToggle() {
    const languageToggle = document.getElementById("language-toggle")
    const currentLanguage = document.getElementById("current-language")
  
    languageToggle.addEventListener("click", () => {
      const html = document.documentElement
      const currentLang = html.getAttribute("data-language") || "es"
      const newLang = currentLang === "es" ? "en" : "es"
  
      // Cambiar el atributo de idioma
      html.setAttribute("data-language", newLang)
  
      // Actualizar el texto del botón
      currentLanguage.textContent = newLang.toUpperCase()
  
      // Actualizar todos los textos
      updateTexts(newLang)
    })
  
    // Inicializar textos con el idioma actual
    const initialLang = document.documentElement.getAttribute("data-language") || "es"
    updateTexts(initialLang)
  }
  
  function updateTexts(language) {
    const elements = document.querySelectorAll("[data-i18n]")
  
    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n")
      const keys = key.split(".")
  
      // Navegar por el objeto de traducciones
      let translation = translations[language]
      for (const k of keys) {
        if (translation && translation[k]) {
          translation = translation[k]
        } else {
          translation = null
          break
        }
      }
  
      if (translation) {
        // Si es un elemento de entrada, actualizar el placeholder
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
          element.placeholder = translation
        } else {
          element.textContent = translation
        }
      }
    })
  }
  
  // Efecto Matrix (lluvia de código)
  function initMatrixEffect() {
    const canvas = document.getElementById("matrix-effect")
    const ctx = canvas.getContext("2d")
  
    // Configurar el tamaño del canvas
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  
    // Caracteres para el efecto Matrix
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>[]{}|=+*/-_$#@!?"
  
    // Configuración de columnas
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
  
    // Array para seguir la posición Y de cada columna
    const drops = []
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }
  
    // Color del texto
    const textColor = "#64ffda"
  
    // Función para dibujar el efecto Matrix
    function drawMatrix() {
      // Fondo semi-transparente para crear el efecto de desvanecimiento
      ctx.fillStyle = "rgba(10, 25, 47, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
  
      // Configuración del texto
      ctx.fillStyle = textColor
      ctx.font = `${fontSize}px monospace`
  
      // Dibujar caracteres
      for (let i = 0; i < drops.length; i++) {
        // Seleccionar un caracter aleatorio
        const char = characters.charAt(Math.floor(Math.random() * characters.length))
  
        // Dibujar el caracter
        ctx.fillText(char, i * fontSize, drops[i] * fontSize)
  
        // Reiniciar la posición de la gota si ha llegado al final o aleatoriamente
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
  
        // Mover la gota hacia abajo
        drops[i]++
      }
    }
  
    // Actualizar el efecto Matrix
    setInterval(drawMatrix, 50)
  
    // Ajustar el tamaño del canvas cuando cambia el tamaño de la ventana
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
  
      // Recalcular columnas
      const newColumns = Math.floor(canvas.width / fontSize)
  
      // Ajustar el array de gotas
      if (newColumns > columns) {
        for (let i = columns; i < newColumns; i++) {
          drops[i] = Math.random() * -100
        }
      }
    })
  }
  
  // Fondo de galaxia
  function initGalaxyBackground() {
    const canvas = document.getElementById("galaxy-background")
    const ctx = canvas.getContext("2d")
  
    // Configurar el tamaño del canvas
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  
    // Crear estrellas
    const stars = []
    const numStars = 200
  
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        opacity: Math.random(),
        speed: Math.random() * 0.05,
      })
    }
  
    // Crear nebulosas
    const nebulae = []
    const numNebulae = 5
  
    for (let i = 0; i < numNebulae; i++) {
      nebulae.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 100 + Math.random() * 200,
        color: `hsla(${Math.random() * 60 + 200}, 100%, 50%, 0.1)`,
        speed: Math.random() * 0.02,
      })
    }
  
    // Función para dibujar el fondo de galaxia
    function drawGalaxy() {
      // Fondo negro
      ctx.fillStyle = "#0a192f"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
  
      // Dibujar nebulosas
      for (let i = 0; i < nebulae.length; i++) {
        const nebula = nebulae[i]
  
        // Crear gradiente radial
        const gradient = ctx.createRadialGradient(nebula.x, nebula.y, 0, nebula.x, nebula.y, nebula.radius)
  
        gradient.addColorStop(0, nebula.color)
        gradient.addColorStop(1, "transparent")
  
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2)
        ctx.fill()
  
        // Mover nebulosa
        nebula.x += nebula.speed
        nebula.y -= nebula.speed
  
        // Reiniciar posición si sale del canvas
        if (nebula.x > canvas.width + nebula.radius) {
          nebula.x = -nebula.radius
        }
        if (nebula.y < -nebula.radius) {
          nebula.y = canvas.height + nebula.radius
        }
      }
  
      // Dibujar estrellas
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]
  
        // Parpadeo de estrellas
        star.opacity = Math.sin(Date.now() * star.speed) * 0.5 + 0.5
  
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()
  
        // Mover estrellas
        star.x += star.speed
  
        // Reiniciar posición si sale del canvas
        if (star.x > canvas.width) {
          star.x = 0
          star.y = Math.random() * canvas.height
        }
      }
  
      // Llamar a la siguiente animación
      requestAnimationFrame(drawGalaxy)
    }
  
    // Iniciar animación
    drawGalaxy()
  
    // Ajustar el tamaño del canvas cuando cambia el tamaño de la ventana
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
  
      // Reposicionar estrellas
      for (let i = 0; i < stars.length; i++) {
        if (Math.random() > 0.5) {
          stars[i].x = Math.random() * canvas.width
          stars[i].y = Math.random() * canvas.height
        }
      }
  
      // Reposicionar nebulosas
      for (let i = 0; i < nebulae.length; i++) {
        if (Math.random() > 0.5) {
          nebulae[i].x = Math.random() * canvas.width
          nebulae[i].y = Math.random() * canvas.height
        }
      }
    })
  }
  
  // Efecto de escritura
  function initTypingEffect() {
    const typingText = document.getElementById("typing-text")
    const phrases = ["Backend Developer", "Frontend Developer", "Mobile Developer", "Full Stack Developer"]
    let phraseIndex = 0
    let letterIndex = 0
    let isDeleting = false
    let typingSpeed = 100
  
    function type() {
      const currentPhrase = phrases[phraseIndex]
  
      if (isDeleting) {
        // Borrar texto
        typingText.textContent = currentPhrase.substring(0, letterIndex - 1)
        letterIndex--
        typingSpeed = 50
      } else {
        // Escribir texto
        typingText.textContent = currentPhrase.substring(0, letterIndex + 1)
        letterIndex++
        typingSpeed = 100
      }
  
      // Cambiar dirección (escribir/borrar)
      if (!isDeleting && letterIndex === currentPhrase.length) {
        // Pausa al final de la escritura
        typingSpeed = 1500
        isDeleting = true
      } else if (isDeleting && letterIndex === 0) {
        // Cambiar a la siguiente frase
        isDeleting = false
        phraseIndex = (phraseIndex + 1) % phrases.length
        // Pausa antes de comenzar a escribir
        typingSpeed = 500
      }
  
      // Continuar el efecto
      setTimeout(type, typingSpeed)
    }
  
    // Iniciar el efecto de escritura
    setTimeout(type, 1000)
  }
  
  // Animaciones al hacer scroll
  function initScrollAnimation() {
    // Seleccionar elementos para animar
    const sections = document.querySelectorAll(".section")
    const techItems = document.querySelectorAll(".tech-item")
  
    // Opciones para el Intersection Observer
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }
  
    // Callback para el Intersection Observer
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
  
          // Animar elementos de tecnología si es la sección "about"
          if (entry.target.id === "about") {
            let delay = 0
            techItems.forEach((item) => {
              setTimeout(() => {
                item.style.opacity = "0"
                item.style.transform = "translateY(20px)"
                setTimeout(() => {
                  item.style.opacity = "1"
                  item.style.transform = "translateY(0)"
                }, 100)
              }, delay)
              delay += 50
            })
          }
  
          // Dejar de observar el elemento
          observer.unobserve(entry.target)
        }
      })
    }
  
    // Crear el Intersection Observer
    const observer = new IntersectionObserver(callback, options)
  
    // Observar cada sección
    sections.forEach((section) => {
      observer.observe(section)
    })
  }
  
  // Menú móvil
  function initMobileMenu() {
    const menuToggle = document.querySelector(".menu-toggle")
    const navLinks = document.querySelector(".nav-links")
  
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active")
    })
  
    // Cerrar menú al hacer clic en un enlace
    const navItems = document.querySelectorAll(".nav-links a")
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navLinks.classList.remove("active")
      })
    })
  }
  
  // Modal de galería
  function initGalleryModal() {
    const modal = document.getElementById("gallery-modal")
    const closeModal = document.querySelector(".close-modal")
    const mainImage = document.getElementById("gallery-main-image")
    const thumbnailsContainer = document.getElementById("gallery-thumbnails")
    const modalTitle = document.getElementById("modal-title")
    const galleryDescription = document.getElementById("gallery-description")
  
    // Abrir modal al hacer clic en botón de galería (se configurará dinámicamente)
    document.addEventListener("click", (event) => {
      if (event.target.classList.contains("btn-gallery") || event.target.closest(".btn-gallery")) {
        const button = event.target.classList.contains("btn-gallery")
          ? event.target
          : event.target.closest(".btn-gallery")
        const projectId = button.getAttribute("data-project")
        const project = projectsData.find((p) => p.id === projectId)
  
        if (project) {
          // Establecer título
          modalTitle.textContent = `Galería: ${project.title}`
  
          // Establecer imagen principal
          mainImage.src = project.images[0].src
          mainImage.alt = project.images[0].alt
  
          // Limpiar y crear miniaturas
          thumbnailsContainer.innerHTML = ""
          project.images.forEach((image, index) => {
            const thumbnail = document.createElement("div")
            thumbnail.className = `gallery-thumbnail ${index === 0 ? "active" : ""}`
            thumbnail.innerHTML = `<img src="${image.src}" alt="${image.alt}">`
  
            // Cambiar imagen principal al hacer clic en miniatura
            thumbnail.addEventListener("click", function () {
              mainImage.src = image.src
              mainImage.alt = image.alt
  
              // Actualizar clase activa
              document.querySelectorAll(".gallery-thumbnail").forEach((thumb) => {
                thumb.classList.remove("active")
              })
              this.classList.add("active")
            })
  
            thumbnailsContainer.appendChild(thumbnail)
          })
  
          // Establecer descripción
          galleryDescription.textContent = project.detailedDescription
  
          // Mostrar modal
          modal.style.display = "block"
          document.body.style.overflow = "hidden"
        }
      }
    })
  
    // Cerrar modal
    closeModal.addEventListener("click", () => {
      modal.style.display = "none"
      document.body.style.overflow = "auto"
    })
  
    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none"
        document.body.style.overflow = "auto"
      }
    })
  }
  
  // Inicializar proyectos
  function initProjects() {
    const projectsGrid = document.getElementById("projects-grid")
    const loadMoreBtn = document.getElementById("load-more-btn")
    let visibleProjects = 6 // Número inicial de proyectos visibles
  
    // Función para renderizar proyectos
    function renderProjects(projects, count) {
      projectsGrid.innerHTML = "" // Limpiar grid
  
      // Mostrar solo el número especificado de proyectos
      const projectsToShow = projects.slice(0, count)
  
      projectsToShow.forEach((project) => {
        const projectCard = document.createElement("div")
        projectCard.className = "project-card"
        projectCard.setAttribute("data-category", project.category)
  
        projectCard.innerHTML = `
          <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
            <div class="project-overlay">
              <h3>${project.title}</h3>
              <p>${project.category}</p>
            </div>
          </div>
          <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
              ${project.tech.map((tech) => `<span>${tech}</span>`).join("")}
            </div>
            <div class="project-links">
              ${
                project.githubUrl
                  ? `<a href="${project.githubUrl}" target="_blank" class="btn btn-outline"><i class="fab fa-github"></i> Ver Código</a>`
                  : `<a href="#" class="btn btn-outline"><i class="fas fa-code"></i> Ver Código</a>`
              }
              <button class="btn btn-gallery" data-project="${project.id}"><i class="fas fa-images"></i> Galería</button>
            </div>
          </div>
        `
  
        projectsGrid.appendChild(projectCard)
      })
  
      // Mostrar u ocultar el botón "Cargar Más" según sea necesario
      if (count >= projects.length) {
        loadMoreBtn.style.display = "none"
      } else {
        loadMoreBtn.style.display = "block"
      }
    }
  
    // Renderizar proyectos iniciales
    renderProjects(projectsData, visibleProjects)
  
    // Evento para cargar más proyectos
    loadMoreBtn.addEventListener("click", () => {
      visibleProjects += 6 // Incrementar en 6 el número de proyectos visibles
  
      // Obtener la categoría actualmente seleccionada
      const activeFilter = document.querySelector(".filter-btn.active").getAttribute("data-filter")
      let filteredProjects = projectsData
  
      if (activeFilter !== "all") {
        filteredProjects = projectsData.filter((project) => project.category === activeFilter)
      }
  
      // Renderizar proyectos filtrados
      renderProjects(filteredProjects, visibleProjects)
    })
  }
  
  // Inicializar filtros de proyectos
  function initProjectFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn")
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remover clase activa de todos los botones
        filterButtons.forEach((btn) => btn.classList.remove("active"))
  
        // Añadir clase activa al botón clickeado
        button.classList.add("active")
  
        // Obtener categoría a filtrar
        const filterValue = button.getAttribute("data-filter")
  
        // Filtrar proyectos
        let filteredProjects = projectsData
  
        if (filterValue !== "all") {
          filteredProjects = projectsData.filter((project) => project.category === filterValue)
        }
  
        // Resetear número de proyectos visibles
        const visibleProjects = 6
  
        // Renderizar proyectos filtrados
        renderProjects(filteredProjects, visibleProjects)
      })
    })
  
    // Función para renderizar proyectos (definida en initProjects)
    function renderProjects(projects, count) {
      const projectsGrid = document.getElementById("projects-grid")
      const loadMoreBtn = document.getElementById("load-more-btn")
  
      projectsGrid.innerHTML = "" // Limpiar grid
  
      // Mostrar solo el número especificado de proyectos
      const projectsToShow = projects.slice(0, count)
  
      projectsToShow.forEach((project) => {
        const projectCard = document.createElement("div")
        projectCard.className = "project-card"
        projectCard.setAttribute("data-category", project.category)
  
        projectCard.innerHTML = `
          <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
            <div class="project-overlay">
              <h3>${project.title}</h3>
              <p>${project.category}</p>
            </div>
          </div>
          <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
              ${project.tech.map((tech) => `<span>${tech}</span>`).join("")}
            </div>
            <div class="project-links">
              ${
                project.githubUrl
                  ? `<a href="${project.githubUrl}" target="_blank" class="btn btn-outline"><i class="fab fa-github"></i> Ver Código</a>`
                  : `<a href="#" class="btn btn-outline"><i class="fas fa-code"></i> Ver Código</a>`
              }
              <button class="btn btn-gallery" data-project="${project.id}"><i class="fas fa-images"></i> Galería</button>
            </div>
          </div>
        `
  
        projectsGrid.appendChild(projectCard)
      })
  
      // Mostrar u ocultar el botón "Cargar Más" según sea necesario
      if (count >= projects.length) {
        loadMoreBtn.style.display = "none"
      } else {
        loadMoreBtn.style.display = "block"
      }
    }
  }
  