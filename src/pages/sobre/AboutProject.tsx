import { useReveal, useCountAnimation } from "../../utils/useReveal";

export default function AboutProject() {
  useReveal();
  useCountAnimation();

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: 600,
            height: 600,
            top: "-15%",
            left: "-10%",
            background: "radial-gradient(circle, rgba(132,204,22,0.12) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "aurora-drift 14s ease-in-out infinite alternate",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 500,
            height: 500,
            top: "10%",
            right: "-8%",
            background: "radial-gradient(circle, rgba(101,163,13,0.10) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "aurora-drift 10s ease-in-out infinite alternate",
            animationDelay: "-4s",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 400,
            height: 400,
            bottom: "5%",
            left: "20%",
            background: "radial-gradient(circle, rgba(163,230,53,0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "aurora-drift 16s ease-in-out infinite alternate",
            animationDelay: "-8s",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 350,
            height: 350,
            top: "55%",
            right: "25%",
            background: "radial-gradient(circle, rgba(132,204,22,0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "aurora-drift 18s ease-in-out infinite alternate",
            animationDelay: "-2s",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(132,204,22,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(132,204,22,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <main className="page">
        <section className="hero">
          <div className="container">
            <div className="hero-inner">

              <div className="hero-text">
                <div className="hero-eyebrow reveal">
                  <span className="badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    Sobre o Projeto
                  </span>
                </div>

                <h1 className="hero-heading reveal reveal-delay-1">
                  Uma plataforma criada para{" "}
                  <em>conectar pessoas</em>, rotas e mobilidade elétrica sustentável.
                </h1>

                <p className="hero-body reveal reveal-delay-2">
                  O BipBip foi pensado pela nossa equipe para oferecer uma experiência mais fluida no agendamento e acompanhamento de caronas com carros elétricos, unindo interface moderna, estrutura escalável e gestão orientada à mobilidade ecológica.
                </p>

                <div className="hero-actions reveal reveal-delay-3">
                  <a
                    href="https://github.com/Grupo04-BugSlayers-TurmaJS13/Carona-compartilhada-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Acesse nosso repositório
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                  <span className="btn-ghost">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                      style={{ animation: "pulse 2s ease-in-out infinite", color: "var(--color-primary-light)" }}
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                    </svg>
                    Mobilidade inteligente e sustentável
                  </span>
                </div>
              </div>

              <div className="hero-right">
                <div className="hero-logo-wrap reveal reveal-delay-1">
                  <img
                    src="/logo-carona.png"
                    alt="Logo Carona Sustentável"
                    width={180}
                    height={60}
                    loading="eager"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = "flex";
                    }}
                  />
                  <div className="logo-fallback" style={{ display: "none" }}>
                    <div className="logo-fallback-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                    </div>
                    BipBip - Carona Sustentável
                  </div>
                </div>

                <div className="metrics-grid">
                  <article className="metric-card reveal reveal-delay-2">
                    <p className="metric-label">Experiência do frontend</p>
                    <h2 className="metric-value">React + Tailwind</h2>
                    <p className="metric-detail">Interface moderna com foco na responsividade, reutilização de código e identidade visual consistente.</p>
                  </article>
                  <article className="metric-card reveal reveal-delay-3">
                    <p className="metric-label">Arquitetura da API</p>
                    <h2 className="metric-value">Nest + Node</h2>
                    <p className="metric-detail">Estrutura preparada para suportar fluxos de agendamento de caronas de forma otimizada e escalável.</p>
                  </article>
                  <article className="metric-card reveal reveal-delay-4">
                    <p className="metric-label">Camada de dados</p>
                    <h2 className="metric-value">MySQL + TypeORM</h2>
                    <p className="metric-detail">Base relacional pensada para motoristas, passageiros, rotas, agendamentos e histórico de viagens.</p>
                  </article>
                </div>
              </div>

            </div>
          </div>
        </section>

        <div className="section-divider" />

        <section>
          <div className="container">
            <div className="mockup-wrap reveal">
              <div className="mockup-glow" aria-hidden="true" />

              <div className="mockup-header">
                <div>
                  <p className="mockup-title-eyebrow">Visão do produto</p>
                  <h2 className="mockup-title">Mockup conceitual da plataforma</h2>
                </div>
                <span className="status-pill">
                  <span className="status-pill-dot" />
                  Em evolução
                </span>
              </div>

              <div className="mockup-grid">
                <div className="mockup-row-1">
                  <article className="mockup-card">
                    <div className="mockup-card-header">
                      <div>
                        <p className="mockup-card-eyebrow">Agendamentos</p>
                        <h3 className="mockup-card-title">Acompanhamento visual</h3>
                      </div>
                      <div className="mockup-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                          <path d="M9.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 01-2.5 2.5H4a2 2 0 01-2-2V4a2 2 0 012-2h5.5z" />
                          <path d="M14.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 002.5 2.5H20a2 2 0 002-2V4a2 2 0 00-2-2h-5.5z" />
                        </svg>
                      </div>
                    </div>
                    <div className="progress-track">
                      <div className="progress-fill" />
                    </div>
                    <div className="stats-row">
                      <div className="stat-box">
                        <span className="stat-label">Caronas</span>
                        <span className="stat-value" data-count="128">0</span>
                      </div>
                      <div className="stat-box">
                        <span className="stat-label">Confirmadas</span>
                        <span className="stat-value" data-count="76">0</span>
                      </div>
                      <div className="stat-box">
                        <span className="stat-label">Concluídas</span>
                        <span className="stat-value" data-count="24">0</span>
                      </div>
                    </div>
                  </article>

                  <article className="mockup-card">
                    <p className="mockup-card-eyebrow">Áreas de foco</p>
                    <div className="focus-list">
                      <div className="focus-item"><span className="focus-dot" /> Gestão de motoristas</div>
                      <div className="focus-item"><span className="focus-dot" /> Rotas e agendamentos</div>
                      <div className="focus-item"><span className="focus-dot" /> Impacto ambiental</div>
                      <div className="focus-item"><span className="focus-dot" /> Monitoramento de viagens</div>
                    </div>
                  </article>
                </div>

                <article className="mockup-card">
                  <div className="highlights-header">
                    <div>
                      <p className="mockup-card-eyebrow">Destaques</p>
                      <h3 className="mockup-card-title">Projetado para clareza e ação.</h3>
                    </div>
                    <div className="highlights-icon-btn">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
                      </svg>
                    </div>
                  </div>

                  <div className="features-grid">
                    <div className="feature-card">
                      <div className="feature-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                          <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                          <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                        </svg>
                      </div>
                      <h4 className="feature-title">Visão de viagens</h4>
                      <p className="feature-desc">Acompanhe caronas agendadas, rotas ativas e passageiros com uma leitura mais clara da mobilidade elétrica do seu grupo.</p>
                    </div>
                    <div className="feature-card">
                      <div className="feature-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                          <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
                          <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
                        </svg>
                      </div>
                      <h4 className="feature-title">Fluxo Conectado</h4>
                      <p className="feature-desc">Rotas, interface, requisições e persistência em um só lugar! Pensadas para funcionar de forma integrada.</p>
                    </div>
                    <div className="feature-card">
                      <div className="feature-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                          <path d="M12 2L2 7l10 5 10-5-10-5z" />
                          <path d="M2 17l10 5 10-5" />
                          <path d="M2 12l10 5 10-5" />
                        </svg>
                      </div>
                      <h4 className="feature-title">Evolução contínua</h4>
                      <p className="feature-desc">A base do projeto permite crescer com novos módulos, relatórios de emissão evitada e regras de agendamento.</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        <section className="tech-section">
          <div className="container">

            <div className="tech-left reveal">
              <div>
                <span className="badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true" style={{ width: 14, height: 14 }}>
                    <circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                  </svg>
                  Tecnologias
                </span>
                <h2 className="tech-heading">Uma stack escolhida para entregar desempenho e crescimento.</h2>
                <p className="tech-body">O projeto é uma junção de frontend moderno, backend modular e ferramentas de colaboração para construir uma plataforma sólida e preparada para evoluir.</p>
              </div>
              <div className="tech-icons">
                <div className="tech-icon-chip chip-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-label="Frontend">
                    <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
                  </svg>
                </div>
                <div className="tech-icon-chip chip-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-label="Backend">
                    <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                  </svg>
                </div>
                <div className="tech-icon-chip chip-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-label="Ferramentas">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="tech-right">
              <article className="stack-card reveal reveal-delay-1">
                <div className="stack-card-glow" aria-hidden="true" />
                <div className="stack-card-header">
                  <div className="stack-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
                    </svg>
                  </div>
                  <h3 className="stack-title">Frontend</h3>
                </div>
                <div className="tags">
                  {["React", "TypeScript", "TailwindCSS", "React Router DOM", "Axios", "Phosphor Icons", "Lucide React", "React Spinners"].map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </article>

              <article className="stack-card reveal reveal-delay-2">
                <div className="stack-card-glow" aria-hidden="true" />
                <div className="stack-card-header">
                  <div className="stack-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                    </svg>
                  </div>
                  <h3 className="stack-title">Backend e dados</h3>
                </div>
                <div className="tags">
                  {["NestJS", "Node.js", "MySQL", "TypeORM", "Swagger"].map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </article>

              <article className="stack-card reveal reveal-delay-3">
                <div className="stack-card-glow" aria-hidden="true" />
                <div className="stack-card-header">
                  <div className="stack-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                    </svg>
                  </div>
                  <h3 className="stack-title">Ferramentas</h3>
                </div>
                <div className="tags">
                  {["GitHub", "Vercel", "VS Code", "Insomnia"].map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </article>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}