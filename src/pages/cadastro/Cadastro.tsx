/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  useEffect,
  useState,
  type ChangeEvent,
  type SyntheticEvent,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import type Usuario from "../../models/Usuario";
import { motion } from "framer-motion";
import { ClipLoader } from "react-spinners";
import { FaCheck, FaExclamationTriangle } from "react-icons/fa";
import { MdOutlineAppRegistration, MdOutlineSecurity } from "react-icons/md";
import { TbClick } from "react-icons/tb";
import { InstagramLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { FacebookLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { cadastrarUsuario } from "../../services/Service";

function Cadastro() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [confirmarSenha, setConfirmarSenha] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    viagens: [],
  });

  const emailValido =
    usuario.usuario?.includes("@") && usuario.usuario?.includes(".");
  const senhasIguais = usuario.senha === confirmarSenha;

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  async function cadastrarNovoUSuario(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {
      try {
        await cadastrarUsuario("/usuarios", usuario, setUsuario);

        ToastAlerta("Usuário cadastrado com sucesso!", "sucesso");
      } catch (error) {
        ToastAlerta("Erro ao cadastrar usuário!", "erro");
      }
    } else {
      ToastAlerta("Dados inválidos!", "info");
      setUsuario({
        ...usuario,
        senha: "",
      });
      setConfirmarSenha("");
    }
    setIsLoading(false);
  }

  function retornar() {
    navigate("/");
  }

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  return (
    <>
      <section className="min-h-screen mt-10 flex items-center justify-center bg-gray-light font-sans px-6 py-25 md:px-0">
        <article className="w-full max-w-255 rounded-2xl overflow-hidden shadow-(--shadow-soft) border border-primary grid grid-cols-1 md:grid-cols-5">
          <div className="bg-primary- text-white p-6 md:p-10 flex flex-col justify-between md:col-span-2">
            <div className="flex flex-col">
              <img
                src="https://ik.imagekit.io/bugslayers/bip%20bip/bipbip-logo.png"
                alt="logo-site"
                className="w-40 md:w-55 h-auto items-center justify-center my-6 mx-auto "
              />
              <h1 className="text-2xl md:text-3xl font-heading font-semibold leading-snug">
                Crie sua conta e simplifique a{" "}
                <span className="text-primary">rotina</span>
              </h1>

              <p className="mt-4 text-sm text-gray-300">
                Cadastre-se e tenha acesso completo ao BIP BIP.
              </p>
            </div>

            <div className="space-y-4 text-sm text-gray-300  pb-10 md:pb-42 md:mt-10">
              <p className="flex gap-2 items-center">
                <MdOutlineAppRegistration
                  size={35}
                  className="text-primary border border-primary rounded-md p-2 bg-[rgba(121,84,237,0.1)] backdrop-blur-sm"
                />
                Cadastro rápido
              </p>
              <p className="flex gap-2 items-center">
                <TbClick
                  size={35}
                  className="text-primary border border-primary rounded-md p-2 bg-[rgba(121,84,237,0.1)] backdrop-blur-sm"
                />
                Acesso imediato
              </p>
              <p className="flex gap-2 items-center">
                <MdOutlineSecurity
                  size={35}
                  className="text-primary border border-primary rounded-md p-2 bg-[rgba(121,84,237,0.1)] backdrop-blur-sm"
                />
                Seguro
              </p>
            </div>

            <span className="text-gray-300 text-md pb-2 text-center">
              Nos siga nas redes sociais
            </span>
            <div className="space-y-2 text-sm text-gray-300 md:pb-4 flex justify-evenly">
              <Link to="https://www.instagram.com" target="_blank" className="">
                <InstagramLogoIcon
                  size={40}
                  className="text-primary border border-primary rounded-md p-2 bg-[rgba(121,84,237,0.1)] backdrop-blur-sm hover:shadow-sm shadow-primary-400"
                />
                {/* Instagram */}
              </Link>
              <Link to="https://www.facebook.com" target="_blank" className="">
                <FacebookLogoIcon
                  size={40}
                  className="text-primary border border-primary rounded-md p-2 bg-[rgba(121,84,237,0.1)] backdrop-blur-sm hover:shadow-sm shadow-primary-400"
                />
                {/* Facebook */}
              </Link>
              <Link to="https://www.linkedin.com" target="_blank" className="">
                <LinkedinLogoIcon
                  size={40}
                  className="text-primary border border-primary rounded-md p-2 bg-[rgba(121,84,237,0.1)] backdrop-blur-sm hover:shadow-sm shadow-primary-400"
                />
                {/* LinkedIn */}
              </Link>
            </div>
          </div>

          <div className=" bg-green-950 p-6 md:p-10 flex flex-col  justify-center md:col-span-3">
            <h2 className="text-2xl font-heading text-primary font-semibold text-text">
              Criar conta
            </h2>

            <p className="text-sm  mb-6">Preencha os dados para começar</p>

            <motion.form
              onSubmit={cadastrarNovoUSuario}
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div>
                <label className="text-xs ">Nome</label>
                <input
                  type="text"
                  name="nome"
                  value={usuario.nome}
                  onChange={atualizarEstado}
                  placeholder="Seu nome"
                  className="w-full mt-1 text-black p-3 rounded-lg bg-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />

                {usuario.nome.length > 0 && usuario.nome?.length < 3 && (
                  <span className="text-red-400 text-xs flex items-center p-2 gap-2">
                    <FaExclamationTriangle size={16} />O nome deve ter no mínimo
                    3 caracteres
                  </span>
                )}

                {usuario.nome?.length >= 5 && (
                  <span className="text-green-400 flex items-center p-2 gap-2">
                    <FaCheck size={16} />
                  </span>
                )}
              </div>

              <div>
                <label className="text-xs ">E-mail</label>
                <input
                  type="email"
                  name="usuario"
                  value={usuario.usuario}
                  onChange={atualizarEstado}
                  placeholder="seu@email.com"
                  className="w-full mt-1 p-3 text-black rounded-lg bg-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />

                {usuario.usuario?.length > 0 && !emailValido && (
                  <span className="text-red-400 text-xs flex items-center p-2 gap-2">
                    <FaExclamationTriangle size={16} /> E-mail inválido
                  </span>
                )}

                {emailValido && (
                  <span className="text-green-400  flex items-center p-2 gap-2">
                    <FaCheck size={16} />
                  </span>
                )}
              </div>

              <div>
                <label className="text-xs  ">Senha</label>
                <input
                  type="password"
                  name="senha"
                  value={usuario.senha}
                  onChange={atualizarEstado}
                  placeholder="••••••"
                  className="w-full mt-1 p-3 text-black rounded-lg bg-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />

                {usuario.senha?.length > 0 && usuario.senha?.length < 8 && (
                  <span className="text-red-400 text-xs flex items-center p-2 gap-2">
                    <FaExclamationTriangle size={16} />A senha deve conter no
                    mínimo 8 caracteres ({usuario.senha.length}/8)
                  </span>
                )}

                {usuario.senha?.length >= 8 && (
                  <span className="text-green-400 flex items-center p-2 gap-2">
                    <FaCheck size={16} />
                  </span>
                )}
              </div>

              <div>
                <label className="text-xs ">Confirmar Senha</label>
                <input
                  type="password"
                  value={confirmarSenha}
                  onChange={handleConfirmarSenha}
                  placeholder="••••••"
                  className="w-full mt-1 p-3 rounded-lg text-black bg-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />

                {confirmarSenha.length > 0 && !senhasIguais && (
                  <span className="text-red-400 text-xs flex items-center p-2 gap-2">
                    <FaExclamationTriangle size={16} />
                    As senhas não são iguais
                  </span>
                )}

                {confirmarSenha.length > 0 && senhasIguais && (
                  <span className="text-green-400 flex items-center p-2 gap-2">
                    <FaCheck size={16} />
                  </span>
                )}
              </div>

              <div>
                <label className="text-xs ">Foto (URL)</label>
                <input
                  type="text"
                  name="foto"
                  value={usuario.foto}
                  onChange={atualizarEstado}
                  placeholder="https://..."
                  className="w-full mt-1 p-3 text-black rounded-lg bg-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {usuario.foto && usuario.foto.trim().length > 0 && (
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24 rounded-full border-2 border-primary overflow-hidden">
                    <img
                      src={usuario.foto}
                      alt="preview"
                      className="w-full h-full object-cover"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  </div>
                </div>
              )}

              <div className="flex gap-4 justify-around items-center m-auto">
                <div className="flex justify-center items-center border border-primary hover:bg-primary-light hover:text-black rounded-2xl w-40 h-15">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 rounded-lg  font-semibold hover:bg-(--color-primary-hover) transition"
                  >
                    {isLoading ? (
                      <ClipLoader color="#fff" size={20} />
                    ) : (
                      "Cadastrar"
                    )}
                  </motion.button>
                </div>
                <div className="flex justify-center items-center border border-primary hover:bg-red-500 hover:text-black rounded-2xl w-40 h-15">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={retornar}
                    className="w-full py-3 rounded-lg bg-gray-700 hover:bg-red-500 transition font-semibold"
                  >
                    Cancelar
                  </motion.button>
                </div>
              </div>

              <p className="text-xs text-center  mt-4">
                Já tem uma conta?{" "}
                <span className="text-primary">
                  <Link to="/login">Entrar</Link>
                </span>
              </p>
            </motion.form>
          </div>
        </article>
      </section>
    </>
  );
}

export default Cadastro;
