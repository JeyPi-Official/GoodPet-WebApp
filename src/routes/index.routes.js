import { Router } from 'express'
import { ping } from '../controllers/index.controller.js'  

const router = Router()

//To connect to database
router.get('/ping', ping)

export default router