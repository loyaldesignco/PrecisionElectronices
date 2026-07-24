/* Precision Electronics — Specifications */
const SP_DS = window.PrecisionElectronicsDesignSystem_c79de0;
const { Card: SpCard, Tag: SpTag } = SP_DS;

const SPEC_GROUPS = [
  {
    icon: 'zap',
    title: 'Electrical',
    rows: [
      ['Power range', 'Sub-VA to multi-kVA — to your requirement'],
      ['Frequency', 'Line, mid and high frequency designs'],
      ['Voltage / turns ratio', 'Wound to your electrical specification'],
      ['Regulation & efficiency', 'Optimized to the operating point you define'],
      ['Insulation system', 'Class per application; hi-pot tested'],
    ],
  },
  {
    icon: 'ruler',
    title: 'Mechanical',
    rows: [
      ['Cores', 'Toroidal, EI, EE, C-core, pot and bobbin'],
      ['Mounting', 'PCB, chassis, bracket or flying-lead'],
      ['Terminations', 'Pins, tabs, flying leads or connectors'],
      ['Form factor', 'Low-profile and space-constrained builds'],
      ['Marking & labeling', 'Per drawing, program or MIL requirement'],
    ],
  },
  {
    icon: 'thermometer',
    title: 'Environmental',
    rows: [
      ['Temperature', 'Rated to your operating and storage range'],
      ['Sealing', 'Varnished, molded, filled or hermetic'],
      ['Vibration & shock', 'Ruggedized potting for field conditions'],
      ['Moisture & altitude', 'Encapsulation matched to the environment'],
      ['End markets', 'Aerospace, defense and industrial'],
    ],
  },
  {
    icon: 'file-check-2',
    title: 'Testing & Compliance',
    rows: [
      ['Quality system', 'ISO 9001:2008 — QAS registered'],
      ['Electrical test', '100% coverage before shipment'],
      ['First-article', 'Inspection with full lot traceability'],
      ['Standards', 'MIL-STD environmental & electrical testing'],
      ['Documentation', 'RoHS and compliance data on request'],
    ],
  },
];

function SpecCard({ group, delay }) {
  return (
    <div className={`reveal ${delay}`}>
      <SpCard variant="secondary" padding="lg" style={{ height: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <span style={{ display: 'inline-flex', width: 42, height: 42, alignItems: 'center', justifyContent: 'center', background: 'var(--pe-yellow-a20)', flex: 'none' }}>
            <Icon name={group.icon} size={22} color="#1b3153" />
          </span>
          <h3 style={{ margin: 0, fontSize: 'var(--h4-size)', fontWeight: 600 }}>{group.title}</h3>
        </div>
        <dl style={{ margin: 0 }}>
          {group.rows.map(([label, val], i) => (
            <div key={label} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.15rem', padding: '0.85rem 0', borderTop: i === 0 ? '0' : '1px solid var(--border-secondary)' }}>
              <dt style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.82rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>{label}</dt>
              <dd style={{ margin: 0, color: 'var(--text-primary)', lineHeight: 1.5 }}>{val}</dd>
            </div>
          ))}
        </dl>
      </SpCard>
    </div>
  );
}

function SpecsPage() {
  useReveal();
  return (
    <React.Fragment>
      <NavBar active="specs" />
      <Hero
        eyebrow="Build to Print"
        title="Specifications"
        lead="We build to your drawing. These are the parameters we work to — every value is set by your application, then qualified and tested."
      />

      <section className="pe-section">
        <div className="pe-container">
          <SectionHead
            eyebrow="Parameters"
            title="Engineered to your requirement"
            lead="Precision Electronics does not sell a catalog of fixed part numbers — we design each unit to the electrical, mechanical and environmental spec you provide."
            maxWidth={640}
            style={{ marginBottom: '3rem' }}
          />
          <div className="pe-grid-2">
            {SPEC_GROUPS.map((g, i) => (
              <SpecCard key={g.title} group={g} delay={`d${(i % 2) + 1}`} />
            ))}
          </div>
          <p className="reveal" style={{ marginTop: '2.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: 720, lineHeight: 1.6 }}>
            Working values, tolerances and certifications are confirmed against your drawing during design review. Send us your specification and we will respond with a build proposal — usually within one business day.
          </p>
        </div>
      </section>

      <QualityBand />
      <CtaBanner />
      <Footer />
    </React.Fragment>
  );
}
window.Page = SpecsPage;
