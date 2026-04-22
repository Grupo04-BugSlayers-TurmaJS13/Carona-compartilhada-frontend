import { UserIcon } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { useState } from "react";
import { GoHome } from "react-icons/go";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const navigate = useNavigate();
  const [menuAberto, setMenuAberto] = useState(false);

  function logout() {
    navigate("/");
  }

  function fecharMenu() {
    setMenuAberto(false);
  }

  const links = [
    { to: "/home", label: "Home", icon: <GoHome size={16} /> },
    { to: "/listarusuarios", label: "Usuarios" },
    { to: "/listarviagens", label: "Viagens" },
    { to: "/listarveiculos", label: "Veículos" },
    { to: "/sobre", label: "Sobre" },
    { to: "/sobrenos", label: "Sobre nós" },
  ];

  const linkStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--space-2)",
    fontSize: "var(--text-xs)",
    fontWeight: 600,
    letterSpacing: "0.16em",
    textTransform: "uppercase" as const,
    color: "var(--color-foreground-low)",
    transition: "color 0.2s",
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: "1px solid var(--color-stroke-light)",
        background: "rgba(10,10,10,0.85)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div
        className="container"
        style={{
          height: 64,
          display: "flex",
          alignItems: "center",
          gap: "var(--space-6)",
        }}
      >
        <Link to="/home" style={{ flexShrink: 0 }}>
          <img
            src="/logo.png"
            alt="Logo BipBip"
            style={{
              height: 52,
              width: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 0 20px rgba(132,204,22,0.45))",
            }}
          />
        </Link>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-6)",
            flex: 1,
          }}
          className="hidden md:flex"
        >
          {links.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              style={linkStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-primary-light)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-foreground-low)")
              }
            >
              {icon && icon}
              {label}
            </Link>
          ))}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-3)",
              marginLeft: "auto",
            }}
          >
            <button
              aria-label="Perfil do usuário"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 36,
                height: 36,
                borderRadius: "var(--radius-full)",
                border: "1px solid var(--color-stroke-light)",
                background: "rgba(31,31,31,0.5)",
                color: "var(--color-foreground-low)",
                cursor: "pointer",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(132,204,22,0.4)";
                e.currentTarget.style.color = "var(--color-primary-light)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-stroke-light)";
                e.currentTarget.style.color = "var(--color-foreground-low)";
              }}
            >
              <UserIcon size={18} />
            </button>

            <Link
              to="/login"
              onClick={logout}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--space-2)",
                fontSize: "var(--text-xs)",
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                border: "1px solid rgba(132,204,22,0.2)",
                background: "rgba(132,204,22,0.06)",
                color: "var(--color-primary-light)",
                borderRadius: "var(--radius-full)",
                padding: "var(--space-2) var(--space-5)",
                transition: "background 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(132,204,22,0.12)";
                e.currentTarget.style.borderColor = "rgba(132,204,22,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(132,204,22,0.06)";
                e.currentTarget.style.borderColor = "rgba(132,204,22,0.2)";
              }}
            >
              <FaSignOutAlt size={14} />
              Sair
            </Link>
          </div>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir menu"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 36,
            height: 36,
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--color-stroke-light)",
            background: "rgba(31,31,31,0.5)",
            color: "var(--color-foreground-muted)",
            cursor: "pointer",
            marginLeft: "auto",
          }}
        >
          {menuAberto ? <HiX size={18} /> : <HiMenu size={18} />}
        </button>
      </div>

      {menuAberto && (
        <div
          style={{
            borderTop: "1px solid var(--color-stroke)",
            background: "rgba(10,10,10,0.97)",
            backdropFilter: "blur(20px)",
            padding: "var(--space-6) var(--space-4)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-4)",
          }}
          className="md:hidden"
        >
          {links.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              onClick={fecharMenu}
              style={linkStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-primary-light)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-foreground-low)")
              }
            >
              {icon && icon}
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
