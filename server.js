const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const medicineRoutes = require("./routes/medicineRoutes");
const logRoutes = require("./routes/logRoutes");

const app = express();


app.use(cors());

app.use(express.json());

app.use("/api/medicines", medicineRoutes);
app.use("/api/logs", logRoutes);

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// MongoDB connection
mongoose.connect("mongodb://shifaaashiff_db_user:shifa123@ac-dfgvd7c-shard-00-00.caxkn84.mongodb.net:27017,ac-dfgvd7c-shard-00-01.caxkn84.mongodb.net:27017,ac-dfgvd7c-shard-00-02.caxkn84.mongodb.net:27017/medDB?ssl=true&replicaSet=atlas-myn5gl-shard-0&authSource=admin&retryWrites=true&w=majority")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});