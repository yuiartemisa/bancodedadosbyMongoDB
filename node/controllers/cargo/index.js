const express = require('express')
const router = express.Router()

const models = require('../../models')

router.get('/form', function (req, res) {   
    res.render("cargo/form", {cargo:undefined} )                
})

router.get('/editar/:id', async function (req, res) {  
    let cargos = await models.findById('cargo',req.params.id) 
   console.log(cargos[0])
   res.render("cargo/form", {cargo:cargos[0]} )   
               
})
router.post('/editar/:id', async function (req, res) {  
    console.log(req.params.id,req.body)
    await models.update('cargo',req.params.id,req.body)  
    res.redirect('/cargo/lista')         
 })

router.get('/deletar/:id', async function (req, res) {  
    console.log(req.params.id,req.body)
    await models.deleted('cargo',req.params.id)  
    res.redirect('/cargo/lista')          
 })

router.get('/lista', async function (req, res) {   
    let listacargos = await models.list('cargo')
    res.render('cargo/lista', {lista:listacargos} )                   
 })
 router.get('/', async function (req, res) {  
    res.redirect('/cargo/lista')          
 })

router.post('/criar',async function(req, res) { 
    await models.create('cargo',req.body)
    res.redirect('/cargo/lista')
 })

module.exports = router