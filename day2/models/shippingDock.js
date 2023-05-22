module.exports = (sequelize, DataTypes) => {
  const shippingDock = sequelize.define(
    "shipping_dock",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        values: [0, 1],
        defaultValue: 1,
      },
      created_at: DataTypes.DATEONLY,
      updated_at: DataTypes.DATE,
    },
    {
      timestamps: true,
      freezeTableName: true,
      tableName: "shipping_dock",
    },
    {
      underscoredAll: false,
      underscored: false,
    }
  );

  return shippingDock;
};
