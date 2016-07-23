/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('onboarding', {
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
    regkey: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    site_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    github_uid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    github_token: {
      type: DataTypes.STRING,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    content_md: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'onboarding'
  });
};
