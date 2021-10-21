import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import UserRouter from "./routes/UserRoutes";
import announce_router from "./routes/Announcements";
let verifyToken = require("./controllers/components/verifyToken")
 /*
    Basic Port Configuration
*/
let PORT = process.env.PORT || 4000;
let app= express();


/* 
    Database Configuration
*/

let dbUrl = "mongodb://admin:admin@cluster0-shard-00-00.gj5ts.mongodb.net:27017,cluster0-shard-00-01.gj5ts.mongodb.net:27017,cluster0-shard-00-02.gj5ts.mongodb.net:27017/WeddingTaskDatabase?ssl=true&replicaSet=atlas-pj4wa7-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(dbUrl)
    .then(()=>{
        app.listen(PORT);
        console.log("Connected to database ");
    })
    .catch((e)=>{
        console.log(e);
        ;
    })


/*
    Static Files Configuration
*/
app.use("/static",express.static("public"))








/*
    MiddleWares
*/

/*
    Url logger middleware
*/
const getDurationInMilliseconds = (start:[number,number]) => {
    const NS_PER_SEC = 1e9
    const NS_TO_MS = 1e6
    const diff = process.hrtime(start)

    return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS
}

app.use((req,res,next)=>{
    const start = process.hrtime()
    res.on('close', () => {
        const durationInMilliseconds = getDurationInMilliseconds (start)
        console.log(`${req.method} ${req.originalUrl} [CLOSED] ${durationInMilliseconds.toLocaleString()} ms`)
    })

    next()
    
})


app.use(verifyToken)

/*
    Body Parser
*/
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({extended:false}))
/*
    URLs
*/
app.use("/api/user",UserRouter)
app.use("/api/announcements",announce_router)