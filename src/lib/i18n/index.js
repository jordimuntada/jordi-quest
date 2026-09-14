export const languages = ['en', 'ca', 'es'];
export const defaultLang = 'en';

export const t = {
  en: {
    htmlLang: 'en',
    title: 'jordi.quest — purpose, dreams, AI',
    nav: { purpose: 'Purpose', dreams: 'Dreams', ai: 'AI', projects: 'Projects' },
    hero: {
      eyebrow: 'A quiet place on the internet',
      h1a: 'Purpose. Dreams',
      h1b: 'that must come true.',
      h1c: 'AI as the way.',
      lede: 'This is a draft — lots of white space, slow rhythm, room to breathe. Real words will replace the placeholders below.'
    },
    purpose: {
      kicker: '01 — Purpose',
      h2: 'Why this exists.',
      p1: '[DRAFT] One short paragraph about what drives you. Keep it to 2–3 sentences. Example tone: calm, certain, unhurried.',
      p2: '[Placeholder for your story — we will replace this with your words.]'
    },
    dreams: {
      kicker: '02 — Dreams that must come true',
      h2: 'Not wishes. Commitments.',
      cards: [
        { pill: 'Dream 01', line: '[Dream one — one line.]', ctx: 'One sentence of context.' },
        { pill: 'Dream 02', line: '[Dream two — one line.]', ctx: 'One sentence of context.' },
        { pill: 'Dream 03', line: '[Dream three — one line.]', ctx: 'One sentence of context.' }
      ]
    },
    ai: {
      kicker: '03 — AI as a means',
      h2: "AI is not the dream. It's how we get there.",
      p1: '[DRAFT] A short manifesto: AI as leverage, craft, and companion — in service of purpose and dreams, never as noise.',
      quote: 'Build calmly. Ship useful things. Stay human.'
    },
    projects: {
      kicker: '04 — Projects',
      h2: 'Things being built.',
      hours: {
        pill: 'Marketplace', name: 'Hours.es',
        line: 'Spaces to rent, by the hour.',
        ctx: 'A marketplace of spaces — rooms, studios, and venues — available by the hour. Book the space you need, for exactly the time you need it.',
        visit: 'Visit Hours.es →'
      },
      fusta: {
        pill: 'App', name: 'Fusta.App',
        line: 'Furniture and design, simplified.',
        ctx: 'A focused application for furniture selection and interior design workflows. Built for designers who prefer tools that get out of the way.',
        visit: 'Visit Fusta.App →'
      }
    },
    onPurpose: {
      kicker: '05 — On purpose',
      h2: 'Purpose is a direction, not a destination.',
      cards: [
        { title: 'Direction', body: 'Purpose tells you where to walk — even when the map is unfinished.' },
        { title: 'Filter', body: 'Every yes needs a reason. Purpose makes the no easier.' },
        { title: 'Fuel', body: 'On the slow days, purpose is what keeps the fire lit.' }
      ]
    },
    cta: { kicker: 'Begin', h2: 'Say hello.', muted: 'One link. No noise.', btn: 'hello@jordi.quest' },
    footer: 'jordi.quest — draft v0.1 · SvelteKit + Railway ready'
  },

  ca: {
    htmlLang: 'ca',
    title: 'jordi.quest — propòsit, somnis, IA',
    nav: { purpose: 'Propòsit', dreams: 'Somnis', ai: 'IA', projects: 'Projectes' },
    hero: {
      eyebrow: 'Un lloc tranquil a internet',
      h1a: 'Propòsit. Somnis',
      h1b: 'que s\u2019han de complir.',
      h1c: 'La IA com a camí.',
      lede: 'Això és un esborrany — molt espai en blanc, ritme lent, lloc per respirar. Les teves paraules substituiran els marcadors de posició.'
    },
    purpose: {
      kicker: '01 — Propòsit',
      h2: 'Per què existeix això.',
      p1: '[ESBORRANY] Un paràgraf curt sobre allò que t\u2019impulsa. Màxim 2–3 frases. To d\u2019exemple: calm, cert, sense presses.',
      p2: '[Marcador per a la teva història — substituirem això per les teves paraules.]'
    },
    dreams: {
      kicker: '02 — Somnis que s\u2019han de complir',
      h2: 'No desitjos. Compromisos.',
      cards: [
        { pill: 'Somni 01', line: '[Somni u — una línia.]', ctx: 'Una frase de context.' },
        { pill: 'Somni 02', line: '[Somni dos — una línia.]', ctx: 'Una frase de context.' },
        { pill: 'Somni 03', line: '[Somni tres — una línia.]', ctx: 'Una frase de context.' }
      ]
    },
    ai: {
      kicker: '03 — La IA com a mitjà',
      h2: 'La IA no és el somni. És com arribem.',
      p1: '[ESBORRANY] Un manifest breu: la IA com a palanca, ofici i acompanyant — al servei del propòsit i dels somnis, mai com a soroll.',
      quote: 'Construeix amb calma. Publica coses útils. Mantén-te humà.'
    },
    projects: {
      kicker: '04 — Projectes',
      h2: 'Coses que es construeixen.',
      hours: {
        pill: 'Marketplace', name: 'Hours.es',
        line: 'Espais per llogar, per hores.',
        ctx: 'Un mercat d\u2019espais — sales, estudis i locals — disponibles per hores. Reserva l\u2019espai que necessites, exactament pel temps que el necessites.',
        visit: 'Visita Hours.es →'
      },
      fusta: {
        pill: 'App', name: 'Fusta.App',
        line: 'Mobiliari i disseny, simplificats.',
        ctx: 'Una aplicació centrada en la selecció de mobles i els fluxes de disseny d\u2019interiors. Feta per a dissenyadors que prefereixen eines que no estorbin.',
        visit: 'Visita Fusta.App →'
      }
    },
    onPurpose: {
      kicker: '05 — Sobre el propòsit',
      h2: 'El propòsit és una direcció, no un destí.',
      cards: [
        { title: 'Direcció', body: 'El propòsit et diu per on caminar — fins i tot quan el mapa és inacabat.' },
        { title: 'Filtre', body: 'Cada sí necessita una raó. El propòsit fa més fàcil el no.' },
        { title: 'Combustible', body: 'Els dies lents, el propòsit és el que mantén el foc encès.' }
      ]
    },
    cta: { kicker: 'Comença', h2: 'Digues hola.', muted: 'Un enllaç. Sense soroll.', btn: 'hello@jordi.quest' },
    footer: 'jordi.quest — esborrany v0.1 · SvelteKit + Railway a punt'
  },

  es: {
    htmlLang: 'es',
    title: 'jordi.quest — propósito, sueños, IA',
    nav: { purpose: 'Propósito', dreams: 'Sueños', ai: 'IA', projects: 'Proyectos' },
    hero: {
      eyebrow: 'Un lugar tranquilo en internet',
      h1a: 'Propósito. Sueños',
      h1b: 'que deben cumplirse.',
      h1c: 'La IA como camino.',
      lede: 'Esto es un borrador — mucho espacio en blanco, ritmo lento, lugar para respirar. Tus palabras reemplazarán los marcadores de posición.'
    },
    purpose: {
      kicker: '01 — Propósito',
      h2: 'Por qué existe esto.',
      p1: '[BORRADOR] Un párrafo corto sobre lo que te impulsa. Máximo 2–3 frases. Tono de ejemplo: tranquilo, seguro, sin prisa.',
      p2: '[Marcador para tu historia — reemplazaremos esto con tus palabras.]'
    },
    dreams: {
      kicker: '02 — Sueños que deben cumplirse',
      h2: 'No deseos. Compromisos.',
      cards: [
        { pill: 'Sueño 01', line: '[Sueño uno — una línea.]', ctx: 'Una frase de contexto.' },
        { pill: 'Sueño 02', line: '[Sueño dos — una línea.]', ctx: 'Una frase de contexto.' },
        { pill: 'Sueño 03', line: '[Sueño tres — una línea.]', ctx: 'Una frase de contexto.' }
      ]
    },
    ai: {
      kicker: '03 — La IA como medio',
      h2: 'La IA no es el sueño. Es cómo llegamos.',
      p1: '[BORRADOR] Un manifiesto breve: la IA como palanca, oficio y compañía — al servicio del propósito y de los sueños, nunca como ruido.',
      quote: 'Construye con calma. Publica cosas útiles. Permanece humano.'
    },
    projects: {
      kicker: '04 — Proyectos',
      h2: 'Cosas que se construyen.',
      hours: {
        pill: 'Marketplace', name: 'Hours.es',
        line: 'Espacios para alquilar, por horas.',
        ctx: 'Un mercado de espacios — salas, estudios y locales — disponibles por horas. Reserva el espacio que necesitas, exactamente por el tiempo que lo necesitas.',
        visit: 'Visita Hours.es →'
      },
      fusta: {
        pill: 'App', name: 'Fusta.App',
        line: 'Mobiliario y diseño, simplificados.',
        ctx: 'Una aplicación centrada en la selección de muebles y los flujos de diseño de interiores. Hecha para diseñadores que prefieren herramientas que no estorben.',
        visit: 'Visita Fusta.App →'
      }
    },
    onPurpose: {
      kicker: '05 — Sobre el propósito',
      h2: 'El propósito es una dirección, no un destino.',
      cards: [
        { title: 'Dirección', body: 'El propósito te dice por dónde caminar — incluso cuando el mapa está inacabado.' },
        { title: 'Filtro', body: 'Cada sí necesita una razón. El propósito hace más fácil el no.' },
        { title: 'Combustible', body: 'En los días lentos, el propósito es lo que mantiene el fuego encendido.' }
      ]
    },
    cta: { kicker: 'Empieza', h2: 'Di hola.', muted: 'Un enlace. Sin ruido.', btn: 'hello@jordi.quest' },
    footer: 'jordi.quest — borrador v0.1 · SvelteKit + Railway listo'
  }
};
