'use strict';
module.exports = (sequelize, DataTypes) => {
  const NewsComments = sequelize.define('NewsComments', {
    newsId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    comment: DataTypes.STRING
  }, {
    underscored: true
  });
  NewsComments.associate = function(models) {
    // associations can be defined here
    NewsComments.belongsTo(models.News, {
      foreignKey: 'newsId'
    });
    NewsComments.belongsTo(models.Users, {
      foreignKey: 'userId'
    });
  };
  return NewsComments;
};