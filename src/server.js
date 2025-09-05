const express = require("express");
const bodyParser = require("body-parser");

const serverConfig = require('./config/serverConfig');
const cityRoutes = require('./routes/index');

function startServer (){
    const app = express();
    const { PORT } = serverConfig;

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.use('/api',cityRoutes);

    app.listen(PORT, () => {
        console.log(`Hi the server has started on the PORT ${PORT}`);
    });
}

startServer();


