import { ArrowUpIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-stroke-light)",
        background: "rgba(10,10,10,0.95)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div className="container" style={{ paddingBlock: "var(--space-12)" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "var(--space-10)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Link to="/home">
              <img
                src="/logo.png"
                alt="Logo BipBip"
                style={{
                  height: 103,
                  width: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 20px rgba(132,204,22,0.35))",
                }}
              />
            </Link>
          </div>

          <nav
            style={{
              display: "flex",
              gap: "var(--space-16)",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-4)",
              }}
            >
              {[
                { to: "/listarusuarios", label: "Usuarios" },
                { to: "/viagens", label: "Viagens" },
                { to: "/listarveiculos", label: "Veiculos" },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  style={{
                    fontSize: "var(--rf-xs)",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--color-foreground-low)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--color-primary-light)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color =
                      "var(--color-foreground-low)")
                  }
                >
                  {label}
                </Link>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-4)",
              }}
            >
              {[
                { to: "/sobre", label: "Sobre" },
                { to: "/sobrenos", label: "Projeto" },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  style={{
                    fontSize: "var(--rf-xs)",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--color-foreground-low)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--color-primary-light)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color =
                      "var(--color-foreground-low)")
                  }
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Voltar ao topo"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-3)",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "var(--rf-xs)",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-foreground-low)",
              transition: "color 0.2s",
              padding: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--color-primary-light)";
              const circle = e.currentTarget.querySelector(
                "div",
              ) as HTMLElement;
              if (circle) circle.style.borderColor = "rgba(132,204,22,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--color-foreground-low)";
              const circle = e.currentTarget.querySelector(
                "div",
              ) as HTMLElement;
              if (circle)
                circle.style.borderColor = "var(--color-stroke-light)";
            }}
          >
            <span>Topo</span>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "var(--radius-full)",
                border: "1px solid var(--color-stroke-light)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "border-color 0.2s",
              }}
            >
              <ArrowUpIcon size={16} />
            </div>
          </button>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--color-stroke)",
            marginTop: "var(--space-10)",
            paddingTop: "var(--space-6)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--space-2)",
          }}
        >
          <p
            style={{
              fontSize: "var(--rf-xs)",
              color: "var(--color-foreground-low)",
              letterSpacing: "0.1em",
            }}
          >
            © {new Date().getFullYear()} BipBip — Projeto BugSlayers —
            Generation Brasil
          </p>
          <p
            style={{
              fontSize: "var(--rf-xs)",
              color: "var(--color-stroke-light)",
              letterSpacing: "0.08em",
            }}
          >
            React + TypeScript + NestJS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
