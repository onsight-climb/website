import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches || !('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver((entries, currentObserver) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      }
    }, { threshold: 0.15 });
    document.documentElement.classList.add('js-motion');
    document.querySelectorAll('.reveal, .journey-step, .journey-connector, .wall-card, .gym-section').forEach((item) => observer.observe(item));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('js-motion');
    };
  }, []);
  return <><a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="OnSight Climbing home">
        <span className="wordmark-mark" aria-hidden="true">O</span>
        <span>OnSight<span className="wordmark-light"> Climbing</span></span>
      </a>
      <nav className="primary-nav" aria-label="Main navigation">
        <a href="#app">The app</a>
        <a href="#gyms">For gyms</a>
        <a href="#vision">Our direction</a>
      </nav>
      <a className="header-cta" href="#app">Explore the app <span aria-hidden="true">↘</span></a>
    </header>

    <main id="main">
      <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot"></span> OnSight Climbing</p>
          <h1 id="hero-title">See your climbing journey <em>more clearly.</em></h1>
          <p className="hero-lede">Explore OnSight’s approach to route discovery, climb logging and session history, with route tools for gym teams.</p>
          <div className="hero-actions"><a className="button button-dark" href="#app">Explore the app <span aria-hidden="true">↓</span></a><a className="text-link" href="#vision">See the vision <span aria-hidden="true">↘</span></a></div>
        </div>
        <div className="hero-art" aria-label="Abstract illustration of a climbing wall and a route from start to finish" role="img">
          <div className="art-label art-label-top">Concept illustration.</div>
          <svg className="climb-illustration" viewBox="0 0 560 590" fill="none" aria-hidden="true" focusable="false">
            <path className="wall-shape" d="M73 38h414v500H73z" />
            <path className="wall-line" d="M211 38v500M349 38v500M73 163h414M73 288h414M73 413h414" />
            <g className="holds" fill="currentColor">
              <path d="m113 106 20-11 18 9-4 20-23 5-13-11 2-12Z"/><path d="m263 92 21-7 15 14-7 18-22 2-11-13 4-14Z"/>
              <path d="m401 187 17-14 20 7 3 18-17 12-18-7-5-16Z"/><path d="m146 218 21-7 15 14-8 19-19 2-13-14 4-14Z"/>
              <path d="m287 260 19-11 17 10-3 18-21 5-15-9 3-13Z"/><path d="m390 343 22-7 14 13-6 18-21 4-13-12 4-16Z"/>
              <path d="m181 365 18-12 18 8 1 18-19 10-17-7-1-17Z"/><path d="m264 455 20-8 16 11-5 19-19 3-14-10 2-15Z"/>
            </g>
            <path className="route-path" pathLength="1" d="M280 475c-4-39-58-41-89-78-35-42 26-77 99-120 54-32 109-58 131-95" />
            <circle className="route-start" cx="280" cy="475" r="11"/><circle className="route-end" cx="421" cy="182" r="13"/>
            <path className="route-arrow" d="m409 179 12 3-7 11" />
          </svg>
          <div className="art-label art-label-bottom"><span className="route-key" aria-hidden="true"></span> Every attempt is part of it</div>
          <span className="art-index" aria-hidden="true">01 / 04</span>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track" aria-hidden="true"><span>Discover</span><i>✳</i><span>Climb</span><i>✳</i><span>Remember</span><i>✳</i><span>Discover</span><i>✳</i><span>Climb</span><i>✳</i><span>Remember</span><i>✳</i></div>
      </div>

      <section className="app-section section-wrap section-grid" id="app" aria-labelledby="app-title">
        <div className="section-intro reveal">
          <p className="eyebrow">01 <span className="eyebrow-rule"></span> For your next session</p>
          <h2 id="app-title">From the wall to your <em>climbing record.</em></h2>
          <p>Explore the app flows for discovering routes, logging climbs and revisiting sessions.</p>
          <p className="product-maturity">Product preview · availability unverified.</p>
          <a className="text-link" href="#vision">See the vision <span aria-hidden="true">↘</span></a>
        </div>
        <div className="journey-board" role="group" aria-label="Conceptual illustration of a climbing session, not a product screenshot">
          <div className="board-top"><span>APP FLOWS TO EXPLORE</span><span className="concept-label">Concept illustration.</span></div>
          <div className="journey-step reveal">
            <span className="step-number">01</span><span className="step-icon icon-pin" aria-hidden="true">⌖</span>
            <div><h3>Find</h3><p>Choose a gym and discover a route.</p></div><span className="step-state">Explore</span>
          </div>
          <div className="journey-connector reveal" aria-hidden="true"></div>
          <div className="journey-step reveal">
            <span className="step-number">02</span><span className="step-icon icon-route" aria-hidden="true">↗</span>
            <div><h3>Log</h3><p>Record an ascent from your session.</p></div><span className="step-state">Explore</span>
          </div>
          <div className="journey-connector reveal" aria-hidden="true"></div>
          <div className="journey-step reveal">
            <span className="step-number">03</span><span className="step-icon icon-log" aria-hidden="true">⌁</span>
            <div><h3>Revisit</h3><p>Look back through sessions and history.</p></div><span className="step-state">Explore</span>
          </div>
          <p className="concept-note">Concept illustration.</p>
        </div>
      </section>

      <section className="gym-section" id="gyms" aria-labelledby="gym-title">
        <div className="gym-inner section-wrap">
          <div className="gym-copy reveal">
            <p className="eyebrow eyebrow-light">02 <span className="eyebrow-rule"></span> For climbing teams</p>
            <h2 id="gym-title">A clearer view of the wall <em>for your team.</em></h2>
            <p>Staff tools are being developed for route inventory and editing. Release readiness and access are still being verified.</p>
            <p className="product-maturity">Product preview · availability unverified.</p>
          </div>
          <div className="wall-card reveal" aria-label="Conceptual route-setting board, not a product screenshot">
            <div className="wall-card-head"><span>THE WALL, AT A GLANCE</span><span className="mini-status">Concept illustration.</span></div>
            <div className="staff-flow" role="group" aria-label="Staff workflow in development: inventory, find a route, create or edit">
              <div><span>01</span><i aria-hidden="true">▤</i><b>Inventory</b></div><span className="flow-arrow" aria-hidden="true">→</span>
              <div><span>02</span><i aria-hidden="true">⌕</i><b>Find a route</b></div><span className="flow-arrow" aria-hidden="true">→</span>
              <div><span>03</span><i aria-hidden="true">＋</i><b>Create / edit</b></div>
            </div>
            <div className="wall-card-foot"><span>A concept for route-setting work.</span><span aria-hidden="true">↗</span></div>
            <p className="concept-note concept-note-dark">Concept illustration.</p>
          </div>
        </div>
      </section>

      <section className="vision-section section-wrap" id="vision" aria-labelledby="vision-title">
        <div className="vision-mark reveal" aria-hidden="true"><span>O</span><i></i></div>
        <div className="vision-copy reveal">
          <p className="eyebrow">03 <span className="eyebrow-rule"></span> Our direction</p>
          <h2 id="vision-title">Better context for <em>every climb.</em></h2>
          <p>Our vision is to help climbers remember their progress and help gyms keep their wall information useful.</p>
          <a className="button button-outline" href="#future">Where we're heading <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="future-section" id="future" aria-labelledby="future-title">
        <div className="section-wrap future-inner">
          <div className="future-heading reveal">
            <p className="eyebrow">04 <span className="eyebrow-rule"></span> Where we're heading</p>
            <h2 id="future-title">Still finding <em>the next hold.</em></h2>
          </div>
          <div className="future-copy reveal">
            <span className="exploring-tag">Exploring next</span>
            <p>Possible directions include smoother gym workflows and richer climbing context. These are ideas to assess, not committed features.</p>
          </div>
          <div className="future-route" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>
        </div>
      </section>

      <section className="closing section-wrap" aria-labelledby="closing-title">
        <p className="eyebrow"><span className="eyebrow-dot"></span> Your next session starts on the wall</p>
        <h2 id="closing-title">Make room for <em>one more try.</em></h2>
        <a className="button button-dark" href="#app">Explore the app <span aria-hidden="true">↑</span></a>
        <p className="closing-note">OnSight Climbing · A connected idea for climbers and gyms</p>
      </section>
    </main>
    <footer className="site-footer"><a className="wordmark" href="#top"><span className="wordmark-mark" aria-hidden="true">O</span><span>OnSight<span className="wordmark-light"> Climbing</span></span></a><span>Climbing is the point. The journey is yours.</span><nav className="footer-nav" aria-label="Footer navigation"><a href="#app">The app</a><a href="#gyms">For gyms</a><a href="#vision">Our direction</a></nav><a href="#top">Back to top ↑</a></footer></>;
}
