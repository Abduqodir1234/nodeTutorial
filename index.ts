import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import UserRouter from "./routes/UserRoutes";
import helmet from "helmet";

/*
    Basic Port Configuration
*/
let PORT = process.env.PORT || 4000;
let app= express();


/* 
    Database Configuration
*/

let dbUrl = "mongodb://127.0.0.1:27017/WeddingTaskDatabase"
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

/*
    Body Parser
*/
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({extended:false}))

app.post('/send_data', function(req, res) {
    console.log(req.body); // the posted data
});


/*
    URLs
*/
app.use("/user",UserRouter)