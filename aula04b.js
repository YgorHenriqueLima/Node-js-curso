const express=require("express");
const app=express();
const porta = process.env.PORT | 3000;

app.get("/",(req,res)=>{
    res.send('Seja Bem-vindo');
});

app.get("/canal",(req,res)=>{
    res.send({canal: "cfb curso"});
})

servidor.listen(porta || 3000,()=>{console.log("servidor rodando")});
