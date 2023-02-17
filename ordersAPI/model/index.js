const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.url = dbConfig.url;
db.client = require("./client")(mongoose);

module.exports = db;