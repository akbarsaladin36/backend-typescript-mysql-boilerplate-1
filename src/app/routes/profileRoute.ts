import { Router } from 'express'
import profileController from '../controllers/profileController'
import authMiddleware from '../middleware/auth'

const router = Router()

router.get('/', authMiddleware.userAuthentication, profileController.findProfileController)
router.patch('/', authMiddleware.userAuthentication, profileController.updateProfileController)

export default router