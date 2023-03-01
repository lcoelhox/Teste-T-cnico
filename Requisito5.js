let stringOriginal = "Exemplo de string para inverter";

let stringInvertida = "";

for(let i = stringOriginal.length - 1; i >= 0; i--){
  stringInvertida += stringOriginal[i];
}

console.log(stringInvertida);