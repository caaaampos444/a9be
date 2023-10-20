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
    while(true){
        if(filtro==estadosCidades.estados[contador].sigla){
            JSONCapital.uf=estadosCidades.estados[contador].sigla
            JSONCapital.descricao=estadosCidades.estados[contador].nome
            JSONCapital.capital=estadosCidades.estados[contador].capital
            break
        }
        contador++
    }
    return JSONCapital
}
const getEstadosRegiao=function(){
    let JSONRegiao={}
    let arrayEstados=[]
    let filtro='sul'
    let contador=0
    while(contador<27){
        if(filtro.toUpperCase()==estadosCidades.estados[contador].regiao.toUpperCase()){
            let JSONEstados={}
            JSONEstados.uf=estadosCidades.estados[contador].sigla
            JSONEstados.nome=estadosCidades.estados[contador].nome
            arrayEstados.push(JSONEstados)
        }
        contador++
    }
    JSONRegiao.regiao=filtro.toUpperCase()
    JSONRegiao.estados=arrayEstados
    return JSONRegiao
}
const getCapitalPais=function(){
    let JSONCapitais={}
    let arrayCapitais=[]
    let contador=0
    while(contador<27){
        if(estadosCidades.estados[contador].capital_pais.capital==true||estadosCidades.estados[contador].capital_pais.capital==false){
            let JSONEstados={}
        }
    }
}
//console.log(getEstadosRegiao())
//console.log(getCapitalEstado())
//console.log(getDadosEstado())
//console.log(getListaDeEstados())