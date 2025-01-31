(async () => {
    const db = require("./db");
    
    /*
    console.log("novo cliente inserido");
    let n = "Gustavo Pinheiro";
    let i = 26;
    await db.insereCliente({nome: n, idade: i});
    */

    /*
    await db.atualizaCliente(4, {nome:"Gabrielson",idade:32});
    console.log(`cliente atualizado`)
    */
   
    const id = 2
    await db.deletarCLiente(id)
    console.log('cliente ' + id + 'deletado')

    /*chamada para consulta dos dados */
    console.log("obter todos os clientes");
    const clientes = await db.todosClientes();
    console.log(clientes);
})();
