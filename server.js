const {app}=require("./app")

const PORT=8000;

app.listen(PORT,()=>
{
console.log(`Backen started listening on port ${PORT}`);
});