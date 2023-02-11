import fastify from "fastify";
import crypto from "node:crypto";
import { knex } from "./database";
import { env } from "./env";

const app = fastify();

app.get("/transactions", async (req, res) => {
  const transaction = await knex("transactions").select("*");

  return transaction;
});

app.post("/transactions", async (req, res) => {
  const transaction = await knex("transactions")
    .insert({
      id: crypto.randomUUID(),
      title: "Test Transaction",
      amount: 500,
      session_id: crypto.randomUUID(),
    })
    .returning("*");

  return transaction;
});

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log(`Server listening on port ${env.PORT}`);
  });
