import {
  useContext,
  useEffect,
  useState,
  type ChangeEvent,
  type SyntheticEvent,
} from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { motion } from "framer-motion";
import { LuTimerReset } from "react-icons/lu";
import { TbNotes } from "react-icons/tb";
import { PiPlantLight } from "react-icons/pi";
import type UsuarioLogin from "../../models/UsuarioLogin";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { ClipLoader } from "react-spinners";
import { PageShell } from "../../components/about/AboutShared";

function Login() {
  const navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: "",
    },
  );

  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  const emailValido =
    usuarioLogin.usuario?.includes("@") && usuarioLogin.usuario?.includes(".");

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <>
    <PageShell>
      <section className="min-h-screen flex items-center justify-center  font-sans py-25 mt-10 px-6">
        <article className="max-w-225 min-h-130 rounded-lg overflow-hidden border  border-(--color-primary) grid grid-cols-1 md:grid-cols-2">
          <div className="bg-(color--background-card) text-white p-6 md:p-10 flex flex-col justify-between">
            <div className="flex flex-col">
              <img
                src="https://ik.imagekit.io/bugslayers/bip%20bip/bipbip-logo.png"
                alt="logo-site"
                className="w-40 md:w-55 h-auto items-center justify-center my-6 mx-auto "
              />
              <h1 className="rf-2xl md:rf-3xl font-heading font-semibold leading-snug">
                Programe sua rotina através de{" "}
                <span className="text-(--color-primary)">corridas agendadas</span>
              </h1>

              <p className=" rf-sm my-4 text-gray-300">
                Uma plataforma completa para agendar corridas e otimizar seu
                tempo, ou realizar caronas compartilhadas, conectando
                passageiros e motoristas de forma eficiente.
              </p>
            </div>

            <div className="space-y-2 rf-sm text-gray-300 md:pb-4">
              <p className="flex gap-2 items-center">
                <LuTimerReset
                  size={35}
                  className="text-(--color-primary) border border-(--color-primary) rounded-md p-2 bg-[rgba(121,84,237,0.1)] backdrop-blur-sm"
                />
                Economia de tempo e praticidade
              </p>
              <p className="flex gap-2 items-center">
                <TbNotes
                  size={35}
                  className="text-(--color-primary) border border-(--color-primary) rounded-md p-2 bg-[rgba(121,84,237,0.1)] backdrop-blur-sm"
                />
                Histórico de viagens
              </p>
              <p className="flex gap-2 items-center">
                <PiPlantLight
                  size={35}
                  className="text-(--color-primary) border border-(--color-primary) rounded-md p-2 bg-[rgba(121,84,237,0.1)] backdrop-blur-sm"
                />
                Sustentabilidade e economia compartilhada
              </p>
            </div>
          </div>

          <div className="bg- p-6 md:p-10 flex flex-col justify-center w-full bg-green-950">
            <h2 className="rf-2xl font-heading font-semibold text-[var(--color-primary)]">
              Bem-vindo de volta
            </h2>
            <p className="rf-sm  mb-6">Acesse sua conta para continuar</p>

            <motion.form
              className="space-y-4"
              onSubmit={login}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <label className="rf-xs ">E-mail</label>
                <input
                  type="email"
                  name="usuario"
                  value={usuarioLogin.usuario}
                  onChange={atualizarEstado}
                  placeholder="seu@email.com"
                  className="w-full mt-1 p-3 rounded-lg bg-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
                />
                {usuarioLogin.usuario?.length > 0 && !emailValido && (
                  <span className="text-red-400 rf-xs flex items-center p-2 gap-2">
                    <FaExclamationTriangle size={16} />
                    Digite um e-mail válido
                  </span>
                )}
              </div>

              <div>
                <label className="rf-xs ">Senha</label>
                <input
                  type="password"
                  name="senha"
                  value={usuarioLogin.senha}
                  onChange={atualizarEstado}
                  placeholder="••••••"
                  className="w-full mt-1 p-3 rounded-lg text-black bg-gray-300 focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
                />
              </div>

              <div className="text-right rf-xs text-primary cursor-pointer">
                Esqueceu a senha?
              </div>
              <div className="flex items-center justify-center">
                <div className=" flex  justify-center items-center border rounded-2xl w-40 h-15 hover:bg-(--color-primary-dark) hover:text-black transition">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full h-full py-3 rounded-lg border-black text-(--color-primary) font-semibold hover:bg-green-700 transition"
                  >
                    {isLoading ? (
                      <ClipLoader color="#bbb" size={20} />
                    ) : (
                      "Entrar"
                    )}
                  </motion.button>
                </div>
              </div>

              <div className="flex items-center gap-2 rf-xs">
                <div className="flex-1 h-px bg-gray-300" />
                ou continue com
                <div className="flex-1 h-px bg-gray-300" />
              </div>

              <button
                type="button"
                className="w-full py-3 rounded-lg border border-gray-300 flex items-center justify-center gap-2 hover:bg-gray-100 transition"
              >
                <span className="rf-sm flex gap-2 items-center">
                  <FcGoogle size={20} />
                  Google
                </span>
              </button>

            
                <p className="rf-xs text-center mt-4">
                  Não tem uma conta?{" "}
                  <Link
                    to="/cadastrar"
                    className=" cursor-pointer"
                  >
                    <span className="text-(--color-primary)">Cadastre-se grátis</span>
                  </Link>
                </p>
              
            </motion.form>
          </div>
        </article>
      </section>
      </PageShell>
    </>
  );
}

export default Login;
