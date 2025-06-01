import { Request, Response } from "express"
import Helper from "../../helper"
import authService from "../services/authService"
import jwt from 'jsonwebtoken'
import jwtOptions from "../config/jwt"

class AuthController {
    async registerController(req: Request, res: Response): Promise<void> {
        try {
            const { username, email, password } = req.body
            const result = await authService.findOneService(username)
            if(result) {
                Helper.GetResponse(res, 400, `A username ${username} data is registered! Please try find a new username!`, null)
            } else {
                const userUUID = Helper.GenerateUUID()
                const hashedPassword = Helper.HashPassword(password)
                const setData = {
                    user_uuid: userUUID,
                    user_username: username,
                    user_email: email,
                    user_password: hashedPassword,
                    user_status_cd: 'active',
                    user_role: 'user',
                    user_created_date: new Date(Date.now()),
                    user_created_user_uuid: userUUID,
                    user_created_user_username: username
                }
                await authService.createService(setData)
                Helper.GetResponse(res, 200, 'A new user is succesfully created!', setData)
            }
        } catch(err) {
            const error = err instanceof Error ? err.message : err
            Helper.GetResponse(res, 404, error, null)
        }
    }

    async loginController(req: Request, res: Response): Promise<void> {
        try {
            const { username, password } = req.body
            const result = await authService.findOneService(username)
            if(result) {
                const checkPassword = Helper.CheckPassword(password, result.user_password)
                if(checkPassword) {
                    const payload = {
                        userUUID: result.user_uuid,
                        username: result.user_username,
                        email: result.user_email,
                        role: result.user_role
                    }
                    const token = jwt.sign(
                        payload,
                        jwtOptions.secret,
                        { expiresIn: jwtOptions.expiresIn }
                    )
                    const loginResult = { ...payload, token }
                    Helper.GetResponse(res, 200, `A login username is succesfully login!`, loginResult)
                } else {
                    Helper.GetResponse(res, 400, 'A password are not match! Please try again!', null)
                }
            } else {
                Helper.GetResponse(res, 400, `A username ${username} data is not exist! Please register!`, null)
            }
        } catch(err) {
            const error = err instanceof Error ? err.message : err
            Helper.GetResponse(res, 404, error, null)
        }
    }
}

export default new AuthController()