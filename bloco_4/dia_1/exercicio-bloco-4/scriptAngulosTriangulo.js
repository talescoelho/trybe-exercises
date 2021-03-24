let anguloA = 60;
let anguloB = 60;
let anguloC = 60;

if (anguloA <= 0 || anguloB <= 0 || anguloC <= 0) {
  console.log("Angulo inserido inválido! o Angulo não pode ser negativo.")
  return 1;
}

if (anguloA + anguloB + anguloC === 180){
  console.log("true");
  return true;
}

else {
  console.log("false");
  return false;
}
