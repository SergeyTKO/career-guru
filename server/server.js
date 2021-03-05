import http from 'http'
import app from './app.js'

import appConfig from './middleware/config.js'
import routersConfig from './middleware/routersConfig.js'


const server = http.createServer(app)
const PORT = process.env.PORT || 4000

appConfig(app);
routersConfig(app);

server.listen(PORT, ()=>console.log(`server on ${PORT}`))
