var express = require("express");
const {
  getReports,
  getMonthlySalesPerYear,
  getOrderCountPerYearByUser,
  getMonthlySalesPerYearByUser,
  getMonthlySalesPerYearByShippingDock,
} = require("../controllers/Reports");
var router = express.Router();

// router.get("/", getTransactions).post("/", createTransactions);
router.get("/sale", getReports);
router.get("/monthly", getMonthlySalesPerYear);
router.get("/user", getMonthlySalesPerYearByUser);
router.get("/user/count", getOrderCountPerYearByUser);
router.get("/shipping_dock", getMonthlySalesPerYearByShippingDock);

module.exports = router;
