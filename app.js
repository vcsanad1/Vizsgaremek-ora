const express=require("express");
const app=express();
const api=express();

const v1=express();

const foodRoutes=require("./api/routes/foodRoutes")

app.use("/api",api);
api.use("/foods",foodRoutes);
api.use("/v1",v1)



module.exports=
{
    app,
    api
};