
// Faça um programa para calcular o valor de uma viagem

// Você terá 5 viariáveis:
// 1 - Preço do etanol
// 2 - Preço da Gasolina
// 3 - Tipo de Conbustivel que está em seu carro;
// 3 - Gasto médio de combustível por KM
// 4 - Distância em KM da viagem

// Imprima no console o valor que será gasto de combustível para realizar a sua viagem

let TipoConbustivel = "Gasolina";
let precoEtanol = 4.70;
let precoGasolina = 5.79;
let KmPorLitro = 10;
let DistanciaViagem = 100;
let GastoPorLitro = 0;
let Custo = 0;

if(TipoConbustivel === "Etanol" || TipoConbustivel === "etanol" ){
    GastoPorLitro = DistanciaViagem / KmPorLitro;
    Custo = GastoPorLitro * precoEtanol;
    console.log("Total de despesa abastecendo com Etanol: R$:"+Custo.toFixed(2));
}
else if(TipoConbustivel === "Gasolina" || TipoConbustivel === "gasolina"){
    GastoPorLitro = DistanciaViagem / KmPorLitro;
    Custo = GastoPorLitro * precoGasolina;
    console.log("Total de despesa abastecendo com Gasolina: R$:"+Custo.toFixed(2));
}
else{
    console.log("Informação inválida\nEscolha entre etanol ou gasolina.")
}