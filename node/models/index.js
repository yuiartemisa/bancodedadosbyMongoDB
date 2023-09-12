const { MongoClient,ObjectId } = require('mongodb');

/**
 * nome do banco de dados principal 
 */
const dbName = 'dbrestaurante';
/**
 * url de conexao com o servidor do banco de dados{}
 */
const url = 'mongodb://localhost:27017';
/**
 * 
 * @param {*} col - {String} representa a colecao do mongodb onde o dado sera criado
 * @param {*} data - {JSON} representa o JSON com os dados que serao inseridos no mongodb
 */

async function connect(col) {
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(col);
    return collection
}

async function create(col,data) {
    console.log('Conectado com o servidor do banco de dados para fazer insert');
    const collection = await connect(col)
    await collection.insertOne(data)
}
async function list(col) {
    console.log('Conectado com o servidor do banco de dados para listar todos os dados');
    const collection = await connect(col)
    let list = await collection.find({} ).toArray()
    return list
} 

async function findById(col, id) {
    console.log('Conectado com o servidor do banco de dados para listar todos os dados');
    const collection = await connect(col)
    var o_id = new ObjectId(id);
    let list = await collection.find({_id:o_id} )
    return list.toArray();
} 
async function update(col,id,data) {

    console.log('Conectado com o servidor do banco de dados para fazer update');
    const collection = await connect(col)
    let up = await collection.updateOne({ _id :new ObjectId(id) }, { $set:data });
    console.log('atualizou',up);
}


async function deleted(col,id) {
    console.log('Conectado com o servidor do banco de dados para fazer delete');
    const collection = await connect(col)
    let up = await collection.deleteMany({ _id :new ObjectId(id) })
    console.log('deletou',up);
}


module.exports = { create : create ,list: list, findById : findById ,update : update , deleted : deleted}

