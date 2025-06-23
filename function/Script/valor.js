function porExtenso(valor) {
    const unidades = [
        '', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez',
        'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'
    ];
    
    const dezenas = [
        '', '', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'
    ];
    
    const centenas = [
        '', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'
    ];

    function numeroPorExtenso(n) {
        let texto = '';
        
        if (n >= 100) {
            texto += centenas[Math.floor(n / 100)] + ' ';
            n %= 100;
        }
        
        if (n >= 20) {
            texto += dezenas[Math.floor(n / 10)] + ' ';
            n %= 10;
        }
        
        if (n > 0) {
            texto += unidades[n] + ' ';
        }

        return texto.trim();
    }

    // Dividir o valor em reais e centavos
    const partes = valor.toString().split('.');
    const reais = parseInt(partes[0], 10);
    const centavos = partes[1] ? parseInt(partes[1], 10) : 0;

    // Montar o resultado
    let resultado = numeroPorExtenso(reais);
    resultado += reais === 1 ? ' real ' : ' reais ';
    
    if (centavos > 0) {
        resultado += 'e ' + numeroPorExtenso(centavos);
        resultado += centavos === 1 ? ' centavo' : ' centavos';
    } else {
        resultado += 'e zero centavos';
    }

    return resultado.trim();
}


let valorInput = prompt("Digite um valor em reais (ex: 3251.90):");

let resultadoExtenso = porExtenso(parseFloat(valorInput));

document.write("O valor por extenso é: " + resultadoExtenso);
