import { Router } from 'express'
import userController from '../controllers/userController'
import authMiddleware from '../middleware/auth'

const router = Router()

router.get("/", authMiddleware.userAuthentication, userController.findAllController)
router.get("/detail-user/:username", authMiddleware.userAuthentication, userController.findOneController)
router.post("/", authMiddleware.userAuthentication, userController.createUserController)
router.patch("/detail-user/:username", authMiddleware.userAuthentication, userController.updateUserController)
router.delete("/detail-user/:username", authMiddleware.userAuthentication, userController.deleteUserController)

export default router