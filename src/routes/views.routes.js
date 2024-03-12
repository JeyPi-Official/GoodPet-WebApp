import { Router } from 'express'

const router = Router()

//Views

router.get('/',(req, res) => {
    res.render('index')
})

router.get('/pro/:id',(req,res) => {
    res.render('profile', {id: req.params.id})
})

export default router