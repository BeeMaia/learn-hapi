/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('allowed_themes', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'allowed_themes'
  });
};
