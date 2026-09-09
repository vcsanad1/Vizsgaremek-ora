function log(req,res,next,message=null)
{
    console.log("Kéres érkezett!");

    console.log(req.originalUrl);
    console.log(req.method);

    if (!message) {
        console.log(message);
    }
    next();
}

module.exports={
    log
}