import mainRouter from '../routers/main.js'
import adminRouter from '../routers/admin.js'


const routersConfig =(application) =>{
application.use(mainRouter)
application.use(adminRouter)

}

export default routersConfig
