const express = require('express')
const app = express()
const methodOverride = require('method-override')
const logger = require('morgan')
const routes = require('./routes/index.js')
const passport = require('passport')
const flash = require('connect-flash')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(logger('dev'))
app.use(express.static(__dirname + '/public'))
//handlebars
app.set('view engine', 'hbs')
//passport
app.use(passport.initialize())
app.use(passport.session())
//router
app.use('/', routes)
//flash
app.use(flash())
require('./config/passport.js')(passport)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`)
})