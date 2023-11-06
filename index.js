let resultado = partidas(80, 10)

const mensagem1 = "O Herói tem de saldo de " + resultado
const pontuacao = " está no nível de "

function partidas(vitoria, derrotas){
    let saldo = vitoria - derrotas
    return saldo
}

if( resultado <= 10 ){
    console.log( mensagem1 + pontuacao + "Ferro" )
    }else if( resultado >=11 && resultado <= 20 ){
        console.log( mensagem1 + pontuacao + "Bronze" )
    }else if( resultado >= 21 &&resultado <= 50 ){
        console.log( mensagem1 + pontuacao + "Prata" )
    }else if( resultado >= 51 && resultado <= 80 ){
        console.log( mensagem1 + pontuacao + "Ouro") 
    }else if( resultado >= 81 && resultado <= 90 ){
        console.log( mensagem1 + pontuacao + "Diamante" )
    }else if( resultado >= 91 && resultado <= 100 ){
        console.log( mensagem1 + pontuacao + "Lendário" )
    }else if( resultado >= 101){
        console.log( mensagem1 + pontuacao + "Imortal" )
        }
