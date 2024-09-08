# Projeto Fullstack com Node.js e Frontend

Este projeto é uma aplicação fullstack usando Node.js para o backend e para o frontend HTML, CSS e JavaScript. O backend usa o Sequelize para interagir com um banco de dados PostgreSQL e o frontend se comunica com o backend via API REST.

## Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) (versão 16 ou superior) e o [npm](https://www.npmjs.com/) instalados em sua máquina.

## Configuração do Backend

1. Navegue até o diretório `back-end`:

    ```bash
    cd back-end
    ```

2. Instale as dependências do projeto:

    ```bash
    npm install
    ```

3. Inicie o servidor backend:

    ```bash
    npm start
    ```

   O backend estará rodando em `http://localhost:3000`.

## Configuração do Frontend

1. Navegue até o diretório `front-end`:

    ```bash
    cd ../front-end
    ```

2. Instale o `http-server` globalmente:

    ```bash
    npm install -g http-server
    ```

3. Inicie o servidor frontend:

    ```bash
    http-server -p 5500
    ```

   O frontend estará acessível em `http://localhost:5500`.