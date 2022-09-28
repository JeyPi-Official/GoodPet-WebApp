import { Router } from 'express'
import { addUser, deleteUser, updateUser, getAllUsers, getUser } from '../controllers/users.controller.js'

const router = Router()

//GET - recibir
router.get('/users', getAllUsers)

router.get('/users/:id', getUser)

//POST - enviar
router.post('/users', addUser)

//PUT - editar but PATCH is rather than PUT
router.patch('/users/:id', updateUser)

//DELETE - eliminar
router.delete('/users/:id', deleteUser)

export default router