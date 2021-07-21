import express from 'express';
import expressHandlebars from 'express-handlebars';
import fortune from './lib/fortune.js'

const app = express()
const PORT = 3000

app.engine('handlebars', expressHandlebars({defaultLayout:'main'}))
app.set('view engine', 'handlebars')

app.get('/',(req,res) => {
    res.render('home')
})

app.get('/about',(req,res) => {
    res.render('about', {fortune: fortune()})
})

app.use((req,res) => {
    res.status(404)
    res.render('404')
})

app.use((err,req,res,next) => {
    console.log(err)
    res.status(500)
    res.send('500')
})
 
app.listen(PORT, () => console.log('Server ok na porta'+PORT))