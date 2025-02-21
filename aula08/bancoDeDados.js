import mysql from "mysql2/promise";

const conectar = async () => {
    if (global.conexao && global.conexao.state !== 'disconnected') {
        return global.conexao;
    }

    const conexao = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "detec_bd"
    });

    console.log("🔌 Conectado ao MySQL!");
    global.conexao = conexao;
    return conexao;
};

// 📌 Inserir novo dispositivo
const inserirDispositivo = async (dispositivo) => {
    const con = await conectar();
    const sql = 'INSERT INTO dispositivos (nome, tipo, codigo, latitude, longitude) VALUES (?, ?, ?, ?, ?)';
    const valores = [dispositivo.nome, dispositivo.tipo, dispositivo.codigo, dispositivo.latitude, dispositivo.longitude];
    const [result] = await con.query(sql, valores);
    return result.insertId; // Retorna o ID do dispositivo cadastrado
};

// 📌 Listar todos os dispositivos
const listarDispositivos = async () => {
    const con = await conectar();
    const [rows] = await con.query("SELECT * FROM dispositivos");
    return rows;
};

// 📌 Atualizar um dispositivo pelo ID
const atualizarDispositivo = async (id, dispositivo) => {
    const con = await conectar();
    const sql = 'UPDATE dispositivos SET nome=?, tipo=?, codigo=?, latitude=?, longitude=? WHERE id=?';
    const valores = [dispositivo.nome, dispositivo.tipo, dispositivo.codigo, dispositivo.latitude, dispositivo.longitude, id];
    await con.query(sql, valores);
};

// 📌 Deletar um dispositivo pelo ID
const deletarDispositivo = async (id) => {
    const con = await conectar();
    const sql = 'DELETE FROM dispositivos WHERE id=?';
    await con.query(sql, [id]);
};

export { inserirDispositivo, listarDispositivos, atualizarDispositivo, deletarDispositivo };
