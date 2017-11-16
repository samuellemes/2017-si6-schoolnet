const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000


// express setup
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extend: true }))
app.use(express.static('public'))

// template
app.set('views', path.join(__dirname, 'public'))
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
   const data = {
       name: 'Samuel',
       email: 'samuel@mail'
    }
    response.render('index')
}),

app.listen(PORT, () => { 
    console.log('Server is running on port ' + PORT)
})