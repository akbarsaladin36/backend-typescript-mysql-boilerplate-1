import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import routesNavigation from './routes'

dotenv.config()

const app = express()
const port = process.env.SERVER_PORT

app.use(morgan('dev'))
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/backend14/api/v1', routesNavigation)

app.listen(port, () => {
    console.log(`✅ Server is running on port ${port}`)
})









