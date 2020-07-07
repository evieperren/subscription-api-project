const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const expressWinston = require('express-winston')
const winston = require('winston')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(expressWinston.logger({
    level: 'error',
    transports: [
        new winston.transports.File({ filename: "./logs/errors"}),
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
      ) 
}))
module.exports = app