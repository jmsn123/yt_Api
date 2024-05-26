require("dotenv").config();
const express = require("express");
const db = require("./config/config");
const cors = require("cors");
const morgan = require("morgan");
const User = require("./route/user");
const app = express();
db();
app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
app.use("/api", User);
app.listen(process.env.PORT, () =>
    console.log(`server started on port ${process.env.PORT}`)
);

// const db = require("./config/config");
// const User = require("./route/user");

// db();

// app.use("/api", User);