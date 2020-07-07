const basicAuth = require('express-basic-auth')

function authoriseUsers (username, password, cb) {
    if(basicAuth.safeCompare(username, 'admin') & basicAuth.safeCompare(password, 'adminPassword')){
        return cb(null, true)

    } else if (basicAuth.safeCompare(username, 'user') && basicAuth.safeCompare(password, 'userPassword')){
        return cb(null, true)
    } else {
        return cb(null, false)
    }
}

function unauthorisedUsers (req) {
    return req.auth ? (`Credentials username:${req.auth.user}, password:${req.auth.password} are rejected`) : "No credentials have been provided"

}
module.exports = {
    authoriseUsers,
    unauthorisedUsers 
}