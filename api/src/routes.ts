import { Express, Request, Response } from 'express'
import sessionRoute from './routes/session.routes'
import productRoute from './routes/product.routes'
import userRoute from './routes/user.routes'
function routes(app: Express) {
    app.get('/healthcheck', (req: Request, res: Response) => {
        res.sendStatus(200)
    })
    app.use(userRoute)
    app.use(sessionRoute)
    app.use(productRoute)
}
export default routes
