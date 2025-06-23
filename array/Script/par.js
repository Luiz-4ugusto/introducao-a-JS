/* –Crie um array chamado numeros que contenha os números pares 
de 2 a 20. Percorra 
o array usando um loop for e exiba cada número no console.*/

var numeros = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
p = 0;
i = 0;
for (let i = numeros[p]; i < 21; ) {
  if (i % 2 == 0) {
    console.log(i);
    i++;
    p++;
  } else if (i % 2 == 1) {
    i++;
  }
}
