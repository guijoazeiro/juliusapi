import * as express from 'express'
import * as cors from 'cors'
import * as logger from 'morgan'

import { conectarServidorNoBD } from './config/db'

export const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

conectarServidorNoBD()







