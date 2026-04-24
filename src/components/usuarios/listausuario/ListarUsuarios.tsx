/* eslint-disable react-hooks/immutability */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { buscar } from "../../../services/Service";
import type Usuario from "../../../models/Usuario";
import CardUsuarios from "../cardusuario/CardUsuarios";
import { BsPeopleFill } from "react-icons/bs";
import { SyncLoader } from "react-spinners";
import { FaSadTear } from "react-icons/fa";
import { PageShell } from "../../about/AboutShared";

function ListarUsuarios() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
        if (token === "") {
            ToastAlerta("Você precisa estar logado!", "info");
            navigate("/");
        }
    }, [token]);

    useEffect(() => {
        buscarClientes();
    }, [usuarios.length]);

    async function buscarClientes() {
        try {
            setIsLoading(true);

            await buscar("/usuarios/all", setUsuarios, {
                headers: { Authorization: token },
            });
        } catch (error: any) {
            if (error.toString().includes("401")) {
                handleLogout();
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <PageShell>
                <section className="container min-h-screen pt-20 sm:pt-24 md:pt-28 lg:pt-32 px-4 sm:px-6 md:px-10 lg:px-20">
                    <div className="flex justify-center py-8 sm:py-10 md:py-12">
                        <span className="font-heading text-xl sm:text-2xl md:text-3xl text-center text-blue-light">
                            {" "} Cada <span className="text-(--color-primary)">usuário </span> faz parte da sua rede de caronas — visualize
                            <span className="text-(--color-primary)"> perfis</span>, acompanhe <span className="text-(--color-primary)">informações
                            </span> e mantenha motoristas e passageiros <span className="text-(--color-primary)">conectados
                            </span> no <span className="text-(--color-primary)">BIP BIP</span>.
                        </span>
                    </div>

                    <div className="h-0.5 bg-gradient-to-r from-transparent via-[var(--color-primary)]/20 to-transparent my-2" />

                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-(--color-primary) text-center font-bold mb-6 flex gap-3 sm:gap-4 py-6 sm:py-8 md:py-10 items-center justify-center">
                        <BsPeopleFill size={28} className="sm:w-[35px] sm:h-[35px]" /> Usuários
                    </h1>

                    {isLoading && (
                        <div className="flex justify-center w-full py-40 bg-primary-dark">
                            <SyncLoader color="#84CC16" size={20} />
                        </div>
                    )}

                    <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-4 md:px-8">
                        {usuarios.map((user) => (
                            <CardUsuarios key={user.id} usuario={user} />
                        ))}
                    </div>

                    {!isLoading && usuarios.length === 0 && (
                        <p className="text-gray-400 mt-4 flex gap-2 items-center">
                            <FaSadTear size={20} />Nenhum usuário encontrado.
                        </p>
                    )}
                </section>
            </PageShell>
        </>
    )
}

export default ListarUsuarios