export const languages = ['en', 'ca', 'es'];
export const defaultLang = 'en';

export const t = {
  en: {
    htmlLang: 'en',
    title: 'Jordi — purpose, dreams, AI',
    nav: { purpose: 'Purpose', dreams: 'Dreams', ai: 'AI', projects: 'Projects' },
    hero: {
      eyebrow: 'A quiet place on the internet',
      h1a: 'Purpose. Dreams',
      h1b: 'that must come true.',
      h1c: 'AI as the way.',
      lede: 'A space to think out loud.'
    },
    purpose: {
      kicker: '01 — Purpose',
      h2: 'Why this exists.',
      p1: 'Jordi is the closest approach I have thought of on how to expose what I do to others.',
      p2: 'A place to be transparent about what matters, what is being built, and why.'
    },
    dreams: {
      kicker: '02 — Dreams that must come true',
      h2: 'Not wishes. Commitments.',
      cards: [
        { pill: 'Big dream', line: '[Private — the one that makes you tremble.]', ctx: 'Some dreams are kept close. This one is between me and the future.' },
        { pill: 'Small dream 01', line: '[Dream one — one line.]', ctx: 'One sentence of context.' },
        { pill: 'Small dream 02', line: '[Dream two — one line.]', ctx: 'One sentence of context.' }
      ]
    },
    ai: {
      kicker: '03 — AI as a means',
      h2: "AI is not the dream. It is how we get there.",
      p1: "I am only talking about AI as a tool, not as a Skynet-like human enemy. AI as it is today is a super tool — a cheap, tireless human resource pool that can work for you without tiring or complaining. This is not a dream for entrepreneurs, those who are obsessed with creating value for society. It is an additional mega useful tool to boost faster and cheaper the projects they are looking to build, launch, and make successful.",
      quote: 'Use AI for your own success.'
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
        line: 'Wood for carpenters and makers.',
        ctx: 'The app for carpenters and individuals who need to buy raw wood or wood transformed into furniture.',
        visit: 'Visit Fusta.App →'
      }
    },
    onPurpose: {
      kicker: '05 — On purpose',
      h2: 'Purposes are not dreams.',
      paragraphs: [
        'They are closer to missions. There is an objective that must be achieved.',
        'Perhaps you do not arrive to conquer it, but caprice must not get in the way.',
        'It is duty who governs.'
      ]
    },
    cta: { kicker: 'Begin', h2: 'Say hello.', muted: 'One link. No noise.', btn: 'jordi@jordi.quest' },
    footer: 'Jordi — draft v0.1 · SvelteKit + Vercel'
  },

  ca: {
    htmlLang: 'ca',
    title: 'Jordi — propòsit, somnis, IA',
    nav: { purpose: 'Propòsit', dreams: 'Somnis', ai: 'IA', projects: 'Projectes' },
    hero: {
      eyebrow: 'Un lloc tranquil a internet',
      h1a: 'Propòsit. Somnis',
      h1b: 'que s\u2019han de complir.',
      h1c: 'La IA com a camí.',
      lede: 'Un espai per pensar en veu alta.'
    },
    purpose: {
      kicker: '01 — Propòsit',
      h2: 'Per què existeix això.',
      p1: 'Jordi és l\u2019aproximació més propera que he pensat per exposar el que faig als altres.',
      p2: 'Un lloc per ser transparent amb allò que importa, allò que es construeix, i per què.'
    },
    dreams: {
      kicker: '02 — Somnis que s\u2019han de complir',
      h2: 'No desitjos. Compromisos.',
      cards: [
        { pill: 'Gran somni', line: '[Privat — aquell que et fa tremolar.]', ctx: 'Alguns somnis es guarden de prop. Aquest és entre jo i el futur.' },
        { pill: 'Somni petit 01', line: '[Somni u — una línia.]', ctx: 'Una frase de context.' },
        { pill: 'Somni petit 02', line: '[Somni dos — una línia.]', ctx: 'Una frase de context.' }
      ]
    },
    ai: {
      kicker: '03 — La IA com a mitjà',
      h2: 'La IA no és el somni. És com arribem.',
      p1: 'Només parlo de la IA com a eina, no com a enemic humà a l\u2019estil Skynet. La IA tal com és avui és una eina super — un recurs humà barat i incansable que pot treballar per a tu sense cansar-se ni queixar-se. Això no és un somni per a emprenedors, aquells obsessionats amb crear valor per a la societat. És una eina mega útil addicional per impulsar més ràpid i més barat els projectes que volen construir, llançar i fer reeixir.',
      quote: 'Fes servir la IA per al teu propi èxit.'
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
        line: 'Fusta per a fusters i creadors.',
        ctx: 'L\u2019app per a fusters i particulars que necessiten comprar fusta en brut o fusta transformada en mobles.',
        visit: 'Visita Fusta.App →'
      }
    },
    onPurpose: {
      kicker: '05 — Sobre el propòsit',
      h2: 'Els propòsits no són somnis.',
      paragraphs: [
        'Estan més a prop de les missions. Hi ha un objectiu que cal assolir.',
        'Potser no l\u2019arribes a conquerir, però el caprici no s\u2019hi pot interposar.',
        'És el deure qui governa.'
      ]
    },
    cta: { kicker: 'Comença', h2: 'Digues hola.', muted: 'Un enllaç. Sense soroll.', btn: 'jordi@jordi.quest' },
    footer: 'Jordi — esborrany v0.1 · SvelteKit + Vercel a punt'
  },

  es: {
    htmlLang: 'es',
    title: 'Jordi — propósito, sueños, IA',
    nav: { purpose: 'Propósito', dreams: 'Sueños', ai: 'IA', projects: 'Proyectos' },
    hero: {
      eyebrow: 'Un lugar tranquilo en internet',
      h1a: 'Propósito. Sueños',
      h1b: 'que deben cumplirse.',
      h1c: 'La IA como camino.',
      lede: 'Un espacio para pensar en voz alta.'
    },
    purpose: {
      kicker: '01 — Propósito',
      h2: 'Por qué existe esto.',
      p1: 'Jordi es el enfoque más cercano que he pensado para exponer lo que hago a los demás.',
      p2: 'Un lugar para ser transparente con lo que importa, lo que se construye, y por qué.'
    },
    dreams: {
      kicker: '02 — Sueños que deben cumplirse',
      h2: 'No deseos. Compromisos.',
      cards: [
        { pill: 'Gran sueño', line: '[Privado — el que te hace temblar.]', ctx: 'Algunos sueños se guardan de cerca. Este es entre yo y el futuro.' },
        { pill: 'Sueño pequeño 01', line: '[Sueño uno — una línea.]', ctx: 'Una frase de contexto.' },
        { pill: 'Sueño pequeño 02', line: '[Sueño dos — una línea.]', ctx: 'Una frase de contexto.' }
      ]
    },
    ai: {
      kicker: '03 — La IA como medio',
      h2: 'La IA no es el sueño. Es cómo llegamos.',
      p1: 'Solo hablo de la IA como herramienta, no como un enemigo humano al estilo Skynet. La IA tal como es hoy es una herramienta súper — un recurso humano barato y incansable que puede trabajar por ti sin cansarse ni quejarse. Esto no es un sueño para emprendedores, aquellos obsesionados con crear valor para la sociedad. Es una herramienta mega útil adicional para impulsar más rápido y más barato los proyectos que buscan construir, lanzar y hacer exitosos.',
      quote: 'Usa la IA para tu propio éxito.'
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
        line: 'Madera para carpinteros y creadores.',
        ctx: 'La app para carpinteros y particulares que necesitan comprar madera en crudo o madera transformada en muebles.',
        visit: 'Visita Fusta.App →'
      }
    },
    onPurpose: {
      kicker: '05 — Sobre el propósito',
      h2: 'Los propósitos no son sueños.',
      paragraphs: [
        'Están más cerca de las misiones. Hay un objetivo que debe alcanzarse.',
        'Quizás no llegues a conquistarlo, pero el capricho no puede interponerse.',
        'Es el deber quien gobierna.'
      ]
    },
    cta: { kicker: 'Empieza', h2: 'Di hola.', muted: 'Un enlace. Sin ruido.', btn: 'jordi@jordi.quest' },
    footer: 'Jordi — borrador v0.1 · SvelteKit + Vercel listo'
  }
};
