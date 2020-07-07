const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const expressWinston = require('express-winston')
const winston = require('winston')
const app = express()
const basicAuth = require('express-basic-auth')
const {authoriseUsers, unauthorisedUsers }= require('./utils/authorisation')

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(basicAuth({
    authorizer: authoriseUsers,
    authorizeAsync: true,
    challenge: true,
    unauthorizedResponse: unauthorisedUsers
}))
app.use(expressWinston.logger({
    level: 'error',
    transports: [
        new winston.transports.File({ filename: "./logs/errors"}),
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
      ) 
}))
module.exports = app