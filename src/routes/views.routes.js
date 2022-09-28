import { Router } from 'express'

const router = Router()

//Views

router.get('/',(req, res) => {
    res.render('index')
})

export default router