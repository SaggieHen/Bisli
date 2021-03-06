var dbAccessor = require("./db/dbAccessor");

const ROUTES = require("./routes");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.all("*",(req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization, Origin, Accept');
    next();
});


app.use("/account", ROUTES.AccountRouter);
app.use("/restaurant", ROUTES.RestaurantRouter);
app.use("/reservation", ROUTES.ReservationRouter);
app.listen(3001);