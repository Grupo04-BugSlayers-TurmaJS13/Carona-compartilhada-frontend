import { UserIcon } from "@phosphor-icons/react";
// import { Link, useNavigate } from "react-router-dom";
import { FaCar, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useState, useEffect, useRef, useContext } from "react";
import { GoHome, GoProjectRoadmap } from "react-icons/go";
import { HiMenu, HiX } from "react-icons/hi";
import { RoadIcon } from "lucide-react";
import { FaPeopleGroup } from "react-icons/fa6";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

function Navbar() {
  // const navigate = useNavigate();
  const [menuAberto, setMenuAberto] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const { handleLogout } = useContext(AuthContext)

  function fecharMenu() {
    setMenuAberto(false);
  }

  // 🔥 Fecha ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuAberto(false);
      }
    }

    if (menuAberto) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuAberto]);

  const links = [
    { to: "/home", label: "Home", icon: <GoHome size={20} /> },
    { to: "/listarusuarios", label: "Usuários", icon: <FaUser size={20} /> },
    { to: "/listarviagens", label: "Viagens", icon: <RoadIcon size={20} /> },
    { to: "/listarveiculos", label: "Veículos", icon: <FaCar size={20} /> },
    { to: "/sobre", label: "Sobre", icon: <GoProjectRoadmap size={20} /> },
    { to: "/sobrenos", label: "Sobre nós", icon: <FaPeopleGroup size={20} /> },
  ];

  const linkStyle = {
    display: "inline-flex",
    margin: "auto",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "var(--space-2)",
    fontSize: "var(--rf-xs)",
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
        {/* LOGO */}
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

        {/* MENU DESKTOP */}
        <nav
          className="hidden lg:flex"
          style={{
            alignItems: "center",
            gap: "var(--space-6)",
            flex: 1,
          }}
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
            {/* PERFIL */}
            <Link to="/perfil">
              <div
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
                }}
              >
                <UserIcon size={18} />
              </div>
            </Link>

            {/* SAIR */}
            <Link
              to="/login"
              onClick={handleLogout}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--space-2)",
                fontSize: "var(--rf-xs)",
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                border: "1px solid rgba(132,204,22,0.2)",
                background: "rgba(132,204,22,0.06)",
                color: "var(--color-primary-light)",
                borderRadius: "var(--radius-full)",
                padding: "var(--space-2) var(--space-5)",
              }}
            >
              <FaSignOutAlt size={14} />
              Sair
            </Link>
          </div>
        </nav>

        {/* BOTÃO HAMBURGUER */}
        <button
          className="lg:hidden"
          onClick={() => setMenuAberto(!menuAberto)}
          style={{
            width: 36,
            height: 36,
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--color-stroke-light)",
            background: "rgba(31,31,31,0.5)",
            color: "var(--color-foreground-muted)",
            marginLeft: "auto",
          }}
        >
          {menuAberto ? (<HiX size={22} className="justify-center items-center text-center m-auto" />) : (
            <HiMenu size={22} className="justify-center items-center text-center m-auto" />
          )}
        </button>
      </div>

      {/* MENU MOBILE */}
      {menuAberto && (
        <>
          {/* OVERLAY */}
          <div
            className="fixed inset-0 bg-black/60 z-40 top-16"
            onClick={() => setMenuAberto(false)}
          />

          {/* MENU LATERAL */}
          <div
            ref={menuRef}
            className="fixed right-0 w-[280px] z-50 lg:hidden rounded-lg
              bg-[var(--color-background-card)] backdrop-blur-xl top-16 
              border-l border-[var(--color-stroke)] shadow-[var(--shadow-soft)] flex flex-col p-6 gap-6 animate-slide-in "
          >
            {links.map(({ to, label, icon }) => (
              <Link
                key={to}
                to={to}
                onClick={fecharMenu}
                className="flex items-center gap-3 rf-sm font-semibold uppercase tracking-widest 
                  text-[var(--color-foreground-low)] hover:text-[var(--color-primary-light)]
                  py-2 border-b border-[var(--color-stroke)] transition"
              >
                {icon && icon}
                {label}
              </Link>
            ))}

            <div className="mt-auto flex flex-col gap-4">
              <Link
                to="/perfil"
                onClick={fecharMenu}
                className="flex items-center gap-2 text-[var(--color-foreground-muted)] uppercase font-semibold"
              >
                <UserIcon size={20} />
                Perfil
              </Link>

              <Link
                to="/login"
                onClick={() => {
                  handleLogout();
                  fecharMenu();
                }}
                className="flex items-center justify-center gap-2
                bg-[var(--color-primary)] font-semibold uppercase tracking-widest
                text-[var(--color-background-card)]
                py-2 rounded-full hover:bg-[var(--color-primary-dark)] transition"
              >
                <FaSignOutAlt size={18} />
                Sair
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  )
}

export default Navbar
