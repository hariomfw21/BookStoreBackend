const express = require("express");
const { connection } = require("./connection/connection");
const { BookRoutes } = require("./Routes/BookRoutes");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/book",BookRoutes);

app.listen(3001, async () => {
  try {
    await connection;
    console.log("Server is running", 3000);
    console.log("connected to Database");
  } catch (error) {
    console.log(error.message);
  }
});
