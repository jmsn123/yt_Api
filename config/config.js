module.exports = function db() {
    const mongoose = require("mongoose");

    mongoose.connect(process.env.URI);
    const db = mongoose.connection;

    db.on("error", (error) => console.log(error));
    db.on("open", () => console.log("connection is established"));
};