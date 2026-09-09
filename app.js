const express=require("express");
const app=express();
const api=express();

const v1=express();

app.use(express.json());

app.use()express.urlencoded({extended:true});

const foodRoutes=require("./api/routes/foodRoutes")

const{log}=require("./api/middlewares/logger");

const errorHandler=require("./api/middlewares/errorHandler");

app.use("/api",api);
api.use("/foods",foodRoutes);

app.use(...errorHandler);



module.exports=
{
    app,
    api
};