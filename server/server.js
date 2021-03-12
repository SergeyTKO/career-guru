import http from "http";
import app from "./app.js";

import appConfig from "./middleware/config.js";
import routersConfig from "./middleware/routersConfig.js";
import dbConnect from "./seeder/dbConnect.js";
import cors from "cors";

import dotenv from "dotenv";

dotenv.config();
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

const server = http.createServer(app);
const PORT = process.env.PORT || 4000;
dbConnect();
appConfig(app);
routersConfig(app);

server.listen(PORT, () => console.log(`server on ${PORT}`));
