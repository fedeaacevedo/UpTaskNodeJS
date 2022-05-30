const Sequelize = require('sequelize');
const db = new Sequelize('uptasknode', 'root', 'Lasmalvinas1', {
  host: 'localhost',
  dialect: 'mysql',
  port: '3306',
  operatorAliases: false,
  define:{
      timeStamps:false
  },

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

module.exports = db;