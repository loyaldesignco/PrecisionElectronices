/* Precision Electronics — shared content data */
const CONSTRUCTIONS = [
  { icon: 'wind', name: 'Dry', desc: 'Open-air construction with no oil or encapsulant. Simple, cost-effective, and easy to inspect — ideal for clean, controlled environments.' },
  { icon: 'square-dashed', name: 'Open', desc: 'Basic frame design with exposed windings and components. Common for prototypes, lab use, or when space and accessibility are a priority.' },
  { icon: 'droplets', name: 'Varnished', desc: 'Windings are coated with insulating varnish to reduce vibration, moisture ingress, and noise. A step up in durability from open builds.' },
  { icon: 'box', name: 'Epoxy / RTV Filled Molded', desc: 'Encapsulated in rigid (epoxy) or flexible (RTV) compounds for mechanical stability, moisture resistance, and electrical insulation. Great for rugged or high-vibration environments.' },
  { icon: 'droplet', name: 'Oil / Silicone Filled', desc: 'Immersed in dielectric oil or silicone to enhance thermal dissipation and insulation. Often used in high-voltage or high-power applications.' },
  { icon: 'shield-check', name: 'Hermetically Sealed', desc: 'Fully sealed in welded metal cases — often under vacuum — to prevent any ingress of moisture or contaminants. Ideal for aerospace, defense, or harsh environmental use.' },
  { icon: 'layers', name: 'Low Profile', desc: 'Designed with a flat form factor for tight enclosures or height-constrained designs. Often used in compact instrumentation or embedded systems.' },
  { icon: 'circle-dot', name: 'Toroidal', desc: 'Donut-shaped core with excellent efficiency and low electromagnetic interference. Lightweight and compact — commonly used in medical, audio, and precision power applications.' },
];

const CATEGORIES = [
  { icon: 'activity', name: 'Transformers', desc: 'Power, audio, pulse and signal transformers wound and tested to your electrical specification.' },
  { icon: 'waves', name: 'Inductors & Chokes', desc: 'Common-mode chokes, filter inductors and energy-storage coils for EMI control and power conditioning.' },
  { icon: 'circle-dot', name: 'Toroidal Coils', desc: 'Low-loss, low-EMI toroids wound to your electrical and mechanical requirements.' },
  { icon: 'ruler', name: 'Custom Magnetics', desc: 'Purpose-built assemblies engineered to your drawing when a standard part will not do.' },
];

const PROCESS = [
  { n: '01', name: 'Send your drawing', desc: 'Share your schematic, specification or sample. We review the electrical, mechanical and environmental requirements with you.' },
  { n: '02', name: 'Design & prototype', desc: 'Our engineers design to spec and build first-article prototypes for your evaluation and qualification.' },
  { n: '03', name: 'Qualify & test', desc: 'Every unit is electrically tested and qualified against MIL-STD and your acceptance criteria, with full documentation.' },
  { n: '04', name: 'Production', desc: 'We scale from prototype to full production runs with consistent, repeatable quality — delivered on schedule.' },
];

const QUALITY_POINTS = [
  'ISO 9001:2008 — QAS International registered firm',
  'First-article inspection and full lot traceability',
  '100% electrical test coverage before shipment',
  'MIL-STD environmental and electrical testing',
  'RoHS documentation available on request',
];

Object.assign(window, { CONSTRUCTIONS, CATEGORIES, PROCESS, QUALITY_POINTS });
