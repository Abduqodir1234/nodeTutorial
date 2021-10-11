import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import UserRouter from "./routes/UserRoutes";
import helmet from "helmet";

/*
    Basic Port Configuration
*/
let PORT = process.env.PORT || 3000;
let app= express();
app.set("view engine","ejs")



/* 
    Database Configuration
*/

let dbUrl = "mongodb://127.0.0.1:27017/Tutorial1"
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
    URLs
*/





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

/*
    Body Parser
*/
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use((req,res,next)=>{
    res.setHeader("Content-Type","application/json")
    next()
});       // to support JSON-encoded bodies
app.use(bodyParser.raw());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended:true})); // to support URL-encoded bodies
// app.use(helmet())
app.post('/send_data', function(req, res) {
    console.log(req.body); // the posted data
});

app.use("/user",UserRouter)