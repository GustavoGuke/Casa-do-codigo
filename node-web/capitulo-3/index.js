import express from 'express'

const app = express()
const PORT = 3000

app.get('/',(req,res) => {
    res.type('text/plain')
    res.status(200)
    res.send('Servidor com express')
})

app.get('/about',(req,res) => {
    res.type('text/plain')
    res.status(200)
    res.send('About')
})

app.use((req,res) => {
    res.type('text/plain')
    res.status(404)

    res.send('404 - NOT FOUND')
})

app.use((err,req,res,next) => {
    console.log(err)
    res.type('text/plain')
    res.status(500)
    res.send("500 - SERVER ERROR")
})

app.listen(PORT, () => console.log('Server ok na porta'+PORT))