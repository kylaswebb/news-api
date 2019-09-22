'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('NewsLikes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      newsId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'News', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: {
          model: 'Users', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('NewsLikes');
  }
};