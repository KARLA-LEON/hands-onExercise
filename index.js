const express = require('express');
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// Parse requests of conten-type - application/json
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

const db = require("./ordersAPI/model");

db.mongoose.connect(db.url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(function(){
    console.log("Connected to the database");
    
}).catch(function(err){
    console.log("Cannot connect to the database", err);
    process.exit();
});

require("./ordersAPI/routes/client.routes")(app);

// Port to listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
});