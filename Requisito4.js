const faturamentoMensal = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const totalFaturamento = Object.values(faturamentoMensal).reduce((acc, val) => acc + val, 0);
const percentuais = {};

for (let estado in faturamentoMensal) {
  const percentual = ((faturamentoMensal[estado] / totalFaturamento) * 100).toFixed(2);
  percentuais[estado] = percentual + '%';
}

console.log(percentuais);