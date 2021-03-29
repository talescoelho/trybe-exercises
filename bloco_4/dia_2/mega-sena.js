
let customers = [45,23,27,16,29,3,10,14,12,16,5]
let n = 2;

let time = 0;
let smal = customers[0];
let big = customers[0];
let position = 0;

for (let j = 0; j < n; j += 1) {
  if (big < customers[j]) {
    big = customers[j];
  }
}

if (n > customers.length) {
  time = big;
  return time;
}

for (let i = 0; i < customers.length; ) {
  smal = customers[0];
  position = 0;
  for (let j = 0; j < n; j += 1) {
    if (smal > customers[j]) {
      smal = customers[j];
      position = j;
    }
  }

  if (customers.length < 2) {
    time += customers[0];
    console.log(time);
  }

  for (let i = 0; i < n; i+= 1) {
    customers[i] -= smal;
  }

  for (let i = 0; i < n; i += 1) {
    if(customers[i] <= 0) {
      customers.splice(position, 1);
      if (customers[i] <= 0) {
        customers.splice(position, 1);
      }
    }
    if (i < 1 ) {
      time += smal;
    }
    if (customers.length < 1) {
      break;
    }
  }
  
}
  
console.log(time);
