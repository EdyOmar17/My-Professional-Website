// Datos de proyectos detallados
const proyectosDetalles = {
    1: {
        nombre: "Sistema de Gestión Empresarial",
        descripcion: "Sistema integral desarrollado para la gestión completa de una empresa, incluyendo módulos de inventario, ventas, reportes financieros y gestión de clientes. El sistema permite llevar un control detallado de todos los procesos empresariales desde una única plataforma.",
        imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        tags: ["Laravel", "MySQL", "Bootstrap", "Full Stack"],
        caracteristicas: [
            "Gestión de inventario con control de stock y alertas",
            "Módulo de ventas con generación de facturas electrónicas",
            "Reportes financieros en tiempo real",
            "Panel de administración con dashboard interactivo",
            "Sistema de roles y permisos para usuarios"
        ],
        tecnologias: [
            {nombre: "Laravel 9", icono: "fab fa-laravel"},
            {nombre: "MySQL", icono: "fas fa-database"},
            {nombre: "Bootstrap 5", icono: "fab fa-bootstrap"},
            {nombre: "JavaScript", icono: "fab fa-js-square"},
            {nombre: "Chart.js", icono: "fas fa-chart-bar"}
        ],
        demo: "#",
        github: "#"
    },
    2: {
        nombre: "API REST para E-commerce",
        descripcion: "API robusta diseñada para alimentar aplicaciones de e-commerce, con autenticación segura mediante JWT, documentación completa con Swagger y endpoints optimizados para alto rendimiento.",
        imagen: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        tags: ["PHP", "API REST", "JWT", "Backend"],
        caracteristicas: [
            "Autenticación JWT con refresh tokens",
            "Documentación interactiva con Swagger/OpenAPI",
            "Endpoints para productos, categorías, usuarios y pedidos",
            "Sistema de pagos integrado (simulado)",
            "Búsqueda avanzada con filtros múltiples"
        ],
        tecnologias: [
            {nombre: "PHP 8", icono: "fab fa-php"},
            {nombre: "JWT", icono: "fas fa-key"},
            {nombre: "MySQL", icono: "fas fa-database"},
            {nombre: "Swagger", icono: "fas fa-book"},
            {nombre: "Postman", icono: "fas fa-cloud"}
        ],
        demo: "#",
        github: "#"
    },
    3: {
        nombre: "Plataforma de E-learning",
        descripcion: "Plataforma educativa completa que permite a los instructores crear cursos en línea y a los estudiantes acceder a contenido educativo, realizar evaluaciones y llevar un seguimiento de su progreso.",
        imagen: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        tags: ["Laravel", "Vue.js", "Tailwind", "Full Stack"],
        caracteristicas: [
            "Creación y gestión de cursos con lecciones en video",
            "Sistema de evaluaciones con calificaciones automáticas",
            "Panel de progreso para estudiantes",
            "Foros de discusión por curso",
            "Sistema de certificados al completar cursos"
        ],
        tecnologias: [
            {nombre: "Laravel 10", icono: "fab fa-laravel"},
            {nombre: "Vue.js 3", icono: "fab fa-vuejs"},
            {nombre: "Tailwind CSS", icono: "fas fa-palette"},
            {nombre: "MySQL", icono: "fas fa-database"},
            {nombre: "Vite", icono: "fas fa-bolt"}
        ],
        demo: "#",
        github: "#"
    },
    4: {
        nombre: "Sistema de Tickets de Soporte",
        descripcion: "Sistema de gestión de tickets de soporte técnico que permite a los usuarios reportar problemas y a los agentes de soporte gestionar y resolver los casos de manera eficiente.",
        imagen: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        tags: ["JavaScript", "PHP", "MySQL", "Full Stack"],
        caracteristicas: [
            "Creación y seguimiento de tickets",
            "Asignación de tickets a agentes específicos",
            "Sistema de prioridades y categorías",
            "Notificaciones por email",
            "Dashboard con métricas de rendimiento"
        ],
        tecnologias: [
            {nombre: "PHP", icono: "fab fa-php"},
            {nombre: "JavaScript", icono: "fab fa-js-square"},
            {nombre: "MySQL", icono: "fas fa-database"},
            {nombre: "AJAX", icono: "fas fa-sync"},
            {nombre: "Bootstrap", icono: "fab fa-bootstrap"}
        ],
        demo: "#",
        github: "#"
    },
    5: {
        nombre: "CMS para Blog Personalizado",
        descripcion: "Sistema de gestión de contenidos desarrollado desde cero para la creación y administración de blogs, con editor enriquecido, sistema de comentarios y gestión de usuarios.",
        imagen: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        tags: ["Laravel", "JavaScript", "MySQL", "CMS"],
        caracteristicas: [
            "Editor de texto enriquecido (WYSIWYG)",
            "Sistema de categorías y etiquetas",
            "Comentarios con moderación",
            "Búsqueda avanzada de artículos",
            "Panel de estadísticas de visitas"
        ],
        tecnologias: [
            {nombre: "Laravel", icono: "fab fa-laravel"},
            {nombre: "JavaScript", icono: "fab fa-js-square"},
            {nombre: "MySQL", icono: "fas fa-database"},
            {nombre: "TinyMCE", icono: "fas fa-edit"},
            {nombre: "Chart.js", icono: "fas fa-chart-bar"}
        ],
        demo: "#",
        github: "#"
    },
    6: {
        nombre: "Aplicación de Gestión de Tareas",
        descripcion: "Aplicación web para la gestión de proyectos y tareas con interfaz intuitiva que permite organizar, priorizar y hacer seguimiento a las actividades de equipo o personales.",
        imagen: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        tags: ["PHP", "AJAX", "MySQL", "Productividad"],
        caracteristicas: [
            "Interfaz drag & drop para organizar tareas",
            "Sistema de prioridades y fechas de vencimiento",
            "Colaboración en equipo con asignación de tareas",
            "Vistas kanban, lista y calendario",
            "Notificaciones de recordatorio"
        ],
        tecnologias: [
            {nombre: "PHP", icono: "fab fa-php"},
            {nombre: "AJAX", icono: "fas fa-sync"},
            {nombre: "MySQL", icono: "fas fa-database"},
            {nombre: "JavaScript", icono: "fab fa-js-square"},
            {nombre: "FullCalendar", icono: "fas fa-calendar-alt"}
        ],
        demo: "#",
        github: "#"
    }
};

