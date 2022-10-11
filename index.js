// Modules
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

// Routes
import clientsRoute from "./routes/clientsRoute.js";

const app = express();

// Middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/clients", clientsRoute);

app.get("/", (req, res) => {
  res.send("Servidor rodando");
});

const PORT = process.env.PORT || 5000;
const DB_CONNECTION =
  "mongodb+srv://netson:aqeVQqwX0byyitsB@cluster0.e3ugm.mongodb.net/projetointegrador?retryWrites=true&w=majority";
mongoose
  .connect(DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
