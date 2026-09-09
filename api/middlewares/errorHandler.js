const NotFoundError=require("../errors/NotFoundError");
const {log}=require("./logger");

function NotFound(req,res,next) {
    throw new NotFoundError();
}
function showError(error,req,res,next) {


    res.status(error.status).json(
    {
        msg:error.message,
        status:error.status,
        details:error.details?error.details:undefined,
        data:error.data?error.data:undefined,
        ...error,
    });

}

module.exports=[
    NotFound,
    showError,
]