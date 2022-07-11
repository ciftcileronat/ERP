module.exports = (sequelize, DataTypes) => {
  const Departments = sequelize.define("Departments", {
    department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Departments;
};
