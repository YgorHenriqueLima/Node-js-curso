const conectar = async () => {
    if (global.conexao && global.conexao.state !== 'disconnected') {
        return global.conexao;
    }
    const mysql = require("mysql2/promise");

    const conexao = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "BD_Clientes"
    });

    global.conexao = conexao;
    return conexao;
};

const insereCliente = async (cliente) => {
    const con = await conectar();
    const sql = 'INSERT INTO cliente_node (nome, idade) VALUES(?,?)';
    const valores = [cliente.nome, cliente.idade];
    await con.query(sql,valores);    
};


const todosClientes = async (cliente) => {
    const con = await conectar();
    const [linhas] = await con.query("SELECT * FROM cliente_node"); // Ajuste de nome de tabela, se necessário.
    return await linhas;
};

const atualizaCliente = async (id, cliente) => {
    const con = await conectar();
    const sql = 'UPDATE cliente_node SET nome=?, idade=? WHERE id=?';
    const valores = [cliente.nome, cliente.idade,id];
    await con.query(sql,valores)
};

const deletarCLiente = async (id) =>{
    const con = await conectar();
    const sql = 'DELETE FROM cliente_node WHERE id=?';
    const valores = [ id ];
    await con.query(sql,valores)
}
 
// Exporte a função após a definição
module.exports = { todosClientes, insereCliente, atualizaCliente, deletarCLiente };

