import { pool } from '../database.js'

//To get all users
export const getAllUsers = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM users')
    res.json(rows)
}

//To get only one user
export const getUser = async (req, res) => {
    const { name, password } = req.body
    const isSigned = await pool.query('SELECT id FROM users WHERE nam_usr = ? and pass_usr = ?', [name, password])
    if (isSigned[0].length > 0) {   // User is signed
        const id = isSigned[0][0].id
        res.redirect("http://localhost:3000/api/userId/" + id)
    } else {
        res.send("El usuario No está registrado")
    }
}

//To get only one user by id
export const getUserById = async (req, res) => {
    const { id } = req.params
    res.redirect("http://localhost:3000/app/pro/" + id)
}

export const renderProfile = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const name = await pool.query('SELECT nam_usr FROM users WHERE id = ?', [id]);
    console.log(name);
    res.render('profile', { name: name[0] })
}

//To add a new user
export const addUser = async (req, res) => {
    const { name, mail, password } = req.body;
    console.log(name, mail, password);
    const [rows] = await pool.query('INSERT INTO users (nam_usr, mail_usr, pass_usr) VALUES(?,?,?)', [name, mail, password])
    res.redirect("http://localhost:3000/app");
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