import bcryptjs from 'bcryptjs'
import { Response } from 'express'
import { v4 } from 'uuid'

const Helper = {
    GetResponse(res: Response, statusCode: number, message: any, data: any) {
        return res.status(statusCode).json({ status: statusCode, message: message, data: data })
    },
    HashPassword(passwordString: string): string {
        const saltSync = bcryptjs.genSaltSync(10)
        const hashedPassword = bcryptjs.hashSync(passwordString, saltSync)
        return hashedPassword
    },
    CheckPassword(bodyPassword: string, userPassword: string) {
        const checkPassword = bcryptjs.compareSync(bodyPassword, userPassword)
        return checkPassword
    },
    GenerateUUID(): string {
        const uuid = v4()
        const uuidWithoutHypens = uuid.replace(/-/g, '');
        return uuidWithoutHypens
    }
}

export default Helper