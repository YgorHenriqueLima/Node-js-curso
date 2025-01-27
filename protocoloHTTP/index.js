var http = require('http');

/*criando o servidor e a porta*/
http.createServer(function(req,res){
    res.end("hello world! welcome to my website");
}).listen(8081);

console.log("o servidor está rodando");
