/**
 * ==========================================
 * script.js - Lógica Principal YourAgentLab
 * ==========================================
 */

// --- 1. DATA (Contenido Multilingüe) ---
const CONTENT = {
    es: {
        nav: { home: 'Inicio', services: 'Servicios IA', cases: 'Casos de Éxito', faq: 'Preguntas', contact: 'Contacto' },
        hero: { title_suffix: 'Transforma tu Negocio con Agentes de IA Inteligentes', subtitle: 'Automatiza procesos, incrementa ventas y mejora la atención al cliente con nuestra tecnología de vanguardia.', cta: 'Ver Soluciones' },
        about: { title: 'Quiénes Somos', subtitle: 'Agencia de Inteligencia Artificial y Automatización', desc: 'YourAgentLab es una agencia líder especializada en integrar soluciones de inteligencia artificial para potenciar PYMEs. Desde Dubai, ayudamos a empresas globales a reducir costes operativos y escalar ventas.', stats: [{value:'5+', label:'Años Exp.'}, {value:'50+', label:'Proyectos'}, {value:'90%', label:'Retención'}] },
        testimonials: { title: 'Qué dicen de nosotros', items: [ {text: "¡Gracias a YourAgentLab hemos automatizado las reservas. Ahorramos 15 horas a la semana!", author: "Marco R.", role: "Restaurante Milano"}, {text: "El voicebot gestiona las llamadas mejor que nuestra recepcionista. Clientes 100% satisfechos.", author: "Laura S.", role: "Clínica Médica"}, {text: "Las automatizaciones de WhatsApp aumentaron nuestras ventas un 40%. ¡Increíble!", author: "Giuseppe T.", role: "E-commerce"} ] },
        services: { title: 'Servicios de IA y Chatbots', items: [ { title: 'Smart Response', subtitle: 'Automatización WhatsApp Business', desc: 'Asistente virtual que califica leads y responde consultas en WhatsApp 24/7.', features: ['Respuestas inteligentes', 'Integración Calendly', 'Recordatorios auto.', 'Multi-agente'], icon: 'message-square' }, { title: 'AI Reception', subtitle: 'Recepcionista Virtual (Voicebot)', desc: 'Un agente de voz que contesta el teléfono, agenda citas y resuelve dudas como un humano.', features: ['Voz natural', 'Enrutamiento de llamadas', 'Gestión de agenda', 'Sin esperas'], icon: 'phone' }, { title: 'Customer Flow Suite', subtitle: 'Automatización CRM Completa', desc: 'Conectamos tu marketing con ventas: desde el clic en el anuncio hasta la fidelización.', features: ['Recuperación de carritos', 'Integración CRM', 'Dashboards KPI', 'Email Marketing'], icon: 'rocket' }, { title: 'Consultoría IA', subtitle: 'Estrategia Digital', desc: '¿No sabes por dónde empezar? Diseñamos la hoja de ruta para digitalizar tu negocio.', features: ['Auditoría de procesos', 'Selección de herramientas', 'Formación de equipo', 'Soporte técnico'], icon: 'target' } ] },
        cases: { title: 'Casos de Éxito en Negocios', labels: { problem: 'Problema', solution: 'Solución', results: 'Resultados' }, items: [ { company: 'Ristorante Da Marco', category: 'Restauración', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop', problem: 'Perdían el 30% de las llamadas de reservas en horas pico.', solution: 'Implementamos Smart Response en WhatsApp conectado a su libro de reservas.', stats: [{value:'+45%', label:'Reservas', icon:'utensils'}, {value:'15h', label:'Ahorro Semanal', icon:'clock'}, {value:'98%', label:'Satisfacción', icon:'users'}] }, { company: 'Studio Medico Salute+', category: 'Salud', image: 'https://images.unsplash.com/photo-1516574187841-693019f69912?q=80&w=800&auto=format&fit=crop', problem: 'La recepción estaba colapsada y los pacientes esperaban mucho al teléfono.', solution: 'Instalamos AI Reception para agendar citas automáticamente por voz.', stats: [{value:'100%', label:'Llamadas Atendidas', icon:'phone'}, {value:'-60%', label:'Tiempo Espera', icon:'clock'}, {value:'+35%', label:'Nuevas Citas', icon:'trending-up'}] }, { company: 'E-commerce FashionItaly', category: 'Retail', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop', problem: 'Tasa alta de carritos abandonados y falta de recurrencia.', solution: 'Customer Flow Suite para recuperar ventas por WhatsApp y Email.', stats: [{value:'+40%', label:'Ventas Totales', icon:'dollar-sign'}, {value:'-50%', label:'Abandono', icon:'shopping-bag'}, {value:'+25%', label:'Retención', icon:'users'}] }, { company: 'Inmobiliaria CasaBella', category: 'Real Estate', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop', problem: 'Los agentes perdían tiempo filtrando curiosos de compradores reales.', solution: 'Chatbot de pre-cualificación que solo pasa leads calientes.', stats: [{value:'+80%', label:'Leads Calificados', icon:'target'}, {value:'20h', label:'Ahorro Agentes', icon:'clock'}, {value:'+55%', label:'Cierres', icon:'trending-up'}] } ] },
        faq: { title: 'Preguntas Frecuentes', items: [ {q:'¿Qué es un agente de IA?', a:'Un software inteligente capaz de realizar tareas autónomas como responder clientes, agendar citas o gestionar bases de datos, disponible 24/7.'}, {q:'¿Cómo funciona la automatización de WhatsApp?', a:'Nos conectamos a la API oficial de WhatsApp Business. El bot lee los mensajes, entiende la intención y responde o ejecuta acciones según tus reglas.'}, {q:'¿Cuánto cuesta un voicebot?', a:'Depende del volumen de llamadas. Ofrecemos planes escalables para PYMEs y grandes empresas.'}, {q:'¿Tiempo de implementación?', a:'Proyectos básicos en 1-2 semanas. Integraciones complejas (CRM, ERP) pueden tomar 4-6 semanas.'}, {q:'¿Reemplaza al personal humano?', a:'No, los libera de tareas repetitivas para que puedan enfocarse en ventas de alto valor y atención personalizada.'}, {q:'¿Integración con mi CRM actual?', a:'Sí, nos integramos con Salesforce, HubSpot, Zoho, Pipedrive y muchos más.'}, {q:'¿Es seguro y privado?', a:'Absolutamente. Cumplimos con GDPR y normas internacionales de protección de datos.'}, {q:'¿Ofrecen soporte post-venta?', a:'Sí, todos nuestros planes incluyen mantenimiento y optimización continua.'}, {q:'¿Puedo probarlo antes?', a:'Sí, solicita una demo gratuita y te mostraremos cómo funciona en vivo.'}, {q:'¿Solo trabajan en Italia?', a:'No, nuestra base está en Dubai pero operamos globalmente con soporte en español, inglés e italiano.'} ] },
        contact: { title: 'Contáctanos', desc: '¿Listo para escalar tu negocio?', scheduleTitle: 'Horario de Atención', schedule: ['Lunes - Viernes: 9:00 - 18:00', 'Sábado: 10:00 - 14:00', 'Domingo: Cerrado'], form: {name:'Nombre Completo', company:'Nombre de la Empresa', email:'Correo Electrónico', phone:'Número de Teléfono', msg:'¿Cómo podemos ayudarte?', send:'Enviar Mensaje'} },
        whatsapp: 'Consultar por WhatsApp', 
        footer: { tagline: 'Soluciones de Automatización e IA. Desde Dubai para el mundo.', linksTitle: 'Navegación', legalTitle: 'Legal', socialTitle: 'Síguenos', privacy: 'Política de Privacidad y Cookies', cookies: 'Cookies', rights: 'Todos los derechos reservados.' },
        // --- PRIVACY POLICY ES ---
        privacy: `
            <h2 class="text-2xl font-bold mb-4">Política de Privacidad y Cookies</h2>
            <p class="text-sm text-gray-500 mb-6">Última actualización: 12 de Noviembre de 2025</p>
            <h4 class="text-lg font-bold mt-4 mb-2 text-[#0F766E]">1. Introducción</h4>
            <p>YourAgentLab ("nosotros", "nuestro") respeta su privacidad y se compromete a proteger sus datos personales. Esta política de privacidad le informa sobre cómo tratamos sus datos personales cuando visita nuestro sitio web y le informa sobre sus derechos de privacidad y cómo la ley lo protege.</p>
            <h4 class="text-lg font-bold mt-4 mb-2 text-[#0F766E]">2. Datos que Recopilamos</h4>
            <p>Podemos recopilar, utilizar, almacenar y transferir diferentes tipos de datos personales sobre usted:</p>
            <ul class="list-disc pl-5 mt-2 space-y-1">
                <li><strong>Datos de identidad:</strong> nombre, apellidos.</li>
                <li><strong>Datos de contacto:</strong> dirección de correo electrónico, número de teléfono.</li>
                <li><strong>Datos de la empresa:</strong> nombre de la empresa, sector.</li>
                <li><strong>Datos técnicos:</strong> dirección IP, tipo de navegador, zona horaria.</li>
                <li><strong>Datos de uso:</strong> información sobre cómo utiliza nuestro sitio web.</li>
            </ul>
            <h4 class="text-lg font-bold mt-4 mb-2 text-[#0F766E]">3. Cómo Utilizamos sus Datos</h4>
            <p>Utilizamos sus datos personales para:</p>
            <ul class="list-disc pl-5 mt-2 space-y-1">
                <li>Responder a sus solicitudes de información.</li>
                <li>Proporcionarle nuestros servicios.</li>
                <li>Mejorar nuestro sitio web y servicios.</li>
                <li>Enviarle comunicaciones de marketing (solo con su consentimiento).</li>
                <li>Cumplir con obligaciones legales.</li>
            </ul>
            <h4 class="text-lg font-bold mt-4 mb-2 text-[#0F766E]">4. Base Legal del Tratamiento</h4>
            <p>Tratamos sus datos personales basándonos en su consentimiento, para la ejecución de un contrato, para cumplir obligaciones legales o para perseguir nuestros intereses legítimos.</p>
            <h4 class="text-lg font-bold mt-4 mb-2 text-[#0F766E]">5. Compartir Datos</h4>
            <p>No vendemos sus datos personales a terceros. Podemos compartir sus datos con proveedores de servicios que nos ayudan a gestionar nuestro negocio (ej. hosting, email marketing), siempre respetando el GDPR.</p>
            <h4 class="text-lg font-bold mt-4 mb-2 text-[#0F766E]">6. Seguridad de los Datos</h4>
            <p>Hemos implementado medidas de seguridad apropiadas para prevenir la pérdida, el uso indebido o la alteración de sus datos. Todos los datos están encriptados y almacenados en servidores seguros.</p>
            <h4 class="text-lg font-bold mt-4 mb-2 text-[#0F766E]">7. Sus Derechos (GDPR)</h4>
            <p>Usted tiene derecho a acceder, rectificar, cancelar, oponerse, limitar el tratamiento y solicitar la portabilidad de sus datos.</p>
            <h4 class="text-lg font-bold mt-4 mb-2 text-[#0F766E]">8. Cookies</h4>
            <p>Utilizamos cookies esenciales para el funcionamiento del sito y cookies analíticas para mejorar la experiencia del usuario.</p>
            <h4 class="text-lg font-bold mt-4 mb-2 text-[#0F766E]">9. Contacto</h4>
            <p>Para cualquier consulta: <a href="mailto:privacy@youragentlab.com" class="text-teal-600 underline">privacy@youragentlab.com</a></p>
        `
    },
    it: {
        nav: { home: 'Home', services: 'Servizi AI', cases: 'Casi di Studio', faq: 'FAQ', contact: 'Contatti' },
        hero: { title_suffix: 'Trasforma il tuo Business con Agenti AI Intelligenti', subtitle: 'Automatizza i processi, aumenta le vendite e migliora il servizio clienti.', cta: 'Vedi Soluzioni' },
        about: { title: 'Chi Siamo', subtitle: 'Agenzia di Intelligenza Artificiale', desc: "YourAgentLab è specializzata in soluzioni AI...", stats: [{value:'5+', label:'Anni Esp.'}, {value:'50+', label:'Progetti'}, {value:'90%', label:'Ritenzione'}] },
        testimonials: { title: 'Dicono di noi', items: [ {text: "Grazie a YourAgentLab abbiamo automatizzato le prenotazioni.", author: "Marco R.", role: "Ristorante Milano"}, {text: "Il voicebot gestisce le chiamate meglio della nostra receptionist.", author: "Laura S.", role: "Studio Medico"}, {text: "Le automazioni WhatsApp hanno aumentato le vendite del 40%.", author: "Giuseppe T.", role: "E-commerce"} ] },
        services: { title: 'Le Nostre Soluzioni AI', items: [ {title: 'Smart Response', subtitle: 'Automazione WhatsApp', desc: 'Immagina un assistente 24/7...', features: ['Risposte intelligenti', 'Integrazione Calendly', 'Promemoria', 'Multi-chat'], icon:'message-square'}, {title: 'AI Reception', subtitle: 'Receptionist Virtuale', desc: 'Voicebot che risponde come un umano...', features: ['Multilingua', 'Instradamento', 'Appuntamenti', '24/7'], icon:'phone'}, {title: 'Customer Flow Suite', subtitle: 'Automazione Completa', desc: 'Dalla prima interazione alla fedeltà...', features: ['Automazioni', 'CRM', 'KPI', 'Report'], icon:'rocket'}, {title: 'Consulenza AI', subtitle: 'Strategia', desc: 'Ti aiutiamo a capire cosa automatizzare...', features: ['Audit', 'Roadmap', 'Fornitori', 'Supporto'], icon:'target'} ] },
        cases: { title: 'Storie di Successo', labels: { problem: 'Problema', solution: 'Soluzione', results: 'Risultati' }, items: [ {company: 'Ristorante Da Marco', category: 'Ristorazione', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop', problem: 'Perdevano il 30% delle chiamate...', solution: 'Smart Response con Calendly...', stats: [{value:'+45%', label:'Prenot.', icon:'utensils'}, {value:'15h', label:'Risp.', icon:'clock'}, {value:'98%', label:'Sodd.', icon:'users'}]}, {company: 'Studio Medico Salute+', category: 'Sanità', image: 'https://images.unsplash.com/photo-1516574187841-693019f69912?q=80&w=800&auto=format&fit=crop', problem: 'Receptionist sovraccarica...', solution: 'AI Reception...', stats: [{value:'100%', label:'Gestite', icon:'phone'}, {value:'-60%', label:'Attesa', icon:'clock'}, {value:'+35%', label:'Appunt.', icon:'trending-up'}]}, {company: 'FashionItaly', category: 'E-commerce', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop', problem: 'Carrelli abbandonati...', solution: 'Customer Flow...', stats: [{value:'+40%', label:'Vendite', icon:'dollar-sign'}, {value:'-50%', label:'Carrelli', icon:'shopping-bag'}, {value:'+25%', label:'Clienti', icon:'users'}]}, {company: 'CasaBella', category: 'Real Estate', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop', problem: 'Qualificazione lead...', solution: 'Chatbot e CRM...', stats: [{value:'+80%', label:'Lead', icon:'target'}, {value:'20h', label:'Risp.', icon:'clock'}, {value:'+55%', label:'Conv.', icon:'trending-up'}]} ] },
        faq: { title: 'Domande Frequenti', items: [ {q:'Cos\'è un agente IA?', a:'Un assistente virtuale 24/7...'}, {q:'WhatsApp Automation?', a:'Risponde automaticamente su WhatsApp...'}, {q:'Costo voicebot?', a:'Varia, abbiamo pacchetti per PMI.'}, {q:'Tempi?', a:'1-2 settimane base, 4-6 complesse.'}, {q:'Sostituisce personale?', a:'No, libera da routine.'}, {q:'Integrazione CRM?', a:'Sì, Salesforce, HubSpot...'}, {q:'Privacy?', a:'GDPR compliant.'}, {q:'Supporto?', a:'Sì, continuo.'}, {q:'Prova?', a:'Sì, demo disponibili.'}, {q:'Solo Italia?', a:'No, worldwide da Dubai.'} ] },
        contact: { title: 'Contattaci', desc: 'Pronto per il futuro?', scheduleTitle: 'Orari', schedule: ['Lun - Ven: 9:00 - 18:00', 'Sab: 10:00 - 14:00', 'Dom: Chiuso'], form: {name:'Nome', company:'Azienda', email:'Email', phone:'Telefono', msg:'Messaggio', send:'Invia'} },
        whatsapp: 'Consulenza', footer: { tagline: 'Soluzioni IA per PMI. Da Dubai al mondo.', linksTitle: 'Link Utili', legalTitle: 'Legale', socialTitle: 'Social', privacy: 'Privacy e Cookie Policy', cookies: 'Cookie', rights: 'Diritti riservati.' },
        // --- PRIVACY POLICY IT ---
        privacy: `
            <h2 class="text-2xl font-bold mb-4">Informativa Privacy e Cookie</h2>
            <p class="text-sm text-gray-500 mb-6">Ultimo aggiornamento: 12 Novembre 2025</p>
            <h4 class="text-lg font-bold mt-4 mb-2 text-[#0F766E]">1. Introduzione</h4>
            <p>YourAgentLab ("noi", "nostro") rispetta la tua privacy e si impegna a proteggere i tuoi dati personali. Questa informativa sulla privacy ti informa su come trattiamo i tuoi dati personali quando visiti il nostro sito web.</p>
            <h4 class="text-lg font-bold mt-4 mb-2 text-[#0F766E]">2. Dati che Raccogliamo</h4>
            <p>Possiamo raccogliere, utilizzare, archiviare e trasferire diversi tipi di dati personali su di te:</p>
            <ul class="list-disc pl-5 mt-2 space-y-1">
                <li><strong>Dati di identità:</strong> nome, cognome.</li>
                <li><strong>Dati di contatto:</strong> indirizzo email, numero di telefono.</li>
                <li><strong>Dati aziendali:</strong> nome azienda, settore.</li>
                <li><strong>Dati tecnici:</strong> indirizzo IP, tipo di browser, fuso orario.</li>
                <li><strong>Dati di utilizzo:</strong> informazioni su come utilizzi il nostro sito web.</li>
            </ul>
            <h4 class="text-lg font-bold mt-4 mb-2 text-[#0F766E]">3. Come Utilizziamo i Tuoi Dati</h4>
            <p>Utilizziamo i tuoi dati personali per:</p>
            <ul class="list-disc pl-5 mt-2 space-y-1">
                <li>Rispondere alle tue richieste di informazioni.</li>
                <li>Fornirti i nostri servizi.</li>
                <li>Migliorare il nostro sito web e i nostri servizi.</li>
                <li>Inviarti comunicazioni di marketing (solo con il tuo consenso).</li>
                <li>Rispettare obblighi legali.</li>
            </ul>
            <h4 class="text-lg font-bold mt-4 mb-2 text-[#0F766E]">4. Base Giuridica del Trattamento</h4>
            <p>Trattiamo i tuoi dati personali sulla base del tuo consenso, per l'esecuzione di un contratto, per adempiere a obblighi legali o per perseguire i nostri legittimi interessi commerciali.</p>
            <h4 class="text-lg font-bold mt-4 mb-2 text-[#0F766E]">5. Condivisione dei Dati</h4>
            <p>Non vendiamo i tuoi dati personali a terzi. Possiamo condividere i tuoi dati con fornitori di servizi che ci aiutano a gestire la nostra attività (es. hosting, email marketing), sempre nel rispetto del GDPR.</p>
            <h4 class="text-lg font-bold mt-4 mb-2 text-[#0F766E]">6. Sicurezza dei Dati</h4>
            <p>Abbiamo implementato misure di sicurezza appropriate per prevenire la perdita, l'uso improprio o l'alterazione dei tuoi dati personali. Tutti i dati sono criptati e archiviati in server sicuri.</p>
            <h4 class="text-lg font-bold mt-4 mb-2 text-[#0F766E]">7. I Tuoi Diritti</h4>
            <p>Ai sensi del GDPR, hai il diritto di accedere, rettificare, cancellare, opporti al trattamento e richiedere la portabilità dei tuoi dati.</p>
            <h4 class="text-lg font-bold mt-4 mb-2 text-[#0F766E]">8. Cookie</h4>
            <p>Utilizziamo cookie essenziali per il funzionamento del sito e cookie analitici per migliorare l'esperienza utente. Puoi gestire le tue preferenze sui cookie tramite il banner presente sul sito.</p>
            <h4 class="text-lg font-bold mt-4 mb-2 text-[#0F766E]">9. Conservazione dei Dati</h4>
            <p>Conserviamo i tuoi dati personali solo per il tempo necessario agli scopi per cui sono stati raccolti.</p>
            <h4 class="text-lg font-bold mt-4 mb-2 text-[#0F766E]">10. Contatti</h4>
            <p>Per qualsiasi domanda: <a href="mailto:privacy@youragentlab.com" class="text-teal-600 underline">privacy@youragentlab.com</a></p>
        `
    },
    en: {
        nav: { home: 'Home', services: 'AI Services', cases: 'Success Stories', faq: 'FAQ', contact: 'Contact' },
        hero: { title_suffix: 'Transform Your Business with Intelligent AI Agents', subtitle: 'Automate processes, increase sales, and improve customer service.', cta: 'View Solutions' },
        about: { title: 'Who We Are', subtitle: 'Artificial Intelligence Agency', desc: "YourAgentLab is specialized in AI solutions...", stats: [{value:'5+', label:'Years Exp.'}, {value:'50+', label:'Projects'}, {value:'90%', label:'Retention'}] },
        testimonials: { title: 'What they say', items: [ {text: "We automated reservations. Saved 15h/week!", author: "Marco R.", role: "Restaurant"}, {text: "Voicebot is better than our receptionist.", author: "Laura S.", role: "Clinic"}, {text: "Sales up by 40%.", author: "Giuseppe T.", role: "E-commerce"} ] },
        services: { title: 'Our AI Solutions', items: [ {title: 'Smart Response', subtitle: 'WhatsApp Automation', desc: '24/7 Assistant...', features: ['Smart replies', 'Calendly', 'Reminders', 'Multi-chat'], icon:'message-square'}, {title: 'AI Reception', subtitle: 'Virtual Receptionist', desc: 'Voicebot handling calls...', features: ['Multilingual', 'Routing', 'Booking', '24/7'], icon:'phone'}, {title: 'Customer Flow Suite', subtitle: 'Full Automation', desc: 'From interaction to loyalty...', features: ['Automations', 'CRM', 'KPI', 'Reports'], icon:'rocket'}, {title: 'AI Consulting', subtitle: 'Strategy', desc: 'Where to start...', features: ['Audit', 'Roadmap', 'Vendors', 'Support'], icon:'target'} ] },
        cases: { title: 'Success Stories', labels: { problem: 'Problem', solution: 'Solution', results: 'Results' }, items: [ {company: 'Ristorante Da Marco', category: 'Hospitality', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop', problem: 'Lost 30% calls...', solution: 'Smart Response...', stats: [{value:'+45%', label:'Bookings', icon:'utensils'}, {value:'15h', label:'Saved', icon:'clock'}, {value:'98%', label:'Sat.', icon:'users'}]}, {company: 'Studio Medico', category: 'Healthcare', image: 'https://images.unsplash.com/photo-1516574187841-693019f69912?q=80&w=800&auto=format&fit=crop', problem: 'Overloaded...', solution: 'AI Reception...', stats: [{value:'100%', label:'Handled', icon:'phone'}, {value:'-60%', label:'Wait', icon:'clock'}, {value:'+35%', label:'Appts', icon:'trending-up'}]}, {company: 'FashionItaly', category: 'E-commerce', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop', problem: 'Abandoned carts...', solution: 'Customer Flow...', stats: [{value:'+40%', label:'Sales', icon:'dollar-sign'}, {value:'-50%', label:'Carts', icon:'shopping-bag'}, {value:'+25%', label:'Recurring', icon:'users'}]}, {company: 'CasaBella', category: 'Real Estate', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop', problem: 'Qualifying leads...', solution: 'Chatbot...', stats: [{value:'+80%', label:'Leads', icon:'target'}, {value:'20h', label:'Saved', icon:'clock'}, {value:'+55%', label:'Conv.', icon:'trending-up'}]} ] },
        faq: { title: 'FAQ', items: [ {q:'What is an AI agent?', a:'Intelligent virtual assistant...'}, {q:'WhatsApp Automation?', a:'Auto-replies on WA...'}, {q:'Cost?', a:'Scalable packages.'}, {q:'Time?', a:'1-2 weeks basic, 4-6 complex.'}, {q:'Replace staff?', a:'No, frees form routine.'}, {q:'CRM?', a:'Yes, Salesforce, HubSpot...'}, {q:'Privacy?', a:'GDPR compliant.'}, {q:'Support?', a:'Yes, continuous.'}, {q:'Trial?', a:'Yes, demos available.'}, {q:'Only Italy?', a:'No, worldwide.'} ] },
        contact: { title: 'Contact Us', desc: 'Ready?', scheduleTitle: 'Hours', schedule: ['Mon - Fri: 9:00 - 18:00', 'Sat: 10:00 - 14:00', 'Sun: Closed'], form: {name:'Full Name', company:'Company Name', email:'Email Address', phone:'Phone Number', msg:'Message', send:'Send Message'} },
        whatsapp: 'Consult', footer: { tagline: 'AI Solutions. Dubai to World.', linksTitle: 'Links', legalTitle: 'Legal', socialTitle: 'Social', privacy: 'Privacy & Cookies Policy', cookies: 'Cookies', rights: 'All rights reserved.' },
        // --- PRIVACY POLICY EN ---
        privacy: `
            <h2 class="text-2xl font-bold mb-4">Privacy & Cookie Policy</h2>
            <p class="text-sm text-gray-500 mb-6">Last Updated: November 12, 2025</p>
            <h4 class="text-lg font-bold mt-4 mb-2 text-[#0F766E]">1. Introduction</h4>
            <p>YourAgentLab ("we", "our") respects your privacy and is committed to protecting your personal data. This privacy policy informs you about how we handle your personal data when you visit our website.</p>
            <h4 class="text-lg font-bold mt-4 mb-2 text-[#0F766E]">2. Data We Collect</h4>
            <p>We may collect, use, store, and transfer different kinds of personal data about you:</p>
            <ul class="list-disc pl-5 mt-2 space-y-1">
                <li><strong>Identity Data:</strong> name, surname.</li>
                <li><strong>Contact Data:</strong> email address, phone number.</li>
                <li><strong>Company Data:</strong> company name, industry.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, time zone.</li>
                <li><strong>Usage Data:</strong> information about how you use our website.</li>
            </ul>
            <h4 class="text-lg font-bold mt-4 mb-2 text-[#0F766E]">3. How We Use Your Data</h4>
            <p>We use your personal data to:</p>
            <ul class="list-disc pl-5 mt-2 space-y-1">
                <li>Respond to your inquiries.</li>
                <li>Provide our services to you.</li>
                <li>Improve our website and services.</li>
                <li>Send you marketing communications (only with your consent).</li>
                <li>Comply with legal obligations.</li>
            </ul>
            <h4 class="text-lg font-bold mt-4 mb-2 text-[#0F766E]">4. Legal Basis for Processing</h4>
            <p>We process your personal data based on your consent, for the performance of a contract, to comply with a legal obligation, or for our legitimate business interests.</p>
            <h4 class="text-lg font-bold mt-4 mb-2 text-[#0F766E]">5. Data Sharing</h4>
            <p>We do not sell your personal data to third parties. We may share your data with service providers who help us operate our business (e.g., hosting, email marketing), always in compliance with GDPR.</p>
            <h4 class="text-lg font-bold mt-4 mb-2 text-[#0F766E]">6. Data Security</h4>
            <p>We have implemented appropriate security measures to prevent your personal data from being lost, used, or accessed in an unauthorized way. All data is encrypted and stored on secure servers.</p>
            <h4 class="text-lg font-bold mt-4 mb-2 text-[#0F766E]">7. Your Rights (GDPR)</h4>
            <p>Under GDPR, you have the right to access, rectify, delete, object to processing, and request portability of your data.</p>
            <h4 class="text-lg font-bold mt-4 mb-2 text-[#0F766E]">8. Cookies</h4>
            <p>We use essential cookies for the site to function and analytical cookies to improve user experience.</p>
            <h4 class="text-lg font-bold mt-4 mb-2 text-[#0F766E]">9. Contact</h4>
            <p>For any questions: <a href="mailto:privacy@youragentlab.com" class="text-teal-600 underline">privacy@youragentlab.com</a></p>
        `
    }
};

// --- 2. STATE ---
let currentLang = 'it'; // Default Language
let currentServiceIdx = 0;
let currentCaseIdx = 0;

// --- 3. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    if (window.AOS) {
        window.AOS.init({ duration: 800, once: true, offset: 80, easing: 'ease-out-cubic' });
    }

    updateContent();
});

// --- 4. LOGIC & EVENTS ---

// -- MODALE PRIVACY (NUOVE FUNZIONI) --
window.openPrivacyModal = function(event) {
    if (event) event.preventDefault(); // Evita scroll top
    
    const modal = document.getElementById('privacy-modal');
    if (modal) {
        // Caricare il contenuto corretto in base alla lingua
        const contentBody = document.getElementById('privacy-content-body');
        if (contentBody) {
            contentBody.innerHTML = CONTENT[currentLang].privacy;
        }
        // Mostrare modale
        modal.classList.remove('hidden');
        // Disabilitare scroll body
        document.body.style.overflow = 'hidden';
    }
};

window.closePrivacyModal = function() {
    const modal = document.getElementById('privacy-modal');
    if (modal) {
        modal.classList.add('hidden');
        // Riabilitare scroll body
        document.body.style.overflow = 'auto';
    }
};

// -- Altre funzioni esistenti --
window.toggleLangMenu = function(event) {
    if (event) event.stopPropagation();
    const menu = document.getElementById('lang-dropdown');
    if (menu) menu.classList.toggle('hidden');
};

document.addEventListener('click', function(event) {
    const menu = document.getElementById('lang-dropdown');
    if (menu && !menu.classList.contains('hidden') && !menu.contains(event.target)) {
        menu.classList.add('hidden');
    }
});

window.setLanguage = function(lang) {
    currentLang = lang;
    const label = document.getElementById('current-lang-label');
    if (label) label.textContent = lang.toUpperCase();
    document.documentElement.lang = lang;
    updateContent();
    const menu = document.getElementById('lang-dropdown');
    if (menu) menu.classList.add('hidden');
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

// --- 5. RENDERERS ---

function updateContent() {
    const t = CONTENT[currentLang];
    if (!t) return;

    // Text Replacements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const keys = el.getAttribute('data-i18n').split('.');
        let val = t;
        keys.forEach(k => { if (val) val = val[k]; });
        if (val && typeof val === 'string') el.textContent = val;
    });

    renderAboutStats(t.about.stats);
    renderServiceCard(t.services.items[currentServiceIdx]);
    renderCaseCard(t.cases.items[currentCaseIdx]);
    renderTestimonials(t.testimonials.items);
    renderFAQ(t.faq.items);
    renderSchedule(t.contact.schedule);
    
    // Aggiornare anche il contenuto della modale se è aperta
    const modal = document.getElementById('privacy-modal');
    if (modal && !modal.classList.contains('hidden')) {
         const contentBody = document.getElementById('privacy-content-body');
         if (contentBody) contentBody.innerHTML = t.privacy;
    }
    
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
        <div class="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <div class="flex justify-center mb-2"><i data-lucide="${s.icon}" class="text-[#0F766E] w-6 h-6"></i></div>
            <div class="text-2xl font-bold text-gray-900 dark:text-white mb-1">${s.value}</div>
            <div class="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">${s.label}</div>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="mb-12 lg:mb-0 order-2 lg:order-1">
            <div class="flex items-center gap-3 mb-4">
                <span class="inline-block px-4 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-300 rounded-full text-sm font-semibold">Case #${currentCaseIdx + 1}</span>
                <span class="inline-block px-4 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-sm font-semibold">${item.category}</span>
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
    container.innerHTML = items.map((t, index) => `
        <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-teal-50 dark:border-gray-800 flex flex-col h-full relative transform transition duration-500 hover:scale-105"
             data-aos="zoom-in"
             data-aos-delay="${index * 100}">
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