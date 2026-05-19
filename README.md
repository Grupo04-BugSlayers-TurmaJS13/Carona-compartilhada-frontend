<img width="1280" height="320" alt="banner github" src="https://github.com/user-attachments/assets/edeb67f1-7e9f-434b-877e-0598ee3930ce" />


---


<div align="center">
 

  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

</div>

## 📋 Sobre o Projeto

O **BipBip** é uma plataforma de carona compartilhada focada em **mobilidade urbana sustentável**. A proposta é conectar pessoas que já realizam deslocamentos diários — como para o trabalho ou a faculdade — aproveitando trajetos em comum com veículos elétricos.

Este repositório contém o **frontend** da aplicação, desenvolvido em React com TypeScript e integrado à [API BipBip](https://github.com/Grupo04-BugSlayers-TurmaJS13/Carona-Compartilhada-backend).

> Projeto desenvolvido em grupo durante o Bootcamp Fullstack JavaScript da Generation  — **Squad BugSlayers | TurmaJS13**

---
## 📸 Preview

<img width="600"  alt="bipbip-mock" src="https://github.com/user-attachments/assets/883b427f-4e10-46d7-b432-37227dedc575" />
<img width="600" alt="bipbip-mockup-mobile" src="https://github.com/user-attachments/assets/af9e7468-3bbb-4eb9-ae46-0b3b1b3bbb2b" />


--------


## ✨ Funcionalidades

- 🔐 Autenticação de usuários (login e cadastro)
- 🚘 Cadastro e gerenciamento de veículos elétricos
- 🗺️ Criação e busca de viagens com origem e destino
- 📅 Agendamento de rotas fixas e recorrentes
- 👤 Perfis de motorista e passageiro
- 📱 Interface responsiva e adaptada para mobile

---

## 🛠️ Stack

| Tecnologia | Uso |
|---|---|
| **React** | Biblioteca principal de UI |
| **TypeScript** | Tipagem estática |
| **Tailwind CSS** | Estilização utilitária |
| **Vite** | Build e bundler |
| **React Router** | Navegação entre páginas |
| **Axios** | Comunicação com a API |

---

## 🗂️ Estrutura do Projeto

```
src/
├── assets/          # Imagens e ícones
├── components/      # Componentes reutilizáveis
├── pages/           # Páginas da aplicação
├── services/        # Integração com a API
├── routes/          # Configuração de rotas
├── types/           # Interfaces e tipos TypeScript
└── main.tsx         # Ponto de entrada
```

---

## 🚀 Como Rodar Localmente

### Pré-requisitos

- Node.js >= 18
- npm ou yarn
- API do BipBip rodando localmente ([ver repositório backend](https://github.com/Grupo04-BugSlayers-TurmaJS13/Carona-Compartilhada-backend))

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Grupo04-BugSlayers-TurmaJS13/Carona-Compartilhada-frontend.git

# Entre na pasta
cd Carona-Compartilhada-frontend

# Instale as dependências
npm install
```

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=http://localhost:3000
```

### Executando

```bash
# Modo desenvolvimento
npm run dev

# Build de produção
npm run build
```

A aplicação estará disponível em `http://localhost:5173`

---

## 🗄️ Integração com o Backend

Este frontend consome a API REST do BipBip. Os principais endpoints utilizados são:

| Módulo | Endpoint Base |
|---|---|
| Autenticação | `/auth` |
| Usuários | `/usuarios` |
| Viagens | `/viagens` |
| Veículos | `/veiculos` |

📎 [Repositório do Backend](https://github.com/Grupo04-BugSlayers-TurmaJS13/Carona-Compartilhada-backend)

---

## 🔮 Implementações Futuras

- [ ] Modo exclusivo para mulheres
- [ ] Rastreamento em tempo real
- [ ] Sugestão automática de rotas inteligentes
- [ ] Notificações push
- [ ] Avaliação de motoristas e passageiros

---

### 👥 Squad BugSlayers

Desenvolvido pela Squad BugSlayers — TurmaJS13


---

### 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
