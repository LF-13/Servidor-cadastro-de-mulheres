const express = require("express")
const router = express.Router()

const app = express()
const porta = 1010

function mostraHora(request, response) {
    const data = new Date()
    const hora = data.toLocaleTimeString('pt-BR')
    response.send(hora)
}

function mostraPorta() {
    console.log("A hora local é: ", porta)
}

app.use(router.get('/hora', mostraHora))
app.listen(porta, mostraPorta)