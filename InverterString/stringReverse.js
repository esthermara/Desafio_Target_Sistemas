function inverterString(str) {
    let invertedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        invertedStr += str[i];
    }
    return invertedStr;
}

const stringOriginal = "Desafio Target Sistemas"; //Escrever aqui uma string de exemplo. Para saida de resulatado no console.
const stringInvertida = inverterString(stringOriginal);
console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);
