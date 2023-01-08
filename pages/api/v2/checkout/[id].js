import { createConnection } from 'mysql2/promise';
import config from '../../../../config/mysql.json'

export default async (req, res) => {
    const connection = createConnection({
        host: config.host,
        user: config.user,
        password: config.password,
        database: config.datenbank
    });
    const query = 'SELECT * FROM products WHERE serverid = ' + req.query.id
    const values = []
    const [rows] = await (await connection).execute(query, values)
    res.status(200).json(rows);
};