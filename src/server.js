const express = require("express");
const bodyParser = require("body-parser");

const serverConfig = require('./config/serverConfig');


function startServer (){
    const app = express();
    const { PORT } = serverConfig;

    app.listen(PORT, () => {
        console.log(`Hi the server has started on the PORT ${PORT}`);
    });
}

startServer();


