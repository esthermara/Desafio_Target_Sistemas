function verificaSequenciaFibonacci(numero) {
    let a = 0;
    let b = 1;
    let c;

    if (numero === 0 || numero === 1) {
        return true;
    }

    
    while (a + b <= numero) {
        c = a + b;
        a = b;
        b = c;
        
        if (c === numero) {
            return true;
        }
    }

    
    return false;
}


const numeroInformado = 13; //Escrever aqui um número de exemplo. Para saida de resulatado no console.
const pertenceSequencia = verificaSequenciaFibonacci(numeroInformado);

if (pertenceSequencia) {
    console.log(numeroInformado + " pertence à sequência de Fibonacci.");
} else {
    console.log(numeroInformado + " não pertence à sequência de Fibonacci.");
}
