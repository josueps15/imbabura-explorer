/* ═══════════════════════════════════════════════
   IBARREÑOS POR UNA SEMANA · app.js  v3
   Leaflet map + hover preview + gallery carousel
═══════════════════════════════════════════════ */

/* ═══════════════════════
   DATA — All places
   gallery: array of image URLs (Wikimedia Commons + local)
═══════════════════════ */
const PLACES = [
  /* ══ LUGARES (NUEVOS) ══ */
  {
    id: 'mojanda', category: 'lugares', title: 'Lagunas de Mojanda', location: 'Otavalo, Imbabura', time: '1h 15min desde Ibarra', coords: [0.138, -78.272], icon: 'fa-solid fa-water',
    desc: 'Complejo de tres lagunas glaciares (Karikucha, Yanakucha y Warmikucha) a 3.700m. Rodeadas por el extinto volcán Fuya Fuya, es un paraíso para el trekking y la fotografía de páramo.',
    tips: ['🥾 Ascenso al Fuya Fuya', '❄️ Ropa abrigada esencial', '📸 Paisaje glaciar', '⛺ Área de camping'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/f/fe/Caminata_lagunas_de_Mojanda_y_volc%C3%A1n_Fuya-Fuya.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/5/58/Lagunas_de_Mojanda_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/8/87/Lagunas_de_Mojanda_05.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/lagunademojanda/' }]
  },
  {
    id: 'parque-condor', category: 'lugares', title: 'Parque Cóndor', location: 'Otavalo, Imbabura', time: '45 min desde Ibarra', coords: [0.244, -78.239], icon: 'fa-solid fa-dove',
    desc: 'Un centro de rescate de aves rapaces andinas ubicado en el Pucará de Rey Loma. Demostraciones de vuelo de águilas y halcones, con una vista espectacular del lago San Pablo y el volcán Imbabura.',
    tips: ['🦅 Exhibición de vuelo 11:30', '📸 Vistas panorámicas', '🦉 Rescate de vida silvestre', '⛰️ Sitio arqueológico'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/8/88/Parque_del_Condor_Ecuador_1251.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/7/7e/Parque_del_Condor_Ecuador_1260.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/3/34/Parque_del_Condor_Ecuador_1265.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'web', label: 'Web Oficial', icon: 'fa-solid fa-globe', url: 'https://www.parquecondor.com/' }]
  },
  {
    id: 'san-pablo', category: 'lugares', title: 'Lago San Pablo', location: 'Otavalo, Imbabura', time: '40 min desde Ibarra', coords: [0.207, -78.221], icon: 'fa-solid fa-sailboat',
    desc: 'El lago más grande de Imbabura a los pies del volcán Imbabura. Cuna de comunidades Kichwa, es el escenario de la famosa Travesía Natatoria de San Pablo y ofrece deportes acuáticos y restaurantes.',
    tips: ['🚣 Deportes acuáticos', '🍽️ Gastronomía en la orilla', '🏊 Travesía en septiembre', '🏔️ Vista al volcán'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/0/02/Centro_Cultural_de_San_Pablo_del_Lago.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f4/San_Pablo_del_Lago_04.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/e/ee/Iglesia_Matriz_de_San_Pablo_del_Lago_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/lagosanpablo/' }]
  },
  {
    id: 'polylepis', category: 'lugares', title: 'Bosque de Polylepis', location: 'Reserva El Ángel, Carchi', time: '1h 20min desde Ibarra', coords: [0.751, -77.940], icon: 'fa-solid fa-tree',
    desc: 'Un bosque milenario y misterioso del árbol de papel (Polylepis). Se cree que es el único en el mundo con árboles tan antiguos a esta altitud. La neblina constante crea una atmósfera de "Señor de los Anillos".',
    tips: ['🌲 Árboles milenarios', '🌫️ Clima místico', '🥾 Senderos guiados', '🏨 Lodge cercano'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/d/d4/Ama_la_Vida_-_Flickr_-_Bosque_de_Polylepis%2C_prov_Carchi_%288227390232%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/b/b2/Queu%C3%B1as_en_Mantanay_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/2/24/Bosque_de_Qew%C3%B1a_en_Suttoc_Pacchac.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/bosquedepolylepis/' }]
  },
  {
    id: 'gruta-paz', category: 'lugares', title: 'Gruta de la Paz', location: 'Montúfar, Carchi', time: '1h 25min desde Ibarra', coords: [0.505, -77.850], icon: 'fa-solid fa-church',
    desc: 'Un santuario mariano incrustado dentro de una cueva natural sobre el cañón del río Apaquí. Impresionantes formaciones de estalactitas y estalagmitas y piscinas termales en la parte inferior.',
    tips: ['⛪ Santuario en cueva', '♨️ Piscinas termales', '🪨 Estalactitas', '🌉 Cañón profundo'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/0/00/Gruta_de_la_Paz_-_Carchi.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/8/84/Santuario_de_la_Gruta_de_la_Paz.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/8/8d/Retablo_de_la_Gruta_de_la_Paz.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'web', label: 'Info Turística', icon: 'fa-solid fa-globe', url: 'https://viajandox.com/carchi/gruta-de-la-paz-san-gabriel-A656' }]
  },
  {
    id: 'arcangel', category: 'lugares', title: 'Mirador San Miguel Arcángel', location: 'Ibarra, Imbabura', time: '10 min del centro', coords: [0.342, -78.113], icon: 'fa-solid fa-city',
    desc: 'Estatua gigante del patrono de la ciudad. El mejor mirador para ver Ibarra en toda su extensión, incluyendo Yahuarcocha. Ideal subir a media tarde y quedarse hasta que se encienden las luces de la ciudad.',
    tips: ['🌅 Atardeceres perfectos', '📸 Panorámica de Ibarra', '🚶‍♂️ Se puede subir a pie', '🌃 Vista nocturna'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/0/03/Parroquia_desde_Mirador.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f7/Andaluz_-_Flickr_-_santiagolopezpastor.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/miradorarcangel/' }]
  },
  {
    id: 'taxopamba', category: 'lugares', title: 'Cascada de Taxopamba', location: 'Otavalo, Imbabura', time: '55 min desde Ibarra', coords: [0.158, -78.275], icon: 'fa-solid fa-water',
    desc: 'Una cascada oculta en el camino a Mojanda. Un rincón poco explorado y virgen de dos saltos de agua cristalina, rodeado de un pequeño bosque nativo. El sendero es una aventura en sí mismo.',
    tips: ['🥾 Caminata de 45min', '🌿 Naturaleza virgen', '🤫 Poco turismo', '💧 Agua cristalina'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/2/27/Taxopamba_Ecuador_1039.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Imbabura_Ecuador.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/taxopamba/' }]
  },
  {
    id: 'museo-culturas', category: 'lugares', title: 'Museo de las Culturas', location: 'Cotacachi, Imbabura', time: '35 min desde Ibarra', coords: [0.298, -78.265], icon: 'fa-solid fa-building-columns',
    desc: 'Ubicado en el antiguo convento franciscano de Cotacachi, es uno de los museos etnográficos más completos del norte. Expone la historia, música, y sincretismo religioso de los pueblos andinos.',
    tips: ['🏛️ Centro histórico', '🎵 Historia musical', '🏺 Cultura Kichwa', '📅 Abierto martes a domingo'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/0/00/Museo_de_las_Culturas_Abor%C3%ADgenes_-_interior.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f0/Museo_de_las_Culturas_del_Norte.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/7/70/Escultura_de_Atenea_en_el_Museo_Nacional_de_las_Culturas_del_Mundo.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'web', label: 'Cultura', icon: 'fa-solid fa-globe', url: 'https://cotacachi.gob.ec/' }]
  },
  {
    id: 'imbabura-volcan', category: 'lugares', title: 'Volcán Imbabura', location: 'Imbabura', time: '1h hasta el refugio', coords: [0.258, -78.181], icon: 'fa-solid fa-mountain-sun',
    desc: 'El Taita (Padre) Imbabura. Para los más aventureros, el ascenso hasta la cumbre (4.609 m) toma unas 6-8 horas. Para los demás, hay miradores y senderos en las faldas con vistas increíbles del valle.',
    tips: ['🥾 Trekking de alta montaña', '🥶 Clima muy frío', '📸 Vistas 360 de la provincia', '🧑‍🦯 Guía recomendado'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/c/cf/Muelle_del_lago_San_Pablo.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/6/69/Volc%C3%A1n_Imbabura_y_lago_San_Pablo.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/volcanimbabura/' }]
  },
  {
    id: 'puruhanta', category: 'lugares', title: 'Laguna de Puruhanta', location: 'Pimampiro, Imbabura', time: '1h 20min desde Ibarra', coords: [0.264, -77.948], icon: 'fa-solid fa-leaf',
    desc: 'Un paraíso escondido de difícil acceso, solo apto para verdaderos aventureros. Una laguna prístina famosa por la pesca deportiva de trucha y su entorno salvaje rodeado de bosque nublado andino.',
    tips: ['🎣 Pesca deportiva', '🌿 Naturaleza salvaje', '🏕️ Camping extremo', '🚙 Acceso en 4x4 y caminata'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Imbabura_Ecuador.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'web', label: 'Turismo', icon: 'fa-solid fa-globe', url: 'https://viajandox.com/imbabura/laguna-de-puruhanta-pimampiro-A239' }]
  },

  /* ══ GASTRONOMÍA (NUEVOS) ══ */
  {
    id: 'carnes-cotacachi', category: 'gastronomia', title: 'Carnes Coloradas', location: 'Cotacachi, Imbabura', time: '35 min desde Ibarra', coords: [0.299, -78.266], icon: 'fa-solid fa-plate-wheat',
    desc: 'El plato estrella de Cotacachi. Carne de cerdo marinada con achiote y cerveza, frita a la perfección. Se acompaña con papas, mote, queso, aguacate y empanadas. Insuperable tras comprar artículos de cuero.',
    tips: ['🍖 Cerdo adobado', '🥑 Con mote y aguacate', '🍺 Plato contundente', '📍 Mercado central o restaurantes'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/a/ad/Fiestas_de_Calder%C3%B3n_2009_04.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/a/a4/Fiestas_de_Calder%C3%B3n_2009_08.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/c/ca/Carne_colorada_%28gastronom%C3%ADa_Ecuatoriana%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/carnescoloradas/' }]
  },
  {
    id: 'bizcochos-cayambe', category: 'gastronomia', title: 'Bizcochos de Cayambe', location: 'Cayambe (Límite con Imbabura)', time: '1h desde Ibarra', coords: [-0.043, -78.147], icon: 'fa-solid fa-cookie',
    desc: 'Una parada obligatoria en la Panamericana. Bizcochos horneados a la leña, crujientes, acompañados de queso de hoja y manjar de leche caliente. El de "San Pedro" o "El Padre" son los más tradicionales.',
    tips: ['☕ Con café o chocolate', '🧀 Queso de hoja indispensable', '🔥 Horneado a leña', '📦 Lleva para la familia'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/3/35/Bizcochos_de_Cayambe.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/4/4b/SESI%C3%93N_NO._833_DEL_PLENO_DE_LA_ASAMBLEA_NACIONAL._ECUADOR%2C_05_DE_ENERO_DE_2023.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/7/7b/Bizcochos.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/bizcochosdecayambe/' }]
  },
  {
    id: 'arrope-mora', category: 'gastronomia', title: 'Arrope de Mora y Nogadas', location: 'La Merced, Ibarra', time: 'Centro de Ibarra', coords: [0.351, -78.121], icon: 'fa-solid fa-jar',
    desc: 'Los dulces tradicionales de Ibarra. El arrope es un sirope espeso de mora silvestre, y las nogadas son dulces de azúcar de caña con nuez cocinados en pailas de bronce y empacados en cajas de madera redondas.',
    tips: ['🍬 Dulces centenarios', '🎁 Perfecto souvenir', '📍 Parque La Merced', '🍇 Mora 100% natural'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/c/cc/Imbabura_Volcano%2C_Ecuador.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/nogadas/' }]
  },
  {
    id: 'chicha-yamor', category: 'gastronomia', title: 'Chicha del Yamor', location: 'Otavalo, Imbabura', time: '40 min desde Ibarra', coords: [0.232, -78.261], icon: 'fa-solid fa-glass-water',
    desc: 'La bebida ancestral Kichwa hecha de 7 variedades de maíz, endulzada y fermentada. Tradicionalmente consumida en las fiestas del Yamor (septiembre), pero disponible todo el año en lugares tradicionales.',
    tips: ['🌽 7 variedades de maíz', '🍹 Bebida fermentada ancestral', '🎉 Bebida de fiesta', '🌽 Servida con tortillas'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/fiestasdelyamor/' }]
  },
  /* ══ HUECAS (NUEVOS) ══ */
  {
    id: 'empanadas-morocho', category: 'huecas', title: 'Empanadas de Morocho La Merced', location: 'Centro de Ibarra', time: 'Ibarra', coords: [0.345, -78.119], icon: 'fa-solid fa-utensils',
    desc: 'La verdadera hueca ibarreña. Masa crujiente de maíz morocho rellena de carne, arroz y arvejas. Servida con ají de maní. Ideal para la media tarde.',
    tips: ['🥟 Masa súper crujiente', '🌶️ Siempre con ají', '☕ Para media tarde', '📍 A lado de la iglesia'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Imbabura_Ecuador.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/empanadasdemorocho/' }]
  },
  {
    id: 'agrio-blanca', category: 'huecas', title: 'Agrio de la Blanca', location: 'Atuntaqui, Imbabura', time: '20 min desde Ibarra', coords: [0.334, -78.216], icon: 'fa-solid fa-bowl-food',
    desc: 'Una parada obligatoria en Atuntaqui. La mejor fritada acompañada de su famoso agrio secreto. Es una hueca tradicional que siempre está llena por una buena razón.',
    tips: ['🍖 Fritada jugosa', '🧅 Agrio secreto', '🤤 Muy barato', '📍 Cerca del mercado'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/agrioatuntaqui/' }]
  },
  {
    id: 'tripa-mishqui', category: 'huecas', title: 'Pinchos de la Victoria', location: 'Barrio La Victoria, Ibarra', time: 'Ibarra', coords: [0.339, -78.111], icon: 'fa-solid fa-fire-burner',
    desc: 'La comida callejera en su máxima expresión. Pinchos de carne, pollo y la tradicional tripa mishqui asada al carbón, servidos con papas enteras, mote y harto ají.',
    tips: ['🍢 Asado al carbón', '🔥 Comida nocturna', '🌶️ Ají picante', '💰 Muy económico'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/tripamishqui/' }]
  },
  {
    id: 'pan-leche', category: 'huecas', title: 'Pan de Leche', location: 'Caranqui, Ibarra', time: '10 min del centro', coords: [0.339, -78.118], icon: 'fa-solid fa-bread-slice',
    desc: 'Pequeños panecillos redondos, esponjosos y dulces elaborados 100% con leche, horneados a la perfección. Es el acompañamiento clásico que se come junto con los famosos helados de paila.',
    tips: ['🥖 Se comen con helado', '🥛 Ingredientes locales', '🍪 Muy económicos', '📍 Tradición de Caranqui'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/4/4a/Brioche.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/5/5b/Brioche_aux_p%C3%A9pites_de_chocolat.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/b/b5/Almonds_granita_and_brioche_of_Syracuse.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/pandeleche/' }]
  },
  {
    id: 'trucha-mojanda', category: 'gastronomia', title: 'Trucha Frita en Mojanda', location: 'Otavalo (Vía Mojanda)', time: '1h desde Ibarra', coords: [0.149, -78.271], icon: 'fa-solid fa-fish-fins',
    desc: 'En el ascenso a las lagunas de Mojanda existen pescaderos locales que preparan trucha fresca de las lagunas de altura, frita al ajo, servida calientita en el clima frío del páramo.',
    tips: ['🐟 Trucha de páramo', '🥶 Contrasta el frío', '🧄 Trucha al ajillo', '🏔️ Comida de montaña'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/c/cc/Imbabura_Volcano%2C_Ecuador.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'web', label: 'Gastronomía Andina', icon: 'fa-solid fa-globe', url: 'https://otavalo.travel/' }]
  },
  {
    id: 'cafe-intag', category: 'gastronomia', title: 'Café de Especialidad Intag', location: 'Cotacachi / Ibarra', time: 'Variable', coords: [0.320, -78.435], icon: 'fa-solid fa-mug-saucer',
    desc: 'El valle de Intag produce uno de los mejores cafés de especialidad orgánicos del mundo. En Ibarra y Cotacachi puedes degustar este café arábica premium en cafeterías locales con procesos de filtrado.',
    tips: ['☕ Café de altura orgánico', '🌿 Aroma floral y frutal', '🌍 Producto de exportación', '📍 Búscalo en cafeterías'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/c/cc/Imbabura_Volcano%2C_Ecuador.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/cafeintag/' }]
  },
  {
    id: 'puerto-lago', category: 'gastronomia', title: 'Hostería Puerto Lago', location: 'Lago San Pablo, Otavalo', time: '40 min desde Ibarra', coords: [0.215, -78.232], icon: 'fa-solid fa-champagne-glasses',
    desc: 'Cocina ecuatoriana e internacional de primer nivel, servida en salones acristalados literalmente sobre el agua del lago San Pablo. Una experiencia culinaria romántica y espectacular.',
    tips: ['🍷 Experiencia premium', '🌅 Mejor al atardecer', '🍲 Menú internacional/andino', '🏨 Tiene hospedaje'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/b/b4/PuertoVaras.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/d/d5/Puerto_Varas_Osorno.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/2/21/Puerto_Octay_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'web', label: 'Reservas', icon: 'fa-solid fa-globe', url: 'https://puertolago.com/' }]
  },
  {
    id: 'el-horno', category: 'gastronomia', title: 'Pizzería El Horno', location: 'Ibarra, Imbabura', time: 'Ibarra', coords: [0.347, -78.115], icon: 'fa-solid fa-pizza-slice',
    desc: 'Un clásico moderno ibarreño. Pizzas artesanales a la leña, empanadas horneadas y un ambiente bohemio en el centro de la ciudad. Ideal para salir con amigos en la noche.',
    tips: ['🍕 Pizza a la leña', '🍺 Cerveza artesanal', '🎸 Ambiente bohemio', '🌃 Vida nocturna'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Imbabura_Ecuador.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/elhornopizzeria/' }]
  },

  /* ══ EXPERIENCIAS (NUEVOS) ══ */
  {
    id: 'parapente', category: 'experiencias', title: 'Parapente Yahuarcocha', location: 'Ibarra, Imbabura', time: '15 min desde Ibarra', coords: [0.372, -78.093], icon: 'fa-solid fa-parachute-box',
    desc: 'Vuela en tándem sobre la laguna de Yahuarcocha. Un salto desde las laderas del mirador de Aloburo que te permite planear como un cóndor con vistas panorámicas increíbles de Ibarra y los volcanes andinos.',
    tips: ['🪂 Vuelo con piloto tándem', '📷 Go-Pro incluida (usualmente)', '⏰ Mejor en la mañana', '🌬️ Depende del viento'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/parapenteibarra/' }]
  },
  {
    id: 'zuleta', category: 'experiencias', title: 'Hacienda Zuleta', location: 'Angochagua, Imbabura', time: '45 min desde Ibarra', coords: [0.231, -78.077], icon: 'fa-solid fa-horse',
    desc: 'Hacienda histórica que fue hogar del ex-presidente Galo Plaza. Ofrece bordados a mano, fábrica de quesos premium, cabalgatas y un exitoso programa de conservación del Cóndor Andino.',
    tips: ['🧀 Cata de quesos maduros', '🐎 Paseo a caballo', '🦅 Cóndores de cerca', '🧵 Bordados famosos de Zuleta'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/7/75/Angochagua.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/5/59/Ama_la_Vida_-_Flickr_-_Patio_principal_de_la_Hacienda_de_Zuleta_%288227389868%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'web', label: 'Zuleta', icon: 'fa-solid fa-globe', url: 'https://zuleta.com/' }]
  },
  {
    id: 'nangulvi', category: 'experiencias', title: 'Termas de Nangulví', location: 'Valle de Intag, Imbabura', time: '1h 30min desde Ibarra', coords: [0.337, -78.503], icon: 'fa-solid fa-temperature-arrow-up',
    desc: 'Aguas termales curativas en medio de la biodiversidad de Intag. Disfruta de un clima subtropical rodeado de orquídeas, aves tropicales y el río caudaloso. Ideal para desintoxicarse y descansar.',
    tips: ['♨️ Aguas termominerales', '🌴 Clima cálido y húmedo', '🐦 Observación de aves', '🏨 Cabañas rústicas'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Imbabura_Ecuador.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/termasdenangulvi/' }]
  },
  {
    id: 'canopy-peguche', category: 'experiencias', title: 'Canopy sobre Bosque', location: 'Peguche, Otavalo', time: '35 min desde Ibarra', coords: [0.249, -78.257], icon: 'fa-solid fa-leaf',
    desc: 'Líneas de tirolesa que atraviesan los altos eucaliptos cerca de la cascada de Peguche. Una forma de turismo de aventura sostenible para sentir la adrenalina rodeado del misticismo del bosque protector.',
    tips: ['🧗‍♂️ Para todas las edades', '🌳 Altura sobre los árboles', '🦺 Seguridad profesional', '⏱️ Toma unos 45 mins'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f3/Bosque_de_Macrocystis_pyrifera_desde_el_aire.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/4/43/Legado_en_las_Alturas%2C_El_Mono_Zocay_y_su_Cr%C3%ADa_%28Plecturocebus_ornatus%29.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/canopypeguche/' }]
  },
  {
    id: 'talleres-cuero', category: 'experiencias', title: 'Ruta del Cuero', location: 'Cotacachi, Imbabura', time: '35 min desde Ibarra', coords: [0.301, -78.264], icon: 'fa-solid fa-bag-shopping',
    desc: 'Cotacachi es la capital del cuero. La calle 10 de Agosto alberga decenas de talleres donde puedes ver y comprar casacas, botas, monturas y bolsos hechos a mano con calidad de exportación y precios directos.',
    tips: ['🛍️ Compras de calidad', '👢 Precios de fábrica', '👀 Ver el proceso de trabajo', '💳 Aceptan tarjetas'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/cuerocotacachi/' }]
  },
  {
    id: 'ruta-ciclope', category: 'experiencias', title: 'Ciclismo Ruta del Cíclope', location: 'Ibarra - Angochagua', time: 'Inicia en Ibarra', coords: [0.315, -78.105], icon: 'fa-solid fa-person-biking',
    desc: 'Rutas de mountain bike famosas internacionalmente en las faldas del Imbabura. Cientos de senderos de enduro, downhill y cross country. Aquí entrenan los mejores ciclistas del país.',
    tips: ['🚵‍♂️ Rutas para expertos y novatos', '🚵‍♀️ Alquiler disponible', '🌲 Paisajes andinos', '🤕 Usa equipo de protección'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Imbabura_Ecuador.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/mtbibarra/' }]
  },
  {
    id: 'glamping', category: 'experiencias', title: 'Glamping Taita Imbabura', location: 'Faldas del Imbabura', time: '20 min desde Ibarra', coords: [0.285, -78.175], icon: 'fa-solid fa-tent',
    desc: 'Dormir en domos geodésicos transparentes o tiendas safari con todas las comodidades de un hotel 5 estrellas, estufa de leña y jacuzzi al aire libre bajo el cielo estrellado y el volcán gigante a tu espalda.',
    tips: ['⛺ Lujo en la naturaleza', '✨ Observación de estrellas', '🔥 Fogatas nocturnas', '🥂 Ideal parejas'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Imbabura_Ecuador.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/glampingecuador/' }]
  },
  {
    id: 'kayak-san-pablo', category: 'experiencias', title: 'Kayak al Amanecer', location: 'Lago San Pablo, Otavalo', time: '40 min desde Ibarra', coords: [0.208, -78.225], icon: 'fa-solid fa-sailboat',
    desc: 'Rentar un kayak o paddleboard temprano en la mañana en el Lago San Pablo cuando el agua está como un espejo reflejando el nevado Cotacachi y el Imbabura. Es la meditación activa perfecta.',
    tips: ['🛶 Mejor 7am-9am', '🏔️ Reflejos perfectos', '🏄 Paddleboard y Kayak', '💧 Agua fría'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/a/a7/XOCHIMILCO_AL_AMANECER.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Imbabura_Ecuador.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/lagosanpablo/' }]
  },
  {
    id: 'telar-cintura', category: 'experiencias', title: 'Taller de Telar de Cintura', location: 'Otavalo', time: '40 min desde Ibarra', coords: [0.235, -78.262], icon: 'fa-solid fa-hand-holding-hand',
    desc: 'Visita los talleres familiares donde mujeres y hombres Kichwas mantienen viva la técnica milenaria precolombina del telar de cintura para tejer fajas (chumbis) con simbología andina profunda.',
    tips: ['🧶 Técnica pre-hispánica', '📖 Conoce la simbología', '🤝 Apoya a los artesanos', '📸 Experiencia inmersiva'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/f/f4/Telar_de_cintura._Cintas.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/7/76/Telar_de_cintura._Herramientas.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/6/6c/Telar_de_cintura%2C_tradici%C3%B3n_milenaria.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/artesaniaotavaleña/' }]
  },
  {
    id: 'ruta-juncal', category: 'experiencias', title: 'Cultura Afroecuatoriana', location: 'Valle del Chota / El Juncal', time: '1h desde Ibarra', coords: [0.435, -78.046], icon: 'fa-solid fa-music',
    desc: 'Una inmersión en la cultura afroandina en El Juncal y Chota. Tierra de futbolistas de selección, música Bomba bailada con una botella en la cabeza, y una alegría desbordante a orillas del cálido río Chota.',
    tips: ['🎵 Danza de la Bomba', '⚽ Cuna de futbolistas', '🌡️ Clima caliente', '🍍 Frutas tropicales'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/5/56/Esmeraldian_%28Afro-Ecuadorian%29_drum.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/8/8a/Esmeraldian_%28Afro-Ecuadorian%29_instruments.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/8/87/Danzantes_afroecuatorianas.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [{ type: 'web', label: 'Cultura', icon: 'fa-solid fa-globe', url: 'https://viajandox.com/imbabura/valle-del-chota-ibarra-A242' }]
  },


  /* ══ LUGARES ══ */
  {
    id: 'cuicocha',
    category: 'lugares',
    title: 'Laguna de Cuicocha',
    location: 'Cotacachi, Imbabura',
    time: '45 min desde Ibarra',
    coords: [0.308, -78.364],
    icon: 'fa-solid fa-water',
    desc: 'Un volcán dormido convertido en laguna de altura. Sus aguas azul profundo albergan dos islas misteriosas en su interior. El sendero perimetral ofrece vistas espectaculares del Cotacachi nevado. Puedes recorrer la laguna en bote, hacer el trek o simplemente contemplar en silencio uno de los paisajes más impresionantes del Ecuador.',
    tips: ['🥾 Ideal para trekking', '⛵ Paseo en bote disponible', '📸 Mejor luz en la mañana', '🌡️ Temperatura fresca ~12°C'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/6/67/Cuicocha%2C_Ecuador.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/7/75/Laguna_de_Cuicocha_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/2/26/Laguna_de_Cuicocha_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [
      { type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/cuicocha/' },
      { type: 'web', label: 'Info oficial', icon: 'fa-solid fa-globe', url: 'https://www.ambiente.gob.ec/area-ecologica-cuicocha/' }
    ]
  },
  {
    id: 'yahuarcocha',
    category: 'lugares',
    title: 'Laguna de Yahuarcocha',
    location: 'Ibarra, Imbabura',
    time: '10 min desde Ibarra',
    coords: [0.387, -78.104],
    icon: 'fa-solid fa-sailboat',
    desc: 'La laguna sagrada de Ibarra. "Yahuarcocha" en kichwa significa "lago de sangre" por la legendaria batalla que allí se libró. Hoy es un lugar de paz: paseo en bote, malecón para ciclismo y running, circuito de karting y los mejores restaurantes de tilapia frita de toda la región.',
    tips: ['🚲 Malecón para ciclismo', '🏎️ Karting junto al lago', '🐟 Tilapia frita obligatoria', '🌅 Atardecer espectacular'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/7/7d/Laguna_de_Yahuarcocha%2C_La_Dolorosa_del_Priorato%2C_Ecuador%2C_2015-07-21%2C_DD_30.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Laguna_de_Yahuarcocha%2C_La_Dolorosa_del_Priorato%2C_Ecuador%2C_2015-07-21%2C_DD_27-29_PAN.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/d/d7/Laguna_de_Yahuarcocha%2C_La_Dolorosa_del_Priorato%2C_Ecuador%2C_2015-07-21%2C_DD_31-33_PAN.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [
      { type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/yahuarcocha/' }
    ]
  },
  {
    id: 'peguche',
    category: 'lugares',
    title: 'Cascada de Peguche',
    location: 'Peguche, Otavalo',
    time: '35 min desde Ibarra',
    coords: [0.250, -78.256],
    icon: 'fa-solid fa-droplet',
    desc: 'Una cascada sagrada para el pueblo Kichwa. El agua cae 20 metros entre eucaliptos y helechos gigantes, creando una niebla mágica y un ambiente espiritual único. Lugar de ritual y purificación durante el Inti Raymi. El sendero es fácil y hay artesanos locales en el camino.',
    tips: ['🌿 Sendero fácil 20 min', '🎵 Cultura Kichwa', '⛲ Agua medicinal sagrada', '🕊️ Paz y silencio total'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/6/63/Cascada_de_Peguche_Ecuador676.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/3/3f/Cascada_de_Peguche_Ecuador682.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/d/da/Cascada_de_Peguche_Ecuador_840.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [
      { type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/peguche/' }
    ]
  },
  {
    id: 'otavalo',
    category: 'lugares',
    title: 'Mercado de Ponchos · Otavalo',
    location: 'Otavalo, Imbabura',
    time: '40 min desde Ibarra',
    coords: [0.234, -78.265],
    icon: 'fa-solid fa-store',
    desc: 'El mercado indígena más famoso de Sudamérica. Colores, tejidos, bordados, artesanías en cuero, instrumentos musicales andinos y el ambiente cultural más auténtico de la sierra ecuatoriana. Ideal los sábados desde las 7am cuando está en todo su esplendor.',
    tips: ['📅 Mejor día: sábado', '🕖 Desde las 7am', '💰 Regateo bienvenido', '🧣 Tejidos únicos'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/7/71/Mercado_de_los_Ponchos.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/5/51/Varayoc_relief_at_the_entrance_of_the_Mercado_Artesanal_de_Pisac_in_Cusco%2C_Peru.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/d/d9/Andean_ponchos_stall_at_the_Mercado_Artesanal_de_Pisac_in_Cusco%2C_Peru.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [
      { type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/mercadootavalo/' },
      { type: 'web', label: 'Otavalo Turismo', icon: 'fa-solid fa-globe', url: 'https://otavalo.travel/' }
    ]
  },
  {
    id: 'san-antonio',
    category: 'lugares',
    title: 'San Antonio de Ibarra',
    location: 'San Antonio, Ibarra',
    time: '15 min desde Ibarra',
    coords: [0.327, -78.166],
    icon: 'fa-solid fa-paintbrush',
    desc: 'La capital del arte en madera del Ecuador. Tallistas, escultores y pintores llenan cada calle con obras increíbles: cristos, cóndores, figuras andinas y muebles únicos en cedro y nogal. Hay talleres donde puedes ver trabajar a los maestros artesanos con sus propias manos.',
    tips: ['🪵 Madera de cedro y nogal', '🎨 Talleres abiertos', '🛍️ Souvenirs únicos', '📸 Muy fotogénico'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/f/f0/Curia_diocesana%2C_San_Antonio_de_Ibarra%2C_Ecuador%2C_2015-07-21%2C_DD_19.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/8/8f/Plaza_de_armas%2C_San_Antonio_de_Ibarra%2C_Ecuador%2C_2015-07-21%2C_DD_16.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f3/Plaza_de_armas%2C_San_Antonio_de_Ibarra%2C_Ecuador%2C_2015-07-21%2C_DD_15.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [
      { type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/sanantoniodeibarra/' }
    ]
  },
  {
    id: 'voladero',
    category: 'lugares',
    title: 'Lagunas del Voladero',
    location: 'Reserva El Ángel, Carchi',
    time: '1h 15min desde Ibarra',
    coords: [0.686, -77.905],
    icon: 'fa-solid fa-mountain',
    desc: 'Un mundo de otro planeta en el páramo ecuatoriano a 3.900 m.s.n.m. Tres lagunas de altura rodeadas de frailejones — plantas gigantes endémicas de hasta 5 metros — y niebla perpetua. Fauna de páramo, caminatas entre nubes y silencio total. Una de las experiencias más únicas de la sierra norte.',
    tips: ['🥾 Caminata 2-3 horas', '❄️ Temperatura 4–10°C', '🌿 Frailejones únicos', '🦜 Fauna endémica'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [
      { type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/lagunavoladero/' },
      { type: 'web', label: 'Reserva El Ángel', icon: 'fa-solid fa-globe', url: 'https://www.ambiente.gob.ec/reserva-ecologica-el-angel/' }
    ]
  },
  {
    id: 'calera',
    category: 'lugares',
    title: 'La Calera · El Ángel',
    location: 'El Ángel, Carchi',
    time: '1h 10min desde Ibarra',
    coords: [0.599, -77.944],
    icon: 'fa-solid fa-hot-tub-person',
    desc: 'Aguas termales naturales ocultas en el corazón del bosque nublado de El Ángel. La cascada cae directamente en piscinas naturales cálidas rodeadas de vegetación selvática exuberante. Un secreto que pocos turistas conocen — y que vale absolutamente la pena descubrir.',
    tips: ['♨️ Aguas termales naturales', '🌿 Bosque nublado', '🧖 Propiedades medicinales', '📍 Poco concurrido'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/3/3b/Uni%C3%B3n_La_Calera_-_Universidad_de_Chile%2C_2018-04-22_-_Yonathan_And%C3%ADa_y_Alejandro_Contreras.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/c/cf/Everton_-_Uni%C3%B3n_La_Calera%2C_20190223_-_03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/a/a1/Everton_-_Uni%C3%B3n_La_Calera%2C_20190223_-_05.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [
      { type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/lacaleraelangel/' }
    ]
  },
  {
    id: 'condor',
    category: 'lugares',
    title: 'Mirador El Cóndor · Mira',
    location: 'Mira, Carchi',
    time: '1h desde Ibarra',
    coords: [0.559, -77.959],
    icon: 'fa-solid fa-binoculars',
    desc: 'Un balcón natural con una de las vistas más impresionantes del norte del Ecuador. El Valle del Chota, el Cayambe nevado, las cordilleras andinas y quizás un cóndor de los Andes planeando sobre tu cabeza. El mejor punto panorámico de la región, especialmente al atardecer.',
    tips: ['🦅 Avistamiento de cóndores', '🌅 Atardecer épico', '📸 Vista 360°', '🏔️ Cayambe nevado visible'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/6/69/Mirador_Cruz_del_C%C3%B3ndor_en_Colca_-_Arequipa.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/7/7d/Sendero_Mirador_el_C%C3%B3ndor_Reserva_Nacional_Futaleuf%C3%BA_23.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/0/09/Rainbow_at_Mirador_Condores%2C_El_Chalten_%287098771583%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [
      { type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/miraecuador/' }
    ]
  },

  /* ══ GASTRONOMÍA ══ */
  {
    id: 'helados-caranqui',
    category: 'gastronomia',
    title: 'Helados de Paila · Caranqui',
    location: 'Caranqui, Ibarra',
    time: '5 min del centro',
    coords: [0.341, -78.116],
    icon: 'fa-solid fa-ice-cream',
    desc: 'El helado artesanal más famoso del Ecuador, hecho a mano en pailas de bronce sobre hielo y sal. Más de 100 años de tradición sin cambiar el método. Sabores únicos: mora, naranjilla, taxo, guanábana, coco y maracuyá. El barrio Caranqui los fines de semana es una fiesta gastronómica.',
    tips: ['🍨 Mora, taxo, guanábana', '⏱️ 100+ años de tradición', '💰 Muy económico', '📅 Ideal tarde/noche'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/0/0f/HELADOS_DE_PAILA_%2840475435140%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/a/a0/HELADOS_DE_PAILA_%2828409100728%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/0/0b/HELADOS_DE_PAILA_%2828409170358%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [
      { type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/heladosrosaliasuarez/' }
    ]
  },
  {
    id: 'hornado',
    category: 'gastronomia',
    title: 'Hornado Paztuzo',
    location: 'Mercado Amazonas, Ibarra',
    time: '5 min del centro',
    coords: [0.350, -78.123],
    icon: 'fa-solid fa-drumstick-bite',
    desc: 'El hornado más legendario de Ibarra. Chancho entero asado en horno de leña durante 8 horas, servido con mote, llapingachos, agrio de cebolla y papas. Un plato monumental y una experiencia gastronómica que define la identidad culinaria de la sierra ecuatoriana.',
    tips: ['🔥 Horno de leña 8 horas', '🕗 Solo fines de semana', '🐷 Chancho entero', '🌽 Con mote y llapingachos'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Imbabura_Ecuador.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [
      { type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/hornadoibarra/' }
    ]
  },
  {
    id: 'cuy-chaltura',
    category: 'gastronomia',
    title: 'Cuy Asado · Chaltura',
    location: 'Chaltura, Antonio Ante',
    time: '20 min desde Ibarra',
    coords: [0.323, -78.213],
    icon: 'fa-solid fa-utensils',
    desc: 'Chaltura es EL pueblo del cuy en Ecuador. Decenas de restaurantes compiten por el mejor cuy asado al carbón: dorado y crujiente por fuera, jugoso por dentro. Se sirve con papas enteras, mote, uchujacu y ají de maní. Una experiencia gastronómica única de la sierra ecuatoriana.',
    tips: ['🍢 Al carbón o al horno', '🥔 Con papas enteras', '🌶️ Ají de maní', '📍 Todo el pueblo es restaurante'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/9/95/Cuy_asado.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/5/55/Cuy_asado_cuenca.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/b/b0/Cuy_asado_con_papas.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [
      { type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/cuychaltura/' }
    ]
  },
  {
    id: 'tilapia',
    category: 'gastronomia',
    title: 'Tilapia Frita · Yahuarcocha',
    location: 'Malecón Yahuarcocha, Ibarra',
    time: '10 min desde Ibarra',
    coords: [0.391, -78.108],
    icon: 'fa-solid fa-fish',
    desc: 'La tilapia frita entera con yuca, ensalada y ají junto a la laguna de Yahuarcocha es uno de los platos más icónicos de Ibarra. Los restaurantes al borde del agua ofrecen vistas de película mientras comes. El maridaje con una chicha morada fría es absolutamente perfecto.',
    tips: ['🐟 Tilapia de la laguna', '🌊 Con vista al lago', '🍚 Con yuca y ensalada', '🥤 Chicha morada fría'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/5/5c/Tilapia_frita.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/b/b7/Preparaci%C3%B3n_de_Tilapia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/b/b9/Tilapia_Frita.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [
      { type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/tilapiaibarra/' }
    ]
  },
  {
    id: 'atuntaqui',
    category: 'gastronomia',
    title: 'Fritada & Moda · Atuntaqui',
    location: 'Atuntaqui, Antonio Ante',
    time: '20 min desde Ibarra',
    coords: [0.334, -78.218],
    icon: 'fa-solid fa-bowl-food',
    desc: 'Atuntaqui es famosa por dos grandes cosas: la fritada (chancho frito con mote, tostado y maduro) y la industria textil de alta calidad a precios increíbles. Un domingo aquí combina las mejores compras de ropa ecuatoriana con el almuerzo más sabroso de toda la ruta.',
    tips: ['👕 Ropa de calidad y precio', '🍖 Fritada legendaria', '🛍️ Feria textil', '📅 Mejor los domingos'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [
      { type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/atuntaqui/' }
    ]
  },

  /* ══ EXPERIENCIAS ══ */
  {
    id: 'chachimbiro',
    category: 'experiencias',
    title: 'Termas de Chachimbiro',
    location: 'Urcuquí, Imbabura',
    time: '1h 10min desde Ibarra',
    coords: [0.416, -78.195],
    icon: 'fa-solid fa-hot-tub-person',
    desc: 'Aguas termales medicinales en la mitad del bosque tropical sub-andino. Piscinas a diferentes temperaturas con propiedades terapéuticas únicas, rodeadas de vegetación exuberante y montañas. Hay instalaciones completas, restaurante y opción de alojamiento. El plan de relajación definitivo.',
    tips: ['♨️ Múltiples piscinas', '🌴 Bosque subtropical', '🏨 Hay hospedaje', '💆 Propiedades medicinales'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Imbabura_Ecuador.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [
      { type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/termaschachimbiro_oficial/' },
      { type: 'web', label: 'Web Oficial', icon: 'fa-solid fa-globe', url: 'https://chachimbiro.com/' }
    ]
  },
  {
    id: 'guanabana',
    category: 'experiencias',
    title: 'Guanábana Republic',
    location: 'Valle del Chota, Imbabura',
    time: '45 min desde Ibarra',
    coords: [0.517, -78.068],
    icon: 'fa-solid fa-person-swimming',
    desc: 'El destino de aventura más salvaje de la región. Ríos de agua turquesa, kayak, tubing, natación en pozas naturales y la mejor chirimoya del Ecuador. Un espacio inmersivo en la naturaleza tropical del norte, rodeado de afrocultura, música bomba y fruta tropical a precio de costo.',
    tips: ['🚣 Kayak y tubing', '🏊 Pozas naturales', '🎵 Música bomba afro', '🍍 Fruta tropical fresca'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [
      { type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/valledechota/' }
    ]
  },
  {
    id: 'cumbres',
    category: 'experiencias',
    title: 'Cumbres y Vertientes',
    location: 'Imbabura',
    time: 'Variable desde Ibarra',
    coords: [0.362, -78.145],
    icon: 'fa-solid fa-campground',
    desc: 'Turismo comunitario y ecoturismo de alta calidad en los páramos de Imbabura. Caminatas guiadas por senderos de montaña, observación de flora endémica de páramo, contacto directo con comunidades indígenas y paisajes que literalmente cortan la respiración. La manera más auténtica de conocer Imbabura.',
    tips: ['🌿 Flora endémica', '👥 Comunidades Kichwa', '🥾 Guías locales', '🌄 Amaneceres únicos'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [
      { type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/explore/tags/imbabura/' }
    ]
  },
  {
    id: 'cooffet',
    category: 'experiencias',
    title: 'Cooffet Habitat',
    location: 'Ibarra, Imbabura',
    time: 'En el corazón de Ibarra',
    coords: [0.353, -78.128],
    icon: 'fa-solid fa-mug-hot',
    desc: 'El café de especialidad más especial de Ibarra. Un espacio donde el specialty coffee ecuatoriano de origen se prepara con métodos artesanales de filtrado, en un ambiente envuelto en plantas, arte y conversaciones que valen. El lugar perfecto para arrancar la mañana o cerrar una tarde increíble.',
    tips: ['☕ Café de origen Ecuador', '🌱 Método filtrado', '🌿 Ambiente botánico', '💻 Coworking amigable'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Imbabura_Ecuador.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [
      { type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/cooffethabitat/' }
    ]
  },
  {
    id: 'tren',
    category: 'experiencias',
    title: 'Tren de la Libertad · Ibarra',
    location: 'Estación del Tren, Ibarra',
    time: 'En Ibarra',
    coords: [0.352, -78.119],
    icon: 'fa-solid fa-train',
    desc: 'La histórica estación del ferrocarril de Ibarra, restaurada como espacio cultural. El Tren de la Libertad recorre los increíbles paisajes desde los Andes hasta el subtropical Valle del Chota y el Salto del Tigre. Un viaje cinematográfico que muestra la biodiversidad de la región en pocas horas.',
    tips: ['🎟️ Reserva con anticipación', '🚂 Recorrido 3-4 horas', '📸 Paisajes de película', '🌡️ Cambio de clima en el trayecto'],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/5/52/Tren_de_la_libertad_-_Amelia_Valcarcel_-_Alicia_Miyares.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/3/35/El_Tren_de_la_Libertad_-_Lectura_del_manifiesto.ogv?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/8/84/El_Tren_de_la_Libertad_-_Delegaci%C3%B3n_Internacional.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'
    ],
    links: [
      { type: 'ig', label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/trenecuador/' },
      { type: 'web', label: 'Reservar pasajes', icon: 'fa-solid fa-globe', url: 'https://www.trenecuador.com/' }
    ]
  }
];

/* ════════════════════════
   MAP SETUP
════════════════════════ */
let map;
let markers = [];
let activeCategory = 'todos';
let galleryIndex = 0;
let currentGallery = [];
let tooltip = document.getElementById('hoverTooltip');
let tooltipTimeout;

function initMap() {
  map = L.map('map', {
    center: [0.36, -78.15],
    zoom: 11,
    zoomControl: true,
    attributionControl: true
  });

  // Use Esri Dark Gray Base for reliable dark map tiles in local file contexts
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
    maxZoom: 16
  }).addTo(map);

  // Ibarra center marker
  const ibarrIcon = L.divIcon({
    className: '',
    html: `<div class="ibarra-marker-container">
             <div class="ibarra-pulse-ring"></div>
             <div class="ibarra-core"><i class="fa-solid fa-star"></i></div>
             <div class="ibarra-label">IBARRA</div>
           </div>`,
    iconSize: [60, 70],
    iconAnchor: [30, 55]
  });
  L.marker([0.3517, -78.1222], { icon: ibarrIcon, zIndexOffset: 500, interactive: false }).addTo(map);

  // Add all place markers
  PLACES.forEach(place => {
    addMarker(place);
  });

  updateCount();
}

function addMarker(place) {
  const icon = L.divIcon({
    className: '',
    html: `<div class="custom-marker" data-id="${place.id}">
             <div class="marker-pulse ${place.category}"></div>
             <div class="marker-icon ${place.category}">
               <i class="${place.icon}"></i>
             </div>
             <div class="marker-label">${place.title.split('·')[0].trim()}</div>
           </div>`,
    iconSize: [44, 65],
    iconAnchor: [22, 58]
  });

  const marker = L.marker(place.coords, { icon, zIndexOffset: 100 }).addTo(map);

  // Hover: show tooltip
  marker.on('mouseover', function(e) {
    showTooltip(place, e.originalEvent);
    // Highlight the marker visually
    const el = marker.getElement();
    if (el) {
      const iconWrap = el.querySelector('.marker-icon');
      if (iconWrap) iconWrap.style.transform = 'scale(1.3) translateY(-5px)';
    }
  });

  marker.on('mousemove', function(e) {
    positionTooltip(e.originalEvent);
  });

  marker.on('mouseout', function() {
    hideTooltip();
    const el = marker.getElement();
    if (el) {
      const iconWrap = el.querySelector('.marker-icon');
      if (iconWrap) iconWrap.style.transform = '';
    }
  });

  // Click: open popup
  marker.on('click', function() {
    hideTooltip();
    openPopup(place);
  });

  markers.push({ marker, place });
}

/* ════════════════════════
   HOVER TOOLTIP
════════════════════════ */
function showTooltip(place, e) {
  clearTimeout(tooltipTimeout);

  const validGallery = place.gallery.filter(src => !src.startsWith('assets/'));
  const firstImg = validGallery.length > 0 ? validGallery[0] : place.gallery[0];

  document.getElementById('htImg').src = firstImg;
  document.getElementById('htImg').alt = place.title;
  document.getElementById('htTitle').textContent = place.title;
  document.getElementById('htLocation').querySelector('span').textContent = place.location;
  document.getElementById('htTime').querySelector('span').textContent = place.time;

  const badge = document.getElementById('htBadge');
  badge.className = `ht-badge ${place.category}`;
  badge.textContent = { lugares: 'Lugar', gastronomia: 'Gastronomía', experiencias: 'Experiencia' }[place.category];

  positionTooltip(e);
  tooltip.classList.add('visible');
}

function positionTooltip(e) {
  const tw = 280, th = 250;
  const vw = window.innerWidth, vh = window.innerHeight;
  let x = e.clientX + 18;
  let y = e.clientY - 20;
  if (x + tw > vw - 10) x = e.clientX - tw - 18;
  if (y + th > vh - 10) y = vh - th - 10;
  if (y < 10) y = 10;
  tooltip.style.left = x + 'px';
  tooltip.style.top  = y + 'px';
}

function hideTooltip() {
  tooltipTimeout = setTimeout(() => tooltip.classList.remove('visible'), 120);
}

/* ════════════════════════
   FILTERS
════════════════════════ */
function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.category;
      filterMarkers(activeCategory);
      updateCount();
    });
  });
}

function filterMarkers(cat) {
  markers.forEach(({ marker, place }, i) => {
    const show = cat === 'todos' || place.category === cat;
    const el = marker.getElement();
    if (!el) return;

    const inner = el.querySelector('.custom-marker');
    if (!inner) return;

    if (show) {
      setTimeout(() => {
        inner.style.transition = 'opacity .35s ease, transform .4s cubic-bezier(0.34,1.56,0.64,1)';
        inner.style.opacity = '1';
        inner.style.transform = 'scale(1)';
        el.style.pointerEvents = 'auto';
        el.style.zIndex = 100;
      }, i * 40);
    } else {
      inner.style.transition = 'opacity .25s ease, transform .3s ease';
      inner.style.opacity = '0';
      inner.style.transform = 'scale(0.3)';
      el.style.pointerEvents = 'none';
      el.style.zIndex = -1;
    }
  });
}

function updateCount() {
  const visible = activeCategory === 'todos'
    ? PLACES.length
    : PLACES.filter(p => p.category === activeCategory).length;
  document.getElementById('filterCount').textContent = `${visible} lugar${visible !== 1 ? 'es' : ''}`;
}

/* ════════════════════════
   POPUP + GALLERY
════════════════════════ */
function openPopup(place) {
  // Filtrar imágenes locales que faltan, manteniendo solo las de la web
  currentGallery = place.gallery.filter(src => !src.startsWith('assets/'));
  if (currentGallery.length === 0) currentGallery = place.gallery; // fallback por si acaso
  galleryIndex = 0;

  // Build gallery track
  const track = document.getElementById('galleryTrack');
  track.innerHTML = currentGallery.map((src, i) =>
    `<div class="gallery-slide ${i === 0 ? 'active' : ''}">
       <img src="${src}" alt="${place.title} foto ${i+1}" loading="${i === 0 ? 'eager' : 'lazy'}" onerror="this.parentElement.style.display='none'"/>
     </div>`
  ).join('');
  track.style.transform = 'translateX(0)';

  // Dots
  const dots = document.getElementById('galleryDots');
  dots.innerHTML = currentGallery.map((_, i) =>
    `<button class="gdot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Foto ${i+1}"></button>`
  ).join('');
  dots.querySelectorAll('.gdot').forEach(dot => {
    dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.index)));
  });

  // Badge
  const badge = document.getElementById('galleryBadge');
  badge.className = `gallery-badge ${place.category}`;
  badge.textContent = { lugares: 'Lugar', gastronomia: 'Gastronomía', experiencias: 'Experiencia' }[place.category];

  // Text content
  document.getElementById('popupTitle').textContent = place.title;
  document.getElementById('popupLocation').querySelector('span').textContent = place.location;
  document.getElementById('popupTime').querySelector('span').textContent = place.time;
  document.getElementById('popupDesc').textContent = place.desc;

  // Tips
  const tips = document.getElementById('popupTips');
  tips.innerHTML = place.tips.map(t =>
    `<span class="tip-tag"><i class="fa-solid fa-circle-check"></i> ${t}</span>`
  ).join('');

  // Links
  const links = document.getElementById('popupLinks');
  let linksHtml = place.links.map(l =>
    `<a href="${l.url}" target="_blank" rel="noopener" class="${l.type}">
       <i class="${l.icon}"></i> ${l.label}
     </a>`
  ).join('');
  
  // Añadir Google Maps siempre
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${place.coords[0]},${place.coords[1]}`;
  linksHtml += `<a href="${mapsUrl}" target="_blank" rel="noopener" class="maps">
       <i class="fa-solid fa-map-location-dot"></i> Ver en Google Maps
     </a>`;
     
  links.innerHTML = linksHtml;

  document.getElementById('popupBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function goToSlide(idx) {
  galleryIndex = idx;
  const track = document.getElementById('galleryTrack');
  track.style.transform = `translateX(-${idx * 100}%)`;
  document.querySelectorAll('.gdot').forEach((d, i) => d.classList.toggle('active', i === idx));
  document.querySelectorAll('.gallery-slide').forEach((s, i) => s.classList.toggle('active', i === idx));
}

function closePopup() {
  document.getElementById('popupBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

/* ════════════════════════
   INIT
════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  initFilters();

  // Popup close handlers
  document.getElementById('popupClose').addEventListener('click', closePopup);
  document.getElementById('popupBackdrop').addEventListener('click', e => {
    if (e.target === e.currentTarget) closePopup();
  });
  document.getElementById('galleryPrev').addEventListener('click', () => {
    const n = (galleryIndex - 1 + currentGallery.length) % currentGallery.length;
    goToSlide(n);
  });
  document.getElementById('galleryNext').addEventListener('click', () => {
    const n = (galleryIndex + 1) % currentGallery.length;
    goToSlide(n);
  });
  document.addEventListener('keydown', e => {
    if (!document.getElementById('popupBackdrop').classList.contains('open')) return;
    if (e.key === 'Escape') closePopup();
    if (e.key === 'ArrowLeft')  goToSlide((galleryIndex - 1 + currentGallery.length) % currentGallery.length);
    if (e.key === 'ArrowRight') goToSlide((galleryIndex + 1) % currentGallery.length);
  });

  // Smooth scroll hero CTA
  document.getElementById('heroCtaBtn')?.addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('explorer').scrollIntoView({ behavior: 'smooth' });
  });
});
