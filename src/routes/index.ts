import { Router } from 'express'
import authRoute from '../app/routes/authRoute'
import userRoute from '../app/routes/userRoute'

const Route = Router()

Route.use('/auth', authRoute)
Route.use('/users', userRoute)

export default Route