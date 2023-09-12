const express = require('express')
const router = express.Router()

const models = require('../../models')

/**
 * CRUD de funcionarios
 */
//formulario de criacao e edicao de funcionarios
router.get('/form', function (req, res) {   
    res.render("funcionario/form", {funcionario:undefined} )                
})

router.get('/editar/:id', async function (req, res) {  
    let funcionario = await models.findById('funcionario',req.params.id) 
   console.log(funcionario[0])
   res.render("funcionario/form", {funcionario:funcionario[0]} )   
               
})

router.post('/editar/:id', async function (req, res) {  
    console.log(req.params.id,req.body)
    await models.update('funcionario',req.params.id,req.body)  
    res.redirect('/funcionario/lista')         
})

router.get('/deletar/:id', async function (req, res) {  
    console.log(req.params.id,req.body)
    await models.deleted('funcionario',req.params.id)  
    res.redirect('/funcionario/lista')          
})
router.get('/', async function (req, res) {  
    res.redirect('/funcionario/lista')          
})

router.get('/lista', async function (req, res) {   
    let listafuncionarios = await models.list('funcionario')
    res.render('funcionario/lista', {lista:listafuncionarios} )                   
})
//acao de criacao de funcionarios
router.post('/criar',async function(req, res) { 
    await models.create('funcionario',req.body)
    res.redirect('/funcionario/lista')
})


module.exports = router