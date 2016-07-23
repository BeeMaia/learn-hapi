/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('site', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    alias: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    tagline: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    generated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    statcounter_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    clicky_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    g_analytics: {
      type: DataTypes.STRING,
      allowNull: true
    },
    disqus_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    destination_dir: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    u_r_l: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hosted_at: {
      type: DataTypes.STRING,
      allowNull: true
    },
    github_uid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    github_token: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ssh_host: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ssh_uid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ssh_password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    s_s_h_directory: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aws_secret_key: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aws_access_key: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aws_target: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aws_region: {
      type: DataTypes.STRING,
      allowNull: true
    },
    netlify_token: {
      type: DataTypes.STRING,
      allowNull: true
    },
    netlify_site_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    netlify_user_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    netlify_admin_u_r_l: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'site'
  });
};
