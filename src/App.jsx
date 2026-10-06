import React, { useEffect } from 'react';

const pages = [
  { href: '/app', label: 'The app' },
  { href: '/gyms', label: 'For gyms' },
  { href: '/vision', label: 'Our direction' },
];

function Header({ current }) {
  return <header className="site-header">
    <a className="wordmark" href="/" aria-label="OnSight Climbing home"><span className="wordmark-mark" aria-hidden="true">O</span><span>OnSight<span className="wordmark-light"> Climbing</span></span></a>
    <nav className="primary-nav" aria-label="Main navigation">{pages.map((page) => <a key={page.href} href={page.href} aria-current={current === page.href ? 'page' : undefined}>{page.label}</a>)}</nav>
    <a className="header-cta" href="/app#journey">Explore the app <span aria-hidden="true">↘</span></a>
  </header>;
}

function Footer() {
  return <footer className="site-footer"><a className="wordmark" href="/"><span className="wordmark-mark" aria-hidden="true">O</span><span>OnSight<span className="wordmark-light"> Climbing</span></span></a><span>Climbing is the point. The journey is yours.</span><nav className="footer-nav" aria-label="Footer navigation">{pages.map((page) => <a key={page.href} href={page.href}>{page.label}</a>)}</nav><a href="#top">Back to top ↑</a></footer>;
}

function RouteIllustration() {
  return <div className="hero-art">
    <div className="art-label art-label-top">Concept illustration.</div>
    <svg className="climb-illustration" viewBox="0 0 560 590" fill="none" role="img" aria-labelledby="route-title route-description" focusable="false">
      <title id="route-title">A route from first hold to finish</title><desc id="route-description">A conceptual climbing wall with a traced route from a labeled start to an orange finish marker.</desc>
      <path className="wall-shape" d="M73 38h414v500H73z"/><path className="wall-line" d="M211 38v500M349 38v500M73 163h414M73 288h414M73 413h414"/>
      <g className="holds" fill="currentColor"><path d="m113 106 20-11 18 9-4 20-23 5-13-11 2-12Z"/><path d="m263 92 21-7 15 14-7 18-22 2-11-13 4-14Z"/><path d="m401 187 17-14 20 7 3 18-17 12-18-7-5-16Z"/><path d="m146 218 21-7 15 14-8 19-19 2-13-14 4-14Z"/><path d="m287 260 19-11 17 10-3 18-21 5-15-9 3-13Z"/><path d="m390 343 22-7 14 13-6 18-21 4-13-12 4-16Z"/><path d="m181 365 18-12 18 8 1 18-19 10-17-7-1-17Z"/><path d="m264 455 20-8 16 11-5 19-19 3-14-10 2-15Z"/></g>
      <path className="route-path" pathLength="1" d="M280 475c-4-39-58-41-89-78-35-42 26-77 99-120 54-32 109-58 131-95"/><circle className="route-start" cx="280" cy="475" r="11"/><text className="route-marker-label" x="246" y="501">START</text><circle className="route-end" cx="421" cy="182" r="13"/><text className="route-marker-label" x="438" y="187">FINISH</text><path className="route-arrow" d="m409 179 12 3-7 11"/>
    </svg>
    <div className="art-label art-label-bottom"><span className="route-key" aria-hidden="true"/>Route from first hold to finish</div><span className="art-index" aria-hidden="true">01 / 03</span>
  </div>;
}

