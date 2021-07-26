import express from 'express'
import expressHandlebars from 'express-handlebars'

const app = express()
const PORT = 3000

const fortunes = [
    'conquer your fears or they will conquer you',
    'Rivers need springs',
    'Do not fear what you don´t know',
    'You will have a pleasant surprise',
    'Whenever possible, keep it simple'
]

app.engine('handlebars', expressHandlebars({defaultLayout:'main'}))
app.set('view engine', 'handlebars')

app.get('/',(req,res) => {
    res.render('home')
})

app.get('/about',(req,res) => {
    const ramdomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]
    res.render('about', {fortune: ramdomFortune})
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