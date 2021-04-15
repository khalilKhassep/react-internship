const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const categoryRoute = require('./routes/Category')

const app = express()
app.use(cors())
app.use(bodyParser.json());


app.use('/cat', categoryRoute)

app.listen(3333)