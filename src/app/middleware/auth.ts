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
    }
}

export default AuthMiddleware