/* eslint-disable prettier/prettier */
import { Router } from 'express'

import logger from '../helpers/logger'

const router = Router()


app.get('/', (req, res)=> {
    logger.info('Inside the root path')
    const title = process.env.TITLE || 'Server'
    res.send({ msg: title })
})

export default router