import dotenv from 'dotenv'
dotenv.config()

const secret: any = process.env.JWT_SECRETKEY
const expiresIn: any = process.env.JWT_EXPIRESTIME

const jwtOptions = {
    secret: secret,
    expiresIn: expiresIn
}

export default jwtOptions