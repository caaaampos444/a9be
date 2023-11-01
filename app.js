/*********************************************************************************
 * Objetivo: Criação de uma API para manipular dados de Estados e Cidades
 * Data: 01/11/2023
 * Autor: Gustavo Campos
 * Versão: 1.0
 *********************************************************************************/

const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')

const app=express()

app.use((request,response,next)=>{
    response.header('Access-Control-Allow-Origin','*')
    response.header('Access-Control-Allow-Methods','GET')
    app.use(cors())
    next()
})

app.get('/estados/sigla',cors(),async function(request,response,next){
    let controleEstadosCidades=require('./modulo/funcoes.js')
    let listaEstados=controleEstadosCidades.getListaDeEstados()
    response.json(listaEstados)
    response.status(200)
})

app.listen('8080',function(){
    console.log('API funcionando!!!')
})