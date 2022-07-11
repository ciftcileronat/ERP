module.exports = (sequelize, DataTypes) => {
  const Permissions = sequelize.define("Permissions", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isSysAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    isIt: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    isManager: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    isBoard: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  return Permissions;
};
