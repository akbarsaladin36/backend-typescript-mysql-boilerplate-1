import { Router } from 'express'
import userController from '../controllers/userController'
import authMiddleware from '../middleware/auth'

const router = Router()

router.get("/", authMiddleware.userAuthentication, authMiddleware.userCheckRole('admin'), userController.findAllController)
router.get("/detail-user/:username", authMiddleware.userAuthentication, authMiddleware.userCheckRole('admin'), userController.findOneController)
router.post("/", authMiddleware.userAuthentication, authMiddleware.userCheckRole('admin'), userController.createUserController)
router.patch("/detail-user/:username", authMiddleware.userAuthentication, authMiddleware.userCheckRole('admin'), userController.updateUserController)
router.delete("/detail-user/:username", authMiddleware.userAuthentication, authMiddleware.userCheckRole('admin'), userController.deleteUserController)

export default router