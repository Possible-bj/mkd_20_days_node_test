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
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        field: "created_at",
        timestamps: false, // Disable automatic timestamps
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        field: "updated_at",
        timestamps: false, // Disable automatic timestamps
      },
    },
    {
      timestamps: false,
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
