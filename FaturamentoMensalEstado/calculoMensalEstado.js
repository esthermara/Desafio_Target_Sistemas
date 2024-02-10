//Object de exemplo do fatuaramento por estado
const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};


const totalMensal = Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor, 0);


const percentuaisPorEstado = {};
for (let estado in faturamentoPorEstado) {
    const percentual = (faturamentoPorEstado[estado] / totalMensal) * 100;
    percentuaisPorEstado[estado] = percentual.toFixed(2) + "%";
}

//Para saida de resulatado no console.
console.log("Percentual de representação por estado:");
for (let estado in percentuaisPorEstado) {
    console.log(`${estado}: ${percentuaisPorEstado[estado]}`);
}
