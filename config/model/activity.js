const Sequelize = require('sequelize');
const db = require('../database/dbConn');

const activitys = db.define('activities', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  email: {
      type: Sequelize.STRING,
      allowNull: false,
  },
  title: {
      type: Sequelize.STRING,
      allowNull: false,
  },
  created_at: {
      type: Sequelize.DATE,
      field: 'created_at',
      allowNull: false,
  },
  updated_at: {
      type: Sequelize.DATE,
      field: 'updated_at',
      allowNull: false
  },
  deleted_at: {
    type: Sequelize.DATE,
    field: 'deleted_at',
    defaultValue: null,
    allowNull: true
  }
}, {
  freezeTableName: true,
  timestamps: false
});

module.exports = activitys;