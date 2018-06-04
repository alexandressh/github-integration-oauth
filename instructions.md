## O Desafio
- Criar uma aplicação que busque os repositórios do Github do usuário que irá se logar
- A aplicação terá duas telas:
    - Login:
        - A tela terá um botão 'Logar com Github' para que o usuário consiga se logar usando sua conta
        - Ao autenticar, redirecione o usuário para página da listagem dos repositórios
        - A sessão do usuário deverá persistir mesmo que o usuário recarregue a página
        - O usuário deve ter uma forma de se deslogar da aplicação
    - Listagem
        - Cada item (repositório) deverá exibir a quantidade de 'stars' e 'forks'
        - Apenas usuários autenticados podem acessar essa página (senão, volte para tela de login)


## Instruções
- Crie um repositório público em sua conta do Github
- Ao finalizar o teste, nos envie o link para o repositório
- Toda e qualquer informação do teste, devera estar no README
- Utilize as API's do Github:
    - API Autenticação: https://developer.github.com/v3/guides/basics-of-authentication/#accepting-user-authorization
    - API de Repositórios: https://developer.github.com/v3/repos/#list-your-repositories


### Requisitos :)
- HTML5 && CSS3
- Layout responsivo
- Pré-copiladores CSS: SCSS, LESS, STYLUS ...
- Angular | React | Vue como framework JavaScript
- Task Runner | Module Bundler: GULP, GRUNT, Webpack ...
- ECMAScript 2015+ (ES6)

### Observações
- Vamos avaliar o seu nível de conhecimento em HTML5, CSS3, JAVASCRIPT, usabilidade, acessibilidade e boas práticas
- Priorize a semântica, código limpo e coerente. Lembre: - é +
- Não utilize plugins para consultar a API. Queremos avaliar seu código nos serviços de consumo.
- O projeto deverá conter as configurações necessárias para gerar build de produção otimizado (minify, etc)
- Não esqueça de criar um README com as instruções necessárias para executarmos o que foi solicitado
- Cuidado com os acessos exigidos para o login da aplicação, apenas a leitura dos repositórios é suficiente (não queremos ser hackeados kkk)
- Algumas rotas da API do Github, podem estar protegidas por CORS. Nesse caso recomendamos o uso de um proxy, que pode ser feito pelo CLI ou Task Runner escolhido

### Você ganhará mais pontos se: (ordenado por importância)
 - Utilizar Angular
 - Fazer testes unitários
 - Utilizar SASS
 - Montar seus estilos do zero (sem utilizar framework)
 - Utilizar boas práticas de CSS: BEMCSS, SMACSS ...
 - Utilizar alguma implementação do Flux: vuex, redux, ngrx...
 - Utilizar Typescript
 - Utilizar Rxjs
 - Utilizar Lint
 - Utilizar Webpack
 - Subir a aplicação em algum host cloud
 - Demonstrar conhecimento de Webpack montando um config próprio
