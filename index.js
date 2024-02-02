require("dotenv").config();
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./src/routes/Order.Route");
const connectDB = require("./src/services/ServiceMongoDB");
const userRoute = require("./src/routes/user");

//Initialisation du serveur

const app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.json({ limit: "10mb" }));

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());

app.use("/api/v1/", router);
app.use("/api/v1/", userRoute);

app.listen(process.env.PORT, process.env.ADRESS, function () {
  connectDB().catch((err) => console.log(err));
  console.log(`[SERVEUR] est démarrer est port ${process.env.PORT}`);
});
