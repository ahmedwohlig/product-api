const express = require("express");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

// Middlewares
app.use(express.json());

if (process.env.NODE_ENV === "development") {
    const morgan = require("morgan");
    app.use(morgan("combined"));
}

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(
    MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("successfully connected to database");
        }
    }
);

// importing all routes
const routes = require("./routes/index");

// setting the routes
app.use("/api", routes);

app.listen(PORT || 3001, console.log(`server started on port ${PORT}`));
