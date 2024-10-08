# FlexiLease Autos

Esta é uma API RESTful para gerenciar tutores e seus pets, utilizando Sequelize e MySQL.

## 📄 Desccrição do projeto

O projeto consiste no desenvolvimento de uma FULL API REST para uma locadora de carros, utilizando as tecnologias e conhecimentos aprendidos nos cursos

## 🚩 Requisitos

- Node.js
- NPM ou Yarn

## Como iniciar

- Para iniciar execute os seguintes comandos

- Recomendado usar o terminal do WSL/linux ou Git Bash para funcionar corretamente todos os comandos

- Abrir terminal

- Clone o repositorio:

```bash
  git clone https://github.com/lhcamposs/Projeto-FlexiLease-Autos
```

- Acesse a pasta clonada

```bash
  cd Projeto-FlexiLease-Autos
```

- Instale as dependencias:

```bash
  npm install
```

ou

```bash
  yarn install
```

- Criar arquivo .env com base no arquivo de exemplo, para configuração de variáveis de ambiente:

```bash
cp .env.example .env
```

## Executando a aplicação

- Inicie o aplicação com o comando de npm

```bash
npm start
```

- Caso queira iniciar em ambiente de desenvolvimento

```bash
npm run dev
```

- A API estará disponivel em <https://localhost:3000/>

## Documentação

A documentação swagger esta disponivel no seguinte [link](https://app.swaggerhub.com/apis/LHCAMPOSSOARES/projeto-flexi_lease_autos/1.0.0)

Assim que iniciar o servidor também podera acessar ar documentação pela rota

```https
http://localhost:3000/v1/docs
```

## ✅ Tecnologias Utilizadas

**Linguagem:** Typescript

**Ambiente de execução:** node.js

**Framework BackEnd:** Express

**SQLite** como banco de dados

**TypeORM** como ORM

## Licença

Este projeto está licenciado sob a licença
[MIT](https://choosealicense.com/licenses/mit/).
