// console.log(global);
// console.log(process);
// let user = require('./user');
// user("nitin");
 
// // console.log(module);
// const path = require("path");
// let pathobject=path.parse(__filename);
// console.log(pathobject);
// const os = require("os");
// const fs = require("fs");
const http = require("http");

let server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.write("hello world");
        res.end();

    };
});
server.listen(3000);
console.log(`server working on port 3000`);



// let freememory  = os.freemem();
// let totalmemory = os.totalmem();
// let cputime = os.uptime();
// console.log(freememory);
// console.log(totalmemory);
// console.log(cputime);
