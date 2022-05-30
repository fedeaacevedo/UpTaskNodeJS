const sequelize = require('sequelize');
const db = require('../config/db');

const Proyectos = db.define('proyectos', {

    id : {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre : {
        type: sequelize.STRING,
    },

    url: {
        type: sequelize.STRING
    }
});