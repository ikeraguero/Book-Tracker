// File used to connect to the database

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize (
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

// Function that reads trough all the models in the models folder and
// and set them up to be used in Sequelize

fs
   .readdirSync(__dirname).filter((file) => 
    file !== 'index.js'
    )
    .forEach((file) => {
        const model = sequelize.define(path.join(__dirname, file))
        db[model.name] = model
    })

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;