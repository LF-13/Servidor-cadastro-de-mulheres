const express = require("express")
const router = express.Router()

const app = express()
const porta = 1313


function mostraMulher(request, response) {
    response.json({
        nome: 'Larissa Fernandes',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQGehdhg9NybMw/profile-displayphoto-shrink_200_200/0/1670166923977?e=1690416000&v=beta&t=J-VUx_Salqdhw8Q0HJAMg5I02ejTRgMtuevBvUamdqc',
        minibio: 'Estudante de programação'
    })
}


function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)