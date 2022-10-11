import mongoose from "mongoose";

// Schema for the client model
const clientSchema = new mongoose.Schema({
  nome: String,
  dataRegistro: {
    type: Date,
    default: new Date(),
  },
  telefone: String,
  mensalidade: Number,
  ativo: Boolean,
});

const Client = mongoose.model("Client", clientSchema);
export default Client;
