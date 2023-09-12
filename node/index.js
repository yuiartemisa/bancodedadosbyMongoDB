const express = require('express')
const app = express()

const controllerFuncionario = require('./controllers/funcionario')
const controllerRestaurante = require('./controllers/restaurante')
const controllerCargo = require('./controllers/cargo')
app.set("view engine", "ejs")             
app.set("views", "views")  

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/funcionario', controllerFuncionario)
app.use('/restaurante', controllerRestaurante)
app.use('/cargo', controllerCargo)
/**

 * aqui inicia o servidor ,nao declarar nada mais
 */
var listener = app.listen(80, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
  
});

