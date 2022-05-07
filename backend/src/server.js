const app = require("./index");

const connectdb = require("./configs/db")

app.listen(5000, async () => {
    try{
        await connectdb();
        console.log("listening on port 5000")
    }
    catch(err){
        console.log(err.message);
    }
});