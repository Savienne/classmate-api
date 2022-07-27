import { Router } from 'express'
import * as tipsCtrl from '../controllers/tips.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get("/", tipsCtrl.index)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post("/", checkAuth, tipsCtrl.create)

export { router }