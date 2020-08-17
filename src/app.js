const express = require('express'),
colors = require("colors");
const morgan = require('morgan');
const path = require("path")
const bodyParser = require("body-parser")
const ejs = require("ejs");
const app = express() 

app.set('port', process.env.PORT || 3001);

app.set("view engine", ".ejs")

//middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));


//routes
app.use("/api",require("./routes/app"));

//public 
app.use(express.static(path.join(__dirname, "public")));

//views
app.set("views",path.join(__dirname,"views"));




app.listen(app.get('port'), () =>{
    console.log("server on port:",app.get('port'))
})


 
