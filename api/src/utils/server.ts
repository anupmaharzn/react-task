import express from 'express'
import deserializeUser from '../middleware/deserializeUser'
import routes from '../routes'
import cors from 'cors'
import config from 'config'
import cookieParser from 'cookie-parser'
import path from 'path'

function createServer() {
    const app = express()
    app.use(
        cors({
            origin: config.get('origin'),
            credentials: true,
        })
    )
    app.use(cookieParser())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(deserializeUser)
    // static images folder
    const dirname = path.resolve()
    app.use('/src/images', express.static(path.join(dirname, 'src/images')))
    routes(app)
    return app
}

export default createServer
