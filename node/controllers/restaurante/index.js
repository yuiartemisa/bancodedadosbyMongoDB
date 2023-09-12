const express = require('express')
const router = express.Router()

const models = require('../../models')

/**
* CRUD de restaurantes
*/
//formulario de criacao e edicao de restaurante
router.get('/form', function (req, res) {   
   res.render("restaurante/form", {restaurante:undefined})                   
})


router.get('/editar/:id', async function (req, res) {  
    let restaurante = await models.findById('restaurante',req.params.id) 
   console.log(restaurante[0])
   res.render("restaurante/form", {restaurante:restaurante[0]} )   
               
})

router.post('/editar/:id', async function (req, res) {  
   console.log(req.params.id,req.body)
   await models.update('restaurante',req.params.id,req.body)  
   res.redirect('/restaurante/lista')         
})

router.get('/deletar/:id', async function (req, res) {  
   console.log(req.params.id,req.body)
   await models.deleted('restaurante',req.params.id)  
   res.redirect('/restaurante/lista')          
})

router.get('/', async function (req, res) {  
   res.redirect('/restaurante/lista')          
})

//lista principal de restaurante
router.get('/lista', async function (req, res) {   
   let listarestaurantes = await models.list('restaurante')
   res.render('restaurante/lista', {lista:listarestaurantes} )                   
})

//acao de criacao de restaurante
router.post('/criar',async function(req, res) { 
   await models.create('restaurante',req.body)
   res.redirect('/restaurante/lista')
})

module.exports = router