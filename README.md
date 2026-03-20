# 💰 Controle de Gastos

Aplicação web para controle de gastos pessoais, com CRUD completo de despesas, filtros dinâmicos e saldo atualizado em tempo real.

O sistema permite acompanhar receitas e despesas de forma clara, contando também com gráfico interativo para visualização dos dados e persistência local das informações.

---

## 🚀 Demo

🔗 https://lista-de-gasto.netlify.app/

---

## 📌 Funcionalidades

- Cadastro de receitas e despesas  
- Edição e remoção de registros (CRUD completo)  
- Filtros dinâmicos para organização dos dados  
- Atualização automática do saldo  
- Gráfico interativo de receitas x despesas  
- Persistência de dados com localStorage  
- Interface responsiva e adaptável  

---

## 🧠 Objetivo do projeto

Desenvolver uma aplicação de controle financeiro pessoal simulando um cenário real, com foco na aplicação de conceitos essenciais do front-end moderno.

Durante o desenvolvimento, foram trabalhados pontos como:

- Gerenciamento de estado para controle de receitas, despesas e saldo  
- Implementação de CRUD completo (Create, Read, Update, Delete)  
- Atualização reativa da interface baseada nas interações do usuário  
- Organização de componentes visando reutilização e manutenção  
- Manipulação e persistência de dados com localStorage  
- Visualização de dados com gráficos dinâmicos (Recharts)  
- Estruturação da aplicação com foco em escalabilidade  

O projeto foi pensado não apenas como exercício, mas como uma base evolutiva para aplicações mais completas.

---

## 🛠️ Tecnologias utilizadas

- React  
- JavaScript (ES6+)  
- Recharts  
- Bootstrap  
- HTML5  
- CSS3  

---

## 📂 Estrutura do projeto

A estrutura foi organizada visando **clareza e separação de responsabilidades**, facilitando a manutenção e evolução da aplicação.

```bash
src/
  componentes/   # Componentes da aplicação (UI + lógica)
    FormularioGasto.jsx
    GraficoGastos.jsx
    ListaGastos.jsx
    SaldoAtual.jsx

  App.jsx        # Componente principal da aplicação
  main.jsx       # Ponto de entrada do React

---

```

## ⚙️ Como rodar o projeto

Execute os comandos abaixo no terminal:


# Clonar o repositório e entrar na pasta
git clone https://github.com/mikaeljuliao/controle-de-gasto-react.git
cd controle-de-gasto-react

# Instalar as dependências do projeto
npm install

# Rodar a aplicação em ambiente de desenvolvimento
npm run dev