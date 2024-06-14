let express = require("express")
let app = express()
let cors = require("cors")
require("dotenv").config()
let ConnectToDB = require("./ConnectToDB")
ConnectToDB()
app.use(cors());
app.use(express.json())

app.use("/userAuth",require("./routs/userAuth"))
app.use("/StripRouts",require("./routs/StripRout"))

app.listen(3000,()=>{
    console.log("Iam listen");
})