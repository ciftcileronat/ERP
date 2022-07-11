module.exports = (sequelize, DataTypes) => {
  const Salaries = sequelize.define("Salaries", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    basic: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    bonus: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    totalSalary: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });

  return Salaries;
};
