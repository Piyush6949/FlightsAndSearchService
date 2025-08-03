const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.listen(PORT,() => {
    console.log(`Hi the server has started on the PORT ${PORT}`);
});

