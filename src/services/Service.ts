import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:4000"
});

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
};

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
};

export const buscar = async (url: string, setDados: Function, header: Object) => {
    const resposta = await api.get(url, header);
    setDados(resposta.data);
};

export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    try {
        const resposta = await api.post(url, dados, header);
        setDados(resposta.data);
    } catch (error: any) {
        console.log("❌ ERRO CADASTRAR:", JSON.stringify(error.response?.data, null, 2));
        console.log("📦 PAYLOAD ENVIADO:", JSON.stringify(dados, null, 2));
        throw error;
    }
};

export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.put(url, dados, header);
    setDados(resposta.data);
};

export const deletar = async (url: string, header: Object) => {
    await api.delete(url, header);
};