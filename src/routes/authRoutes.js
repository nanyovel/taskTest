import {Router} from 'express'
import {register} from '../controller/authControllers.js'

const router=Router()

router.post('/register',register)
router.post('/login')
router.post('/login')

export default router