import { MongoClient } from "../deps.ts";

const client = new MongoClient();

await client.connect({
  db: "dengoose",
  credential: {
    username: "dengoose",
    password: "password",
  },
});
