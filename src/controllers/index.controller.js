import { pool } from '../database.js';

export const ping = async (req, res) => {
    const [result] = await pool.query('SHOW TABLES')
    res.json(result[0])
}