/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable prettier/prettier */
// Nodemon is a tool that helps develop Js/Nodejs based applications by automatically restarting the node application when file changes detected.
// npm install nodemon --save-dev //
// npx nodemon src/index.js
// The comment above starts nodemon
// nodemon executes the server and its waiting changes as soon as the server is saved or updated
// eslint-disable-next-line no-console
// npm install @babel/core @babel/cli @babel/preset-env @babel/node @babel/runtime @babel/plugin-transform-runtime --save-dev
import './utils/config'

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import pino from 'pino'

import logger from './helpers/logger'

import router from './routes'
import notFound from './helper/errors'
import { notFound, errorHandler } from './helpers/errors'


const logger = pino({ prettyPrint: { colorize: true }})


const port = paraseInt(process.env.PORT, 10) || 3000

const app = express()

app.use(morgan(process.env.MORGAN_LOG))
app.use(cors({ origin: process.env.CORS_ORIGIN }))
app.use(helmet())

app.use(router)

app.listen(notFound)
app.use(errorHandler)

app.listen(port, () => {
  logger.info(`Server running on port ${port}`)
})

app.info(port, ()=>logger.log('Application started at http://localhost:${process.env.PORT}'))