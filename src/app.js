const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;
  const repositorie = { id: uuid(), title, url, techs, likes: 0 };
  repositories.push(repositorie);
  return response.json(repositorie);
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params
  const { title, url, techs } = request.body

  const indexRepositorie = repositories.findIndex(repositorie => repositorie.id === id)
  if (indexRepositorie === -1) return response.status(400).json();

  const repositorie = { id, title, url, techs, likes: repositories[indexRepositorie].likes }
  repositories[indexRepositorie] = repositorie;

  response.json(repositorie)



});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params

  const indexRepositorie = repositories.findIndex(repositorie => repositorie.id === id)
  if (indexRepositorie === -1) return response.status(400).json();

  repositories.splice(indexRepositorie, 1)
  return response.status(204).json()


});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params

  const repositorie = repositories.find(repositorie => repositorie.id === id);
  if (!repositorie) return response.status(400).json();

  repositorie.likes += 1

  return response.json(repositorie)

});

module.exports = app;
