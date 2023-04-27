const asyncHandler = require("express-async-handler");
const db = require("../models");
const Orders = require("../models/orders")(db.sequelize, db.Sequelize);

// @desc      Create Orders
// @route     POST /api/v1/order
// @access    Public
const createOrders = asyncHandler(async (req, res) => {
  const orders = await Orders.create({ ...req.body });

  if (!orders) {
    res.status(404);
    throw new Error("Unable to create order!");
  }

  res.status(201);
  res.json({ error: false, message: `Orders created succefully!` });
});

// @desc      Get All Orders
// @route     GET /api/v1/order
// @access    Public
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Orders.findAll({});

  if (!orders.length) {
    res.status(404);
    throw new Error("There are no Orders data found!");
  }

  res.status(200);
  res.json({ error: false, list: orders });
});

// @desc      Get Orders by ID
// @route     GET /api/v1/order/:id
// @access    Public
const getOrder = asyncHandler(async (req, res) => {
  const id = req?.params?.id;
  const order = await Orders.findByPk(id);

  if (!order) {
    res.status(404);
    throw new Error(`Orders with id: ${id} not found!`);
  }

  res.status(200);
  res.json({ error: false, data: order });
});

// @desc      Update Orders by ID
// @route     PUT /api/v1/order/:id
// @access    Public
const updateOrder = asyncHandler(async (req, res) => {
  const id = req?.params?.id;
  const { user_id, amount, tax, notes, status } = req?.body;
  const allowedEdits = ["user_id", "amount", "tax", "notes", "status"];

  const editKeys = Object.keys(req?.body);
  const isValidEdit = editKeys.every((key) => allowedEdits.includes(key));
  if (!isValidEdit) {
    res.status(400);
    throw new Error(
      `Invalid Update - allowed updates are "user_id", "amount", "tax", "notes", "status"`
    );
  }
  const order = await Orders.findByPk(id);

  if (!order) {
    res.status(404);
    throw new Error(`Order with id: ${id} not found!`);
  }

  const updateFields = {};
  if (user_id) {
    updateFields.user_id = user_id;
  }
  if (amount) {
    updateFields.amount = amount;
  }
  if (tax) {
    updateFields.tax = tax;
  }
  if (notes) {
    updateFields.notes = notes;
  }
  if (status !== undefined) {
    updateFields.status = status;
  }

  await Orders.update(updateFields, {
    where: {
      id: id,
    },
  });

  const updatedOrder = await Orders.findOne({ where: { id: id } });

  res.status(200);
  res.json({
    error: false,
    message: `Order updated successfully!`,
    data: updatedOrder,
  });
});

// @desc      Delete Orders by ID
// @route     DELETE /api/v1/order/:id
// @access    Public
const deleteOrder = asyncHandler(async (req, res) => {
  const id = req?.params?.id;

  const order = await Orders.findByPk(id);

  if (!order) {
    res.status(404);
    throw new Error(`Order with id: ${id} not found!`);
  }

  const deletedOrder = await order.destroy();

  res.status(200);
  res.json({
    error: false,
    message: `Order deleted successfully!`,
    data: deletedOrder,
  });
});

module.exports = {
  getOrder,
  getOrders,
  createOrders,
  updateOrder,
  deleteOrder,
};
