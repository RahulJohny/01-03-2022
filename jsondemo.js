var http=require("http");
let port=1002
 http.createServer(function(req,res){
     res.writeHead(200,{'content-type':'application/json'})
     res.write( '{"msg" : "i eaten apple"}')
     res.write( '{"name" : "rahul"}')
     res.write( '{"location" : "chennai"}')

     res.end();

 }).listen(port);