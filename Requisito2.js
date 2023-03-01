// Definindo a função que calcula a sequência de Fibonacci
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Informando o número que deseja verificar se pertence à sequência
const num = 8;

// Verificando se o número pertence à sequência de Fibonacci
let i = 0;
let fibNum = 0;
while (fibNum <= num) {
  fibNum = fibonacci(i);
  if (fibNum === num) {
    console.log(`${num} pertence à sequência de Fibonacci.`);
    break;
  }
  i++;
}
if (fibNum !== num) {
  console.log(`${num} não pertence à sequência de Fibonacci.`);
}