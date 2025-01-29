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

const todosClientes = async () => {
    const con = await conectar();
    const [linhas] = await con.query("SELECT * FROM cliente_node"); // Ajuste de nome de tabela, se necessário.
    return linhas;
};

// Exporte a função após a definição
module.exports = { todosClientes };

