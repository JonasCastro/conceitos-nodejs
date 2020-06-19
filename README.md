<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h3 align="center">
  Solução do Desafio 02: Conceitos do Node.js
</h3>


<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/jonascastro/conceitos-nodejs?color=%2304D361">

  <a href="https://www.linkedin.com/in/jonas-castro-b4044111a/">
    <img alt="Made by JonasCastro" src="https://img.shields.io/badge/made%20by-JonasCastro-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/JonasCastro/conceitos-nodejs/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/jonascastro/conceitos-nodejs?style=social">
  </a>
     <a href="https://github.com/Rocketseat/gostack-template-conceitos-nodejs">
    <img alt="Template Rocketseat" src="https://img.shields.io/badge/Template%20-Rocketseat-%2304D361">
  </a>
</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rotas-da-aplicação">Rotas da aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#checkered_flag-execute-o-projeto-localmente">Execute o projeto localmente</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Sobre o desafio

Nesse desafio, foi criado uma aplicação para armazenar repositórios do seu portfólio, que irá permitir a criação, listagem, atualização e remoção dos repositórios, além de permitir que os repositórios possam receber "likes".


### Rotas da aplicação

- **`POST /repositories`**: A rota recebe `title`, `url` e `techs` dentro do corpo da requisição, sendo a URL o link para o github desse repositório. Ao cadastrar um novo projeto, ele deve é armazenado dentro de um objeto no seguinte formato: `{ id: "uuid", title: 'Desafio Node.js', url: 'http://github.com/...', techs: ["Node.js", "..."], likes: 0 }`; O ID é um UUID, e os likes sempre são iniciados como 0.

- **`GET /repositories`**: Rota que lista todos os repositórios;

- **`PUT /repositories/:id`**: A rota alterar apenas o `title`, a `url` e as `techs` do repositório que possue o `id` igual ao `id` presente nos parâmetros da rota;

- **`DELETE /repositories/:id`**: A rota deleta o repositório com o `id` presente nos parâmetros da rota;

- **`POST /repositories/:id/like`**: A rota aumenta o número de likes do repositório específico escolhido através do `id` presente nos parâmetros da rota, a cada chamada dessa rota, o número de likes é aumentado em 1;

### Testes da aplicação

- **`should be able to create a new repository`**: Para que esse teste passe, a aplicação deve permitir que um repositório seja criado, e retorne um json com o projeto criado.

- **`should be able to list the repositories`**: Para que esse teste passe, a aplicação deve permitir que seja retornado um array com todos os repositórios que foram criados até o momento.

- **`should be able to update repository`**: Para que esse teste passe, a aplicação deve permitir que sejam alterados apenas os campos `url`, `title` e `techs`.

- **`should not be able to update a repository that does not exist`**: Para que esse teste passe, deve ser validado na rota de update se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status `400`.

- **`should not be able to update repository likes manually`**: Para que esse teste passe, não deve ser permitido que a rota de update altere diretamente os likes desse repositório, mantendo o mesmo número de likes que o repositório já possuia antes da atualização. Isso porque o único lugar que deve atualizar essa informação é a rota responsável por aumentar o número de likes.

- **`should be able to delete the repository`**: Para que esse teste passe, deve ser permitido que a rota de delete exclua um projeto, e ao fazer a exclusão, ele retorne uma resposta vazia, com status `204`.

- **`should not be able to delete a repository that does not exist`**: Para que esse teste passe, deve ser verificado na rota de delete se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status `400`.

- **`should be able to give a like to the repository`**: Para que esse teste passe, a aplicação deve permitir que um repositório com o id informado possa receber likes. O valor de likes deve ser incrementado em 1 a cada requisição, e como resultado, retornar um json contendo o repositório com o número de likes atualizado.

- **`should not be able to like a repository that does not exist`**: Para que esse teste passe, deve ser verificado na rota de like se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status `400`.

### :checkered_flag: Execute o projeto localmente:

```bash
# Clone este repositório
$ git clone https://github.com/JonasCastro/conceitos-nodejs.git

# Acesse a pasta do projeto no terminal/cmd
$ cd conceitos-nodejs

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:3333 

# Para executar os testes da aplicação
$ yarn test
 
```
## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

- Feita com :blue_heart: by Jonas Castro :wave: [Stay in touch!](https://www.linkedin.com/in/jonas-castro-b4044111a/)
- Desafio Feito com 💜 by Rocketseat :wave: [Entre na nossa comunidade!](https://discordapp.com/invite/gCRAFhc)
