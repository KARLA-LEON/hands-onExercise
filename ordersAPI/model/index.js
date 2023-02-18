const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
const db = {};

mongoose.Promise = global.Promise;
db.mongoose = mongoose;
db.url = dbConfig.url;
db.user = require("./user.model.js")(mongoose);
db.client = require("./client.model.js")(mongoose);
db.orders = require("./order.model.js")(mongoose);
db.tutorials = require("./department.model.js")(mongoose);
db.steps = require("./step.model.js")(mongoose);
db.resource = require("./resource.model.js")(mongoose);

module.exports = db;