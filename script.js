// script.js

// --- DATA (Contenido Multilingüe) ---
const CONTENT = {
    es: {
        nav: { home: 'Inicio', services: 'Servicios', cases: 'Casos', faq: 'Preguntas', contact: 'Contacto' },
        hero: { title_suffix: 'Transforma tu Negocio con Agentes de IA Inteligentes', subtitle: 'Automatiza procesos, incrementa ventas y mejora la atención al cliente con nuestra tecnología de vanguardia.', cta: 'Ver Servicios' },
        about: { title: 'Quiénes Somos', subtitle: 'Innovación desde Dubai para el Mundo', desc: 'YourAgentLab es una agencia especializada en soluciones de inteligencia artificial para pequeñas y medianas empresas...', stats: [{value:'5+', label:'Años Exp.'}, {value:'50+', label:'Proyectos'}, {value:'90%', label:'Retención'}] },
        process: { title: 'Qué Hacemos', subtitle: 'Nuestras Áreas de Enfoque', steps: [ {title:'Smart Response', desc:'Automatización WhatsApp Business', icon:'message-square'}, {title:'AI Reception', desc:'Recepcionista Virtual Inteligente', icon:'phone'}, {title:'Customer Flow Suite', desc:'Automatización Completa del Cliente', icon:'users'}, {title:'Consultoría IA', desc:'Estrategia e Implementación', icon:'bar-chart'} ] },
        testimonials: { title: 'Qué dicen de nosotros', items: [ {text: "¡Gracias a YourAgentLab hemos automatizado las reservas. Ahorramos 15 horas a la semana!", author: "Marco R.", role: "Restaurante Milano"}, {text: "El voicebot gestiona las llamadas mejor que nuestra recepcionista. Clientes 100% satisfechos.", author: "Laura S.", role: "Clínica Médica"}, {text: "Las automatizaciones de WhatsApp aumentaron nuestras ventas un 40%. ¡Increíble!", author: "Giuseppe T.", role: "E-commerce"} ] },
        services: { title: 'Nuestras Soluciones', items: [ 
            { title: 'Smart Response', subtitle: 'Automatización WhatsApp Business', desc: 'Imagina tener un asistente que responde a tus clientes en WhatsApp 24/7...', features: ['Respuestas inteligentes', 'Integración Calendly', 'Recordatorios', 'Multi-conversación'], icon: 'message-square' },
            { title: 'AI Reception', subtitle: 'Recepcionista Virtual', desc: 'Un voicebot que responde llamadas como un recepcionista real...', features: ['Voicebot multilingüe', 'Enrutamiento', 'Gestión de citas', '24/7'], icon: 'phone' },
            { title: 'Customer Flow Suite', subtitle: 'Automatización Completa', desc: 'Desde la primera interacción hasta la fidelización...', features: ['Automatizaciones', 'Integración CRM', 'Seguimiento KPI', 'Informes'], icon: 'rocket' },
            { title: 'Consultoría IA', subtitle: 'Estrategia e Implementación', desc: '¿No sabes por dónde empezar? Te ayudamos...', features: ['Auditoría', 'Hoja de ruta', 'Selección de proveedores', 'Soporte'], icon: 'target' } 
        ] },
        cases: { title: 'Historias de Éxito', labels: { problem: 'Problema', solution: 'Solución', results: 'Resultados' }, items: [
            { company: 'Ristorante Da Marco', category: 'Restauración', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop', problem: 'Perdían el 30% de las llamadas...', solution: 'Implementamos Smart Response...', stats: [{value:'+45%', label:'Reservas', icon:'utensils'}, {value:'15h', label:'Ahorro', icon:'clock'}, {value:'98%', label:'Satisfacción', icon:'users'}] },
            { company: 'Studio Medico Salute+', category: 'Salud', image: 'https://images.unsplash.com/photo-1516574187841-693019f69912?q=80&w=1000&auto=format&fit=crop', problem: 'La recepcionista no lograba gestionar...', solution: 'Instalamos AI Reception...', stats: [{value:'100%', label:'Gestionadas', icon:'phone'}, {value:'-60%', label:'Espera', icon:'clock'}, {value:'+35%', label:'Citas', icon:'trending-up'}] },
            { company: 'E-commerce FashionItaly', category: 'E-commerce', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1000&auto=format&fit=crop', problem: 'Carritos abandonados al 70%...', solution: 'Customer Flow Suite...', stats: [{value:'+40%', label:'Ventas', icon:'dollar-sign'}, {value:'-50%', label:'Abandono', icon:'shopping-bag'}, {value:'+25%', label:'Recurrencia', icon:'users'}] },
            { company: 'Agenzia CasaBella', category: 'Inmobiliaria', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop', problem: 'Dificultad para calificar leads...', solution: 'Consultoría IA completa...', stats: [{value:'+80%', label:'Leads', icon:'target'}, {value:'20h', label:'Ahorro', icon:'clock'}, {value:'+55%', label:'Conversiones', icon:'trending-up'}] }
        ] },
        faq: { title: 'Preguntas Frecuentes', items: [ {q:'¿Qué es un agente de IA?', a:'Un asistente virtual inteligente que trabaja 24/7...'}, {q:'¿Cómo funciona la automatización de WhatsApp?', a:'Se integra con WhatsApp Business y responde automáticamente...'}, {q:'¿Quanto costa un voicebot?', a:'Depende de tus necesidades, tenemos paquetes escalables.'}, {q:'¿Tiempo de implementación?', a:'1-2 semanas para básico, 4-6 para complejo.'}, {q:'¿Reemplaza al personal?', a:'No, libera de tareas repetitivas.'}, {q:'¿Integración con CRM?', a:'Sí, con Salesforce, HubSpot, etc.'}, {q:'¿Privacidad?', a:'Cumplimos con GDPR, datos encriptados.'}, {q:'¿Soporte post-venta?', a:'Sí, continuo.'}, {q:'¿Puedo probarlo?', a:'Sí, ofrecemos demos y pruebas.'}, {q:'¿Solo en Italia?', a:'No, servimos globalmente desde Dubai.'} ] },
        contact: { title: 'Contáctanos', desc: '¿Listo para el futuro?', scheduleTitle: 'Horario', schedule: ['Lunes - Viernes: 9:00 - 18:00', 'Sábado: 10:00 - 14:00', 'Domingo: Cerrado'], form: {name:'Nombre', company:'Empresa', email:'Correo', phone:'Teléfono', msg:'Mensaje', send:'Enviar'} },
        whatsapp: 'Consultar', footer: { tagline: 'Soluciones IA para PYMEs. De Dubai al mundo.', linksTitle: 'Enlaces', legalTitle: 'Legal', socialTitle: 'Social', privacy: 'Privacidad', cookies: 'Cookies', rights: 'Derechos reservados.' }
    },
    it: {
        nav: { home: 'Home', services: 'Servizi', cases: 'Casi', faq: 'FAQ', contact: 'Contatti' },
        hero: { title_suffix: 'Trasforma il tuo Business con Agenti AI Intelligenti', subtitle: 'Automatizza i processi, aumenta le vendite e migliora il servizio clienti.', cta: 'Vedi Servizi' },
        about: { title: 'Chi Siamo', subtitle: 'Innovazione da Dubai per il Mondo', desc: "YourAgentLab è un'agenzia specializzata...", stats: [{value:'5+', label:'Anni Esp.'}, {value:'50+', label:'Progetti'}, {value:'90%', label:'Ritenzione'}] },
        process: { title: 'Cosa Facciamo', subtitle: 'Aree di Intervento', steps: [ {title:'Smart Response', desc:'Automazione WhatsApp Business', icon:'message-square'}, {title:'AI Reception', desc:'Receptionist Virtuale', icon:'phone'}, {title:'Customer Flow Suite', desc:'Automazione Completa', icon:'users'}, {title:'Consulenza AI', desc:'Strategia', icon:'bar-chart'} ] },
        testimonials: { title: 'Dicono di noi', items: [ {text: "Grazie a YourAgentLab abbiamo automatizzato le prenotazioni.", author: "Marco R.", role: "Ristorante Milano"}, {text: "Il voicebot gestisce le chiamate meglio della nostra receptionist.", author: "Laura S.", role: "Studio Medico"}, {text: "Le automazioni WhatsApp hanno aumentato le vendite del 40%.", author: "Giuseppe T.", role: "E-commerce"} ] },
        services: { title: 'Le Nostre Soluzioni', items: [ {title: 'Smart Response', subtitle: 'Automazione WhatsApp', desc: 'Immagina un assistente 24/7...', features: ['Risposte intelligenti', 'Integrazione Calendly', 'Promemoria', 'Multi-chat'], icon:'message-square'}, {title: 'AI Reception', subtitle: 'Receptionist Virtuale', desc: 'Voicebot che risponde come un umano...', features: ['Multilingua', 'Instradamento', 'Appuntamenti', '24/7'], icon:'phone'}, {title: 'Customer Flow Suite', subtitle: 'Automazione Completa', desc: 'Dalla prima interazione alla fedeltà...', features: ['Automazioni', 'CRM', 'KPI', 'Report'], icon:'rocket'}, {title: 'Consulenza AI', subtitle: 'Strategia', desc: 'Ti aiutiamo a capire cosa automatizzare...', features: ['Audit', 'Roadmap', 'Fornitori', 'Supporto'], icon:'target'} ] },
        cases: { title: 'Storie di Successo', labels: { problem: 'Problema', solution: 'Soluzione', results: 'Risultati' }, items: [ {company: 'Ristorante Da Marco', category: 'Ristorazione', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop', problem: 'Perdevano il 30% delle chiamate...', solution: 'Smart Response con Calendly...', stats: [{value:'+45%', label:'Prenot.', icon:'utensils'}, {value:'15h', label:'Risp.', icon:'clock'}, {value:'98%', label:'Sodd.', icon:'users'}]}, {company: 'Studio Medico Salute+', category: 'Sanità', image: 'https://images.unsplash.com/photo-1516574187841-693019f69912?q=80&w=1000&auto=format&fit=crop', problem: 'Receptionist sovraccarica...', solution: 'AI Reception...', stats: [{value:'100%', label:'Gestite', icon:'phone'}, {value:'-60%', label:'Attesa', icon:'clock'}, {value:'+35%', label:'Appunt.', icon:'trending-up'}]}, {company: 'FashionItaly', category: 'E-commerce', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1000&auto=format&fit=crop', problem: 'Carrelli abbandonati...', solution: 'Customer Flow...', stats: [{value:'+40%', label:'Vendite', icon:'dollar-sign'}, {value:'-50%', label:'Carrelli', icon:'shopping-bag'}, {value:'+25%', label:'Clienti', icon:'users'}]}, {company: 'CasaBella', category: 'Real Estate', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop', problem: 'Qualificazione lead...', solution: 'Chatbot e CRM...', stats: [{value:'+80%', label:'Lead', icon:'target'}, {value:'20h', label:'Risp.', icon:'clock'}, {value:'+55%', label:'Conv.', icon:'trending-up'}]} ] },
        faq: { title: 'Domande Frequenti', items: [ {q:'Cos\'è un agente IA?', a:'Un assistente virtuale 24/7...'}, {q:'WhatsApp Automation?', a:'Risponde automaticamente su WhatsApp...'}, {q:'Costo voicebot?', a:'Varia, abbiamo pacchetti per PMI.'}, {q:'Tempi?', a:'1-2 settimane base, 4-6 complesse.'}, {q:'Sostituisce personale?', a:'No, libera da routine.'}, {q:'Integrazione CRM?', a:'Sì, Salesforce, HubSpot...'}, {q:'Privacy?', a:'GDPR compliant.'}, {q:'Supporto?', a:'Sì, continuo.'}, {q:'Prova?', a:'Sì, demo disponibili.'}, {q:'Solo Italia?', a:'No, worldwide da Dubai.'} ] },
        contact: { title: 'Contattaci', desc: 'Pronto per il futuro?', scheduleTitle: 'Orari', schedule: ['Lun - Ven: 9:00 - 18:00', 'Sab: 10:00 - 14:00', 'Dom: Chiuso'], form: {name:'Nome', company:'Azienda', email:'Email', phone:'Telefono', msg:'Messaggio', send:'Invia'} },
        whatsapp: 'Consulenza', footer: { tagline: 'Soluzioni IA per PMI. Da Dubai al mondo.', linksTitle: 'Link Utili', legalTitle: 'Legale', socialTitle: 'Social', privacy: 'Privacy', cookies: 'Cookie', rights: 'Diritti riservati.' }
    },
    en: {
        nav: { home: 'Home', services: 'Services', cases: 'Stories', faq: 'FAQ', contact: 'Contact' },
        hero: { title_suffix: 'Transform Your Business with Intelligent AI Agents', subtitle: 'Automate processes, increase sales, and improve customer service.', cta: 'View Services' },
        about: { title: 'Who We Are', subtitle: 'Innovation from Dubai', desc: "YourAgentLab is specialized in AI solutions...", stats: [{value:'5+', label:'Years Exp.'}, {value:'50+', label:'Projects'}, {value:'90%', label:'Retention'}] },
        process: { title: 'What We Do', subtitle: 'Focus Areas', steps: [ {title:'Smart Response', desc:'WhatsApp Automation', icon:'message-square'}, {title:'AI Reception', desc:'Virtual Receptionist', icon:'phone'}, {title:'Customer Flow Suite', desc:'Complete Automation', icon:'users'}, {title:'AI Consulting', desc:'Strategy', icon:'bar-chart'} ] },
        testimonials: { title: 'What they say', items: [ {text: "We automated reservations. Saved 15h/week!", author: "Marco R.", role: "Restaurant"}, {text: "Voicebot is better than our receptionist.", author: "Laura S.", role: "Clinic"}, {text: "Sales up by 40%.", author: "Giuseppe T.", role: "E-commerce"} ] },
        services: { title: 'Our Solutions', items: [ {title: 'Smart Response', subtitle: 'WhatsApp Automation', desc: '24/7 Assistant...', features: ['Smart replies', 'Calendly', 'Reminders', 'Multi-chat'], icon:'message-square'}, {title: 'AI Reception', subtitle: 'Virtual Receptionist', desc: 'Voicebot handling calls...', features: ['Multilingual', 'Routing', 'Booking', '24/7'], icon:'phone'}, {title: 'Customer Flow Suite', subtitle: 'Full Automation', desc: 'From interaction to loyalty...', features: ['Automations', 'CRM', 'KPI', 'Reports'], icon:'rocket'}, {title: 'AI Consulting', subtitle: 'Strategy', desc: 'Where to start...', features: ['Audit', 'Roadmap', 'Vendors', 'Support'], icon:'target'} ] },
        cases: { title: 'Success Stories', labels: { problem: 'Problem', solution: 'Solution', results: 'Results' }, items: [ {company: 'Ristorante Da Marco', category: 'Hospitality', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop', problem: 'Lost 30% calls...', solution: 'Smart Response...', stats: [{value:'+45%', label:'Bookings', icon:'utensils'}, {value:'15h', label:'Saved', icon:'clock'}, {value:'98%', label:'Sat.', icon:'users'}]}, {company: 'Studio Medico', category: 'Healthcare', image: 'https://images.unsplash.com/photo-1516574187841-693019f69912?q=80&w=1000&auto=format&fit=crop', problem: 'Overloaded...', solution: 'AI Reception...', stats: [{value:'100%', label:'Handled', icon:'phone'}, {value:'-60%', label:'Wait', icon:'clock'}, {value:'+35%', label:'Appts', icon:'trending-up'}]}, {company: 'FashionItaly', category: 'E-commerce', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1000&auto=format&fit=crop', problem: 'Abandoned carts...', solution: 'Customer Flow...', stats: [{value:'+40%', label:'Sales', icon:'dollar-sign'}, {value:'-50%', label:'Carts', icon:'shopping-bag'}, {value:'+25%', label:'Recurring', icon:'users'}]}, {company: 'CasaBella', category: 'Real Estate', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop', problem: 'Qualifying leads...', solution: 'Chatbot...', stats: [{value:'+80%', label:'Leads', icon:'target'}, {value:'20h', label:'Saved', icon:'clock'}, {value:'+55%', label:'Conv.', icon:'trending-up'}]} ] },
        faq: { title: 'FAQ', items: [ {q:'What is an AI agent?', a:'Intelligent virtual assistant...'}, {q:'WhatsApp Automation?', a:'Auto-replies on WA...'}, {q:'Cost?', a:'Scalable packages.'}, {q:'Time?', a:'1-2 weeks basic, 4-6 complex.'}, {q:'Replace staff?', a:'No, frees form routine.'}, {q:'CRM?', a:'Yes, Salesforce, HubSpot...'}, {q:'Privacy?', a:'GDPR compliant.'}, {q:'Support?', a:'Yes, continuous.'}, {q:'Trial?', a:'Yes, demos available.'}, {q:'Only Italy?', a:'No, worldwide.'} ] },
        contact: { title: 'Contact Us', desc: 'Ready?', scheduleTitle: 'Hours', schedule: ['Mon - Fri: 9:00 - 18:00', 'Sat: 10:00 - 14:00', 'Sun: Closed'], form: {name:'Name', company:'Company', email:'Email', phone:'Phone', msg:'Message', send:'Send'} },
        whatsapp: 'Consult', footer: { tagline: 'AI Solutions. Dubai to World.', linksTitle: 'Links', legalTitle: 'Legal', socialTitle: 'Social', privacy: 'Privacy', cookies: 'Cookies', rights: 'All rights reserved.' }
    }
};

// --- STATE ---
let currentLang = 'es';
let currentServiceIdx = 0;
let currentCaseIdx = 0;

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
    updateContent();
});

// --- LOGIC ---
// Función global para poder ser llamada desde el HTML onclick
window.setLanguage = function(lang) {
    currentLang = lang;
    const label = document.getElementById('current-lang-label');
    if (label) label.textContent = lang.toUpperCase();
    document.documentElement.lang = lang;
    updateContent();
};

window.toggleTheme = function() {
    document.documentElement.classList.toggle('dark');
    if (window.lucide) window.lucide.createIcons();
};

window.toggleMobileMenu = function() {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('hidden');
};

window.changeService = function(dir) {
    const items = CONTENT[currentLang].services.items;
    currentServiceIdx = (currentServiceIdx + dir + items.length) % items.length;
    renderServiceCard(items[currentServiceIdx]);
    if (window.lucide) window.lucide.createIcons();
};

window.changeCase = function(dir) {
    const items = CONTENT[currentLang].cases.items;
    currentCaseIdx = (currentCaseIdx + dir + items.length) % items.length;
    renderCaseCard(items[currentCaseIdx]);
    if (window.lucide) window.lucide.createIcons();
};

// Función para abrir/cerrar el menú de idiomas
window.toggleLangMenu = function(event) {
    if (event) event.stopPropagation(); // Evita que el clic se propague y cierre el menú inmediatamente
    const menu = document.getElementById('lang-dropdown');
    if (menu) menu.classList.toggle('hidden');
};

// Modificamos setLanguage para que TAMBIÉN cierre el menú al elegir
// (Busca tu función window.setLanguage existente y reemplázala o actualízala)
window.setLanguage = function(lang) {
    currentLang = lang;
    const label = document.getElementById('current-lang-label');
    if (label) label.textContent = lang.toUpperCase();
    document.documentElement.lang = lang;
    
    updateContent();

    // NUEVO: Cerrar el menú después de elegir
    const menu = document.getElementById('lang-dropdown');
    if (menu) menu.classList.add('hidden');
};

// Lógica para cerrar el menú si haces clic fuera de él (UX estándar)
document.addEventListener('click', function(event) {
    const menu = document.getElementById('lang-dropdown');
    // Si el menú existe, NO está oculto y el clic NO fue dentro del menú...
    if (menu && !menu.classList.contains('hidden') && !menu.contains(event.target)) {
        menu.classList.add('hidden');
    }
});

// --- RENDERERS ---
function updateContent() {
    const t = CONTENT[currentLang];
    if (!t) return;

    // 1. Text Replacements via data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const keys = el.getAttribute('data-i18n').split('.');
        let val = t;
        keys.forEach(k => { if (val) val = val[k]; });
        if (val && typeof val === 'string') el.textContent = val;
    });

    // 2. Complex Sections
    renderAboutStats(t.about.stats);
    renderProcessSteps(t.process.steps);
    renderServiceCard(t.services.items[currentServiceIdx]);
    renderCaseCard(t.cases.items[currentCaseIdx]);
    renderTestimonials(t.testimonials.items);
    renderFAQ(t.faq.items);
    renderSchedule(t.contact.schedule);
    
    // 3. Refresh Icons
    if (window.lucide) window.lucide.createIcons();
}

function renderAboutStats(stats) {
    const container = document.getElementById('about-stats');
    if (!container) return;
    container.innerHTML = stats.map(s => `
        <div>
            <p class="text-3xl font-bold text-[#0F766E] dark:text-teal-400">${s.value}</p>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">${s.label}</p>
        </div>
    `).join('');
}

function renderProcessSteps(steps) {
    const container = document.getElementById('process-steps');
    if (!container) return;
    container.innerHTML = steps.map(s => `
        <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md border border-teal-50 dark:border-gray-700 hover:-translate-y-2 transition-transform duration-300">
            <div class="w-16 h-16 bg-teal-100 dark:bg-teal-900/50 rounded-full flex items-center justify-center mb-6">
                <i data-lucide="${s.icon}" class="text-[#0F766E] dark:text-teal-400 w-8 h-8"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">${s.title}</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">${s.desc}</p>
        </div>
    `).join('');
}

function renderServiceCard(item) {
    const container = document.getElementById('service-card');
    if (!container) return;
    const dots = CONTENT[currentLang].services.items.map((_, i) => 
        `<span class="block h-2 rounded-full transition-all duration-300 ${i === currentServiceIdx ? 'w-8 bg-[#0F766E]' : 'w-2 bg-gray-300 dark:bg-gray-700'}"></span>`
    ).join('');
    
    const features = item.features.map(f => `
        <div class="flex items-center gap-3">
            <i data-lucide="check-circle" class="text-[#0F766E] dark:text-teal-500 w-5 h-5 flex-shrink-0"></i>
            <span class="text-gray-700 dark:text-gray-300 font-medium text-sm md:text-base">${f}</span>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="flex-shrink-0 w-full md:w-1/3 flex flex-col items-center">
            <div class="w-32 h-32 md:w-48 md:h-48 bg-teal-100 dark:bg-teal-900/50 rounded-full flex items-center justify-center animate-pulse-slow mb-6">
                <i data-lucide="${item.icon}" class="text-[#0F766E] dark:text-teal-400 w-16 h-16 md:w-24 md:h-24"></i>
            </div>
            <div class="flex gap-2 mt-4">${dots}</div>
        </div>
        <div class="text-center md:text-left flex-grow w-full md:w-2/3">
            <h3 class="text-3xl md:text-4xl font-extrabold text-[#0F766E] dark:text-teal-400 mb-2">${item.title}</h3>
            <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-6 tracking-wide">${item.subtitle}</h4>
            <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">${item.desc}</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">${features}</div>
        </div>
    `;
}

function renderCaseCard(item) {
    const container = document.getElementById('case-card');
    if (!container) return;
    const labels = CONTENT[currentLang].cases.labels;
    
    const stats = item.stats.map(s => `
        <div class="text-center p-4 bg-[#F0FBFC] dark:bg-gray-900 rounded-xl shadow-sm">
            <div class="flex justify-center mb-2"><i data-lucide="${s.icon}" class="text-[#0F766E] w-6 h-6"></i></div>
            <div class="text-2xl font-bold text-gray-900 dark:text-white mb-1">${s.value}</div>
            <div class="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">${s.label}</div>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="mb-12 lg:mb-0 order-2 lg:order-1">
            <div class="flex items-center gap-3 mb-4">
                <span class="inline-block px-4 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-300 rounded-full text-sm font-semibold">Case #${currentCaseIdx + 1}</span>
                <span class="inline-block px-4 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-sm font-semibold">${item.category}</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">${item.company}</h3>
            <div class="space-y-6 mb-8">
                <div><h4 class="text-[#0F766E] font-bold uppercase tracking-wide text-xs mb-1">${labels.problem}</h4><p class="text-lg text-gray-600 dark:text-gray-300">${item.problem}</p></div>
                <div><h4 class="text-[#0F766E] font-bold uppercase tracking-wide text-xs mb-1">${labels.solution}</h4><p class="text-lg text-gray-600 dark:text-gray-300">${item.solution}</p></div>
            </div>
            <div class="grid grid-cols-3 gap-4 md:gap-8">${stats}</div>
        </div>
        <div class="relative order-1 lg:order-2 h-full min-h-[300px]">
            <div class="absolute inset-0 bg-[#0F766E] rounded-2xl transform rotate-3 opacity-10"></div>
            <img src="${item.image}" class="relative rounded-2xl shadow-2xl w-full object-cover h-[400px] md:h-[600px]">
        </div>
    `;
}

function renderTestimonials(items) {
    const container = document.getElementById('testimonials-grid');
    if (!container) return;
    container.innerHTML = items.map(t => `
        <div class="bg-[#F0FBFC] dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-teal-50 dark:border-gray-800 flex flex-col h-full relative">
            <i data-lucide="quote" class="text-[#0F766E] opacity-20 absolute top-4 right-4 w-12 h-12"></i>
            <p class="text-gray-700 dark:text-gray-300 italic mb-8 flex-grow text-lg leading-relaxed font-medium relative z-10">"${t.text}"</p>
            <div class="flex flex-col border-t border-gray-200 dark:border-gray-700 pt-4">
                <h5 class="font-bold text-[#0F766E] dark:text-teal-400 text-lg">${t.author}</h5>
                <p class="text-sm text-gray-500 dark:text-gray-400 font-medium">${t.role}</p>
            </div>
        </div>
    `).join('');
}

function renderFAQ(items) {
    const container = document.getElementById('faq-list');
    if (!container) return;
    container.innerHTML = items.map(f => `
        <details class="group bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <summary class="flex justify-between items-center w-full px-6 py-4 text-left cursor-pointer focus:outline-none list-none">
                <span class="text-lg font-medium text-gray-900 dark:text-gray-100">${f.q}</span>
                <span class="ml-6 flex-shrink-0 transition group-open:-rotate-180"><i data-lucide="chevron-down" class="text-[#0F766E]"></i></span>
            </summary>
            <div class="px-6 pb-4 pt-0 text-gray-600 dark:text-gray-300"><p>${f.a}</p></div>
        </details>
    `).join('');
}

function renderSchedule(times) {
    const container = document.getElementById('contact-schedule');
    if (!container) return;
    container.innerHTML = times.map(t => `<li>${t}</li>`).join('');
}