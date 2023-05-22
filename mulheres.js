const express = require("express");
const router = express.Router()

const app = express()
const porta = 8181

const mulheres = [
    {
        nome: 'Larissa Fernandes',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQGehdhg9NybMw/profile-displayphoto-shrink_200_200/0/1670166923977?e=1690416000&v=beta&t=J-VUx_Salqdhw8Q0HJAMg5I02ejTRgMtuevBvUamdqc',
        minibio: 'Estudante de programação'
    },

    {
        nome: 'Simara Conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e Instrutora'
    },

    {
        nome: 'Iana Chan',
        imagem: 'https://media.licdn.com/dms/image/C4D03AQE-aD7nj2W_0Q/profile-displayphoto-shrink_200_200/0/1563383651406?e=1690416000&v=beta&t=G9TTnfVwLeMVp418oAoJfUuYttZxcicmNsyRgFpOJWE',
        minibio: 'Fundadora da PrograMaria'
    }

]
function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)