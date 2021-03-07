import morgan from "morgan";
import express from "express";
import dbConnect from "./dbConnect.js";
import cookieParser from 'cookie-parser'
import session from "express-session";
import sessionFileStore from "session-file-store";
import cors from 'cors'

const FileStore = sessionFileStore(session);

const appConfig = (application) => {
  dbConnect();
  application.use(morgan("dev"));
  application.use(express.urlencoded({ extended: true }));
  application.use(express.json());
  application.use(cookieParser('your secret here'));
  application.use(cors())
  application.use(
    session({
      store: new FileStore(),
      secret: process.env.SESSION_SECRET,
      resave: true,
      rolling: true,
      saveUninitialized: false,
      cookie: {
        maxAge: 10 * 60 * 1000,
        httpOnly: false,
      },
    })
  );
};

export default appConfig;
