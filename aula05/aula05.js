const http = require("http");
const fs = require("fs");
const porta = process.env.PORT | 3000;

const servidor  = http.createServer((req,res)=>{
    fs.readFile("index.html",(err,arquivo)=>{
        res.writeHead(200,{'Content-Type':'text-plain'});
        res.write(arquivo)
        return res.end();        
    });
});

servidor.listen(porta || 3000,()=>{console.log("servidor rodando")});
