/* Precision Electronics — Home (faithful to live site) */
const H_DS = window.PrecisionElectronicsDesignSystem_c79de0;

function HomeHero() {
  return (
    <section className="pe-hero pe-home-hero" style={{ minHeight: '92vh', display: 'flex' }}>
      <div className="pe-hero-photo" style={{ backgroundImage: "url('assets/hero-jet.jpg')" }}></div>
      <div className="pe-container pe-home-hero-inner">
        <div className="pe-hero-title reveal" style={{ maxWidth: 760 }}>
          <p className="pe-eyebrow pe-hero-text" style={{ fontSize: '1rem', letterSpacing: '0.02em', textTransform: 'none', fontWeight: 500 }}>Military &nbsp;-&nbsp; Aerospace &nbsp;-&nbsp; Industrial</p>
          <h1 className="pe-hero-text" style={{ color: '#fff', fontSize: 'clamp(2.8rem, 7vw, 5rem)', lineHeight: 1.02, margin: '1.1rem 0 0', letterSpacing: '-0.01em' }}>Transformers &amp;<br />Magnetics</h1>
        </div>

        <div className="pe-hero-cluster reveal d2">
          <p className="pe-hero-text" style={{ color: '#fff', fontSize: 'var(--text-lg)', lineHeight: 1.5, margin: 0, maxWidth: 320 }}>
            Precision Electronics, Inc. has been a source for a wide variety of custom magnetics since 1959.
          </p>
          <div className="pe-cert-strip">
            <a className="pe-cert-chip" href="assets/iso-9001-certificate.pdf" target="_blank" rel="noopener"><img src="assets/iso-9001-qas.jpg" alt="ISO 9001:2015 QAS International Registered Firm — Certificate No. US3620" /></a>
            <span className="pe-cert-chip"><img src="assets/cert-itar.png" alt="ITAR Registered — International Traffic in Arms Regulations" /></span>
            <span className="pe-cert-chip"><img src="assets/cert-cmmc.png" alt="CMMC — Cybersecurity Maturity Model Certification Compliance" /></span>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  useReveal();
  return (
    <React.Fragment>
      <NavBar active="home" />
      <HomeHero />
      <ConstructionGrid
        headerMode="split"
        heading="The leading source for prototypes thru production"
        lead="Precision Electronics, Inc. specializes in custom magnetics to meet your project-specific electrical, mechanical and environmental requirements."
      />
      <CtaBanner />
      <Footer />
    </React.Fragment>
  );
}

window.Page = HomePage;
