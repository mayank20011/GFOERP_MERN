import express from "express";
import { getAllPurchase, updateSpecificPurchase, deleteSpecificPurchase, savePurchase, getDataByFilter } from "../controllers/purchase.js";
const router = express.Router();

router.route("/")
.get(getAllPurchase)
.post(savePurchase);

router.route("/:id")
.patch(updateSpecificPurchase);

router.route("/:id")
.delete(deleteSpecificPurchase);

router.route("/getDataByFilter").get(getDataByFilter);

export default router;
