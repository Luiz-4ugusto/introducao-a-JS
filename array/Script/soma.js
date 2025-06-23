/*– Dado o array numeros do exercício 4, escreva um código que calcule a soma de
todos os elementos do array*/
var numeros = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

i = 0;
soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log(soma);
