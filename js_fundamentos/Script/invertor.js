var palavra = prompt("digite a palavra: ");
document.write(palavra.length);
var contrario = [];
for(let i = palavra.length-1;i>=0;i--){
    contrario.push(palavra[i]);
}
document.write(`a palavra ao contrario é: ${contrario.join('')}`);