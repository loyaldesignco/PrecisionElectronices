/* Precision Electronics — shared chrome (nav, footer, helpers)
   Exposed on window for every page to consume. */
const DS = window.PrecisionElectronicsDesignSystem_c79de0;
const { Button } = DS;

/* ---------- Lucide icon helper ---------- */
function Icon({ name, size = 24, color = 'currentColor', stroke = 1.75, style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: { width: size, height: size, stroke: color, 'stroke-width': stroke },
        nameAttr: 'data-lucide',
      });
    }
  }, [name, size, color, stroke]);
  return <span ref={ref} style={{ display: 'inline-flex', ...style }} />;
}

/* ---------- Scroll reveal (IntersectionObserver + guaranteed setTimeout fallback) ---------- */
function useReveal() {
  React.useEffect(() => {
    const reveal = (el) => el.classList.add('in');
    const els = document.querySelectorAll('.reveal:not(.in)');
    if (!('IntersectionObserver' in window)) { els.forEach(reveal); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { reveal(en.target); io.unobserve(en.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });
    els.forEach((e) => io.observe(e));
    // Guaranteed failsafe: setTimeout runs even when rAF/IO are throttled
    // (e.g. non-focused frames), so content is never stuck hidden.
    const t = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.in)').forEach(reveal);
    }, 700);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);
}

/* ---------- Navigation ---------- */
const NAV_LINKS = [
  { label: 'Home', href: 'index.html', key: 'home' },
  { label: 'Styles & Capabilities', href: 'styles-capabilities.html', key: 'capabilities' },
  { label: 'Specifications', href: 'specifications.html', key: 'specs' },
];

function NavBar({ active }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <React.Fragment>
      <header className={`pe-nav${scrolled ? ' scrolled' : ''}`}>
        <div className="pe-container pe-nav-inner">
          <a href="index.html" aria-label="Precision Electronics home" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <img className="pe-logo" src={scrolled ? 'assets/logo-dark.svg' : 'assets/logo-white.svg'} alt="Precision Electronics" />
          </a>

          <nav className="pe-nav-links">
            {NAV_LINKS.map(l => (
              <a key={l.key} href={l.href} className={`pe-nav-link${active === l.key ? ' active' : ''}`}>{l.label}</a>
            ))}
            <Button as="a" href="contact.html" variant="primary" size="sm">Contact</Button>
          </nav>

          <button className={`pe-burger${open ? ' open' : ''}`} aria-label="Menu" aria-expanded={open} onClick={() => setOpen(o => !o)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      <div className={`pe-mobile-menu${open ? ' open' : ''}`}>
        <div className="pe-container" style={{ paddingTop: '0.5rem', paddingBottom: '1.25rem' }}>
          {NAV_LINKS.map(l => (
            <a key={l.key} href={l.href} style={active === l.key ? { color: 'var(--pe-yellow)' } : null}>{l.label}</a>
          ))}
          <a href="contact.html" style={{ color: 'var(--pe-yellow)' }}>Contact →</a>
        </div>
      </div>
    </React.Fragment>
  );
}

