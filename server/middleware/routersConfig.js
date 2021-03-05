import mainRouter from '../routers/main.js'



const routersConfig =(application) =>{
application.use(mainRouter)

}

export default routersConfig
