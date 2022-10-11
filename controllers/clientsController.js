import mongoose from "mongoose";
import Client from "../models/client.js";

export const getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Query get clients ascending name order
export const getClientsAsc = async (req, res) => {
  try {
    const clients = await Client.find().sort({ nome: 1 });
    res.status(200).json(clients);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Query get clients ascending date order
export const getClientsAscDate = async (req, res) => {
  try {
    const clients = await Client.find().sort({ dataRegistro: 1 });
    res.status(200).json(clients);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Query get clients ascending monthly fee order
export const getClientsAscFee = async (req, res) => {
  try {
    const clients = await Client.find().sort({ mensalidade: 1 });
    res.status(200).json(clients);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Query get clients ascending telephone order
export const getClientsAscPhone = async (req, res) => {
  try {
    const clients = await Client.find().sort({ telefone: 1 });
    res.status(200).json(clients);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Query get clients ascending status order
export const getClientsAscStatus = async (req, res) => {
  try {
    const clients = await Client.find().sort({ ativo: -1 });
    res.status(200).json(clients);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Post
export const postClient = async (req, res) => {
  const { nome, telefone, mensalidade, ativo, dataRegistro } = req.body;
  dataRegistro ? dataRegistro : new Date();
  try {
    const result = await Client.create({
      nome,
      telefone,
      mensalidade,
      ativo,
      dataRegistro,
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
