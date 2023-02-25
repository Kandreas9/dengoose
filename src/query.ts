import { MongoClient } from "../deps.ts";

const client = new MongoClient();

await client.connect('mongodb://127.0.0.1:27017/test');

// Defining schema interface
interface UserSchema {
  _id: ObjectId;
  username: string;
  password: string;
}

const db = client.database("test");
const users = db.collection<UserSchema>("users");

const insertId = await users.insertOne({
  username: "user1",
  password: "pass1",
});

const user1 = await users.findOne({ _id: insertId });

console.log(user1);
