var express = require("express");
const {
  getOrders,
  createOrders,
  getOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/orders");
var router = express.Router();

/* GET Order listing. */
router.get("/", getOrders).post("/", createOrders);
router
  .get("/:id", getOrder)
  .put("/:id", updateOrder)
  .delete("/:id", deleteOrder);

module.exports = router;
