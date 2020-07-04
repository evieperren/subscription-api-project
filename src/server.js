const mongoose = require('mongoose')
const server = require('./index')
const app = require('./index')

mongoose.connect('mongodb://localhost:32770/chihuahua-box-db', {useNewUrlParser: true})
.then(() => {
    console.log('reached database')
    server.listen(5000, () => console.log('yay i am connected'))
    app.use('/api', require('./router'))
})
.catch((error) => {
    console.log(error)
})