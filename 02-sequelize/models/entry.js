/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entry', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    subtitle: {
      type: DataTypes.STRING,
      allowNull: true
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true
    },
    excerpt: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tweet_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tweet_h_t_m_l: {
      type: DataTypes.STRING,
      allowNull: true
    },
    content_md: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    publish_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    is_post: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    site_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'entry'
  });
};
