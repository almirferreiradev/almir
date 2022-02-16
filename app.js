const express = require("express")
const bodyParser = require("body-parser")
const handlebars = require("express-handlebars")
const app = express()


//  CONFIGURAÇÃO : BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//  CONFIGURAÇÃO : VIEWS / ENGINE
const hbs = handlebars.create({defaultLayout:'main'})
app.engine("handlebars", () => hbs)
app.set('view engine', 'handlebars')

// app.use(express.static('public'));

// ROTAS
app.get("/", function (req, res) {
    res.render("pags/portfolio") //erro está aqui
})


// PORTA PARA INICIALIZAÇÃO
app.listen(8081, () => {
    console.log("Servidor rodando")
})