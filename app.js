const estadosCidades=require('./modulo/estados_cidades')
const getListaDeEstados=function(){
    let JSONSiglas={}
    let arraySiglas=[]
    let contador=0
    while(contador<27){
        arraySiglas.push(estadosCidades.estados[contador].sigla)
        contador++
    }
    JSONSiglas.uf=arraySiglas
    JSONSiglas.quantidade=arraySiglas.length
    return JSONSiglas
}
const getDadosEstado=function(){
    let JSONDados={}
    let filtro='SP'
    let contador=0
    loop: while(true){
        if(filtro==estadosCidades.estados[contador].sigla){
            JSONDados.uf=estadosCidades.estados[contador].sigla
            JSONDados.descricao=estadosCidades.estados[contador].nome
            JSONDados.capital=estadosCidades.estados[contador].capital
            JSONDados.regiao=estadosCidades.estados[contador].regiao
            break loop
        }
        contador++
    }
    return JSONDados
}
const getCapitalEstado=function(){
    let JSONCapital={}
    let filtro='AC'
    let contador=0
    loop: while(true){
        if(filtro==estadosCidades.estados[contador].sigla){
            JSONCapital.uf=estadosCidades.estados[contador].sigla
            JSONCapital.descricao=estadosCidades.estados[contador].nome
            JSONCapital.capital=estadosCidades.estados[contador].capital
            break loop
        }
        contador++
    }
    return JSONCapital
}
const getEstadosRegiao=function(){
    let JSONRegiao={}
    let arrayEstados=[]
    let filtro='SUL'
    let contador=0
}
//console.log(getCapitalEstado())
//console.log(getDadosEstado())
//console.log(getListaDeEstados())