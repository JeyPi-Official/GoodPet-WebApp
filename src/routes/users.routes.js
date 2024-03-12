import { Router } from 'express'
import { addUser, deleteUser, updateUser, getAllUsers, getUser, getUserById, renderProfile } from '../controllers/users.controller.js'

const router = Router()

//GET - recibir
router.get('/users', getAllUsers)

//POST - recibir login
router.post('/userIn', getUser)

//GET - recibir id
router.get('/userId/:id', getUserById)

//GET - enviar a perfil
router.get('/pro/:id', renderProfile)

//POST - enviar
router.post('/users', addUser)

//PUT - editar but PATCH is rather than PUT
router.patch('/users/:id', updateUser)

//DELETE - eliminar
router.delete('/users/:id', deleteUser)

export default router