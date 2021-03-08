import http from 'http'
import app from './app.js'

import appConfig from './middleware/config.js'
import routersConfig from './middleware/routersConfig.js'
import dbConnect from './seeder/dbConnect.js'

const server = http.createServer(app)
const PORT = process.env.PORT || 4000

appConfig(app);
// dbConnect()
routersConfig(app);

server.listen(PORT, ()=>console.log(`server on ${PORT}`))
