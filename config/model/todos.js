const Sequelize = require('sequelize');
const db = require('../database/dbConn');

const todos = db.define('todos', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  activity_group_id: {
    type: Sequelize.STRING,
    allowNull: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: true
  },
  is_active: {
    type: Sequelize.BOOLEAN,
    field: 'is_active',
    defaultValue: true,
    allowNull: false
  },
  priority: {
    type: Sequelize.STRING,
    field: 'priority',
    defaultValue: 'very-high',
    allowNull: false
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

module.exports = todos;