/* ---------- Page hero band ---------- */
function Hero({ eyebrow, title, lead, actions, minH = '62vh', bgImage, children }) {
  return (
    <section className="pe-hero" style={{ minHeight: minH, display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4.5rem' }}>
      {bgImage ? (
        <React.Fragment>
          <div className="pe-hero-photo" style={{ backgroundImage: `url('${bgImage}')` }}></div>
          <div className="pe-hero-scrim"></div>
        </React.Fragment>
      ) : null}
      <div className="pe-grid-lines"></div>
      <div className="pe-container" style={{ position: 'relative' }}>
        <div style={{ maxWidth: 820 }}>
          {eyebrow ? <p className="pe-eyebrow reveal">{eyebrow}</p> : null}
          <h1 className="reveal d1" style={{ color: '#fff', fontSize: 'clamp(2.5rem, 6vw, 4.21rem)', lineHeight: 1.02, margin: '1.1rem 0 0', letterSpacing: '-0.01em' }}>{title}</h1>
          {lead ? <p className="reveal d2" style={{ color: 'var(--text-inverse-secondary)', fontSize: 'var(--text-xl)', maxWidth: 640, margin: '1.5rem 0 0', lineHeight: 1.45 }}>{lead}</p> : null}
          {actions ? <div className="reveal d3" style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', marginTop: '2.25rem' }}>{actions}</div> : null}
          {children}
        </div>
      </div>
    </section>
  );
}

/* ---------- Yellow CTA banner (Relume CTA 7 blueprint) — centered ---------- */
function CtaBanner() {
  return (
    <section style={{ background: 'var(--surface-accent)' }}>
      <div className="pe-container" style={{ padding: '6rem var(--container-pad)' }}>
        <div className="reveal" style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: 'var(--pe-navy)', margin: 0, fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.06, letterSpacing: '-0.01em' }}>Contact us today<br />with your application details</h2>
          <p style={{ color: 'rgba(27,49,83,0.78)', margin: '1.25rem auto 0', fontSize: 'var(--text-lg)', maxWidth: 560, lineHeight: 1.55 }}>
            Contact the experts at Precision Electronics today to discuss your project. Our team is ready to provide the support and guidance you need to bring your vision to life.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2.25rem' }}>
            <Button as="a" href="tel:+16318424900" variant="secondary" size="lg" iconLeft={<Icon name="phone" size={18} />}>Call</Button>
            <Button as="a" href="mailto:info@precisionelect.com" variant="secondary" size="lg" iconLeft={<Icon name="mail" size={18} />}>Email</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer (Relume Footer 3 blueprint) ---------- */
function Footer() {
  return (
    <footer style={{ background: 'var(--surface-inverse)' }}>
      <div className="pe-container" style={{ padding: '4.5rem var(--container-pad) 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 'var(--space-12)', paddingBottom: '3.5rem' }} className="pe-foot-grid">
          <div style={{ maxWidth: 420 }}>
            <img src="assets/logo-white.svg" alt="Precision Electronics" style={{ height: 26, marginBottom: '2rem' }} />
            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Address</div>
              <p style={{ color: 'var(--text-inverse-secondary)', margin: 0, lineHeight: 1.6 }}>1 Di Tomas Court, Copiague, New York 11726&ndash;1943</p>
            </div>
            <div>
              <div style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Contact</div>
              <a className="pe-foot-link" href="tel:+16318424900" style={{ textDecoration: 'underline', fontFamily: 'var(--font-body)', fontWeight: 400 }}>Tel: (631) 842&ndash;4900</a>
              <a className="pe-foot-link" href="tel:+16318424904" style={{ textDecoration: 'underline', fontFamily: 'var(--font-body)', fontWeight: 400 }}>Fax: (631) 842&ndash;4904</a>
              <a className="pe-foot-link" href="mailto:info@precisionelect.com" style={{ textDecoration: 'underline', fontFamily: 'var(--font-body)', fontWeight: 400 }}>info@precisionelect.com</a>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <a className="pe-foot-link" href="styles-capabilities.html">Styles &amp; Capabilities</a>
            <a className="pe-foot-link" href="specifications.html">Specifications</a>
            <a className="pe-foot-link" href="contact.html">Contact</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-inverse)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem 2rem', flexWrap: 'wrap', padding: '1.75rem 0 2rem' }}>
            <span style={{ color: 'var(--text-inverse-secondary)', fontSize: '0.85rem' }}>&copy; 2025 Precision Electronics, Inc. All rights reserved globally.</span>
            <div style={{ display: 'flex', gap: '1.75rem', flexWrap: 'wrap' }}>
              <a href="#" style={{ color: 'var(--text-inverse-secondary)', fontSize: '0.85rem', textDecoration: 'underline' }}>Privacy policy</a>
              <a href="#" style={{ color: 'var(--text-inverse-secondary)', fontSize: '0.85rem', textDecoration: 'underline' }}>Terms of service</a>
              <a href="#" style={{ color: 'var(--text-inverse-secondary)', fontSize: '0.85rem', textDecoration: 'underline' }}>Cookie settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Icon, useReveal, NavBar, Hero, CtaBanner, Footer });
