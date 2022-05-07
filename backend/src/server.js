const app = require("./index");

const connectdb = require("./configs/db")

app.listen(6011, async () => {
    try{
        await connectdb();
        console.log("listening on port 6011")
    }
    catch(err){
        console.log(err.message);
    }
});