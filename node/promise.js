function  minhapromessa(){
    let promessa = new Promise(function(resolve, reject) {
    
        if (2===1) 
            reject('numeros iguais')
        else
            resolve('numeros diferentes')
    })
    return promessa
}
function  minhapromessaprometida(){
    let promessa = new Promise(function(resolve, reject) {
        resolve('minhapromessaprometida')
    })
    return promessa
}

function  minhapromessanaocumprida(){
    let promessa = new Promise(function(resolve, reject) {
        resolve('minhapromessanaocumprida')
    })
    return promessa
}

Promise.all([minhapromessa(),minhapromessaprometida(), minhapromessanaocumprida()]).then(function(promise){ 
    console.log(promise)
})
async function promessaimportante(){
    try {
        let data = await minhapromessa()
        console.log('retorno da promessa foi '+ data)
    } catch (error) {
        console.log('o retorno do erro foi '+ error) 
    }

}
promessaimportante()
let promessa = minhapromessa()

promessa.then(function(data) {
    console.log('retorno da promessa foi '+ data)
}).catch(function(error) {
    console.log('o retorno do erro foi '+ error)
})