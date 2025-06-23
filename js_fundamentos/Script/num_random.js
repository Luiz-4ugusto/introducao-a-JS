var certo = Math.floor(Math.random()*100)+1
var chute = Number(prompt("digite o numero que você acha q é: "))
if(chute==certo){
    document.write("você acertou");
}
else{
    while(true){
        if(chute==certo){
            document.write("você acertou");
            break;
        }
        else{
        if(chute>certo){
            alert("o numero certo é menor");
        }
        else{
            alert("o numero certo é maior");
        }
    var chute = Number(prompt("digite o numero que você acha q é: "));}
}
}