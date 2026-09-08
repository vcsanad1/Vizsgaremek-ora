const express=require("express");

const router =express.Router();
router.get("/",(request,restart,next)=>
{
    restart.status(200).send("Foods!")
});

module.exports=router;