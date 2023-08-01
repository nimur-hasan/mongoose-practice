const express = require('express')
const cors = require('cors')

const mongoose = require('mongoose')

const app = express();

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'Hello world!', success: true})
})


// ❤️‍🔥 Mongoose
// Todd: 1 => Connect to databasae with mongoose



app.listen(5000, () => {
    console.log('🚀 Server running at port: 5000')
})

