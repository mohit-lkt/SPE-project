'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('Users', {
    userID: DataTypes.INT,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  
  return User;
};