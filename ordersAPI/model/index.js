const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
const db = {};

mongoose.Promise = global.Promise;
db.mongoose = mongoose;
db.url = dbConfig.url;
db.user = require("./user.model")(mongoose);
db.client = require("./client.model")(mongoose);
db.orders = require("./order.model.js")(mongoose);
db.tutorials = require("./department.model.js")(mongoose);
db.steps = require("./step.model.js")(mongoose);

module.exports = db;