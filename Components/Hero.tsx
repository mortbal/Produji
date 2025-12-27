export default function Hero() {
  return (
    <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to Produji
        </h1>
        <p className="text-xl md:text-2xl text-text-muted mb-8 max-w-2xl mx-auto">
          A modular SaaS platform designed for architects, engineers, and facility managers.
          Subscribe only to the modules you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 rounded-lg bg-secondary hover:bg-hover border border-border-primary transition-colors font-medium text-lg">
            Explore Modules
          </button>
          <button className="px-8 py-3 rounded-lg bg-card hover:bg-hover border-2 border-border-primary transition-colors font-medium text-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
