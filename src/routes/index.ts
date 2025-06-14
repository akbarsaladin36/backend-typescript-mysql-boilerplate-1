import { Router } from 'express'
import authRoute from '../app/routes/authRoute'
import userRoute from '../app/routes/userRoute'
import profileRoute from '../app/routes/profileRoute'

const Route = Router()

Route.use('/auth', authRoute)
Route.use('/users', userRoute)
Route.use('/profile', profileRoute)

export default Route