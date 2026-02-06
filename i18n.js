// Simple i18n implementation for multi-language support
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.about': 'About',
        'nav.testimonials': 'Testimonials',
        'nav.contact': 'Contact',
        'nav.book': 'Book Now',
        
        // Hero Section
        'hero.title': 'Transform Your Business with Expert Consultation',
        'hero.subtitle': 'Get personalized guidance from industry professionals to achieve your goals',
        'hero.cta.primary': 'Schedule a Consultation',
        'hero.cta.secondary': 'Learn More',
        
        // Services Section
        'services.title': 'Our Services',
        'services.subtitle': 'Comprehensive consultation services tailored to your needs',
        'services.business.title': 'Business Strategy',
        'services.business.desc': 'Develop effective strategies to grow your business and increase profitability',
        'services.market.title': 'Market Analysis',
        'services.market.desc': 'Gain insights into market trends and competitive positioning',
        'services.goals.title': 'Goal Setting',
        'services.goals.desc': 'Set clear, achievable goals and create actionable plans',
        'services.innovation.title': 'Innovation Consulting',
        'services.innovation.desc': 'Identify opportunities for innovation and digital transformation',
        'services.team.title': 'Team Development',
        'services.team.desc': 'Build high-performing teams and improve organizational culture',
        'services.performance.title': 'Performance Optimization',
        'services.performance.desc': 'Optimize processes and maximize operational efficiency',
        
        // About Section
        'about.title': 'About ConsultPro',
        'about.text1': "With over 15 years of experience in business consultation, we've helped hundreds of companies achieve their goals and overcome challenges.",
        'about.text2': 'Our team of expert consultants brings diverse expertise across various industries, ensuring you receive the best possible guidance tailored to your unique situation.',
        'about.feature1': 'Certified professionals with proven track records',
        'about.feature2': 'Customized solutions for your specific needs',
        'about.feature3': 'Data-driven insights and recommendations',
        'about.feature4': 'Ongoing support throughout your journey',
        'about.stat1.value': '500+',
        'about.stat1.label': 'Clients Served',
        'about.stat2.value': '15+',
        'about.stat2.label': 'Years Experience',
        'about.stat3.value': '98%',
        'about.stat3.label': 'Satisfaction Rate',
        
        // Testimonials Section
        'testimonials.title': 'What Our Clients Say',
        'testimonials.subtitle': "Real feedback from businesses we've helped",
        'testimonials.1.text': '"ConsultPro helped us increase our revenue by 40% in just 6 months. Their strategic insights were invaluable!"',
        'testimonials.1.author': 'Sarah Johnson',
        'testimonials.1.role': 'CEO, TechStart Inc.',
        'testimonials.2.text': '"The team\'s expertise in market analysis gave us the competitive edge we needed. Highly recommended!"',
        'testimonials.2.author': 'Michael Chen',
        'testimonials.2.role': 'Founder, GrowthLabs',
        'testimonials.3.text': '"Professional, knowledgeable, and results-driven. ConsultPro transformed our business approach."',
        'testimonials.3.author': 'Emily Rodriguez',
        'testimonials.3.role': 'Director, Innovate Solutions',
        
        // Booking Section
        'booking.title': 'Schedule Your Consultation',
        'booking.subtitle': "Fill out the form below and we'll get back to you within 24 hours",
        'booking.firstName': 'First Name',
        'booking.lastName': 'Last Name',
        'booking.email': 'Email',
        'booking.phone': 'Phone Number',
        'booking.company': 'Company Name',
        'booking.service': 'Service Interested In',
        'booking.service.select': 'Select a service',
        'booking.service.business': 'Business Strategy',
        'booking.service.market': 'Market Analysis',
        'booking.service.goals': 'Goal Setting',
        'booking.service.innovation': 'Innovation Consulting',
        'booking.service.team': 'Team Development',
        'booking.service.performance': 'Performance Optimization',
        'booking.message': 'Tell us about your needs',
        'booking.date': 'Preferred Consultation Date',
        'booking.submit': 'Submit Request',
        'booking.submitting': 'Submitting...',
        'booking.success': 'Thank you! Your consultation request has been submitted. We will contact you within 24 hours.',
        'booking.error.required': 'Please fill in all required fields.',
        'booking.error.email': 'Please enter a valid email address.',
        'booking.error.phone': 'Please enter a valid phone number.',
        
        // Contact Section
        'contact.title': 'Get In Touch',
        'contact.subtitle': "Have questions? We're here to help!",
        'contact.email.label': 'Email',
        'contact.email.value': 'contact@consultpro.com',
        'contact.phone.label': 'Phone',
        'contact.phone.value': '+1 (555) 123-4567',
        'contact.address.label': 'Address',
        'contact.address.value': '123 Business Ave, Suite 100\nNew York, NY 10001',
        'contact.hours.label': 'Business Hours',
        'contact.hours.value': 'Mon - Fri: 9:00 AM - 6:00 PM',
        'contact.map': 'Map Location',
        
        // Footer
        'footer.tagline': 'Expert consultation services to help your business thrive.',
        'footer.quicklinks': 'Quick Links',
        'footer.services': 'Services',
        'footer.connect': 'Connect',
        'footer.copyright': '© 2024 ConsultPro. All rights reserved.',
    },
    es: {
        // Navigation
        'nav.home': 'Inicio',
        'nav.services': 'Servicios',
        'nav.about': 'Acerca de',
        'nav.testimonials': 'Testimonios',
        'nav.contact': 'Contacto',
        'nav.book': 'Reservar',
        
        // Hero Section
        'hero.title': 'Transforme su Negocio con Consultoría Experta',
        'hero.subtitle': 'Obtenga orientación personalizada de profesionales de la industria para alcanzar sus objetivos',
        'hero.cta.primary': 'Programar una Consulta',
        'hero.cta.secondary': 'Más Información',
        
        // Services Section
        'services.title': 'Nuestros Servicios',
        'services.subtitle': 'Servicios de consultoría integrales adaptados a sus necesidades',
        'services.business.title': 'Estrategia Empresarial',
        'services.business.desc': 'Desarrolle estrategias efectivas para hacer crecer su negocio y aumentar la rentabilidad',
        'services.market.title': 'Análisis de Mercado',
        'services.market.desc': 'Obtenga información sobre tendencias del mercado y posicionamiento competitivo',
        'services.goals.title': 'Establecimiento de Objetivos',
        'services.goals.desc': 'Establezca metas claras y alcanzables y cree planes de acción',
        'services.innovation.title': 'Consultoría de Innovación',
        'services.innovation.desc': 'Identifique oportunidades de innovación y transformación digital',
        'services.team.title': 'Desarrollo de Equipos',
        'services.team.desc': 'Construya equipos de alto rendimiento y mejore la cultura organizacional',
        'services.performance.title': 'Optimización del Rendimiento',
        'services.performance.desc': 'Optimice procesos y maximice la eficiencia operativa',
        
        // About Section
        'about.title': 'Acerca de ConsultPro',
        'about.text1': 'Con más de 15 años de experiencia en consultoría empresarial, hemos ayudado a cientos de empresas a alcanzar sus objetivos y superar desafíos.',
        'about.text2': 'Nuestro equipo de consultores expertos aporta diversa experiencia en varias industrias, asegurando que reciba la mejor orientación posible adaptada a su situación única.',
        'about.feature1': 'Profesionales certificados con trayectorias comprobadas',
        'about.feature2': 'Soluciones personalizadas para sus necesidades específicas',
        'about.feature3': 'Perspectivas y recomendaciones basadas en datos',
        'about.feature4': 'Apoyo continuo durante todo su proceso',
        'about.stat1.value': '500+',
        'about.stat1.label': 'Clientes Atendidos',
        'about.stat2.value': '15+',
        'about.stat2.label': 'Años de Experiencia',
        'about.stat3.value': '98%',
        'about.stat3.label': 'Tasa de Satisfacción',
        
        // Testimonials Section
        'testimonials.title': 'Lo Que Dicen Nuestros Clientes',
        'testimonials.subtitle': 'Comentarios reales de empresas que hemos ayudado',
        'testimonials.1.text': '"ConsultPro nos ayudó a aumentar nuestros ingresos en un 40% en solo 6 meses. ¡Sus ideas estratégicas fueron invaluables!"',
        'testimonials.1.author': 'Sarah Johnson',
        'testimonials.1.role': 'CEO, TechStart Inc.',
        'testimonials.2.text': '"La experiencia del equipo en análisis de mercado nos dio la ventaja competitiva que necesitábamos. ¡Muy recomendado!"',
        'testimonials.2.author': 'Michael Chen',
        'testimonials.2.role': 'Fundador, GrowthLabs',
        'testimonials.3.text': '"Profesional, conocedor y orientado a resultados. ConsultPro transformó nuestro enfoque empresarial."',
        'testimonials.3.author': 'Emily Rodriguez',
        'testimonials.3.role': 'Directora, Innovate Solutions',
        
        // Booking Section
        'booking.title': 'Programe Su Consulta',
        'booking.subtitle': 'Complete el formulario a continuación y nos pondremos en contacto con usted en 24 horas',
        'booking.firstName': 'Nombre',
        'booking.lastName': 'Apellido',
        'booking.email': 'Correo Electrónico',
        'booking.phone': 'Número de Teléfono',
        'booking.company': 'Nombre de la Empresa',
        'booking.service': 'Servicio de Interés',
        'booking.service.select': 'Seleccione un servicio',
        'booking.service.business': 'Estrategia Empresarial',
        'booking.service.market': 'Análisis de Mercado',
        'booking.service.goals': 'Establecimiento de Objetivos',
        'booking.service.innovation': 'Consultoría de Innovación',
        'booking.service.team': 'Desarrollo de Equipos',
        'booking.service.performance': 'Optimización del Rendimiento',
        'booking.message': 'Cuéntenos sobre sus necesidades',
        'booking.date': 'Fecha Preferida de Consulta',
        'booking.submit': 'Enviar Solicitud',
        'booking.submitting': 'Enviando...',
        'booking.success': '¡Gracias! Su solicitud de consulta ha sido enviada. Nos pondremos en contacto con usted en 24 horas.',
        'booking.error.required': 'Por favor complete todos los campos requeridos.',
        'booking.error.email': 'Por favor ingrese una dirección de correo electrónico válida.',
        'booking.error.phone': 'Por favor ingrese un número de teléfono válido.',
        
        // Contact Section
        'contact.title': 'Póngase en Contacto',
        'contact.subtitle': '¿Tiene preguntas? ¡Estamos aquí para ayudar!',
        'contact.email.label': 'Correo Electrónico',
        'contact.email.value': 'contact@consultpro.com',
        'contact.phone.label': 'Teléfono',
        'contact.phone.value': '+1 (555) 123-4567',
        'contact.address.label': 'Dirección',
        'contact.address.value': '123 Business Ave, Suite 100\nNew York, NY 10001',
        'contact.hours.label': 'Horario de Atención',
        'contact.hours.value': 'Lun - Vie: 9:00 AM - 6:00 PM',
        'contact.map': 'Ubicación en el Mapa',
        
        // Footer
        'footer.tagline': 'Servicios de consultoría expertos para ayudar a su negocio a prosperar.',
        'footer.quicklinks': 'Enlaces Rápidos',
        'footer.services': 'Servicios',
        'footer.connect': 'Conectar',
        'footer.copyright': '© 2024 ConsultPro. Todos los derechos reservados.',
    },
    fr: {
        // Navigation
        'nav.home': 'Accueil',
        'nav.services': 'Services',
        'nav.about': 'À propos',
        'nav.testimonials': 'Témoignages',
        'nav.contact': 'Contact',
        'nav.book': 'Réserver',
        
        // Hero Section
        'hero.title': 'Transformez Votre Entreprise avec une Consultation Experte',
        'hero.subtitle': 'Obtenez des conseils personnalisés de professionnels pour atteindre vos objectifs',
        'hero.cta.primary': 'Planifier une Consultation',
        'hero.cta.secondary': 'En Savoir Plus',
        
        // Services Section
        'services.title': 'Nos Services',
        'services.subtitle': 'Services de consultation complets adaptés à vos besoins',
        'services.business.title': 'Stratégie d\'Entreprise',
        'services.business.desc': 'Développez des stratégies efficaces pour développer votre entreprise et augmenter la rentabilité',
        'services.market.title': 'Analyse de Marché',
        'services.market.desc': 'Obtenez des informations sur les tendances du marché et le positionnement concurrentiel',
        'services.goals.title': 'Définition d\'Objectifs',
        'services.goals.desc': 'Fixez des objectifs clairs et réalisables et créez des plans d\'action',
        'services.innovation.title': 'Conseil en Innovation',
        'services.innovation.desc': 'Identifiez les opportunités d\'innovation et de transformation numérique',
        'services.team.title': 'Développement d\'Équipe',
        'services.team.desc': 'Construisez des équipes performantes et améliorez la culture organisationnelle',
        'services.performance.title': 'Optimisation des Performances',
        'services.performance.desc': 'Optimisez les processus et maximisez l\'efficacité opérationnelle',
        
        // About Section
        'about.title': 'À propos de ConsultPro',
        'about.text1': 'Avec plus de 15 ans d\'expérience en conseil d\'entreprise, nous avons aidé des centaines d\'entreprises à atteindre leurs objectifs et à surmonter les défis.',
        'about.text2': 'Notre équipe de consultants experts apporte une expertise diversifiée dans diverses industries, garantissant que vous recevez les meilleurs conseils possibles adaptés à votre situation unique.',
        'about.feature1': 'Professionnels certifiés avec des antécédents éprouvés',
        'about.feature2': 'Solutions personnalisées pour vos besoins spécifiques',
        'about.feature3': 'Insights et recommandations basés sur les données',
        'about.feature4': 'Soutien continu tout au long de votre parcours',
        'about.stat1.value': '500+',
        'about.stat1.label': 'Clients Servis',
        'about.stat2.value': '15+',
        'about.stat2.label': 'Années d\'Expérience',
        'about.stat3.value': '98%',
        'about.stat3.label': 'Taux de Satisfaction',
        
        // Testimonials Section
        'testimonials.title': 'Ce Que Disent Nos Clients',
        'testimonials.subtitle': 'Retours réels d\'entreprises que nous avons aidées',
        'testimonials.1.text': '"ConsultPro nous a aidés à augmenter nos revenus de 40% en seulement 6 mois. Leurs idées stratégiques ont été inestimables!"',
        'testimonials.1.author': 'Sarah Johnson',
        'testimonials.1.role': 'PDG, TechStart Inc.',
        'testimonials.2.text': '"L\'expertise de l\'équipe en analyse de marché nous a donné l\'avantage concurrentiel dont nous avions besoin. Hautement recommandé!"',
        'testimonials.2.author': 'Michael Chen',
        'testimonials.2.role': 'Fondateur, GrowthLabs',
        'testimonials.3.text': '"Professionnel, compétent et axé sur les résultats. ConsultPro a transformé notre approche commerciale."',
        'testimonials.3.author': 'Emily Rodriguez',
        'testimonials.3.role': 'Directrice, Innovate Solutions',
        
        // Booking Section
        'booking.title': 'Planifiez Votre Consultation',
        'booking.subtitle': 'Remplissez le formulaire ci-dessous et nous vous contacterons dans les 24 heures',
        'booking.firstName': 'Prénom',
        'booking.lastName': 'Nom',
        'booking.email': 'Email',
        'booking.phone': 'Numéro de Téléphone',
        'booking.company': 'Nom de l\'Entreprise',
        'booking.service': 'Service Intéressé',
        'booking.service.select': 'Sélectionnez un service',
        'booking.service.business': 'Stratégie d\'Entreprise',
        'booking.service.market': 'Analyse de Marché',
        'booking.service.goals': 'Définition d\'Objectifs',
        'booking.service.innovation': 'Conseil en Innovation',
        'booking.service.team': 'Développement d\'Équipe',
        'booking.service.performance': 'Optimisation des Performances',
        'booking.message': 'Parlez-nous de vos besoins',
        'booking.date': 'Date de Consultation Préférée',
        'booking.submit': 'Soumettre la Demande',
        'booking.submitting': 'Envoi en cours...',
        'booking.success': 'Merci! Votre demande de consultation a été soumise. Nous vous contacterons dans les 24 heures.',
        'booking.error.required': 'Veuillez remplir tous les champs obligatoires.',
        'booking.error.email': 'Veuillez entrer une adresse email valide.',
        'booking.error.phone': 'Veuillez entrer un numéro de téléphone valide.',
        
        // Contact Section
        'contact.title': 'Contactez-Nous',
        'contact.subtitle': 'Vous avez des questions? Nous sommes là pour vous aider!',
        'contact.email.label': 'Email',
        'contact.email.value': 'contact@consultpro.com',
        'contact.phone.label': 'Téléphone',
        'contact.phone.value': '+1 (555) 123-4567',
        'contact.address.label': 'Adresse',
        'contact.address.value': '123 Business Ave, Suite 100\nNew York, NY 10001',
        'contact.hours.label': 'Heures d\'Ouverture',
        'contact.hours.value': 'Lun - Ven: 9h00 - 18h00',
        'contact.map': 'Emplacement sur la Carte',
        
        // Footer
        'footer.tagline': 'Services de consultation experts pour aider votre entreprise à prospérer.',
        'footer.quicklinks': 'Liens Rapides',
        'footer.services': 'Services',
        'footer.connect': 'Connecter',
        'footer.copyright': '© 2024 ConsultPro. Tous droits réservés.',
    },
    de: {
        // Navigation
        'nav.home': 'Startseite',
        'nav.services': 'Dienstleistungen',
        'nav.about': 'Über uns',
        'nav.testimonials': 'Referenzen',
        'nav.contact': 'Kontakt',
        'nav.book': 'Buchen',
        
        // Hero Section
        'hero.title': 'Transformieren Sie Ihr Unternehmen mit Expertenberatung',
        'hero.subtitle': 'Erhalten Sie persönliche Beratung von Branchenexperten, um Ihre Ziele zu erreichen',
        'hero.cta.primary': 'Beratung Planen',
        'hero.cta.secondary': 'Mehr Erfahren',
        
        // Services Section
        'services.title': 'Unsere Dienstleistungen',
        'services.subtitle': 'Umfassende Beratungsdienstleistungen, die auf Ihre Bedürfnisse zugeschnitten sind',
        'services.business.title': 'Geschäftsstrategie',
        'services.business.desc': 'Entwickeln Sie effektive Strategien, um Ihr Unternehmen zu entwickeln und die Rentabilität zu steigern',
        'services.market.title': 'Marktanalyse',
        'services.market.desc': 'Gewinnen Sie Einblicke in Markttrends und Wettbewerbspositionierung',
        'services.goals.title': 'Zielsetzung',
        'services.goals.desc': 'Setzen Sie klare, erreichbare Ziele und erstellen Sie umsetzbare Pläne',
        'services.innovation.title': 'Innovationsberatung',
        'services.innovation.desc': 'Identifizieren Sie Möglichkeiten für Innovation und digitale Transformation',
        'services.team.title': 'Teamentwicklung',
        'services.team.desc': 'Bauen Sie leistungsstarke Teams auf und verbessern Sie die Unternehmenskultur',
        'services.performance.title': 'Leistungsoptimierung',
        'services.performance.desc': 'Optimieren Sie Prozesse und maximieren Sie die Betriebseffizienz',
        
        // About Section
        'about.title': 'Über ConsultPro',
        'about.text1': 'Mit über 15 Jahren Erfahrung in der Unternehmensberatung haben wir Hunderten von Unternehmen geholfen, ihre Ziele zu erreichen und Herausforderungen zu meistern.',
        'about.text2': 'Unser Team von Expertenberatern bringt vielfältige Expertise aus verschiedenen Branchen mit und stellt sicher, dass Sie die bestmögliche Beratung erhalten, die auf Ihre einzigartige Situation zugeschnitten ist.',
        'about.feature1': 'Zertifizierte Fachleute mit nachgewiesenen Erfolgen',
        'about.feature2': 'Maßgeschneiderte Lösungen für Ihre spezifischen Bedürfnisse',
        'about.feature3': 'Datengestützte Erkenntnisse und Empfehlungen',
        'about.feature4': 'Kontinuierliche Unterstützung während Ihrer gesamten Reise',
        'about.stat1.value': '500+',
        'about.stat1.label': 'Betreute Kunden',
        'about.stat2.value': '15+',
        'about.stat2.label': 'Jahre Erfahrung',
        'about.stat3.value': '98%',
        'about.stat3.label': 'Zufriedenheitsrate',
        
        // Testimonials Section
        'testimonials.title': 'Was Unsere Kunden Sagen',
        'testimonials.subtitle': 'Echtes Feedback von Unternehmen, denen wir geholfen haben',
        'testimonials.1.text': '"ConsultPro hat uns geholfen, unseren Umsatz in nur 6 Monaten um 40% zu steigern. Ihre strategischen Erkenntnisse waren von unschätzbarem Wert!"',
        'testimonials.1.author': 'Sarah Johnson',
        'testimonials.1.role': 'CEO, TechStart Inc.',
        'testimonials.2.text': '"Die Expertise des Teams in der Marktanalyse hat uns den Wettbewerbsvorteil verschafft, den wir brauchten. Sehr empfehlenswert!"',
        'testimonials.2.author': 'Michael Chen',
        'testimonials.2.role': 'Gründer, GrowthLabs',
        'testimonials.3.text': '"Professionell, sachkundig und ergebnisorientiert. ConsultPro hat unseren Geschäftsansatz transformiert."',
        'testimonials.3.author': 'Emily Rodriguez',
        'testimonials.3.role': 'Direktorin, Innovate Solutions',
        
        // Booking Section
        'booking.title': 'Planen Sie Ihre Beratung',
        'booking.subtitle': 'Füllen Sie das Formular unten aus und wir melden uns innerhalb von 24 Stunden bei Ihnen',
        'booking.firstName': 'Vorname',
        'booking.lastName': 'Nachname',
        'booking.email': 'E-Mail',
        'booking.phone': 'Telefonnummer',
        'booking.company': 'Firmenname',
        'booking.service': 'Interessierter Service',
        'booking.service.select': 'Wählen Sie einen Service',
        'booking.service.business': 'Geschäftsstrategie',
        'booking.service.market': 'Marktanalyse',
        'booking.service.goals': 'Zielsetzung',
        'booking.service.innovation': 'Innovationsberatung',
        'booking.service.team': 'Teamentwicklung',
        'booking.service.performance': 'Leistungsoptimierung',
        'booking.message': 'Erzählen Sie uns von Ihren Bedürfnissen',
        'booking.date': 'Bevorzugtes Beratungsdatum',
        'booking.submit': 'Anfrage Senden',
        'booking.submitting': 'Wird gesendet...',
        'booking.success': 'Vielen Dank! Ihre Beratungsanfrage wurde übermittelt. Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.',
        'booking.error.required': 'Bitte füllen Sie alle erforderlichen Felder aus.',
        'booking.error.email': 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
        'booking.error.phone': 'Bitte geben Sie eine gültige Telefonnummer ein.',
        
        // Contact Section
        'contact.title': 'Kontaktieren Sie Uns',
        'contact.subtitle': 'Haben Sie Fragen? Wir sind hier, um zu helfen!',
        'contact.email.label': 'E-Mail',
        'contact.email.value': 'contact@consultpro.com',
        'contact.phone.label': 'Telefon',
        'contact.phone.value': '+1 (555) 123-4567',
        'contact.address.label': 'Adresse',
        'contact.address.value': '123 Business Ave, Suite 100\nNew York, NY 10001',
        'contact.hours.label': 'Geschäftszeiten',
        'contact.hours.value': 'Mo - Fr: 9:00 - 18:00 Uhr',
        'contact.map': 'Kartenstandort',
        
        // Footer
        'footer.tagline': 'Expertenberatungsdienste, um Ihrem Unternehmen zum Erfolg zu verhelfen.',
        'footer.quicklinks': 'Schnelllinks',
        'footer.services': 'Dienstleistungen',
        'footer.connect': 'Verbinden',
        'footer.copyright': '© 2024 ConsultPro. Alle Rechte vorbehalten.',
    }
};

// Detect user's preferred language
function detectLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        return savedLang;
    }
    
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split('-')[0];
    
    return translations[langCode] ? langCode : 'en';
}

// Get translation
function t(key) {
    const lang = currentLanguage || 'en';
    return translations[lang]?.[key] || translations['en']?.[key] || key;
}

// Update page content
function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);
        
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translation;
        } else {
            // Preserve HTML structure for multi-line content
            if (translation.includes('\n')) {
                element.innerHTML = translation.replace(/\n/g, '<br>');
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update select options
    document.querySelectorAll('[data-i18n-option]').forEach(option => {
        const key = option.getAttribute('data-i18n-option');
        option.textContent = t(key);
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
    
    // Save preference
    localStorage.setItem('preferredLanguage', currentLanguage);
}

// Initialize language
let currentLanguage = detectLanguage();

// Export functions for global use
window.i18n = {
    t,
    currentLanguage,
    setLanguage: function(lang) {
        if (translations[lang]) {
            currentLanguage = lang;
            window.i18n.currentLanguage = lang;
            updateContent();
        }
    },
    updateContent,
    availableLanguages: Object.keys(translations)
};
