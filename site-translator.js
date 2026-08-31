(function () {
  const STORAGE_KEY = 'aaaRodriguezLanguage';
  const storedLanguage = localStorage.getItem(STORAGE_KEY);
  const language = storedLanguage === 'en' ? 'en' : 'es';

  const exactEnglish = {
    'Inicio': 'Home',
    'Servicios': 'Services',
    'Portafolio': 'Portfolio',
    'Blog': 'Blog',
    'Seguridad': 'Safety',
    'Cotización': 'Quote',
    'Nosotros': 'About',
    'Contacto': 'Contact',
    'Contacto directo': 'Direct contact',
    'Áreas': 'Areas',
    'Páginas': 'Pages',
    'Cotización por mensaje': 'Quote by message',
    'Pedir cotización': 'Request a quote',
    'Llamar ahora': 'Call now',
    'Llamar 863-257-8339': 'Call 863-257-8339',
    'Enviar detalles': 'Send details',
    'Contactar ahora': 'Contact now',
    'Abrir opciones de contacto': 'Open contact options',
    'Cerrar': 'Close',
    'Elige cómo comunicarte con nosotros': 'Choose how to contact us',
    'Elige cómo enviar tu solicitud': 'Choose how to send your request',
    'Toca el botón y escoge WhatsApp o mensaje de texto para hablar directo con AAA Rodriguez General Services.': 'Tap the button and choose WhatsApp or text message to speak directly with AAA Rodriguez General Services.',
    'Respuesta directa al 863-257-8339': 'Direct response at 863-257-8339',
    'WhatsApp': 'WhatsApp',
    'Mensaje de texto': 'Text message',
    'Abrir conversación': 'Open conversation',
    'Enviar SMS al celular': 'Send SMS to the phone',
    'Habla directo con AAA Rodriguez General Services. Escoge WhatsApp o mensaje de texto y envía tu solicitud desde el celular.': 'Talk directly with AAA Rodriguez General Services. Choose WhatsApp or text message and send your request from your phone.',
    'Ver servicios': 'View services',
    'Ver servicio': 'View service',
    'Ver Portafolio': 'View Portfolio',
    'Ver portafolio': 'View portfolio',
    'Ver proyectos': 'View projects',
    'Ver galería': 'View gallery',
    'Ver completo': 'View full image',
    'Leer artículo': 'Read article',
    'Abrir menú': 'Open menu',
    'Cerrar chat': 'Close chat',
    'Abrir chat': 'Open chat',
    'Abrir en Vimeo': 'Open on Vimeo',
    'Enviar mensaje': 'Send message',
    'Cerrar imagen': 'Close image',
    'Imagen de galería expandida': 'Expanded gallery image',
    'Reproducir video de corte de ramas': 'Play branch cutting video',
    'Reproducir video de poda segura': 'Play safe trimming video',
    'Video de corte de ramas': 'Branch cutting video',
    'Video de poda segura': 'Safe trimming video',
    'Servicios principales': 'Main services',
    'Trabajo exterior': 'Outdoor work',
    'Antes y después': 'Before and after',
    'Por qué llamarnos': 'Why call us',
    'Respuesta para riesgos': 'Risk response',
    'Ciudades principales': 'Main cities',
    'Enfoque en seguridad': 'Safety focused',
    'Cuidado residencial': 'Residential care',
    'Limpieza completa': 'Complete cleanup',
    'Protección y mantenimiento': 'Protection and maintenance',
    'para exteriores': 'for outdoors',
    'Corte y poda de árboles': 'Tree cutting and trimming',
    'Remoción de árboles': 'Tree removal',
    'Limpieza de patios': 'Yard cleanup',
    'Corte de grama': 'Lawn mowing',
    'Prevención de daños': 'Damage prevention',
    'Mantenimiento de propiedades': 'Property maintenance',
    'Ramas peligrosas': 'Dangerous branches',
    'Poda preventiva': 'Preventive trimming',
    'Techos': 'Roofs',
    'Árboles dañados': 'Damaged trees',
    'Riesgo estructural': 'Structural risk',
    'Retiro seguro': 'Safe removal',
    'Ramas': 'Branches',
    'Hojas': 'Leaves',
    'Desechos': 'Debris',
    'Áreas verdes': 'Green areas',
    'Mantenimiento': 'Maintenance',
    'Propiedad': 'Property',
    'Familia': 'Family',
    'Casas': 'Homes',
    'Terrenos': 'Lots',
    'Patios': 'Yards',
    'Prevención de riesgos': 'Risk prevention',
    'Portafolio de trabajos': 'Work portfolio',
    'Blog de consejos': 'Tips blog',
    'Árboles, patios y áreas verdes | Florida Central': 'Trees, yards and green areas | Central Florida',
    'Blog de árboles, patios y áreas verdes | Florida Central': 'Tree, yard and green area blog | Central Florida',
    'Todos los derechos reservados.': 'All rights reserved.',
    '© 2026 AAA Rodriguez General Services. Todos los derechos reservados.': '© 2026 AAA Rodriguez General Services. All rights reserved.',
    'Blog publicado': 'Published blog',
    'Consejos para': 'Tips for',
    'árboles seguros': 'safe trees',
    'patios limpios': 'clean yards',
    'propiedades cuidadas': 'well cared for properties',
    '10 artículos SEO': '10 SEO articles',
    'Guías locales para cuidar tu propiedad': 'Local guides to care for your property',
    'Contenido por ciudad y servicio': 'Content by city and service',
    'Poda de árboles': 'Tree trimming',
    'Remoción': 'Removal',
    'Grama': 'Lawn',
    'Tree trimming': 'Tree trimming',
    'Tormentas': 'Storms',
    'Árboles secos': 'Dry trees',
    'Limpieza posterior': 'Post-work cleanup',
    'Servicios residenciales': 'Residential services',
    'Portafolio real': 'Real portfolio',
    'Trabajos destacados': 'Featured jobs',
    'AAA Rodriguez': 'AAA Rodriguez',
    'poda segura': 'safe trimming',
    'limpieza de patios': 'yard cleanup',
    'trabajos reales': 'real jobs',
    'Proyectos destacados': 'Featured projects',
    'Galería completa': 'Full gallery',
    'Videos de trabajos': 'Work videos',
    'Los videos se abren desde Vimeo solamente cuando el visitante toca reproducir. Así el sitio no descarga archivos pesados al entrar.': 'Videos open from Vimeo only when the visitor taps play. This keeps the site from downloading heavy files on page load.',
    'Mantenimiento residencial': 'Residential maintenance',
    'Antes / después': 'Before / after',
    'Trabajo en altura': 'Work at height',
    'Propiedad residencial': 'Residential property',
    'Equipo en trabajo': 'Crew at work',
    'Remoción y limpieza': 'Removal and cleanup',
    'Evaluación de árbol': 'Tree assessment',
    'Servicio en campo': 'Field service',
    'Equipo de seguridad': 'Safety gear',
    'Protección de vivienda': 'Home protection',
    'Corte controlado': 'Controlled cutting',
    'Árboles grandes': 'Large trees',
    'Patio residencial': 'Residential yard',
    'La diferencia se ve': 'The difference shows',
    'en el resultado': 'in the result',
    'Prevención': 'Prevention',
    'Limpieza exterior': 'Outdoor cleanup',
    'Trabajo grande': 'Large job',
    'Corte de ramas': 'Branch cutting',
    'Poda segura': 'Safe trimming',
    'Asistente AAA Rodriguez': 'AAA Rodriguez Assistant',
    'Información rápida': 'Quick information',
    'Rama peligrosa': 'Dangerous branch',
    'Teléfono': 'Phone',
    'Nombre': 'Name',
    'Ciudad': 'City',
    'Servicio': 'Service',
    'Selecciona uno': 'Select one',
    'Mantenimiento general': 'General maintenance',
    'Varios servicios': 'Several services',
    'Detalles': 'Details',
    'Tu nombre': 'Your name',
    'Tu número': 'Your number',
    'Ej. Lakeland, FL': 'Ex. Lakeland, FL',
    'Escribe tu pregunta...': 'Write your question...',
    'Describe el árbol, rama, patio o mantenimiento que necesitas.': 'Describe the tree, branch, yard, or maintenance you need.',
    'Abriendo mensaje...': 'Opening message...',
    'Servicio confiable': 'Reliable service',
    'FL': 'FL',
    'Scroll': 'Scroll',
    'Seguridad, limpieza y cuidado': 'Safety, cleanup and care',
    'para tu propiedad': 'for your property',
    'Protegemos tu hogar,': 'We protect your home,',
    'tu propiedad y tu familia': 'your property and your family',
    'tu patio limpio y seguro': 'your clean and safe yard',
    'tu hogar antes del daño': 'your home before damage happens',
    'tu familia en Florida Central': 'your family in Central Florida',
    'Cuidamos y embellecemos su hogar': 'We care for and beautify your home',
    '¿Tiene árboles demasiado grandes, ramas peligrosas o árboles cerca de su techo?': 'Do you have oversized trees, dangerous branches, or trees near your roof?',
    'Eliminación de ramas peligrosas': 'Removal of dangerous branches',
    'Limpieza de árboles y propiedades': 'Tree and property cleanup',
    'Remoción de árboles peligrosos': 'Removal of dangerous trees',
    'Protección alrededor de su hogar': 'Protection around your home',
    'Trabajo profesional para mantener su propiedad limpia y bonita': 'Professional work to keep your property clean and beautiful',
    'No espere a que una rama caiga sobre su techo o su casa.': 'Do not wait for a branch to fall on your roof or home.',
    'Déjenos ayudarle a mantener su hogar seguro, limpio y hermoso.': 'Let us help you keep your home safe, clean, and beautiful.',
    'Trabajo responsable. Calidad y seguridad.': 'Responsible work. Quality and safety.',
    'Sirviendo a nuestra comunidad.': 'Serving our community.',
    'árboles seguros|patios limpios|propiedades cuidadas|Florida Central': 'safe trees|clean yards|well cared for properties|Central Florida',
    'AAA Rodriguez|poda segura|limpieza de patios|trabajos reales': 'AAA Rodriguez|safe trimming|yard cleanup|real jobs',
    'en Lakeland|en Orlando|en Tampa|en Kissimmee|en Florida Central': 'in Lakeland|in Orlando|in Tampa|in Kissimmee|in Central Florida',
    'con cuidado|sin esperar daños|para casas seguras|en Florida Central': 'with care|before damage happens|for safe homes|in Central Florida',
    'más despejados|más seguros|más bonitos|sin desechos': 'more open|safer|better looking|free of debris',
    'para patios limpios|para áreas verdes|con buen acabado|en Florida Central': 'for clean yards|for green areas|with a clean finish|in Central Florida',
    'antes de la tormenta|antes de la caída|antes del gasto|para tu familia': 'before the storm|before a fall|before the expense|for your family',
    'limpias|seguras|bien cuidadas|en Florida Central': 'clean|safe|well cared for|in Central Florida',
    'Corte y poda de árboles en Florida Central | AAA Rodriguez General Services': 'Tree Cutting and Trimming in Central Florida | AAA Rodriguez General Services',
    'Remoción de árboles en Florida Central | AAA Rodriguez General Services': 'Tree Removal in Central Florida | AAA Rodriguez General Services',
    'Limpieza de patios en Florida Central | AAA Rodriguez General Services': 'Yard Cleanup in Central Florida | AAA Rodriguez General Services',
    'Corte de grama en Florida Central | AAA Rodriguez General Services': 'Lawn Mowing in Central Florida | AAA Rodriguez General Services',
    'Prevención de daños en propiedades | AAA Rodriguez General Services': 'Property Damage Prevention | AAA Rodriguez General Services',
    'Mantenimiento de propiedades en Florida Central | AAA Rodriguez General Services': 'Property Maintenance in Central Florida | AAA Rodriguez General Services',
    'Corte y poda de árboles en Lakeland: cómo prevenir daños': 'Tree cutting and trimming in Lakeland: how to prevent damage',
    'Remoción de árboles en Orlando: cuándo un árbol representa riesgo': 'Tree removal in Orlando: when a tree becomes a risk',
    'Limpieza de patios en Tampa: ramas, hojas y desechos bajo control': 'Yard cleanup in Tampa: branches, leaves, and debris under control',
    'Mantenimiento de grama en Kissimmee para patios limpios y agradables': 'Lawn maintenance in Kissimmee for clean and pleasant yards',
    'Ramas peligrosas en Haines City: señales de alerta para tu hogar': 'Dangerous branches in Haines City: warning signs for your home',
    'Tree trimming en Florida Central: seguridad para casas y familias': 'Tree trimming in Central Florida: safety for homes and families',
    'Preparar tu propiedad para tormentas en Lakeland y Orlando': 'Preparing your property for storms in Lakeland and Orlando',
    'Árboles secos en Tampa: cuándo evaluar remoción o poda': 'Dry trees in Tampa: when to consider removal or trimming',
    'Limpieza después de poda y remoción en Kissimmee': 'Cleanup after trimming and removal in Kissimmee',
    'Servicios de árboles y patios para propiedades residenciales': 'Tree and yard services for residential properties',
    'Corte y poda de árboles en Lakeland | AAA Rodriguez General Services': 'Tree Cutting and Trimming in Lakeland | AAA Rodriguez General Services',
    'Remoción de árboles en Orlando | AAA Rodriguez General Services': 'Tree Removal in Orlando | AAA Rodriguez General Services',
    'Limpieza de patios en Tampa | AAA Rodriguez General Services': 'Yard Cleanup in Tampa | AAA Rodriguez General Services',
    'Mantenimiento de grama en Kissimmee | AAA Rodriguez General Services': 'Lawn Maintenance in Kissimmee | AAA Rodriguez General Services',
    'Ramas peligrosas en Haines City | AAA Rodriguez General Services': 'Dangerous Branches in Haines City | AAA Rodriguez General Services',
    'Preparar propiedad para tormentas | AAA Rodriguez': 'Preparing Property for Storms | AAA Rodriguez',
    'Árboles secos en Tampa | AAA Rodriguez General Services': 'Dry Trees in Tampa | AAA Rodriguez General Services',
    'Limpieza después de poda y remoción | AAA Rodriguez': 'Cleanup After Trimming and Removal | AAA Rodriguez',
    'Servicios de árboles y patios en Florida Central | AAA Rodriguez': 'Tree and Yard Services in Central Florida | AAA Rodriguez',
    'Publicado el 30 de agosto de 2026 por AAA Rodriguez General Services.': 'Published August 30, 2026 by AAA Rodriguez General Services.'
  };

  const phraseEnglish = [
    ['AAA Rodriguez General Services ayuda a prevenir peligros antes de que una rama, un árbol o un patio descuidado cause daños.', 'AAA Rodriguez General Services helps prevent hazards before a branch, tree, or neglected yard causes damage.'],
    ['Servimos toda Florida Central con poda, remoción, limpieza y mantenimiento de áreas verdes.', 'We serve all of Central Florida with trimming, removal, cleanup, and green area maintenance.'],
    ['Nuestro trabajo se enfoca en prevenir peligros y mantener tu propiedad limpia, bonita y segura.', 'Our work focuses on preventing hazards and keeping your property clean, attractive, and safe.'],
    ['Retiramos ramas peligrosas, removemos árboles cuando representan un riesgo y dejamos patios listos para disfrutarse.', 'We remove dangerous branches, remove trees when they represent a risk, and leave yards ready to enjoy.'],
    ['Trabajamos con hogares, terrenos, patios residenciales y propiedades que necesitan mantenimiento confiable', 'We work with homes, lots, residential yards, and properties that need reliable maintenance'],
    ['Soluciones directas para árboles, ramas, patios, basura verde y áreas de grama.', 'Direct solutions for trees, branches, yards, green waste, and lawn areas.'],
    ['El objetivo es reducir riesgos, evitar daños costosos y mantener tu propiedad presentable.', 'The goal is to reduce risks, avoid costly damage, and keep your property presentable.'],
    ['Eliminamos ramas peligrosas que pueden caer sobre techos, vehículos, cercas o zonas donde camina tu familia.', 'We remove dangerous branches that could fall on roofs, vehicles, fences, or areas where your family walks.'],
    ['Retiramos árboles que representan un peligro, están dañados o necesitan ser removidos para proteger la propiedad.', 'We remove trees that are dangerous, damaged, or need to be removed to protect the property.'],
    ['Recogemos basura, ramas, hojas y desechos para dejar patios y terrenos más limpios, despejados y agradables.', 'We pick up trash, branches, leaves, and debris to leave yards and lots cleaner, clearer, and more pleasant.'],
    ['Mantenimiento de grama y áreas verdes para que tu patio tenga una apariencia limpia, cuidada y uniforme.', 'Lawn and green area maintenance so your yard has a clean, cared for, and even appearance.'],
    ['Identificamos zonas de riesgo antes de que una rama o árbol cause daños materiales o ponga en peligro a una familia.', 'We identify risk areas before a branch or tree causes property damage or puts a family in danger.'],
    ['Servicio práctico para casas, patios, terrenos y propiedades que necesitan limpieza exterior continua o por ocasión.', 'A practical service for homes, yards, lots, and properties that need ongoing or one-time outdoor cleanup.'],
    ['Fotos reales de trabajos, equipo, árboles, patios y propiedades atendidas por AAA Rodriguez General Services.', 'Real photos of jobs, equipment, trees, yards, and properties served by AAA Rodriguez General Services.'],
    ['Compara el estado inicial con el trabajo terminado.', 'Compare the starting condition with the finished work.'],
    ['Esta sección muestra cómo una limpieza y mantenimiento exterior puede transformar el patio sin perder el enfoque en seguridad.', 'This section shows how outdoor cleanup and maintenance can transform a yard while keeping safety first.'],
    ['El mantenimiento exterior no es solo apariencia.', 'Outdoor maintenance is not just appearance.'],
    ['Una rama peligrosa, basura acumulada o un árbol inestable puede dañar techos, carros, cercas y poner en riesgo a tu familia.', 'A dangerous branch, accumulated debris, or unstable tree can damage roofs, cars, fences, and put your family at risk.'],
    ['Revisamos el riesgo alrededor de techos, vehículos, entradas, patios y áreas donde convive la familia.', 'We review risk around roofs, vehicles, driveways, yards, and areas where the family spends time.'],
    ['No dejamos el problema a medias.', 'We do not leave the job halfway done.'],
    ['Recogemos ramas, hojas, basura verde y desechos para que la propiedad quede presentable.', 'We pick up branches, leaves, green waste, and debris so the property looks presentable.'],
    ['Lakeland, Orlando, Tampa, Kissimmee, Haines City y comunidades cercanas.', 'Lakeland, Orlando, Tampa, Kissimmee, Haines City, and nearby communities.'],
    ['También atendemos trabajos en alrededores.', 'We also handle jobs in surrounding areas.'],
    ['Llama al 863-257-8339 para explicar el problema y coordinar una cotización.', 'Call 863-257-8339 to explain the problem and coordinate a quote.'],
    ['No esperes a que una rama caiga sobre un techo, vehículo o área donde pueda lastimar a alguien.', 'Do not wait for a branch to fall on a roof, vehicle, or area where it could hurt someone.'],
    ['AAA Rodriguez General Services trabaja para prevenir peligros y mantener tu propiedad limpia.', 'AAA Rodriguez General Services works to prevent hazards and keep your property clean.'],
    ['Cuéntanos qué necesitas: poda, remoción, limpieza, grama o mantenimiento general.', 'Tell us what you need: trimming, removal, cleanup, lawn mowing, or general maintenance.'],
    ['Entre más detalles incluyas sobre la ubicación y el riesgo, más rápido podremos orientarte.', 'The more details you include about the location and risk, the faster we can guide you.'],
    ['Trabajamos en toda Florida Central', 'We work throughout Central Florida'],
    ['Seguridad, limpieza y cuidado de tu propiedad.', 'Safety, cleanup, and care for your property.'],
    ['Servicios de árboles, patios y áreas verdes para familias y propiedades en Florida Central.', 'Tree, yard, and green area services for families and properties in Central Florida.'],
    ['Artículos creados para orientar a familias y dueños de propiedades', 'Articles created to guide families and property owners'],
    ['sobre prevención, limpieza y mantenimiento exterior.', 'about prevention, cleanup, and outdoor maintenance.'],
    ['Cada artículo está enfocado en servicios reales de AAA Rodriguez General Services y en las ciudades donde trabaja el negocio.', 'Each article focuses on real AAA Rodriguez General Services work and the cities where the business serves customers.'],
    ['Señales para actuar antes de que una rama comprometa techos, entradas, vehículos o áreas familiares.', 'Signs to act before a branch threatens roofs, driveways, vehicles, or family areas.'],
    ['Guía para identificar troncos débiles, ramas secas, inclinación y riesgos cerca de viviendas.', 'A guide to identify weak trunks, dry branches, leaning trees, and risks near homes.'],
    ['Por qué mantener el patio despejado ayuda a proteger la propiedad y mejorar su apariencia.', 'Why keeping the yard clear helps protect the property and improve its appearance.'],
    ['Consejos para conservar áreas verdes cuidadas y evitar que el exterior pierda orden.', 'Tips to keep green areas cared for and prevent the exterior from looking neglected.'],
    ['Cómo detectar ramas que pueden caer sobre techos, carros, cercas o zonas de paso.', 'How to spot branches that could fall on roofs, cars, fences, or walkways.'],
    ['Qué significa una poda preventiva y por qué no debe esperar hasta que llegue el problema.', 'What preventive trimming means and why it should not wait until there is a problem.'],
    ['Revisión de árboles, ramas y patios antes de lluvias fuertes o vientos intensos.', 'Reviewing trees, branches, and yards before heavy rain or strong winds.'],
    ['Factores que indican que un árbol seco puede convertirse en un riesgo para la propiedad.', 'Factors that show a dry tree could become a property risk.'],
    ['La recogida de ramas, hojas y desechos es parte clave de un patio seguro y presentable.', 'Picking up branches, leaves, and debris is key to a safe, presentable yard.'],
    ['Una visión completa de poda, remoción, limpieza, grama y mantenimiento exterior.', 'A complete view of trimming, removal, cleanup, lawn mowing, and outdoor maintenance.'],
    ['Proyectos de poda, remoción, limpieza y mantenimiento exterior realizados para proteger propiedades, prevenir daños y mantener patios listos para disfrutarse en Florida Central.', 'Trimming, removal, cleanup, and outdoor maintenance projects completed to protect properties, prevent damage, and keep yards ready to enjoy in Central Florida.'],
    ['Árbol retirado y limpieza exterior cerca de calle residencial.', 'Tree removed and outdoor cleanup near a residential street.'],
    ['Poda preventiva para reducir riesgo sobre áreas de paso.', 'Preventive trimming to reduce risk over walkways.'],
    ['Limpieza de ramas y hojas para dejar el patio despejado.', 'Branch and leaf cleanup to leave the yard clear.'],
    ['Mantenimiento de áreas verdes y exteriores residenciales.', 'Residential green area and outdoor maintenance.'],
    ['Poda enfocada en seguridad, limpieza y prevención', 'Trimming focused on safety, cleanup, and prevention'],
    ['Una rama pesada o seca puede convertirse en un problema rápido cuando hay viento, lluvia o una tormenta.', 'A heavy or dry branch can quickly become a problem during wind, rain, or a storm.'],
    ['AAA Rodriguez General Services corta y poda árboles para reducir riesgos visibles y dejar el área más limpia.', 'AAA Rodriguez General Services cuts and trims trees to reduce visible risks and leave the area cleaner.'],
    ['Qué incluye el servicio', 'What the service includes'],
    ['Cómo pido cotización', 'How do I request a quote'],
    ['Qué servicios ofrecen', 'What services do you offer'],
    ['En qué áreas trabajan', 'What areas do you serve'],
    ['Cuál es el teléfono', 'What is the phone number'],
    ['Tengo una rama peligrosa', 'I have a dangerous branch'],
    ['Servicio en Florida Central', 'Service in Central Florida'],
    ['Servicios relacionados', 'Related services'],
    ['También podemos ayudarte con', 'We can also help with'],
    ['Cuando un árbol ya no es seguro, hay que actuar', 'When a tree is no longer safe, it is time to act'],
    ['Patios limpios para usar y disfrutar la propiedad', 'Clean yards for using and enjoying the property'],
    ['Un patio cuidado cambia la primera impresión de la propiedad', 'A cared for yard changes the first impression of the property'],
    ['La prevención cuesta menos que reparar daños', 'Prevention costs less than repairing damage'],
    ['Cuidado exterior para que la propiedad no se deteriore', 'Outdoor care so the property does not deteriorate'],
    ['Servicio en Central Florida', 'Service in Central Florida'],
    ['Florida Central', 'Central Florida'],
    ['Lakeland y Orlando', 'Lakeland and Orlando'],
    ['Publicado el', 'Published'],
    ['30 de agosto de 2026', 'August 30, 2026'],
    ['por AAA Rodriguez General Services', 'by AAA Rodriguez General Services'],
    ['Cómo', 'How'],
    ['cómo', 'how'],
    ['Cuándo', 'When'],
    ['cuándo', 'when'],
    ['Qué', 'What'],
    ['qué', 'what'],
    ['Por qué', 'Why'],
    ['por qué', 'why'],
    ['Señales', 'Signs'],
    ['señales', 'signs'],
    ['Consejos', 'Tips'],
    ['consejos', 'tips'],
    ['Guía', 'Guide'],
    ['guía', 'guide'],
    ['revisión', 'review'],
    ['Revisión', 'Review'],
    ['prevenir', 'prevent'],
    ['Prevenir', 'Prevent'],
    ['proteger', 'protect'],
    ['Proteger', 'Protect'],
    ['detectar', 'spot'],
    ['Detectar', 'Spot'],
    ['mantener', 'keep'],
    ['Mantener', 'Keep'],
    ['dañados', 'damaged'],
    ['Dañados', 'Damaged'],
    ['limpios', 'clean'],
    ['Limpios', 'Clean'],
    ['seguros', 'safe'],
    ['Seguros', 'Safe'],
    ['agradables', 'pleasant'],
    ['Agradables', 'Pleasant'],
    ['residenciales', 'residential'],
    ['Residenciales', 'Residential'],
    ['y alrededores', 'and surrounding areas'],
    ['y comunidades cercanas', 'and nearby communities'],
    ['y áreas verdes', 'and green areas'],
    ['áreas verdes', 'green areas'],
    ['Áreas verdes', 'Green areas'],
    ['poda de árboles', 'tree trimming'],
    ['Poda de árboles', 'Tree trimming'],
    ['remoción de árboles', 'tree removal'],
    ['Remoción de árboles', 'Tree removal'],
    ['limpieza de patios', 'yard cleanup'],
    ['Limpieza de patios', 'Yard cleanup'],
    ['corte de grama', 'lawn mowing'],
    ['Corte de grama', 'Lawn mowing'],
    ['mantenimiento exterior', 'outdoor maintenance'],
    ['Mantenimiento exterior', 'Outdoor maintenance'],
    ['mantenimiento de áreas verdes', 'green area maintenance'],
    ['Mantenimiento de grama', 'Lawn maintenance'],
    ['rama peligrosa', 'dangerous branch'],
    ['Rama peligrosa', 'Dangerous branch'],
    ['ramas peligrosas', 'dangerous branches'],
    ['Ramas peligrosas', 'Dangerous branches'],
    ['árboles secos', 'dry trees'],
    ['Árboles secos', 'Dry trees'],
    ['árbol seco', 'dry tree'],
    ['Árbol seco', 'Dry tree'],
    ['árboles', 'trees'],
    ['Árboles', 'Trees'],
    ['árbol', 'tree'],
    ['Árbol', 'Tree'],
    ['patios', 'yards'],
    ['Patios', 'Yards'],
    ['patio', 'yard'],
    ['Patio', 'Yard'],
    ['propiedades', 'properties'],
    ['Propiedades', 'Properties'],
    ['propiedad', 'property'],
    ['Propiedad', 'Property'],
    ['hogar', 'home'],
    ['Hogar', 'Home'],
    ['familias', 'families'],
    ['Familias', 'Families'],
    ['familia', 'family'],
    ['Familia', 'Family'],
    ['seguridad', 'safety'],
    ['Seguridad', 'Safety'],
    ['limpieza', 'cleanup'],
    ['Limpieza', 'Cleanup'],
    ['mantenimiento', 'maintenance'],
    ['Mantenimiento', 'Maintenance'],
    ['cotización', 'quote'],
    ['Cotización', 'Quote'],
    ['riesgo', 'risk'],
    ['Riesgo', 'Risk'],
    ['daños', 'damage'],
    ['Daños', 'Damage'],
    ['techo', 'roof'],
    ['Techo', 'Roof'],
    ['techos', 'roofs'],
    ['Techos', 'Roofs'],
    ['vehículos', 'vehicles'],
    ['Vehículos', 'Vehicles'],
    ['carros', 'cars'],
    ['Carros', 'Cars'],
    ['cercas', 'fences'],
    ['Cercas', 'Fences'],
    ['entradas', 'driveways'],
    ['Entradas', 'Driveways'],
    ['basura verde', 'green waste'],
    ['Basura verde', 'Green waste'],
    ['desechos', 'debris'],
    ['Desechos', 'Debris'],
    ['hojas', 'leaves'],
    ['Hojas', 'Leaves'],
    ['ramas', 'branches'],
    ['Ramas', 'Branches'],
    ['ciudad', 'city'],
    ['Ciudad', 'City'],
    ['teléfono', 'phone'],
    ['Teléfono', 'Phone'],
    ['nombre', 'name'],
    ['Nombre', 'Name'],
    ['detalles', 'details'],
    ['Detalles', 'Details'],
    ['en Florida Central', 'in Central Florida'],
    ['de Florida Central', 'of Central Florida'],
    ['Florida Central', 'Central Florida'],
    ['para tu', 'for your'],
    ['Para tu', 'For your'],
    ['tu ', 'your '],
    ['Tu ', 'Your '],
    [' con ', ' with '],
    [' para ', ' for '],
    [' de ', ' of '],
    [' en ', ' in '],
    [' y ', ' and '],
    [' o ', ' or '],
    [' que ', ' that ']
  ];

  function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  const phraseRules = phraseEnglish
    .sort((a, b) => b[0].length - a[0].length)
    .map(([from, to]) => [new RegExp(escapeRegExp(from), 'g'), to]);

  function hasSpanishSignal(value) {
    return /[áéíóúñ¿¡ÁÉÍÓÚÑ]|\b(para|con|servicio|servicios|poda|rama|ramas|árbol|árboles|patio|patios|propiedad|cotización|seguridad|limpieza|mantenimiento|daños|riesgo|ciudad|teléfono|en|de|que|familia)\b/i.test(value);
  }

  function normalize(value) {
    return value.replace(/\s+/g, ' ').trim();
  }

  function preserveWhitespace(original, translated) {
    const leading = original.match(/^\s*/)[0];
    const trailing = original.match(/\s*$/)[0];
    return `${leading}${translated}${trailing}`;
  }

  function cleanTranslation(value) {
    return value
      .replace(/\s+([,.!?;:])/g, '$1')
      .replace(/¿|¡/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
  }

  function toEnglish(value) {
    const trimmed = normalize(value);
    if (!trimmed) return value;

    if (exactEnglish[trimmed]) {
      return preserveWhitespace(value, exactEnglish[trimmed]);
    }

    if (!hasSpanishSignal(trimmed)) {
      return value;
    }

    let translated = trimmed;
    phraseRules.forEach(([pattern, replacement]) => {
      translated = translated.replace(pattern, replacement);
    });

    translated = cleanTranslation(translated);
    return translated && translated !== trimmed ? preserveWhitespace(value, translated) : value;
  }

  function translateDataPhrases(element) {
    const phrases = element.getAttribute('data-phrases');
    if (!phrases) return;

    const translated = phrases
      .split('|')
      .map(phrase => normalize(toEnglish(phrase)))
      .join('|');
    element.setAttribute('data-phrases', translated);
  }

  function translateAttributes(element) {
    ['placeholder', 'aria-label', 'alt', 'title', 'data-caption'].forEach(attr => {
      const value = element.getAttribute(attr);
      if (value) element.setAttribute(attr, normalize(toEnglish(value)));
    });

    translateDataPhrases(element);
  }

  function shouldSkipElement(element) {
    return element.closest('script, style, noscript, svg, canvas, iframe, video, audio, [data-no-translate]') !== null;
  }

  function translateTextNodes() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || shouldSkipElement(parent)) return NodeFilter.FILTER_REJECT;
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      node.nodeValue = toEnglish(node.nodeValue);
    });
  }

  function translateDocumentMetadata() {
    document.title = normalize(toEnglish(document.title));
    document.querySelectorAll('meta[name="description"], meta[property^="og:"], meta[name^="twitter:"]').forEach(meta => {
      const content = meta.getAttribute('content');
      if (content) meta.setAttribute('content', normalize(toEnglish(content)));
    });
  }

  function createLanguageButton() {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'language-toggle';
    button.dataset.noTranslate = '';
    button.textContent = language === 'en' ? 'ES' : 'EN';
    button.setAttribute('aria-label', language === 'en' ? 'Cambiar sitio a español' : 'Translate site to English');
    button.addEventListener('click', () => {
      localStorage.setItem(STORAGE_KEY, language === 'en' ? 'es' : 'en');
      window.location.reload();
    });
    return button;
  }

  function injectLanguageButtons() {
    document.querySelectorAll('.nav-links').forEach(navLinks => {
      if (navLinks.querySelector('.language-toggle')) return;
      const item = document.createElement('li');
      item.className = 'language-item';
      item.dataset.noTranslate = '';
      item.appendChild(createLanguageButton());
      navLinks.appendChild(item);
    });

    document.querySelectorAll('.mobile-panel').forEach(panel => {
      if (panel.querySelector('.language-toggle')) return;
      panel.appendChild(createLanguageButton());
    });
  }

  function applyLanguage() {
    document.documentElement.lang = language;
    injectLanguageButtons();

    if (language !== 'en') return;

    translateDocumentMetadata();
    document.querySelectorAll('*').forEach(translateAttributes);
    translateTextNodes();
  }

  window.SiteTranslator = {
    getLanguage: () => language,
    translateText: value => (language === 'en' ? normalize(toEnglish(value)) : value)
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyLanguage, { once: true });
  } else {
    applyLanguage();
  }
})();
