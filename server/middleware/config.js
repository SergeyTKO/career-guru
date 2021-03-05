import morgan from 'morgan'
import express from 'express'



const appConfig = (application) => {

  application.use(morgan('dev'));

  // application.use(express.static('public'));

  application.use(express.urlencoded({ extended: true }));
  application.use(express.json());


}

export default appConfig
