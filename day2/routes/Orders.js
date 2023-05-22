var express = require("express");
const {
  getOrders,
  createOrders,
  getOrder,
  updateOrder,
  deleteOrder,
  getOddOrders,
  getCursorOrders,
  seedOrders,
} = require("../controllers/orders");
var router = express.Router();

/* GET Order listing. */
router
  .post("/", createOrders)
  .post("/all", getOrders)
  .get("/odd", getOddOrders)
  .get("/seed/:amount", seedOrders)
  .get("/cursor", getCursorOrders);
router
  .get("/:id", getOrder)
  .put("/:id", updateOrder)
  .delete("/:id", deleteOrder);

module.exports = router;
