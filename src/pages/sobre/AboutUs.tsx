import { motion } from "framer-motion";
import { Blocks, FileText, ShieldCheck } from "lucide-react";
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import {
  BrandLogo,
  PageShell,
  fadeUp,
  staggerContainer,
} from "../../components/about/AboutShared";

const developers = [
  {
    name: "Bianca",
    role: "Desenvolvedora",
    linkedin: "https://www.linkedin.com/in/bia-caetano",
    github: "https://github.com/bia024",
    portfolio: "",
    image: "/bianca.jpeg",
  },
  {
    name: "Clarisse",
    role: "Desenvolvedora",
    linkedin: "https://www.linkedin.com/in/clarissee-rodriguess",
    github: "https://github.com/clarodriguess",
    portfolio: "https://clarodriguess.github.io/portfolio/",
    image: "/clarisse.jpeg",
  },
  {
    name: "Gabriela",
    role: "Desenvolvedora",
    linkedin:
      "https://www.linkedin.com/in/gabriela-almeida-escalera-dos-santos-27022b3a0/",
    github: "https://github.com/Gaalmeida-dev",
    portfolio: "https://portfolio-blogpessoal.onrender.com/#hero",
    image: "/gabriela.jpeg",
  },
  {
    name: "Leonardo",
    role: "Desenvolvedor",
    linkedin: "https://www.linkedin.com/in/leonardo-botelho-b29061174",
    github: "https://github.com/Botelhool",
    portfolio: "",
    image: "/leonardo.jpeg",
  },
  {
    name: "Ramon",
    role: "Desenvolvedor",
    linkedin: "https://www.linkedin.com/in/ramon-alberto",
    github: "https://github.com/RAMONBRX",
    portfolio: "https://ramonbrx.github.io/Portfolio/",
    image: "/ramon.jpeg",
  },
  {
    name: "Sabrina",
    role: "Desenvolvedora",
    linkedin: "https://www.linkedin.com/in/sabrina-novaes",
    github: "https://github.com/SabrinaNovaes",
    portfolio: "https://sabrina-novaes-portifolio.vercel.app/",
    image: "/sabrina.jpeg",
  },
];

const collaborationPillars = [
  {
    title: "Colaboração compartilhada",
    description:
      "Um fluxo em grupo orientado por consistência visual, alinhamento técnico e integração entre entregas.",
    icon: Blocks,
  },
  {
    title: "Documentação prática",
    description:
      "Swagger, organização de repositório e boas ferramentas de desenvolvimento fortalecem a manutenção do projeto.",
    icon: FileText,
  },
  {
    title: "Base Confiável",
    description:
      "A stack foi escolhida para apoiar a escalabilidade, produtividade e uma experiência fluida na colaboração.",
    icon: ShieldCheck,
  },
];

const iconButtonStyle = {
  border: "1px solid var(--color-stroke-light)",
  background: "rgba(31,31,31,0.5)",
  color: "var(--color-foreground-muted)",
  borderRadius: "var(--radius-full)",
  width: 44,
  height: 44,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "border-color 0.2s, background 0.2s, color 0.2s",
  flexShrink: 0,
} as React.CSSProperties;

function SocialBtn({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      href={href || "#"}
      target={href ? "_blank" : "_self"}
      rel="noreferrer"
      aria-label={label}
      style={iconButtonStyle}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(132,204,22,0.35)";
        el.style.background = "rgba(132,204,22,0.08)";
        el.style.color = "var(--color-primary-light)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--color-stroke-light)";
        el.style.background = "rgba(31,31,31,0.5)";
        el.style.color = "var(--color-foreground-muted)";
      }}
    >
      {children}
    </motion.a>
  );
}

