'use strict';
module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define('News', {
    urlSlug: DataTypes.STRING,
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    guid: DataTypes.STRING,
    title: DataTypes.STRING,
    link: DataTypes.STRING,
    categories: DataTypes.STRING,
    content: DataTypes.TEXT,
    imageUrl: DataTypes.STRING,
    publishedDate: DataTypes.STRING,
    isPublished: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
      allowNull: false
    },
    isApproved: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }
  }, {
    underscored: true
  });
  News.associate = function(models) {
    // associations can be defined here
    News.belongsTo(models.Users, {
      foreignKey: 'userId'
    });
    News.hasMany(models.NewsLikes);
    News.hasMany(models.NewsComments);
  };
  return News;
};