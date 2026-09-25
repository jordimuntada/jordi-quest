<script>
let { lang = 'en' } = $props();
import { t, defaultLang } from '$lib/i18n/index.js';
let i = $derived(t[lang] ?? t[defaultLang]);
let base = $derived(lang === defaultLang ? '' : `/${lang}`);
$effect(() => {
  document.documentElement.lang = i.htmlLang;
});
</script>

<svelte:head>
<title>{i.title}</title>
</svelte:head>

<nav class="nav"><div class="nav-inner">
<a class="brand" href="/">Jordi</a>
<div class="links">
<a href="{base}/#purpose">{i.nav.purpose}</a>
<a href="{base}/#dreams">{i.nav.dreams}</a>
<a href="{base}/#ai">{i.nav.ai}</a>
<a href="{base}/#projects">{i.nav.projects}</a>
</div>
<div class="lang">
<a href="/" aria-current={lang === 'en' ? 'true' : undefined}>EN</a>
<a href="/ca" aria-current={lang === 'ca' ? 'true' : undefined}>CA</a>
<a href="/es" aria-current={lang === 'es' ? 'true' : undefined}>ES</a>
</div>
</div></nav>

<header class="wrap hero">
<div class="breath" aria-hidden="true"></div>
<p class="eyebrow">{i.hero.eyebrow}</p>
<h1>{i.hero.h1a} <em>{i.hero.h1b}</em> {i.hero.h1c}</h1>
<p class="lede">{i.hero.lede}</p>
</header>

<main class="wrap">
<section id="purpose">
<p class="kicker">{i.purpose.kicker}</p>
<h2>{i.purpose.h2}</h2>
{#each i.purpose.lines as line, idx}
<p class={idx === i.purpose.lines.length - 1 ? 'muted' : undefined}>{line}</p>
{/each}
</section>

<section id="dreams">
<p class="kicker">{i.dreams.kicker}</p>
<h2>{i.dreams.h2}</h2>
<div class="grid">
{#each i.dreams.cards as d}
<div class="card"><span class="pill">{d.pill}</span><p class="dream">{d.line}</p><p class="muted">{d.ctx}</p></div>
{/each}
</div>
</section>

<section id="ai">
<p class="kicker">{i.ai.kicker}</p>
<h2>{i.ai.h2}</h2>
<p>{i.ai.p1}</p>
<div class="card"><p class="dream">{i.ai.quote}</p></div>
</section>

<section id="projects">
<p class="kicker">{i.projects.kicker}</p>
<h2>{i.projects.h2}</h2>

<div class="project-grid">
<div class="project-card">
<div class="project-header">
<span class="pill">{i.projects.hours.pill}</span>
<h3>{i.projects.hours.name}</h3>
</div>
<p class="dream">{i.projects.hours.line}</p>
<p class="muted">{i.projects.hours.ctx}</p>
<div class="project-links">
<a href="https://hours.es" target="_blank" rel="noopener">{i.projects.hours.visit}</a>
</div>
</div>

<div class="project-card">
<div class="project-header">
<span class="pill">{i.projects.fusta.pill}</span>
<h3>{i.projects.fusta.name}</h3>
</div>
<p class="dream">{i.projects.fusta.line}</p>
<p class="muted">{i.projects.fusta.ctx}</p>
<div class="project-links">
<a href="https://fusta.app" target="_blank" rel="noopener">{i.projects.fusta.visit}</a>
</div>
</div>
</div>
</section>

<section id="on-purpose">
<p class="kicker">{i.onPurpose.kicker}</p>
<h2>{i.onPurpose.h2}</h2>
<div class="grid">
{#each i.onPurpose.cards as c}
<div class="card"><h3 class="card-title">{c.title}</h3><p class="muted">{c.body}</p></div>
{/each}
</div>
</section>

<div class="cta">
<p class="kicker">{i.cta.kicker}</p>
<h2>{i.cta.h2}</h2>
<p class="muted">{i.cta.muted}</p>
<br />
<a class="btn" href="mailto:hello@jordi.quest">{i.cta.btn}</a>
</div>
</main>

<footer>{i.footer}</footer>

<style>
:global(html){scroll-padding-top:5rem}
.card-title{font-family:var(--serif);font-size:1.35rem;font-weight:400;margin:0 0 .75rem}
.lang{display:flex;gap:.4rem;font-size:.75rem;letter-spacing:.08em}
.lang a{text-decoration:none;opacity:.45;padding:.15rem .45rem;border-radius:999px;transition:opacity .2s}
.lang a:hover{opacity:1}
.lang a[aria-current='true']{opacity:1;background:var(--ink);color:var(--bg)}
@media(max-width:720px){.links{display:none}.nav-inner{justify-content:space-between}}
.project-grid{display:grid;gap:1.5rem;margin-top:2.5rem}
@media(min-width:640px){.project-grid{grid-template-columns:1fr 1fr}}
.project-card{border:1px solid var(--line);border-radius:20px;padding:2rem;background:#fff;transition:transform .3s ease,box-shadow .3s ease}
.project-card:hover{transform:translateY(-2px);box-shadow:0 8px 30px rgba(0,0,0,.06)}
.project-header{display:flex;align-items:center;gap:1rem;margin-bottom:1.25rem}
.project-header h3{font-family:var(--serif);font-size:1.5rem;margin:0}
.project-links{margin-top:1.5rem}
.project-links a{font-size:.9rem;text-decoration:none;border-bottom:1px solid var(--line);padding-bottom:.1rem;transition:border-color .2s}
.project-links a:hover{border-color:var(--ink)}
</style>
