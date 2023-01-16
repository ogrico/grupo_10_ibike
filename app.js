const express = require('express')
const path = require('path')

const app = express()

const PORT = 3001

app.use(express.static('src/public'))

app.get('/home', (_ , res) => {
    res.sendFile(path.resolve('src/views/index.html'))
})

app.get('/forms', (_, res) => {
    res.sendFile(path.resolve('src/views/forms.html'))
})


app.listen(PORT,()=>{
    console.log(`Server on port ${PORT}`)
})