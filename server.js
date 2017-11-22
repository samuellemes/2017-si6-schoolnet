const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000


// express setup
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extend: false }))
app.use(express.static('public'))

// template
app.set('views', path.join(__dirname, 'public'))
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
    const data = { student: null, submitted: false }
    response.render('index', data)
})

app.get('/status', (request, response) => {
    const { getStudentStatus } = require('./app/check-students')
    studentStatus = getStudentStatus(request.query.studentId)

    const data = {
            student: studentStatus,
            submitted: true
    }
    response.render('index', data)
})

app.listen(PORT, () => { 
    console.log('Server is running on port ' + PORT)
})