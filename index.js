import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

console.log("Hello world");

app.listen(5000);