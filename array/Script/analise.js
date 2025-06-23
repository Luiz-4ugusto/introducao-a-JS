/* Crie um script que solicite a 
quantidade de notas que um 
determinado estudante tem
em uma unidade curricular. 
Em seguida, diga qual é a maior 
nota, a menor nota e a média
aritmética simples do estudante. 
Utilize um array para armazenar 
todas as notas*/
var numeros = [];
var unidadeCurricular = prompt("Unidade curricular?");
var quantasNotas = prompt("Quantas notas?");
var soma = 0;

for (let i = 0; i < quantasNotas; i++) {
  var nota = parseFloat(prompt("Nota"));
  numeros.push(nota);
  soma += nota;
}

var maiorNota = Math.max(...numeros);
var menorNota = Math.min(...numeros);
var media = soma / quantasNotas;

console.log("Maior " + maiorNota);
console.log("Menor " + menorNota);
console.log("Notas" + numeros + " , ");
console.log("Unidade curricular: " + unidadeCurricular);
console.log("Média: " + media);
