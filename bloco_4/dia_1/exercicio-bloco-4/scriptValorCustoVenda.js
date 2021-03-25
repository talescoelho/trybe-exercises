let valorCusto = 40;
let valorVenda = 60;
let impostoSobreCusto = valorCusto*20/100;
let valorCustoTotal = valorCusto + impostoSobreCusto;
let lucro = valorVenda - valorCustoTotal;

if (valorCusto < 0 || valorVenda < 0) {
  console.log("Os valores não podem ser menores que 0!");
  return 1;
}

console.log(lucro*1000);