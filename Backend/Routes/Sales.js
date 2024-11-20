import express from "express";
import { getAllSales, saveSaledata, updateSpecificSaleData, deleteSpecificSaleData, getDataByFilter} from "../controllers/sales.js";

const router = express.Router();

router.route("/")
.get(getAllSales)
.post(saveSaledata);

router.route("/getDataByFilter").get(getDataByFilter);

router.route("/:id")
.patch(updateSpecificSaleData);

router.route("/:id")
.delete(deleteSpecificSaleData);

export default router;
