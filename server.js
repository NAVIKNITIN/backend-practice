const express = require("express");


// console.log(express);
let app = express();
let morgan = require('morgan');
let helmet = require("helmet");


// let config=require('config');
let port = process.env.PORT || 3500;


app.use(helmet());
app.use(morgan("tiny"));


// // app.use(express.urlencoded({extended:true})); //key value
// app.use(express.static("html"));  

// console.log(`mode:${process.env.NODE_ENV}`);
// console.log(`default mode:${app.get("env")}`);
// console.log(`default config: ${config.get('name')}`);
// console.log(`mode_email:${config.get('email')}`);
// console.log(`password : ${config.get("password")}`);


// let middlewarework = require('./middleware');

// app.use(middlewarework);
// // middleware
// app.use((req,res,next)=>{
//     console.log("first");
//     next(); //next() is a flag which we must use after all operations
// });
// // middleware
// app.use((req,res,next)=>{
//     console.log("second");
//     next();
// });



// in-built middleware
// app.use(express.urlencoded({extended:true})); //key value
// app.use(express.static("public")); //here public is a folder which i have created and by using this we can access folder all data whether its is a html file aur js file or anythink




// custom middleware
// third-party middleware

let musiclist = require('./routes/musiclist');
app.use("/api",musiclist); //initial path is /api and the final path is musiclist







app.listen(port,()=>console.log(`connected to port ${port}`));


