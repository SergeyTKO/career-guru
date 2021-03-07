import mainRouter from "../routers/main.js";
import authRouter from "../routers/auth.js";
import loginRouter from "../routers/login.js";
import logoutRouter from "../routers/logout.js";

const routersConfig = (application) => {
  application.use(mainRouter);
  application.use("/auth", authRouter);
  application.use("/login", loginRouter);
  application.use("/logout", logoutRouter);
};

export default routersConfig;
