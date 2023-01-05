const express = require('express')
const path = require('path')

const app = express()

const PORT = 3001

app.use(express.static('src/public'))

app.get('/home', (req , res) => {
    res.sendFile(path.resolve(__dirname,'src/views/index.html'))
})




app.listen(PORT,()=>{
    console.log(`Server on port ${PORT}`)
})