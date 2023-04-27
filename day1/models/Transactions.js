module.exports = (sequelize, DataTypes) => {
  const Transactions = sequelize.define(
    "Transactions",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: DataTypes.INTEGER,
      order_id: DataTypes.INTEGER,
      shipping_dock_id: DataTypes.INTEGER,
      amount: DataTypes.FLOAT,
      notes: DataTypes.STRING,
      created_at: DataTypes.DATEONLY,
      updated_at: DataTypes.DATE,
    },
    {
      timestamps: true,
      freezeTableName: true,
      tableName: "Transactions",
    },
    {
      underscoredAll: false,
      underscored: false,
    }
  );

  return Transactions;
};
