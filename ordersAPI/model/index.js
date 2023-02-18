const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
const db = {};

mongoose.Promise = global.Promise;
db.mongoose = mongoose;
db.url = dbConfig.url;
db.steps = require("./step.model.js")(mongoose);

module.exports = db;