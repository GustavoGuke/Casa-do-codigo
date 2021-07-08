const http = require('http')
const port = 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type':'text/plain'
    })
    res.end('Servidor ok')
})

server.listen(port, ()=>{
    console.log('sever ok na porta' + port)
})