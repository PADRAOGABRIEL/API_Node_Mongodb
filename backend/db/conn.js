const mongoose = require("mongoose")
require('dotenv').config();


async function main(){
    try{
        await mongoose.connect(
            process.env.CONNECTION_STRING
        );

        console.log("Conectado ao DB com sucesso!")
    } catch(error){
        console.log(`Erro: ${error}`)
    }
}

module.exports = main