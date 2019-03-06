const express = require('express')
const app = express()
const methodOverride = require('method-override')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const routes = require('./routes/index.js')
const passport = require('passport')
const flash = require('connect-flash')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))
app.use(cookieParser())
//sessions
app.use(session({secret: 'JORDAN-SECRET' }))
//flash
app.use(flash())
app.use(methodOverride('_method'))
app.use(logger('dev'))
//handlebars
app.set('view engine', 'hbs')
//passport
app.use(passport.initialize())
app.use(passport.session())
//router
require('./config/passport.js')(passport)

app.use(function (req, res, next) {
    res.locals.currentUser = req.user
    next()
  })

app.use('/', routes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`)
})