/*
11 – Construa uma função que receba uma data no formato DD/MM/AAAA (string) e
devolva uma string com a data por extenso, por exemplo: “doze de agosto de dois mil e
vinte e quatro”. Seu algoritmo deve ser capaz de converter datas entre os anos de 2000 e
2100.
*/
function dataPorExtenso(data) {
    const meses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];

    const numerosPorExtenso = [
        "zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", 
        "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", 
        "quinze", "dezesseis", "dezessete", "dezoito", "dezenove", 
        "vinte", "vinte e um", "vinte e dois", "vinte e três", 
        "vinte e quatro", "vinte e cinco", "vinte e seis", 
        "vinte e sete", "vinte e oito", "vinte e nove", "trinta", "trinta e um"
    ];

    const [dia, mes, ano] = data.split('/').map(Number);

    if (ano < 2000 || ano > 2100) {
        throw new Error("O ano deve estar entre 2000 e 2100.");
    }

    const anoPorExtenso = converterAnoParaExtenso(ano);

    return `${numerosPorExtenso[dia]} de ${meses[mes - 1]} de ${anoPorExtenso}`;
}

function converterAnoParaExtenso(ano) {
    const numerosPorExtenso = [
        "zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", 
        "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", 
        "quinze", "dezesseis", "dezessete", "dezoito", "dezenove", 
        "vinte", "vinte e um", "vinte e dois", "vinte e três", 
        "vinte e quatro", "vinte e cinco", "vinte e seis", 
        "vinte e sete", "vinte e oito", "vinte e nove", "trinta", "trinta e um"
    ];

    const centenas = Math.floor(ano / 100);
    const unidades = ano % 100;

    let extenso = '';

    if (centenas === 20) {
        extenso += 'vinte';
    } else if (centenas === 21) {
        extenso += 'duzentos';
    } else if (centenas > 20) {
        extenso += numerosPorExtenso[centenas];
    }

    if (unidades > 0) {
        if (extenso) {
            extenso += ' e ';
        }
        extenso += numerosPorExtenso[unidades];
    }

    return extenso;
}


function solicitarData() {
    const data = prompt("Digite a data no formato DD/MM/AAAA:");
    try {
        const resultado = dataPorExtenso(data);
        alert(resultado);
    } catch (error) {
        alert(error.message);
    }
}

solicitarData();
