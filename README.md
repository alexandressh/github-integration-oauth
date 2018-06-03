# GithubIntegration

Esse projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) version 6.0.5.

## Servidor de desenvolvimento

Para subir um servidor de desenvolvimento você precisa instalar os seguintes softwares:

- NodeJs (v8.11.2) Para instalar o Node siga as instruções de https://nodejs.org/en/
- NPM (5.6.0) NPM estará disponivel após a instalação do Node
- Angular Cli (6.0.3) Para instalar o Angular Cli você pode rodar o comando (depois de ter instalado o NPM) "$ npm install -g @angular/cli", verifique a documentação para detalhes https://github.com/angular/angular-cli/wiki

Você também vai precisar gerar e adicionar as chaves de desenvolvimento do GitHub:
- Primeiro renomeie o arquivo template.env para .env

- Vá até https://github.com/settings/developers
- Clique em 'New OAuth App', e os valores:
- Name: github-integration-dev
- Homepage URL: http://localhost:4200/
- Authorization Callback Url: http://localhost:4200/callback
- Register Application

- Copie e cole as chaves 'Client ID' e 'Client Secret' no arquivo .env

Instalar as dependências:
- `npm install`

Agora você pode subir o Servidor back-end:
- `node server.js`

E subir o Servidor front-end:
- `npm run start:dev`

E acessar a aplicação em http://localhost:4200/

## Build

Para gerar a build de produção minificada você deve rodar `npm run build`, os arquivos estarão disponiveis na pasta dist. Para rodar a aplicação em produção você deve entrar na pasta dist e rodar `node server.js`

## Unit Tests

Para executar os testes você deve rodar `ng test` via [Karma](https://karma-runner.github.io).

## Demo

Essa aplicação está disponivel em https://github-integration-bxwuhgpjct.now.sh
