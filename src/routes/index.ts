import { Router } from 'express'
import authRoute from '../app/routes/authRoute'

const Route = Router()

Route.use('/auth', authRoute)

export default Route