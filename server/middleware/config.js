import morgan from "morgan";
import express from "express";
import cookieParser from 'cookie-parser'
import session from "express-session";
import sessionFileStore from "session-file-store";
import cors from 'cors'
import path from 'path'

const FileStore = sessionFileStore(session);

const appConfig = (application) => {
  application.use(morgan("dev"));
  application.use(express.urlencoded({ extended: true }));
  application.use(express.json());
  application.use(express.static(path.resolve('../client/build')))
  // application.use(
  //   cors({
  //     origin: "http://localhost:3000", // allow to server to accept request from different origin
  //     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  //     credentials: true // allow session cookie from browser to pass through
  //    })
  // );
  // application.use(
  //   session({
  //     store: new FileStore(),
  //     secret: process.env.SESSION_SECRET,
  //     resave: true,
  //     rolling: true,
  //     saveUninitialized: false,
  //     cookie: {
  //       maxAge: 10 * 60 * 1000,
  //       httpOnly: false,
  //     },
  //   })
  // );
};

export default appConfig;