document.addEventListener('copy', function(e) {
    e.preventDefault();
});

document.addEventListener('paste', function(e) {
    e.preventDefault();
});

document.addEventListener('cut', function(e) {
    e.preventDefault();
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
// Funcionalidades principales
document.addEventListener('DOMContentLoaded', function() {
    
    // ======================
    // FUNCIONALIDAD TEMA OSCURO/CLARO
    // ======================
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Verificar preferencia guardada
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    body.className = savedTheme;
    
    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('light-mode')) {
            body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });
    
    // ======================
    // NAVEGACIÓN MÓVIL
    // ======================
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // ======================
    // FILTRADO DE PROYECTOS
    // ======================
    const filtroBtns = document.querySelectorAll('.filtro-btn');
    const proyectoCards = document.querySelectorAll('.proyecto-card');
    
    filtroBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Quitar clase active de todos los botones
            filtroBtns.forEach(b => b.classList.remove('active'));
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            const categoria = this.getAttribute('data-categoria');
            
            // Filtrar proyectos
            proyectoCards.forEach(card => {
                if (categoria === 'todos' || card.getAttribute('data-categoria').includes(categoria)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // ======================
    // MODAL DE DETALLES DEL PROYECTO
    // ======================
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.querySelector('.modal-close');
    const btnDetalles = document.querySelectorAll('.btn-detalles');
    
    btnDetalles.forEach(btn => {
        btn.addEventListener('click', function() {
            const proyectoId = this.getAttribute('data-proyecto');
            abrirModal(proyectoId);
        });
    });
    
    modalClose.addEventListener('click', cerrarModal);
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            cerrarModal();
        }
    });
    
    // Cerrar modal con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            cerrarModal();
        }
    });
    
    // Función para abrir modal
    function abrirModal(proyectoId) {
        const proyecto = proyectosDetalles[proyectoId];
        
        if (!proyecto) return;
        
        // Actualizar contenido del modal
        document.getElementById('modal-titulo').textContent = 'Detalles del Proyecto';
        document.getElementById('modal-nombre').textContent = proyecto.nombre;
        document.getElementById('modal-img').src = proyecto.imagen;
        document.getElementById('modal-img').alt = proyecto.nombre;
        document.getElementById('modal-descripcion').textContent = proyecto.descripcion;
        
        // Actualizar tags
        const modalTags = document.getElementById('modal-tags');
        modalTags.innerHTML = '';
        proyecto.tags.forEach(tag => {
            const span = document.createElement('span');
            span.className = 'tag';
            span.textContent = tag;
            
            // Aplicar clase específica si existe
            if (tag.toLowerCase().includes('laravel')) span.classList.add('laravel');
            else if (tag.toLowerCase().includes('php')) span.classList.add('php');
            else if (tag.toLowerCase().includes('javascript')) span.classList.add('javascript');
            else if (tag.toLowerCase().includes('mysql')) span.classList.add('mysql');
            else if (tag.toLowerCase().includes('vue')) span.classList.add('vue');
            else if (tag.toLowerCase().includes('api')) span.classList.add('api');
            else if (tag.toLowerCase().includes('jwt')) span.classList.add('jwt');
            else if (tag.toLowerCase().includes('bootstrap')) span.classList.add('bootstrap');
            else if (tag.toLowerCase().includes('tailwind')) span.classList.add('tailwind');
            else if (tag.toLowerCase().includes('ajax')) span.classList.add('ajax');
            
            modalTags.appendChild(span);
        });
        
        // Actualizar características
        const modalCaracteristicas = document.getElementById('modal-caracteristicas');
        modalCaracteristicas.innerHTML = '';
        proyecto.caracteristicas.forEach(caracteristica => {
            const li = document.createElement('li');
            li.textContent = caracteristica;
            modalCaracteristicas.appendChild(li);
        });
        
        // Actualizar tecnologías
        const modalTecnologias = document.getElementById('modal-tecnologias');
        modalTecnologias.innerHTML = '';
        proyecto.tecnologias.forEach(tech => {
            const span = document.createElement('span');
            span.innerHTML = `<i class="${tech.icono}"></i> ${tech.nombre}`;
            modalTecnologias.appendChild(span);
        });
        
        // Actualizar enlaces
        document.getElementById('modal-demo').href = proyecto.demo;
        document.getElementById('modal-github').href = proyecto.github;
        
        // Mostrar modal
        modalOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    
    // Función para cerrar modal
    function cerrarModal() {
        modalOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // ======================
    // ANIMACIÓN DE BARRAS DE HABILIDADES
    // ======================
    const habilidadProgreso = document.querySelectorAll('.habilidad-progreso');

    // Función para animar barras cuando son visibles
    function animarBarras() {
        habilidadProgreso.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            const isVisible = (rect.top <= window.innerHeight - 100);

            // Animar solo si está visible y aún no fue animada
            if (isVisible && !bar.classList.contains('animated')) {
                const nivel = bar.getAttribute('data-nivel') || 0;
                bar.style.width = `${nivel}%`;
                bar.classList.add('animated');
            }
        });
    }
    
    // Ejecutar al cargar y al hacer scroll
    window.addEventListener('scroll', animarBarras);
    animarBarras(); // Ejecutar al cargar
    
    // ======================
    // BOTÓN PARA VOLVER ARRIBA
    // ======================
    const scrollTopBtn = document.getElementById('scroll-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ======================
    // ACORDEÓN DE PREGUNTAS FRECUENTES (FAQ)
    // ======================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Cerrar todos los demás items (opcional, para que solo haya uno abierto a la vez)
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    otherAnswer.style.maxHeight = null;
                }
            });
            
            // Toggle del item actual
            item.classList.toggle('active');
            const answer = item.querySelector('.faq-answer');
            
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 40 + "px"; // +40 para compensar el padding
            } else {
                answer.style.maxHeight = null;
            }
        });
    });
    
    // ======================
    // EFECTO DE APARICIÓN SUAVE
    // ======================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observar elementos para animación
    document.querySelectorAll('.proyecto-card, .habilidad-categoria, .info-item').forEach(el => {
        observer.observe(el);
    });
    
    // Inicializar animaciones de entrada
    document.querySelectorAll('.proyecto-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        
        // Activar animación después de un breve retraso
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
    
    // ======================
    // ANIMACIÓN SUAVE AL HACER SCROLL
    // ======================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Asegurar que todo funcione correctamente
window.onload = function() {
    console.log('Portafolio cargado correctamente');
    
    // Verificar que todos los elementos necesarios estén presentes
    const elementosRequeridos = [
        'theme-toggle',
        'modal-overlay',
        'scroll-top',
        'form-contacto'
    ];
    
    elementosRequeridos.forEach(id => {
        if (!document.getElementById(id)) {
            console.warn(`Elemento con id "${id}" no encontrado`);
        }
    });
};

/* Lógica de descarga de CV con modales */
function abrirModalCV() {
    const modal = document.getElementById('modal-cv');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function cerrarModalCV() {
    const modal = document.getElementById('modal-cv');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function cerrarModalGracias() {
    const modal = document.getElementById('modal-gracias');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function descargarCV(idioma) {
    let fileId = '';
    let fileName = '';
    if (idioma === 'es') {
        fileId = '1qiyWFA6yCzxsAVEcLnU1zquATun3jZBm';
        fileName = 'CV_Edy_Reyes_ES.pdf';
    } else if (idioma === 'en') {
        fileId = '19pMVFu8LzRHqnP6uZMUrXWooHjzvthBR';
        fileName = 'CV_Edy_Reyes_EN.pdf';
    }
    
    if (fileId) {
        // Enlace de descarga directa de Google Drive
        const url = `https://docs.google.com/uc?export=download&id=${fileId}`;
        
        // Crear un enlace temporal invisible y hacerle clic para forzar la descarga
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    
    // Cerrar modal de selección
    cerrarModalCV();
    
    // Mostrar modal de agradecimiento después de un breve momento
    setTimeout(() => {
        const modalGracias = document.getElementById('modal-gracias');
        if (modalGracias) {
            modalGracias.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }, 400);
}

// Event listener para cerrar los nuevos modales si se hace clic fuera del contenido
window.addEventListener('click', function(event) {
    const modalCV = document.getElementById('modal-cv');
    const modalGracias = document.getElementById('modal-gracias');
    
    if (event.target === modalCV) {
        cerrarModalCV();
    }
    if (event.target === modalGracias) {
        cerrarModalGracias();
    }
});

// Funciones para Modal de Notificacion de Contacto
function mostrarModalNotificacion(titulo, texto, esError = false) {
    const modal = document.getElementById('modal-notificacion');
    const icon = document.getElementById('modal-notificacion-icon');
    const title = document.getElementById('modal-notificacion-title');
    const text = document.getElementById('modal-notificacion-text');
    
    if (title && text) {
        title.textContent = titulo;
        text.textContent = texto;
    }
    
    if (icon) {
        if (esError) {
            icon.className = 'fas fa-exclamation-circle modal-icon';
            icon.style.color = '#ef4444';
        } else {
            icon.className = 'fas fa-check-circle modal-icon';
            icon.style.color = 'var(--accent-orange)';
        }
    }
    
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function cerrarModalNotificacion() {
    const modal = document.getElementById('modal-notificacion');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

window.addEventListener('click', function(event) {
    const modalNotificacion = document.getElementById('modal-notificacion');
    if (event.target === modalNotificacion) {
        cerrarModalNotificacion();
    }
});
