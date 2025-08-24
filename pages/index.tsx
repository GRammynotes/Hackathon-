import React from 'react';

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <span className="logo-text">SparkWave Innovation</span>
          </div>
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#features" className="nav-link">Challenge</a>
            <a href="#join" className="nav-link">Join Now</a>
          </div>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Open Innovation Challenge
              <span className="title-accent">Shape the Future</span>
            </h1>
            <p className="hero-description">
              Where creativity meets technology. Identify any problem, develop innovative solutions,
              and showcase your breakthrough ideas without restrictions.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">Join the Challenge</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-elements">
              <div className="element element-1">💡</div>
              <div className="element element-2">🚀</div>
              <div className="element element-3">⚡</div>
              <div className="element element-4">🔬</div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="section-content">
            <h2 className="section-title">Beyond Traditional Boundaries</h2>
            <p className="section-text">
              True creativity often emerges when participants are free to explore their own ideas.
              The Open Innovation challenge invites you to identify a problem of your choice and
              develop a technology-driven solution that addresses it in a meaningful way.
            </p>
          </div>
        </section>

        <section id="features" className="features">
          <div className="section-content">
            <h2 className="section-title">Why Join Our Challenge?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3 className="feature-title">Complete Freedom</h3>
                <p className="feature-description">
                  Think beyond predefined tracks. Experiment with novel concepts,
                  unique use cases, or emerging technologies.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💡</div>
                <h3 className="feature-title">Innovation Focus</h3>
                <p className="feature-description">
                  Focus on originality, feasibility, and potential impact.
                  Showcase your creativity without restrictions.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌍</div>
                <h3 className="feature-title">Real Impact</h3>
                <p className="feature-description">
                  Platform for disruptive ideas with strong potential for
                  real-world application and scalability.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🚀</div>
                <h3 className="feature-title">Future Ready</h3>
                <p className="feature-description">
                  Develop solutions that may not fit traditional problem statements
                  but demonstrate breakthrough potential.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="join" className="cta-section">
          <div className="section-content">
            <h2 className="cta-title">Ready to Shape the Future?</h2>
            <p className="cta-text">
              Join innovators, creators, and visionaries in pushing the boundaries
              of what's possible with technology.
            </p>
            <button className="btn-large">Start Your Innovation Journey</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 SparkWave Innovation. Empowering breakthrough ideas.</p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
          margin-bottom: 2rem;
        }

        .description {
          text-align: center;
          line-height: 1.5;
          font-size: 1.5rem;
          margin-bottom: 3rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
          gap: 1rem;
        }

        .card {
          margin: 1rem;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          width: 45%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .card:hover {
          border-color: rgba(255, 255, 255, 0.4);
          background: rgba(255, 255, 255, 0.15);
        }

        .card h2 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        code {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', monospace;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
          .card {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
