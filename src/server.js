const mongoose = require('mongoose')
const server = require('./index')
const app = require('./index')

mongoose.connect('mongodb://localhost:32770/chihuahua-box-db', {useNewUrlParser: true})
.then(() => {
    console.log('Successfully connected to database')
    const port = 5000
    server.listen(port, () => console.log(`Port set up at ${port}`))
    app.use('/api', require('./router'))
})
.catch((error) => {
    console.log(error)
})