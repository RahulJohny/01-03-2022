const req = require("express/lib/request");
const res = require("express/lib/response");

const http=require("http");
const hostname="localhost";
let port=1002;
const server=http.createServer(function(req,res){
    res.statuscode=200;
    res.setHeader('content-type','text/html');
    
    switch(req.url)
    {
        case "/add" :
            res.writeHead(200);
             res.end("there are two number adding ");
             break;
            
             case "/sub" :
            res.writeHead(200);
             res.end("there are two number subracting ");
             break;

             case "multi" :
            res.writeHead(200);
             res.end("there are two number multipulication ");
             break;

             case "/division" :
            res.writeHead(200);
             res.end("remainder and quotient ");
             break;
              
             default :
             res.end("maths");
             break;
}
})
server.listen(port,hostname,()=>{
    console.log("the server is running");
})
