import { pool } from '../database.js'

//To get all users
export const getAllUsers = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM users')
    res.json(rows)
}

//To get only one user
export const getUser = async (req, res) => {
    console.log(req.params.id)
    const [rows] = await pool.query('SELECT * FROM users WHERE id_usr = ?', [req.params.id])
    if (rows.length <= 0) return res.status(404).json({
        message: 'User not found'
    })

    res.json(rows[0])
}

//To add a new user
export const addUser = async (req, res) => {
    const { name, mail, password } = req.body
    const [rows] = await pool.query('INSERT INTO users (nam_usr, mail_usr, pass_usr) VALUES(?,?,?)', [name, mail, password])
    res.send({
        id: rows.insertId,
        name,
        mail,
        password
    })
}

//To modify an existing user
export const updateUser = async (req, res) => {
    const { id } = req.params
    const { name, mail, password } = req.body

    const [result] = await pool.query('UPDATE users SET nam_usr = IFNULL(?, nam_usr), mail_usr = IFNULL(?, mail_usr), pass_usr = IFNULL(?, pass_usr) WHERE id_usr = ?', [name, mail, password, id])

    console.log(result)
    if (result.affectedRows === 0) return res.status(404).json({
        message: 'User not found'
    })

    res.json('received')
}

//to delete an existing user
export const deleteUser = async (req, res) => {
    const [result] = await pool.query('DELETE FROM users WHERE id_usr = ?', [req.params.id])
    if (result.affectedRows <= 0) return res.status(404).json({
        message: 'User not found'
    })
    res.sendStatus(204)
}