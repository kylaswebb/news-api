'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    isActive: {
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
  Users.associate = function(models) {
    // associations can be defined here
    Users.hasMany(models.News);
  };
  return Users;
};