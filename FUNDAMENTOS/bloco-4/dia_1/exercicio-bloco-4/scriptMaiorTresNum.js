let a = 10;
let b = 11;
let c = 12;

if (a > b && a > c){
  console.log(a);
}

else if (b > a && b > c) {
  console.log(b)
}

else if (c > a && c > b) {
  console.log(c)
}

else {
  console.log("Ambos são iguais")
}