module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Users", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

/*
Posts.associate = (models) => {
  Posts.hashMany(models.Comments, {
    onDelete: "cascade",
  });
};
*/
return Users;
