// Faça um programa para calcular o valor de uma viagem

// Você terá 3 viariáveis:
// 1 - Preço do combustível
// 2 - Gasto médio de combustível por KM
// 3 - Distância em KM da viagem

// Imprima no console o valor que será gasto de combustível para realizar a sua viagem 

let precoGasolina = 5.79;
let distanciaKM = 100;
let LitrosKm = 10;
let GastoLitroPorKm = distanciaKM / LitrosKm;
let gastos = GastoLitroPorKm * precoGasolina;

console.log("Total gasto: R$:"+gastos.toFixed(2));
