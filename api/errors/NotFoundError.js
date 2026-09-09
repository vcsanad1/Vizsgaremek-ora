const AppError=require("./AppError");


class NotFoundError extends AppError
{
    constructor(message="The specified resource can not be found",options={})
    {
        super(message,{...options,status:404,isOperational:true});
        for(let key of options){
        }
    }
}

module.exports=NotFoundError;