function JourneyBoard() {
  const steps = [
    ['Find', 'Choose a gym and discover a route, including a QR path.', <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2"/></>],
    ['Log', 'Record an ascent as part of a session.', <path d="M5 18c4-1 4-11 9-11h5M14 4l5 3-3 4"/>],
    ['Revisit', 'Look back at sessions and climbing history.', <><path d="M5 6h14M5 12h14M5 18h9"/><circle cx="17" cy="18" r="2"/></>],
  ];
  return <div className="journey-board" role="group" aria-label="Conceptual illustration of a climbing session, not a product screenshot">
    <div className="board-top"><span>APP FLOWS TO EXPLORE</span><span className="concept-label">Concept illustration.</span></div>
    <ol className="journey-list">{steps.map(([title, copy, icon], i) => <React.Fragment key={title}>{i > 0 && <li className="journey-connector" aria-hidden="true"/>}<li className="journey-step"><span className="step-number">0{i + 1}</span><span className="step-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false">{icon}</svg></span><div><h3>{title}</h3><p>{copy}</p></div><span className="step-state">Explore</span></li></React.Fragment>)}</ol>
    <p className="concept-note">Concept illustration.</p>
  </div>;
}

function StaffBoard() {
  const steps = [
    ['Inventory', <><path d="M7 8h18v18H7zM11 4h18v18M11 13h10M11 18h10M11 23h6"/></>],
    ['Find a route', <><circle cx="13" cy="13" r="7"/><path d="m18 18 8 8M9 13h8M13 9v8"/></>],
    ['Create or edit', <><path d="m19 6 7 7M7 25l4-1 14-14-3-3L8 21zM6 28h21"/></>],
  ];
  return <div className="wall-card" aria-label="Conceptual route-setting board, not a product screenshot">
    <div className="wall-card-head"><span>THE WALL, AT A GLANCE</span><span className="mini-status">Concept illustration.</span></div>
    <ol className="staff-flow" aria-label="Staff route workflow">{steps.map(([label, art], i) => <React.Fragment key={label}>{i > 0 && <li className="flow-arrow" aria-hidden="true">→</li>}<li className="staff-stage"><span className="staff-step-number">0{i + 1}</span><svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">{art}</svg><b>{label}</b></li></React.Fragment>)}</ol>
    <div className="wall-card-foot"><span>Staff route tools are under development. Release readiness and access are still being verified.</span><span aria-hidden="true">↗</span></div><p className="concept-note concept-note-dark">Concept illustration.</p>
  </div>;
}

function RouteMoments() {
  return <section className="home-moments section-wrap" aria-labelledby="moments-title"><div className="moments-intro"><p className="eyebrow">A route, over time</p><h2 id="moments-title">One climb, <em>three moments.</em></h2><p>A route is more than a moment on the wall. OnSight explores a simple path: find a route, record the climb, then return to your session history. This is a product concept, not a live app screen.</p><p className="product-maturity">Product preview · availability unverified.</p><p className="concept-note">Concept illustration.</p></div><ol className="moments-list"><li className="moment"><span className="moment-marker marker-circle" aria-hidden="true"/><span className="moment-number">01</span><div><h3>Before: Find a route.</h3><p>Browse a gym and choose where to climb.</p></div></li><li className="moment"><span className="moment-marker marker-diamond" aria-hidden="true"/><span className="moment-number">02</span><div><h3>During: Log the climb.</h3><p>Record an ascent in a session.</p></div></li><li className="moment"><span className="moment-marker marker-square" aria-hidden="true"/><span className="moment-number">03</span><div><h3>After: Revisit the session.</h3><p>Look back at what you logged.</p></div></li></ol><a className="button button-dark moments-cta" href="/app#journey">Explore the app <span aria-hidden="true">↘</span></a></section>;
}

function AppSequence() {
  return <section className="app-sequence section-wrap" id="sequence" aria-labelledby="sequence-title"><div className="sequence-heading"><p className="eyebrow">Before / during / after</p><h2 id="sequence-title">A session, from first choice to looking back.</h2><p className="product-maturity">Product preview · availability unverified.</p><p className="concept-note">Concept illustration.</p></div><div className="sequence-art" aria-hidden="true"><svg viewBox="0 0 600 130" focusable="false"><path className="sequence-track" pathLength="1" d="M48 65H552"/><circle className="sequence-marker" cx="552" cy="65" r="12"/><circle className="sequence-stop" cx="48" cy="65" r="5"/><path className="sequence-stop" d="m300 54 11 11-11 11-11-11z"/><rect className="sequence-stop" x="540" y="53" width="24" height="24" rx="2"/></svg></div><div className="sequence-steps"><article id="before" className="sequence-step"><h3>Before you climb</h3><h4>Start with a route to explore.</h4><p>The product work includes gym and route discovery, with a QR path. This preview illustrates how a climber could move from choosing a route to starting a session.</p><a className="text-link" href="#during">During your session <span aria-hidden="true">↓</span></a></article><article id="during" className="sequence-step"><h3>During your session</h3><h4>Keep a record of the climb.</h4><p>An ascent can be recorded as part of a session.</p><a className="text-link" href="#after">After the session <span aria-hidden="true">↓</span></a></article><article id="after" className="sequence-step"><h3>After the session</h3><h4>A session you can return to.</h4><p>Session and history surfaces let the story continue after the climb. Complete lifecycle behavior and availability have not been verified.</p><a className="text-link" href="/gyms#workflow">See the staff workflow <span aria-hidden="true">↗</span></a></article></div></section>;
}

function SharedContext() {
  return <section className="shared-context section-wrap" aria-labelledby="shared-title"><div><p className="eyebrow">Climbers and gym teams</p><h2 id="shared-title">Shared context</h2><h3>A useful wall starts with clear route information.</h3></div><div><p>Route details are the common thread between a gym team's workflow and a climber's route discovery. The connected experience shown here is a direction for the product, not a verified live integration.</p><p className="product-maturity">Product preview · availability unverified.</p><p className="concept-note">Concept illustration.</p><a className="text-link" href="/app#journey">See the climber journey <span aria-hidden="true">↗</span></a></div></section>;
}

function GuidingPrinciples() {
  return <section className="vision-principles section-wrap" id="principles" aria-labelledby="principles-title"><div className="principles-heading"><p className="eyebrow">Guiding principles</p><h2 id="principles-title">Useful at the wall. <em>Clear after the session.</em></h2><p>We are exploring ways to keep route information useful to gym teams and make a climber's record easier to revisit. These ideas need product validation before they become commitments.</p><span className="exploring-tag">Ideas, not commitments</span><p className="concept-note">Concept illustration.</p></div><div className="principles-art"><svg viewBox="0 0 500 170" role="img" aria-label="An open route connects two principles: clarity at the wall and context across sessions." focusable="false"><path className="principles-path" pathLength="1" d="M57 84C154 84 178 43 250 43s99 84 193 84"/><g className="principle-node"><circle cx="57" cy="84" r="24"/><path d="M47 77h20M47 84h20M47 91h14"/></g><g className="principle-node principle-node-end"><circle cx="443" cy="127" r="24"/><path d="M435 119h16v18h-16zM438 124h10M438 129h10M438 134h6"/></g><text x="27" y="139">CLARITY</text><text x="393" y="38">CONTEXT</text><path className="open-end" d="m471 119 13 8-13 8"/></svg><div className="principle-labels"><h3>Clarity at the wall</h3><h3>Context across sessions</h3></div></div><a className="text-link" href="/app#journey">Return to the app story <span aria-hidden="true">↗</span></a></section>;
}

function Home() {
  return <main id="main" className="page-home motion-home">
    <section className="hero section-wrap" id="top" aria-labelledby="hero-title"><div className="hero-copy"><p className="eyebrow"><span className="eyebrow-dot"/> OnSight Climbing</p><h1 id="hero-title">See your climbing journey <em>more clearly.</em></h1><p className="hero-lede">Explore how OnSight connects route discovery, climb logging and session history, with route tools for gym teams.</p><ol className="hero-journey" aria-label="Climbing journey: find, log, revisit"><li><span>01</span>Find <span className="hero-journey-arrow" aria-hidden="true">→</span></li><li><span>02</span>Log <span className="hero-journey-arrow" aria-hidden="true">→</span></li><li><span>03</span>Revisit</li></ol><div className="hero-actions"><a className="button button-dark" href="/app#journey">Explore the app <span aria-hidden="true">↘</span></a><a className="text-link" href="/vision">See the vision <span aria-hidden="true">↗</span></a></div></div><RouteIllustration/></section>
    <section className="page-index section-wrap" aria-label="Explore OnSight"><a href="/app" className="page-tile"><span className="eyebrow">01 <span className="eyebrow-rule"/> Climber journey</span><strong>Find a route.<br/>Keep the memory.</strong><span>Explore Find → Log → Revisit <i aria-hidden="true">↗</i></span></a><a href="/gyms" className="page-tile page-tile-dark"><span className="eyebrow">02 <span className="eyebrow-rule"/> For climbing teams</span><strong>Make the wall<br/>easier to manage.</strong><span>Explore staff route tools <i aria-hidden="true">↗</i></span></a><a href="/vision" className="page-tile"><span className="eyebrow">03 <span className="eyebrow-rule"/> Our direction</span><strong>More context<br/>for every climb.</strong><span>See what we are exploring <i aria-hidden="true">↗</i></span></a></section><RouteMoments/>
  </main>;
}

function AppPage() {
  return <main id="main" className="detail-page motion-app"><section className="detail-hero section-wrap" id="top"><p className="eyebrow">01 <span className="eyebrow-rule"/> For your next session</p><div className="detail-heading"><h1>From the wall to your <em>climbing record.</em></h1><div><p>Follow a route from discovery to a record you can revisit.</p><p className="product-maturity">Product preview · availability unverified.</p></div></div></section><section className="app-detail section-wrap" id="journey" aria-labelledby="journey-title"><div className="section-intro"><p className="eyebrow">Find <span className="eyebrow-rule"/> Log <span className="eyebrow-rule"/> Revisit</p><h2 id="journey-title">A session, <em>connected.</em></h2><p>Three parts of a climber's journey, shown as a concept rather than a product screen.</p><a className="text-link" href="/gyms">See the staff workflow <span aria-hidden="true">↗</span></a></div><JourneyBoard/></section><AppSequence/><section className="detail-next"><div className="section-wrap"><p className="eyebrow eyebrow-light">For climbing teams</p><h2>Route tools for <em>the people setting the wall.</em></h2><a className="button button-outline" href="/gyms">Explore the staff workflow <span aria-hidden="true">↗</span></a></div></section></main>;
}

function GymsPage() {
  return <main id="main" className="detail-page motion-staff"><section className="detail-hero section-wrap" id="top"><p className="eyebrow">02 <span className="eyebrow-rule"/> For climbing teams</p><div className="detail-heading"><h1>A clearer view of the wall <em>for your team.</em></h1><div><p>Explore a staff workflow for route inventory, finding a route, and creating or editing route details.</p><p className="product-maturity">Product preview · availability unverified.</p></div></div></section><section className="staff-detail" id="workflow"><div className="section-wrap staff-detail-inner"><div className="gym-copy"><p className="eyebrow eyebrow-light">A staff route workflow</p><h2>From route list to <em>route details.</em></h2><p>Staff route inventory and editing are visible in the product work. Release readiness and access are still being verified.</p><p className="product-maturity">Product preview · availability unverified.</p><a className="text-link text-link-light" href="/app">See the climber journey <span aria-hidden="true">↗</span></a></div><StaffBoard/></div><div className="gym-extension section-wrap"><div><p className="eyebrow eyebrow-light">From wall to route record</p><h2>From route list to <em>route record.</em></h2></div><div><p>The staff product work shows route inventory, finding a route, and creating or editing route details. This sequence explains how those pieces relate; it is not a product screenshot.</p><p className="product-maturity">Product preview · availability unverified.</p><p className="concept-note">Concept illustration.</p><ol className="gym-route" aria-label="Staff route workflow from inventory to editing"><li><span>Inventory</span><i className="gym-route-marker" aria-hidden="true"/></li><li><span>Find a route</span></li><li><span>Create or edit</span></li></ol></div></div></section><SharedContext/></main>;
}

function VisionPage() {
  return <main id="main" className="detail-page motion-vision"><section className="vision-hero section-wrap" id="top"><div className="vision-mark" aria-hidden="true"><svg viewBox="0 0 300 300" focusable="false"><circle className="vision-orbit" cx="150" cy="150" r="111"/><circle className="vision-orbit vision-orbit-inner" cx="150" cy="150" r="77"/><path className="vision-path" pathLength="1" d="M55 185c26-54 44 15 72-28s42-52 65-13 37 10 54-32"/><circle className="vision-node" cx="55" cy="185" r="8"/><circle className="vision-node vision-node-end" cx="246" cy="112" r="10"/><text x="42" y="211">START</text><text x="224" y="91">NEXT</text></svg></div><div className="vision-copy"><p className="eyebrow">03 <span className="eyebrow-rule"/> Our direction</p><h1>Better context for <em>every climb.</em></h1><p>Our vision is to help climbers remember their progress and help gyms keep their wall information useful.</p><p className="vision-caveat">Possible directions are ideas to assess, not committed features.</p><a className="button button-dark" href="#exploring">Where we're heading <span aria-hidden="true">↓</span></a></div></section><section className="future-section" id="exploring"><div className="section-wrap future-inner"><div className="future-heading"><p className="eyebrow">Exploring next</p><h2>Still finding <em>the next hold.</em></h2></div><div className="future-copy"><span className="exploring-tag">Ideas, not commitments</span><p>Possible directions include smoother gym workflows and richer climbing context. These are ideas to assess, not committed features.</p><a className="text-link" href="/app">Return to the app story <span aria-hidden="true">↗</span></a></div></div></section><GuidingPrinciples/></main>;
}

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const page = path === '/app' ? 'app' : path === '/gyms' ? 'staff' : path === '/vision' ? 'vision' : 'home';
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches || !('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver((entries, currentObserver) => {
      for (const entry of entries) if (entry.isIntersecting) { entry.target.classList.add('is-visible'); currentObserver.unobserve(entry.target); }
    }, { threshold: 0.15 });
    document.documentElement.classList.add('js-motion');
    document.querySelectorAll('.journey-step, .journey-connector, .flow-arrow, .vision-mark, .home-moments, .app-sequence, .gym-extension, .vision-principles').forEach((item) => observer.observe(item));
    return () => { observer.disconnect(); document.documentElement.classList.remove('js-motion'); };
  }, []);
  const current = page === 'staff' ? '/gyms' : page === 'home' ? '/' : `/${page}`;
  const Page = page === 'app' ? AppPage : page === 'staff' ? GymsPage : page === 'vision' ? VisionPage : Home;
  return <><a className="skip-link" href="#main">Skip to content</a><Header current={current}/><Page/><section className="closing section-wrap" aria-labelledby="closing-title"><p className="eyebrow"><span className="eyebrow-dot"/> Your next session starts on the wall</p><h2 id="closing-title">Make room for <em>one more try.</em></h2><a className="button button-dark" href="/app#journey">Explore the app <span aria-hidden="true">↗</span></a><p className="closing-note">OnSight Climbing · A connected idea for climbers and gyms</p></section><Footer/></>;
}
