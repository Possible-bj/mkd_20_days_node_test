module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define(
    "Orders",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: DataTypes.INTEGER,
      amount: DataTypes.FLOAT,
      tax: DataTypes.FLOAT,
      notes: DataTypes.STRING,
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        values: [0, 1],
        defaultValue: 1,
      },
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
      // timestamps: true,
      freezeTableName: true,
      tableName: "Orders",
    },
    {
      underscoredAll: false,
      underscored: false,
    }
  );

  return Orders;
};
