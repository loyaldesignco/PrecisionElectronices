/* Precision Electronics — Contact (no forms — direct contact only) */
const C_DS = window.PrecisionElectronicsDesignSystem_c79de0;
const { Card: CCard, Button: CButton } = C_DS;

function ContactDetails() {
  const rows = [
    { icon: 'map-pin', label: 'Address', value: <React.Fragment>1 Di Tomas Court<br />Copiague, New York 11726&ndash;1943</React.Fragment> },
    { icon: 'phone', label: 'Telephone', value: <a href="tel:+16318424900">(631) 842&ndash;4900</a> },
    { icon: 'printer', label: 'Fax', value: <span>(631) 842&ndash;4904</span> },
    { icon: 'mail', label: 'Email', value: <a href="mailto:info@precisionelect.com">info@precisionelect.com</a> },
  ];
  return (
    <div>
      <p className="pe-eyebrow ink">Get in touch</p>
      <h2 style={{ margin: '0.9rem 0 0', fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)', lineHeight: 1.05, letterSpacing: '-0.01em' }}>Send us your drawing</h2>
      <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-lg)', margin: '1.1rem 0 0', lineHeight: 1.55, maxWidth: 460 }}>
        Call or email the engineers at Precision Electronics, Inc. with your application details. We&rsquo;ll come back with a quote — usually within one business day.
      </p>
      <div style={{ marginTop: '2.25rem', display: 'grid', gap: 'var(--space-5)' }}>
        {rows.map(r => (
          <div key={r.label} style={{ display: 'flex', gap: '0.9rem', alignItems: 'flex-start' }}>
            <span style={{ display: 'inline-flex', width: 40, height: 40, alignItems: 'center', justifyContent: 'center', background: 'var(--pe-navy-a05)', border: '1px solid var(--border-primary)', flex: 'none' }}>
              <Icon name={r.icon} size={19} color="#1b3153" />
            </span>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>{r.label}</div>
              <div style={{ color: 'var(--text-primary)', lineHeight: 1.5 }}>{r.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DirectContactCard() {
  return (
    <CCard variant="inverse" padding="lg" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
      <div>
        <p className="pe-eyebrow">Talk to an engineer</p>
        <h3 style={{ color: '#fff', margin: '0.75rem 0 0', fontSize: 'var(--h3-size)', fontWeight: 600, lineHeight: 1.1 }}>Reach us directly</h3>
        <p style={{ color: 'var(--text-inverse-secondary)', margin: '0.85rem 0 0', lineHeight: 1.6 }}>
          No forms — just a direct line to the people who build the part. Have your drawing, spec or sample ready and we&rsquo;ll get straight to a quote.
        </p>
      </div>

      <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
        <CButton as="a" href="tel:+16318424900" variant="primary" size="lg" fullWidth iconLeft={<Icon name="phone" size={19} />}>Call (631) 842&ndash;4900</CButton>
        <CButton as="a" href="mailto:info@precisionelect.com" variant="inverse" size="lg" fullWidth iconLeft={<Icon name="mail" size={19} />}>Email info@precisionelect.com</CButton>
      </div>

      <div style={{ borderTop: '1px solid var(--border-inverse)', paddingTop: 'var(--space-5)', display: 'grid', gap: 'var(--space-3)' }}>
        {[['clock', 'Mon–Fri, 8:00am–5:00pm ET'], ['file-text', 'Send drawings & specs to info@precisionelect.com'], ['shield-check', 'ISO 9001:2015 — QAS registered']].map(([i, t]) => (
          <div key={t} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'var(--text-inverse-secondary)' }}>
            <Icon name={i} size={18} color="#ffc600" style={{ flex: 'none' }} />
            <span style={{ lineHeight: 1.4 }}>{t}</span>
          </div>
        ))}
      </div>
    </CCard>
  );
}

function ContactPage() {
  useReveal();
  return (
    <React.Fragment>
      <NavBar active="contact" />
      <Hero
        eyebrow="Request a Quote"
        title="Contact"
        lead="Talk to the engineers who build the part. We&rsquo;re ready to support your project from prototype to production."
        minH="52vh"
      />
      <section className="pe-section">
        <div className="pe-container">
          <div className="pe-contact-grid">
            <div className="reveal"><ContactDetails /></div>
            <div className="reveal d1"><DirectContactCard /></div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}
window.Page = ContactPage;
