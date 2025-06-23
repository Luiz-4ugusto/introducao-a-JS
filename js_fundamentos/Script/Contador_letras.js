var palavra = prompt("digite sua palavra: ");
var vogais = ['a','e','i','o','u'];
var quantvogais = 0;
var quantconsoantes = 0;
for(let i=0;i<palavra.length;i++){
    if(vogais.includes(palavra[i])){
        quantvogais++;
    }
    else{
        quantconsoantes++;
    }
}
document.write(`a quantidade de vogais é:${quantvogais} e a quantidade de consoantes é:${quantconsoantes}`);