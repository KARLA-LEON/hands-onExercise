const dbConfig = require("../config/db.config");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.client = require("./client")(mongoose);
db.orders = require("./order.model.js")(mongoose);
db.tutorials = require("./department.model.js")(mongoose);

module.exports = db;