/* Precision Electronics — reusable page sections
   Relume blueprints (Layout294, Layout611, CTA7) skinned with the PE design system. */
const S_DS = window.PrecisionElectronicsDesignSystem_c79de0;
const { Card, Tag, Button: SButton, Eyebrow } = S_DS;

/* Section heading block */
function SectionHead({ eyebrow, title, lead, align = 'left', maxWidth = 620, style }) {
  return (
    <div className="reveal" style={{ maxWidth, marginLeft: align === 'center' ? 'auto' : 0, marginRight: align === 'center' ? 'auto' : 0, textAlign: align, ...style }}>
      {eyebrow ? <p className="pe-eyebrow ink">{eyebrow}</p> : null}
      <h2 style={{ margin: '0.9rem 0 0', fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)', lineHeight: 1.05, letterSpacing: '-0.01em' }}>{title}</h2>
      {lead ? <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-lg)', margin: '1.1rem 0 0', lineHeight: 1.55 }}>{lead}</p> : null}
    </div>
  );
}

/* Construction styles — dark navy section (Relume Layout 294 blueprint), plain text columns */
function ConstructionGrid({ headerMode = 'standard', eyebrow = 'Styles & Capabilities', heading = 'Every construction, one supplier', lead }) {
  const items = window.CONSTRUCTIONS;
  return (
    <section style={{ background: 'linear-gradient(180deg, #1b3153 0%, #14243c 100%)', color: '#fff', padding: '6.5rem 0', position: 'relative' }}>
      <div className="pe-container">
        {headerMode === 'split' ? (
          <div className="pe-cg-split reveal" style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: '#fff', margin: 0, fontSize: 'clamp(1.9rem, 3.6vw, 2.9rem)', lineHeight: 1.05, letterSpacing: '-0.01em' }}>{heading}</h2>
            {lead ? <p style={{ color: 'var(--text-inverse-secondary)', fontSize: 'var(--text-lg)', margin: 0, lineHeight: 1.6, alignSelf: 'center' }}>{lead}</p> : null}
          </div>
        ) : (
          <div className="reveal" style={{ maxWidth: 720, marginBottom: '4rem' }}>
            <p className="pe-eyebrow">{eyebrow}</p>
            <h2 style={{ color: '#fff', margin: '0.9rem 0 0', fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)', lineHeight: 1.05, letterSpacing: '-0.01em' }}>{heading}</h2>
            {lead ? <p style={{ color: 'var(--text-inverse-secondary)', fontSize: 'var(--text-lg)', margin: '1.1rem 0 0', lineHeight: 1.55, maxWidth: 620 }}>{lead}</p> : null}
          </div>
        )}
        <div className="pe-grid-4">
          {items.map((c, i) => (
            <div key={c.name} className={`reveal d${(i % 4) + 1}`} style={{ borderTop: '1px solid var(--border-inverse)', paddingTop: '1.5rem' }}>
              <h3 style={{ color: '#fff', margin: '0 0 0.65rem', fontSize: 'var(--h4-size)', fontWeight: 600 }}>{c.name}</h3>
              <p style={{ color: 'var(--text-inverse-secondary)', margin: 0, lineHeight: 1.65, fontSize: '0.95rem' }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Product categories — light, DS interactive cards */
function CategoryGrid({ eyebrow = 'Products', heading = 'Custom magnetics we build', lead, linkAll = true }) {
  const items = window.CATEGORIES;
  return (
    <section className="pe-section">
      <div className="pe-container">
        <SectionHead eyebrow={eyebrow} title={heading} lead={lead} style={{ marginBottom: '3rem' }} />
        <div className="pe-grid-4">
          {items.map((c, i) => (
            <a key={c.name} href="styles-capabilities.html" className={`reveal d${(i % 4) + 1}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <Card interactive padding="lg" topRule style={{ height: '100%' }}>
                <span style={{ display: 'inline-flex', width: 48, height: 48, alignItems: 'center', justifyContent: 'center', background: 'var(--pe-yellow-a20)', marginBottom: '1.25rem' }}>
                  <Icon name={c.icon} size={24} color="#1b3153" />
                </span>
                <h3 style={{ margin: '0 0 0.5rem', fontSize: 'var(--h4-size)', fontWeight: 600 }}>{c.name}</h3>
                <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>{c.desc}</p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '1.25rem', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.9rem', color: 'var(--pe-navy)' }}>
                  Learn more <span aria-hidden="true">&rarr;</span>
                </span>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Process — numbered steps (Relume Layout 611 blueprint) */
function ProcessSteps({ eyebrow = 'How it works', heading = 'From first prototype to full production', panel = false }) {
  const items = window.PROCESS;
  return (
    <section className="pe-section" style={panel ? { background: 'var(--surface-panel)' } : null}>
      <div className="pe-container">
        <SectionHead eyebrow={eyebrow} title={heading} lead="One partner from drawing to delivery — every stage documented, qualified and tested." maxWidth={560} style={{ marginBottom: '3.5rem' }} />
        <div className="pe-grid-2-lines">
          {items.map((p) => (
            <div key={p.n} className="reveal" style={{ display: 'flex', gap: 'var(--space-6)', borderTop: '1px solid var(--border-secondary)', paddingTop: '1.75rem' }}>
              <div style={{ flex: 'none', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '2.4rem', lineHeight: 1, color: 'var(--pe-yellow-hover)' }}>{p.n}</div>
              <div>
                <h3 style={{ margin: '0 0 0.5rem', fontSize: 'var(--h4-size)', fontWeight: 600 }}>{p.name}</h3>
                <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Quality & certification — deep navy band */
function QualityBand() {
  const points = window.QUALITY_POINTS;
  return (
    <section style={{ background: 'var(--surface-inverse)', color: '#fff', padding: '6rem 0' }}>
      <div className="pe-container">
        <div className="pe-quality-grid">
          <div className="reveal">
            <p className="pe-eyebrow">Quality &amp; Certification</p>
            <h2 style={{ color: '#fff', margin: '0.9rem 0 0', fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)', lineHeight: 1.05, letterSpacing: '-0.01em' }}>Qualified, documented, repeatable</h2>
            <p style={{ color: 'var(--text-inverse-secondary)', fontSize: 'var(--text-lg)', margin: '1.1rem 0 0', lineHeight: 1.55, maxWidth: 520 }}>
              Every unit is built under an ISO 9001 quality system and electrically tested before it leaves Copiague. First-article inspection, full traceability and compliance documentation on request.
            </p>
          </div>
          <ul className="pe-clean-list reveal d1" style={{ display: 'grid', gap: 'var(--space-4)' }}>
            {points.map(t => (
              <li key={t} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', borderTop: '1px solid var(--border-inverse)', paddingTop: 'var(--space-4)' }}>
                <Icon name="check" size={20} color="#ffc600" style={{ marginTop: 2, flex: 'none' }} />
                <span style={{ color: '#fff', lineHeight: 1.5 }}>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { SectionHead, ConstructionGrid, CategoryGrid, ProcessSteps, QualityBand });