export default function AboutUs() {
  return (
    <PageShell>
      <main className="page">
        <section>
          <div className="container">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                width: "100%",
                marginBottom: "var(--space-16)",
              }}
            >
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: "var(--space-6)",
                  width: "100%",
                  maxWidth: "680px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <motion.div custom={0} variants={fadeUp}>
                  <span className="badge">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    Sobre nós
                  </span>
                </motion.div>

                <motion.div
                  custom={0.08}
                  variants={fadeUp}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                </motion.div>

                <motion.h1
                  custom={0.16}
                  variants={fadeUp}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-2xl)",
                    fontWeight: 700,
                    color: "var(--color-foreground-white)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.12,
                    width: "100%",
                    maxWidth: "none",
                  }}
                >
                  Somos um time dedicado a{" "}
                  <em
                    className="not-italic"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 60%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    desenvolver soluções digitais.
                  </em>
                </motion.h1>

                <motion.p
                  custom={0.22}
                  variants={fadeUp}
                  style={{
                    fontSize: "var(--text-base)",
                    color: "var(--color-foreground-muted)",
                    lineHeight: 1.75,
                    width: "100%",
                    maxWidth: "none",
                  }}
                >
                  Nossa equipe combina colaboração, cuidado com interface e
                  desenvolvimento orientado a produto para construir uma solução
                  mais organizada, intuitiva e preparada para evoluir.
                </motion.p>
              </motion.div>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
            >
              {developers.map((dev, index) => (
                <motion.article
                  key={dev.name}
                  custom={index * 0.08}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative overflow-hidden flex flex-col"
                  style={{
                    border: "1px solid var(--color-stroke-light)",
                    background: "rgba(20,20,20,0.6)",
                    backdropFilter: "blur(20px)",
                    borderRadius: "var(--radius-3xl)",
                    padding: "var(--space-6)",
                    transition: "border-color 0.3s, box-shadow 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(132,204,22,0.25)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "var(--shadow-bip)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "var(--color-stroke-light)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div
                    className="absolute inset-x-0 top-0 h-48 opacity-0 transition duration-500 group-hover:opacity-100 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at 50% 0%, rgba(132,204,22,0.12) 0%, transparent 70%)",
                    }}
                  />

                  <div className="relative z-10 flex flex-col items-center text-center flex-1">
                    <div
                      className="flex flex-col items-center"
                      style={{
                        gap: "var(--space-4)",
                        marginBottom: "var(--space-6)",
                      }}
                    >
                      {dev.image ? (
                        <div
                          className="overflow-hidden transition duration-300"
                          style={{
                            width: 96,
                            height: 96,
                            borderRadius: "var(--radius-full)",
                            border: "2px solid var(--color-stroke-light)",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor =
                              "rgba(132,204,22,0.4)";
                            (e.currentTarget as HTMLElement).style.boxShadow =
                              "0 0 20px rgba(132,204,22,0.2)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor =
                              "var(--color-stroke-light)";
                            (e.currentTarget as HTMLElement).style.boxShadow =
                              "none";
                          }}
                        >
                          <img
                            src={dev.image}
                            alt={dev.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ) : (
                        <div
                          className="flex items-center justify-center text-2xl font-semibold"
                          style={{
                            width: 96,
                            height: 96,
                            borderRadius: "var(--radius-full)",
                            border: "1px solid rgba(132,204,22,0.2)",
                            background: "rgba(132,204,22,0.08)",
                            color: "var(--color-primary-light)",
                            fontFamily: "var(--font-display)",
                          }}
                        >
                          {dev.name.charAt(0)}
                        </div>
                      )}

                      <span
                        className="uppercase tracking-[0.2em] font-semibold"
                        style={{
                          fontSize: "var(--text-xs)",
                          border: "1px solid rgba(132,204,22,0.2)",
                          background: "rgba(132,204,22,0.06)",
                          color: "var(--color-primary-light)",
                          borderRadius: "var(--radius-full)",
                          padding: "var(--space-1) var(--space-4)",
                        }}
                      >
                        {dev.role}
                      </span>
                    </div>

                    <div
                      style={{ gap: "var(--space-2)" }}
                      className="flex flex-col"
                    >
                      <h2
                        className="font-semibold"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "var(--text-lg)",
                          color: "var(--color-foreground-white)",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {dev.name}
                      </h2>
                      <p
                        className="leading-7 mx-auto"
                        style={{
                          fontSize: "var(--text-sm)",
                          color: "var(--color-foreground-muted)",
                          maxWidth: "28ch",
                        }}
                      >
                        Integrante da equipe com foco na construção da
                        experiência.
                      </p>
                    </div>

                    <div
                      className="flex items-center justify-center flex-wrap mt-auto"
                      style={{
                        gap: "var(--space-2)",
                        marginTop: "var(--space-8)",
                      }}
                    >
                      <SocialBtn
                        href={dev.linkedin}
                        label={`LinkedIn de ${dev.name}`}
                      >
                        <LinkedinLogoIcon className="h-5 w-5" />
                      </SocialBtn>

                      <SocialBtn
                        href={dev.github}
                        label={`GitHub de ${dev.name}`}
                      >
                        <GithubLogoIcon className="h-5 w-5" />
                      </SocialBtn>

                      {dev.portfolio ? (
                        <SocialBtn
                          href={dev.portfolio}
                          label={`Portfólio de ${dev.name}`}
                        >
                          <svg
                            width={18}
                            height={18}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" />
                            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          </svg>
                        </SocialBtn>
                      ) : (
                        <div
                          style={{
                            ...iconButtonStyle,
                            opacity: 0.3,
                            cursor: "default",
                          }}
                          title="Portfólio não disponível"
                        >
                          <svg
                            width={18}
                            height={18}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" />
                            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <div className="section-divider" />

        <section>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden"
              style={{
                border: "1px solid var(--color-stroke-light)",
                background: "rgba(20,20,20,0.5)",
                backdropFilter: "blur(24px)",
                borderRadius: "var(--radius-3xl)",
                padding: "clamp(var(--space-6), 4vw, var(--space-12))",
              }}
            >
              <div
                className="absolute pointer-events-none"
                style={{
                  top: -80,
                  right: -80,
                  width: 300,
                  height: 300,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(132,204,22,0.1) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />
              <div className="relative z-10">
                <span className="badge">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  Nosso trabalho em equipe
                </span>
                <h2
                  className="font-bold"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-xl)",
                    color: "var(--color-foreground-white)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                    marginTop: "var(--space-6)",
                  }}
                >
                  Uma estrutura guiada por{" "}
                  <em
                    className="not-italic"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 60%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    colaboração
                  </em>
                  , entrega e consistência conjunta.
                </h2>
                <p
                  className="leading-8"
                  style={{
                    fontSize: "var(--text-base)",
                    color: "var(--color-foreground-muted)",
                    marginTop: "var(--space-4)",
                    maxWidth: "64ch",
                  }}
                >
                  Mesmo com responsabilidades divididas, o projeto mantém uma
                  linguagem visual alinhada e uma direção técnica conectada para
                  que cada parte faça sentido dentro do mesmo produto.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-5"
              style={{ marginTop: "var(--space-8)" }}
            >
              {collaborationPillars.map(
                ({ title, description, icon: Icon }, index) => (
                  <motion.article
                    key={title}
                    custom={index * 0.08}
                    variants={fadeUp}
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="relative overflow-hidden"
                    style={{
                      border: "1px solid var(--color-stroke-light)",
                      background: "rgba(20,20,20,0.35)",
                      backdropFilter: "blur(16px)",
                      borderRadius: "var(--radius-2xl)",
                      padding: "var(--space-6)",
                      transition: "border-color 0.3s, box-shadow 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(132,204,22,0.25)";
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "var(--shadow-bip)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--color-stroke-light)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    <div
                      className="absolute pointer-events-none"
                      style={{
                        width: 140,
                        height: 140,
                        borderRadius: "50%",
                        background: "rgba(132,204,22,0.06)",
                        filter: "blur(40px)",
                        top: -40,
                        right: -40,
                      }}
                    />
                    <div
                      className="relative z-10 flex items-start"
                      style={{ gap: "var(--space-5)" }}
                    >
                      <div
                        className="flex-shrink-0 inline-flex"
                        style={{
                          border: "1px solid rgba(132,204,22,0.2)",
                          background: "rgba(132,204,22,0.08)",
                          borderRadius: "var(--radius-lg)",
                          padding: "var(--space-3)",
                          color: "var(--color-primary-light)",
                        }}
                      >
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3
                          className="font-semibold"
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "var(--text-lg)",
                            color: "var(--color-foreground-white)",
                            letterSpacing: "-0.01em",
                            marginBottom: "var(--space-2)",
                          }}
                        >
                          {title}
                        </h3>
                        <p
                          className="leading-7"
                          style={{
                            fontSize: "var(--text-sm)",
                            color: "var(--color-foreground-muted)",
                          }}
                        >
                          {description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ),
              )}
            </motion.div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
