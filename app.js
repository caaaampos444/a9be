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
        if(filtro.toUpperCase()==estadosCidades.estados[contador].sigla.toUpperCase()){
            JSONCapital.uf=estadosCidades.estados[contador].sigla.toUpperCase()
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
    let filtro='NORDESTE'
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
        if(estadosCidades.estados[contador].capital_pais){
            let JSONEstados={}
            JSONEstados.capital_atual=estadosCidades.estados[contador].capital_pais.capital
            JSONEstados.uf=estadosCidades.estados[contador].sigla
            JSONEstados.descricao=estadosCidades.estados[contador].nome
            JSONEstados.capital=estadosCidades.estados[contador].capital
            JSONEstados.regiao=estadosCidades.estados[contador].regiao
            JSONEstados.capital_pais_ano_inicio=estadosCidades.estados[contador].capital_pais.ano_inicio
            JSONEstados.capital_pais_ano_termino=estadosCidades.estados[contador].capital_pais.ano_fim
            arrayCapitais.push(JSONEstados)
        }
        contador++
    }
    JSONCapitais.capitais=arrayCapitais
    return JSONCapitais
}

const getCidades=function(){
    let JSONCidades={}
    let arrayCidades=[]
    let filtro='AC'
    let contadorEstados=0
    let contadorCidades=0
    while(true){
        if(filtro==estadosCidades.estados[contadorEstados].sigla){
            while(arrayCidades.length<estadosCidades.estados[contadorEstados].cidades.length){
                arrayCidades.push(estadosCidades.estados[contadorEstados].cidades[contadorCidades].nome)
                contadorCidades++
            }
            break
        }
        contadorEstados++
    }
    contadorEstados=0
    while(true){
        if(filtro==estadosCidades.estados[contadorEstados].sigla){
            JSONCidades.uf=estadosCidades.estados[contadorEstados].sigla
            JSONCidades.descricao=estadosCidades.estados[contadorEstados].nome
            JSONCidades.quantidade_cidades=estadosCidades.estados[contadorEstados].cidades.length
            JSONCidades.cidades=arrayCidades
            break
        }
        contadorEstados++
    }
    return JSONCidades
}

//console.log(getCidades())
//console.log(getCapitalPais())
//console.log(getEstadosRegiao())
//console.log(getCapitalEstado())
//console.log(getDadosEstado())
//console.log(getListaDeEstados())