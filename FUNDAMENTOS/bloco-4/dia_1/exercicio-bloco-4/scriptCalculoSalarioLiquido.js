let salarioBruto = 10000;

let aliquotaInss ;
let salarioBase ;
let aliquotaImpostoRenda ;
let salarioLiquido ;

if (salarioBruto < 0) {
  console.log("Favor inserir um salário Bruto positivo!")
}

// Cálculo salário Base

if (salarioBruto <= 1556.94) {
  aliquotaInss = salarioBruto*8/100;
  salarioBase = salarioBruto - aliquotaInss;
}

else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  aliquotaInss = salarioBruto*9/100;
  salarioBase = salarioBruto - aliquotaInss;
}

else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
  aliquotaInss = salarioBruto*11/100;
  salarioBase = salarioBruto - aliquotaInss;
}

else {
  aliquotaInss = 570.88;
  salarioBase = salarioBruto - aliquotaInss;
}

// Cálculo salário liquído

if (salarioBase <= 1903.98) {
  aliquotaImpostoRenda = 0;
  salarioLiquido = salarioBase - aliquotaImpostoRenda;
}

else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
  aliquotaImpostoRenda = salarioBase*7.5/100-142.80;
  salarioLiquido = salarioBase - aliquotaImpostoRenda
}

else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
  aliquotaImpostoRenda = salarioBase*15/100-354.80;
  salarioLiquido = salarioBase - aliquotaImpostoRenda
}

else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
  aliquotaImpostoRenda = salarioBase*22.5/100-636.13;
  salarioLiquido = salarioBase - aliquotaImpostoRenda
}

else {
  aliquotaImpostoRenda = salarioBase*27.5/100-869.36;
  salarioLiquido = salarioBase - aliquotaImpostoRenda
}

salarioLiquido = parseFloat(salarioLiquido.toFixed(2));

console.log(salarioLiquido);