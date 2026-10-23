/* ============================================
   ARCHIVO DE CONFIGURACIÓN
   ============================================

   Este archivo te permite actualizar fácilmente
   la información de tu CV sin tocar el HTML.

   INSTRUCCIONES:
   1. Modifica los valores según tus necesidades
   2. Guarda el archivo
   3. Recarga la página para ver los cambios

   ============================================ */

const CONFIG = {
    // ==========================================
    // INFORMACIÓN PERSONAL
    // ==========================================
    personal: {
        nombre: "Alejandro",
        apellidos: "Burciaga Calzadillas",
        titulo: "Desarrollador Full Stack",
        ubicacion: "Chihuahua, México",
        disponible: true,
        descripcion: `Estudiante de <strong>Ingeniería en Sistemas Computacionales</strong> apasionado por crear
            soluciones tecnológicas innovadoras. Especializado en desarrollo web Full Stack
            con experiencia en tecnologías modernas.`,

        // Textos para el efecto typewriter
        roles: [
            'Desarrollador Full Stack',
            'Ingeniero en Sistemas Computacionales',
            'Apasionado por la Tecnología',
            'Creador de Soluciones Digitales'
        ]
    },

    // ==========================================
    // INFORMACIÓN DE CONTACTO
    // ==========================================
    contacto: {
        email: "alejbur@gmail.com",
        linkedin: "https://www.linkedin.com/in/alejandro-burciaga-744a18210",
        github: "https://github.com/Alejb2001",
        // Agrega más redes sociales si lo deseas:
        // twitter: "https://twitter.com/tu-usuario",
        // instagram: "https://instagram.com/tu-usuario",
    },

    // ==========================================
    // SECCIÓN "SOBRE MÍ"
    // ==========================================
    sobreMi: {
        parrafos: [
            `Soy estudiante de <strong>Ingeniería en Sistemas Computacionales</strong> en Chihuahua, México.
            Mi pasión por la programación me ha llevado a explorar diversas áreas del desarrollo de software,
            desde aplicaciones móviles hasta sistemas web complejos.`,

            `Como <strong>Desarrollador Full Stack</strong>, disfruto trabajar tanto en el frontend como en el
            backend, creando experiencias de usuario atractivas respaldadas por arquitecturas sólidas y eficientes.`,

            `Siempre estoy buscando nuevos desafíos y oportunidades para aprender. Me motiva la idea de que
            cada línea de código puede contribuir a resolver problemas reales y mejorar la vida de las personas.`
        ],

        // Estadísticas
        stats: {
            proyectos: 9,
            lenguajes: 8,
            frameworks: 3
        }
    },

    // ==========================================
    // HABILIDADES
    // ==========================================
    habilidades: {
        lenguajes: [
            { nombre: "Java", icono: "fab fa-java", nivel: 85 },
            { nombre: "Python", icono: "fab fa-python", nivel: 80 },
            { nombre: "JavaScript", icono: "fab fa-js", nivel: 85 },
            { nombre: "TypeScript", icono: "img:typescript", nivel: 75 },
            { nombre: "Kotlin", icono: "img:kotlin", nivel: 70 },
            { nombre: "C#", icono: "img:csharp", nivel: 70 }
        ],
        frontend: [
            { nombre: "HTML5", icono: "fab fa-html5", nivel: 90 },
            { nombre: "CSS3", icono: "fab fa-css3-alt", nivel: 85 },
            { nombre: "Angular", icono: "fab fa-angular", nivel: 80 }
        ],
        backend: [
            { nombre: "Django", icono: "img:django", nivel: 75 },
            { nombre: "ASP.NET", icono: "img:dotnetcore", nivel: 70 }
        ],
        herramientas: [
            { nombre: "Git", icono: "fab fa-git-alt", nivel: 85 },
            { nombre: "GitHub", icono: "fab fa-github", nivel: 85 },
            { nombre: "Android Studio", icono: "fab fa-android", nivel: 75 }
        ]
    },

    // ==========================================
    // PROYECTOS
    // ==========================================
    proyectos: [
        {
            titulo: "Teclados Shop",
            categoria: "web",
            descripcion: "Tienda en línea para venta de teclados mecánicos y periféricos, desarrollada con TypeScript.",
            tecnologias: ["TypeScript"],
            icono: "fas fa-keyboard",
            github: "https://github.com/Alejb2001/teclados-shop",
            demo: null
        },
        {
            titulo: "DM Admin App",
            categoria: "web",
            descripcion: "Aplicación web para administrar campañas de juegos de rol de mesa, con backend REST en C#.",
            tecnologias: ["TypeScript", "C#", "ASP.NET"],
            icono: "fas fa-dice-d20",
            github: "https://github.com/Alejb2001/DM-admin-app",
            demo: null
        },
        {
            titulo: "Jestr Activity Tracking",
            categoria: "web",
            descripcion: "Plataforma web para la planeación y seguimiento de actividades, con API REST en C#.",
            tecnologias: ["TypeScript", "C#", "ASP.NET"],
            icono: "fas fa-running",
            github: "https://github.com/Alejb2001/jestr-activity-tracking-app",
            demo: null
        },
        {
            titulo: "FinanciApp",
            categoria: "web",
            descripcion: "Aplicación web para la administración de finanzas personales con seguimiento de gastos e ingresos.",
            tecnologias: ["TypeScript"],
            icono: "fas fa-chart-line",
            github: "https://github.com/Alejb2001/FinanciApp",
            demo: null
        },
        {
            titulo: "Wiki Libros",
            categoria: "web",
            descripcion: "Plataforma full stack para gestión de libros con frontend en Angular y backend en ASP.NET.",
            tecnologias: ["Angular", "C#", "ASP.NET"],
            icono: "fas fa-book",
            github: "https://github.com/Alejb2001/wiki-libros-CF",
            demo: null
        },
        {
            titulo: "Bird Care Web",
            categoria: "web",
            descripcion: "Plataforma web para el cuidado y seguimiento de aves con información y registro de especies.",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            icono: "fas fa-dove",
            github: "https://github.com/Alejb2001/bird-care-web",
            demo: null
        },
        {
            titulo: "MatchupCompanion",
            categoria: "other",
            descripcion: "Aplicación .NET que ofrece información de matchups para tu campeón favorito de League of Legends.",
            tecnologias: ["C#", ".NET"],
            icono: "fas fa-gamepad",
            github: "https://github.com/Alejb2001/MatchupCompanion",
            demo: null
        },
        {
            titulo: "Mexexpress Django",
            categoria: "web",
            descripcion: "Tienda en línea completa desarrollada con Django, incluyendo carrito de compras y gestión de productos.",
            tecnologias: ["Python", "Django", "SQLite"],
            icono: "fas fa-shopping-cart",
            github: "https://github.com/Alejb2001/Mexexpress_Django",
            demo: null
        },
        {
            titulo: "Compilador Completo",
            categoria: "other",
            descripcion: "Implementación de un compilador con analizadores léxico, sintáctico y semántico desde cero.",
            tecnologias: ["Java", "Teoría de Compiladores"],
            icono: "fas fa-terminal",
            github: "https://github.com/Alejb2001/Compilador_Analizadores_Lexico_Sintactico_Semantico",
            demo: null
        }
    ],

    // ==========================================
    // EXPERIENCIA Y EDUCACIÓN
    // ==========================================
    experiencia: [
        {
            tipo: "educacion", // "educacion" o "trabajo"
            icono: "fas fa-graduation-cap",
            fecha: "2021 - Presente",
            titulo: "Ingeniería en Sistemas Computacionales",
            lugar: "Instituto Tecnológico de Chihuahua II",
            descripcion: `Formación integral en desarrollo de software, bases de datos,
                redes, inteligencia artificial y más. Participación activa en
                proyectos académicos y extracurriculares.`,
            tags: ["Desarrollo de Software", "Bases de Datos", "Algoritmos"]
        },
        {
            tipo: "trabajo",
            icono: "fas fa-code",
            fecha: "2023 - Presente",
            titulo: "Desarrollador Full Stack",
            lugar: "Proyectos Personales & Freelance",
            descripcion: `Desarrollo de aplicaciones web y móviles utilizando tecnologías
                modernas. Implementación de soluciones end-to-end desde el diseño
                hasta el despliegue.`,
            tags: ["Angular", "Django", "Android"]
        }
        // Agrega más experiencias según sea necesario
    ],

    // ==========================================
    // CONFIGURACIÓN DEL TEMA
    // ==========================================
    tema: {
        // Color primario (hue value: 0-360)
        // 250 = Morado/Violeta, 210 = Azul, 170 = Verde azulado
        primaryHue: 250,

        // Tema por defecto: 'light', 'dark', o 'system'
        defaultTheme: 'system'
    }
};

// Exportar configuración (para uso futuro con módulos)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
