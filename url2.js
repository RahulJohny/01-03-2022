const res = require("express/lib/response");
const http=require("http");
const hostname="localhost"
let port=1000
const server=http.createServer(function(req,res){
    res.statuscode=200;
    res.setHeader("content-type","text/html")
  

    switch(req.url){
      case"/apple" :
        res.writeHead(200);
        res.end("i love apples ");
        break;
        
        case"/kannan" :
            res.writeHead(200);
            res.end("this is kannan");
            break;
            
            default :
             res.end("this is mani");
            break;
    }
        

});
server.listen(port,hostname,()=>{
    console.log("server is running")
});
