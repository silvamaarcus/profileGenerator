# Gerador de Perfis

Este é um projeto de Gerador de Perfis desenvolvido em ReactJS com Vite. O usuário pode criar perfis aleatórios a partir de um simples clique no botão. Os dados são obtidos pela API Random Data e a estilização é feita com SASS.

## Tecnologias Utilizadas

- **ReactJS**: Uma biblioteca JavaScript para construir interfaces de usuário.
- **Vite**: Um build tool que proporciona um ambiente de desenvolvimento rápido.
- **Random Data API**: API utilizada para gerar dados aleatórios para os perfis.
- **SASS**: Um pré-processador CSS que permite o uso de variáveis, aninhamento, e muito mais.
- **Axios**: Uma biblioteca para fazer requisições HTTP.

## Funcionalidades

- Gerar perfis aleatórios com um clique.
- Dados obtidos de uma API externa.
- Estilização modular e avançada com SASS.

## Pré-requisitos

Certifique-se de ter instalado o Node.js e o npm (ou yarn) em seu ambiente.

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/silvamaarcus/gerador-de-perfis.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd gerador-de-perfis
    ```

3. Instale as dependências:

    ```bash
    npm install
    # ou
    yarn install
    ```

## Executando a Aplicação

1. Inicie o servidor de desenvolvimento:

    ```bash
    npm run dev
    # ou
    yarn dev
    ```

2. Abra o navegador e acesse:

    ```
    http://localhost:5173
    ```

## Sobre o SASS

SASS (Syntactically Awesome Stylesheets) é um pré-processador CSS que permite o uso de funcionalidades como variáveis, aninhamento de regras, mixins e herança, facilitando a escrita e a manutenção de folhas de estilo CSS.

No projeto, o SASS foi utilizado para modularizar e organizar os estilos, tornando o código mais limpo e fácil de manter.

## Sobre o Axios

Axios é uma biblioteca JavaScript utilizada para fazer requisições HTTP. No projeto, o Axios foi utilizado para fazer requisições à API Random Data para obter dados aleatórios e gerar os perfis.

## Estrutura do Projeto

Aqui está uma visão geral da estrutura do projeto:

gerador-de-perfis/
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ ├── styles/
│ │ ├── _variables.scss
│ │ ├── _mixins.scss
│ │ ├── main.scss
│ ├── App.jsx
│ ├── main.jsx
├── .gitignore
├── package.json
├── README.md


## Contribuição

Se você quiser contribuir com este projeto, sinta-se à vontade para fazer um fork do repositório e enviar um pull request com suas alterações.

## Licença

Este projeto foi desenvolvido por [Marcus Silva](https://github.com/silvamaarcus/).
