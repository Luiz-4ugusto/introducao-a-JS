caracteres = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','t','u','v','w','x','y','z','+','-','@','$','#','%','&'];
let aleatorio
senha = []

for(let contador=1;contador<=8;contador++){
    aleatorio = Math.floor(Math.random() * caracteres.length);
    senha.push(caracteres[aleatorio])
}
document.write(senha.join(''));