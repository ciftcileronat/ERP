module.exports = (sequelize, DataTypes) => {
  const Titles = sequelize.define("Titles", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Titles;
};
