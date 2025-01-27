const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.write('CFBcursos\n');
    res.end();
}).listen(1337);

