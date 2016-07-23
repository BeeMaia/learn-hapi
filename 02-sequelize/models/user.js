/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    twitter: {
      type: DataTypes.STRING,
      allowNull: true
    },
    f_b: {
      type: DataTypes.STRING,
      allowNull: true
    },
    g_plus: {
      type: DataTypes.STRING,
      allowNull: true
    },
    regkey: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reset_key: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'user'
  });
};
