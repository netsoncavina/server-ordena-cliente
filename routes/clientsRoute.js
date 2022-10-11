import express from "express";
import {
  getClients,
  getClientsAsc,
  getClientsAscDate,
  getClientsAscFee,
  getClientsAscPhone,
  getClientsAscStatus,
  postClient,
} from "../controllers/clientsController.js";

const router = express.Router();

router.get("/", getClients);
router.get("/ascName", getClientsAsc);
router.get("/ascDate", getClientsAscDate);
router.get("/ascFee", getClientsAscFee);
router.get("/ascPhone", getClientsAscPhone);
router.get("/ascStatus", getClientsAscStatus);
router.post("/", postClient);

export default router;
