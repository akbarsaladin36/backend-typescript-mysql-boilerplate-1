import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import jwtOptions from '../config/jwt'
import Helper from '../../helper'

const AuthMiddleware = {
    userAuthentication(req: Request, res: Response, next: NextFunction): any {
        let token = req.headers.authorization
        if(token) {
            token = token.split(' ')[1]
            jwt.verify(token, jwtOptions.secret, (error: any, result: any) => {
                if ((error && error.name === 'JsonWebTokenError') || (error && error.name === 'TokenExpiredError')) {
                    return Helper.GetResponse(res, 400, error.message, null)
                } else {
                    (req as any).currentUser = result
                    next()
                }
            }) 
        } else {
            return Helper.GetResponse(res, 403, 'Please login to website first!', null)
        }
    },
    userCheckRole(role: string): any {
        return (req: Request, res: Response, next: NextFunction) => {
            const currentUser = Helper.CurrentUser(req)
            if(role == currentUser.role) {
                next()
            } else {
                return Helper.GetResponse(res, 403, `This api can be accessed by ${role} role`, null)
            }
        }
    }
}

export default AuthMiddleware