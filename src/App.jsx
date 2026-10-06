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
          <p className="hero-lede">Explore how OnSight connects route discovery, climb logging and session history, with route tools for gym teams.</p>
          <ol className="hero-journey" aria-label="Climbing journey: find, log, revisit">
            <li><span>01</span>Find <span className="hero-journey-arrow" aria-hidden="true">→</span></li>
            <li><span>02</span>Log <span className="hero-journey-arrow" aria-hidden="true">→</span></li>
            <li><span>03</span>Revisit</li>
          </ol>
          <div className="hero-actions"><a className="button button-dark" href="#app">Explore the app <span aria-hidden="true">↓</span></a><a className="text-link" href="#vision">See the vision <span aria-hidden="true">↘</span></a></div>
        </div>
        <div className="hero-art">
          <div className="art-label art-label-top">Concept illustration.</div>
          <svg className="climb-illustration" viewBox="0 0 560 590" fill="none" role="img" aria-labelledby="route-title route-description" focusable="false">
            <title id="route-title">A route from first hold to finish</title>
            <desc id="route-description">A conceptual climbing wall with a traced route from a labeled start to an orange finish marker.</desc>
            <path className="wall-shape" d="M73 38h414v500H73z" />
            <path className="wall-line" d="M211 38v500M349 38v500M73 163h414M73 288h414M73 413h414" />
            <g className="holds" fill="currentColor">
              <path d="m113 106 20-11 18 9-4 20-23 5-13-11 2-12Z"/><path d="m263 92 21-7 15 14-7 18-22 2-11-13 4-14Z"/>
              <path d="m401 187 17-14 20 7 3 18-17 12-18-7-5-16Z"/><path d="m146 218 21-7 15 14-8 19-19 2-13-14 4-14Z"/>
              <path d="m287 260 19-11 17 10-3 18-21 5-15-9 3-13Z"/><path d="m390 343 22-7 14 13-6 18-21 4-13-12 4-16Z"/>
              <path d="m181 365 18-12 18 8 1 18-19 10-17-7-1-17Z"/><path d="m264 455 20-8 16 11-5 19-19 3-14-10 2-15Z"/>
            </g>
            <path className="route-path" pathLength="1" d="M280 475c-4-39-58-41-89-78-35-42 26-77 99-120 54-32 109-58 131-95" />
            <circle className="route-start" cx="280" cy="475" r="11"/><text className="route-marker-label" x="246" y="501">START</text>
            <circle className="route-end" cx="421" cy="182" r="13"/><text className="route-marker-label" x="438" y="187">FINISH</text>
            <path className="route-arrow" d="m409 179 12 3-7 11" />
          </svg>
          <div className="art-label art-label-bottom"><span className="route-key" aria-hidden="true"></span> Route from first hold to finish</div>
          <span className="art-index" aria-hidden="true">01 / 03</span>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track" aria-hidden="true"><span>Discover</span><i>✳</i><span>Climb</span><i>✳</i><span>Remember</span><i>✳</i><span>Discover</span><i>✳</i><span>Climb</span><i>✳</i><span>Remember</span><i>✳</i></div>
      </div>

      <section className="app-section section-wrap section-grid" id="app" aria-labelledby="app-title">
        <div className="section-intro reveal">
          <p className="eyebrow">01 <span className="eyebrow-rule"></span> For your next session</p>
          <h2 id="app-title">From the wall to your <em>climbing record.</em></h2>
          <p>Follow a route from discovery to a record you can revisit.</p>
          <p className="product-maturity">Product preview · availability unverified.</p>
          <a className="text-link" href="#vision">See the vision <span aria-hidden="true">↘</span></a>
        </div>
        <div className="journey-board" role="group" aria-label="Conceptual illustration of a climbing session, not a product screenshot">
          <div className="board-top"><span>APP FLOWS TO EXPLORE</span><span className="concept-label">Concept illustration.</span></div>
          <div className="journey-step reveal">
            <span className="step-number">01</span><span className="step-icon icon-pin" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2"/></svg></span>
            <div><h3>Find</h3><p>Choose a gym and discover a route, including a QR path.</p></div><span className="step-state">Explore</span>
          </div>
          <div className="journey-connector reveal" aria-hidden="true"></div>
          <div className="journey-step reveal">
            <span className="step-number">02</span><span className="step-icon icon-route" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M5 18c4-1 4-11 9-11h5M14 4l5 3-3 4"/></svg></span>
            <div><h3>Log</h3><p>Record an ascent as part of a session.</p></div><span className="step-state">Explore</span>
          </div>
          <div className="journey-connector reveal" aria-hidden="true"></div>
          <div className="journey-step reveal">
            <span className="step-number">03</span><span className="step-icon icon-log" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M5 6h14M5 12h14M5 18h9"/><circle cx="17" cy="18" r="2"/></svg></span>
            <div><h3>Revisit</h3><p>Look back at sessions and climbing history.</p></div><span className="step-state">Explore</span>
          </div>
          <p className="concept-note">Concept illustration.</p>
        </div>
      </section>

      <section className="gym-section" id="gyms" aria-labelledby="gym-title">
        <div className="gym-inner section-wrap">
          <div className="gym-copy reveal">
            <p className="eyebrow eyebrow-light">02 <span className="eyebrow-rule"></span> For climbing teams</p>
            <h2 id="gym-title">A clearer view of the wall <em>for your team.</em></h2>
            <p>Staff route inventory and editing are visible in the product work. Release readiness and access are still being verified.</p>
            <p className="product-maturity">Product preview · availability unverified.</p>
          </div>
          <div className="wall-card reveal" aria-label="Conceptual route-setting board, not a product screenshot">
            <div className="wall-card-head"><span>THE WALL, AT A GLANCE</span><span className="mini-status">Concept illustration.</span></div>
            <ol className="staff-flow" aria-label="Staff route workflow">
              <li><span className="staff-step-number">01</span><svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M7 8h18v18H7zM11 4h18v18M11 13h10M11 18h10M11 23h6" /></svg><b>Inventory</b></li>
              <li className="flow-arrow" aria-hidden="true">→</li>
              <li><span className="staff-step-number">02</span><svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><circle cx="13" cy="13" r="7"/><path d="m18 18 8 8M9 13h8M13 9v8" /></svg><b>Find a route</b></li>
              <li className="flow-arrow" aria-hidden="true">→</li>
              <li><span className="staff-step-number">03</span><svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="m19 6 7 7M7 25l4-1 14-14-3-3L8 21zM6 28h21" /></svg><b>Create or edit</b></li>
            </ol>
            <div className="wall-card-foot"><span>Staff route tools are under development. Release readiness and access are still being verified.</span><span aria-hidden="true">↗</span></div>
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
