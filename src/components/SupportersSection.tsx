
const SupportersSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-card/50 to-card/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted Partners on
              <span className="text-olly-green"> Our Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are fortunate to be backed by leading investors and guided by industry experts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Investors</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We're proud to have the backing of visionary investors who share our belief in the future of efficient telemetry, including <strong className="text-olly-green">Dig Ventures</strong> and strategic investments from <strong className="text-olly-green">Dash0, Datadog, and Grafana Labs.</strong>
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="text-lg font-semibold text-muted-foreground">Dig Ventures</div>
                <div className="text-lg font-semibold text-muted-foreground">Dash0</div>
                <div className="text-lg font-semibold text-muted-foreground">Datadog</div>
                <div className="text-lg font-semibold text-muted-foreground">Grafana Labs</div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Advisors</h3>
              <p className="text-muted-foreground leading-relaxed">
                We benefit from the guidance of renowned experts in distributed tracing and observability, such as <strong className="text-olly-green">Ben Sigelman</strong> (co-founder of Lightstep), <strong className="text-olly-green">Dr. Raja R. Sambasivan</strong>, and <strong className="text-olly-green">Vijay Samuel</strong> (Observability Architect at eBay).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportersSection;
