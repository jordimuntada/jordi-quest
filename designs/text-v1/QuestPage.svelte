<script>
export let lang = 'en';
import { t, defaultLang } from '$lib/i18n/index.js';
$: i = t[lang] ?? t[defaultLang];
$: base = lang === defaultLang ? '' : `/${lang}`;
</script>

<svelte:head>
<title>{i.title}</title>
<html lang={i.htmlLang} />
</svelte:head>

<header>
<nav>
<a href="/">jordi.quest</a>
<a href="{base}/#purpose">{i.nav.purpose}</a>
<a href="{base}/#dreams">{i.nav.dreams}</a>
<a href="{base}/#ai">{i.nav.ai}</a>
<a href="{base}/#projects">{i.nav.projects}</a>
<span class="lang">
<a href="/" aria-current={lang === 'en' ? 'true' : undefined}>EN</a>
<a href="/ca" aria-current={lang === 'ca' ? 'true' : undefined}>CA</a>
<a href="/es" aria-current={lang === 'es' ? 'true' : undefined}>ES</a>
</span>
</nav>

<h1>{i.hero.h1a} {i.hero.h1b} {i.hero.h1c}</h1>
<p class="lede">{i.hero.eyebrow} — {i.hero.lede}</p>
</header>

<hr />

<main>
<section id="purpose">
<p class="kicker">{i.purpose.kicker}</p>
<h2>{i.purpose.h2}</h2>
<p>{i.purpose.p1}</p>
<p class="muted">{i.purpose.p2}</p>
</section>

<section id="dreams">
<p class="kicker">{i.dreams.kicker}</p>
<h2>{i.dreams.h2}</h2>
<ol>
{#each i.dreams.cards as d}
<li><strong>{d.line}</strong> <span class="muted">— {d.ctx}</span></li>
{/each}
</ol>
</section>

<section id="ai">
<p class="kicker">{i.ai.kicker}</p>
<h2>{i.ai.h2}</h2>
<p>{i.ai.p1}</p>
<blockquote><p>{i.ai.quote}</p></blockquote>
</section>

<section id="projects">
<p class="kicker">{i.projects.kicker}</p>
<h2>{i.projects.h2}</h2>

<h3>{i.projects.hours.name}</h3>
<p><strong>{i.projects.hours.line}</strong></p>
<p class="muted">{i.projects.hours.ctx}</p>
<p><a href="https://hours.es" target="_blank" rel="noopener">{i.projects.hours.visit}</a></p>

<h3>{i.projects.fusta.name}</h3>
<p><strong>{i.projects.fusta.line}</strong></p>
<p class="muted">{i.projects.fusta.ctx}</p>
<p><a href="https://fusta.app" target="_blank" rel="noopener">{i.projects.fusta.visit}</a></p>
</section>

<section id="on-purpose">
<p class="kicker">{i.onPurpose.kicker}</p>
<h2>{i.onPurpose.h2}</h2>
<dl>
{#each i.onPurpose.cards as c}
<dt>{c.title}</dt>
<dd>{c.body}</dd>
{/each}
</dl>
</section>

<section id="contact">
<p class="kicker">{i.cta.kicker}</p>
<h2>{i.cta.h2}</h2>
<p class="muted">{i.cta.muted}</p>
<p><a href="mailto:hello@jordi.quest">{i.cta.btn}</a></p>
</section>
</main>

<footer>{i.footer}</footer>

<style>
.lang { margin-left: 1rem; }
.lang a { margin-right: 0.25rem; }
.lang a[aria-current='true'] { font-weight: 600; }
</style>
