/* Precision Electronics — Styles & Capabilities */
function CapabilitiesPage() {
  useReveal();
  return (
    <React.Fragment>
      <NavBar active="capabilities" />
      <Hero
        eyebrow="Construction Types"
        title="Styles & Capabilities"
        lead="Precision Electronics builds custom magnetics in every construction — matched to the electrical, mechanical and environmental demands of your application."
      />
      <ConstructionGrid
        heading="Eight constructions, one supplier"
        lead="Each construction trades cost, size, thermal performance and ruggedness differently. Tell us the environment and we will recommend the right build."
      />
      <CategoryGrid
        eyebrow="Product Families"
        heading="Custom magnetics we build"
        lead="Standard families and fully bespoke assemblies — wound, potted, sealed and qualified in Copiague, New York."
      />
      <ProcessSteps panel eyebrow="Working with us" heading="From your drawing to qualified production" />
      <CtaBanner />
      <Footer />
    </React.Fragment>
  );
}
window.Page = CapabilitiesPage;
