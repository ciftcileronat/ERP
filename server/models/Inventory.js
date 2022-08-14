module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define("Inventory", {
    item_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    assign_to: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Inventory;
};
