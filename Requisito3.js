const faturamentoDiario = [100, 200, 50, 300, 150, 80, 120, 250, 180, 220, 130, 190, 100, 90, 160, 200, 240, 180, 300, 280, 150, 200, 220, 120, 100, 150, 200];

// Cálculo do menor e maior faturamento diário
const menorFaturamentoDiario = Math.min(...faturamentoDiario);
const maiorFaturamentoDiario = Math.max(...faturamentoDiario);

// Cálculo da média mensal de faturamento diário
const diasNoMes = faturamentoDiario.length;
const faturamentoTotal = faturamentoDiario.reduce((acc, curr) => acc + curr, 0);
const mediaMensalFaturamentoDiario = faturamentoTotal / diasNoMes;

// Cálculo do número de dias com faturamento diário acima da média mensal
let diasAcimaDaMedia = 0;
for (let i = 0; i < diasNoMes; i++) {
  if (faturamentoDiario[i] > mediaMensalFaturamentoDiario) {
    diasAcimaDaMedia++;
  }
}

// Exibição dos resultados
console.log(`Menor faturamento diário: R$ ${menorFaturamentoDiario}`);
console.log(`Maior faturamento diário: R$ ${maiorFaturamentoDiario}`);
console.log(`Número de dias com faturamento diário acima da média mensal: ${diasAcimaDaMedia}`);


