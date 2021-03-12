import mainRouter from "../routers/main.js";
import authRouter from "../routers/auth.js";
import loginRouter from "../routers/login.js";
import adminRouter from '../routers/admin.js'
import userRouter from '../routers/user.js'
import addFavoritesRouter from '../routers/addfavorites.js'


const routersConfig = (application) => {
  application.use(mainRouter);
  application.use(adminRouter);
  application.use(userRouter);
  application.use("/auth", authRouter);
  application.use("/login", loginRouter);
  application.use("/addfavorites", addFavoritesRouter);

  
};

export default routersConfig;
