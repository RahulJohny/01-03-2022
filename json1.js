var http=require("http");
let port=2000
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'application/json'})
    res.write('{"student":"Rahul"}\n')
    res.write('{"class":"BCA"}\n')
    res.write('{"per":"70%"}\n')
    res.write('{"grade":"B+"}\n')
    res.write('{"attitude":"good "}\n')
    res.end();
    }).listen(port);






//