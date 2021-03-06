import mainRouter from '../routers/main.js'
// import googleRouter from '../routers/google.js'



const routersConfig =(application) =>{
application.use(mainRouter)
// application.use('/auth/google', googleRouter)

}

export default routersConfig
