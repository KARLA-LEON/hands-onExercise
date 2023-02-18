const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./ordersAPI/model");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Conectado a la BD");
    })
    .catch(err => {
        console.log("No se pudo establecer la conexión con la BD", err);
        process.exit();
    });

require("./ordersAPI/routes/user.routes")(app);
require("./ordersAPI/routes/department.routes")(app);
require("./ordersAPI/routes/client.routes")(app);
require("./ordersAPI/routes/order.routes")(app);
require("./ordersAPI/routes/step.routes")(app);
require("./ordersAPI/routes/resource.route")(app);

const PORT = process.env.PORT || 8080;

console.log("Inicializando servidor...");
app.listen(PORT, () => {
    console.log("Servidor iniciado en el puerto "+PORT);
});
