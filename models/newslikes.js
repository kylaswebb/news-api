'use strict';
module.exports = (sequelize, DataTypes) => {
  const NewsLikes = sequelize.define('NewsLikes', {
    newsId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    userId: {
      type: Sequelize.INTEGER,
      defaultValue: null,
    }
  }, {
    underscored: true
  });
  NewsLikes.associate = function(models) {
    // associations can be defined here
    NewsLikes.belongsTo(models.News, {
      foreignKey: 'newsId'
    });
    NewsLikes.belongsTo(models.Users, {
      foreignKey: 'userId'
    });
  };
  return NewsLikes;
};