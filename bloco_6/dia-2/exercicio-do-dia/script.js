const inputCpf = document.getElementById('input-cpf');

function calculoCpf(cpfValido, checkCpf1, checkCpf2) {
  let count = 0;
  for (let index = 0; index < cpfValido.length; index++) {
    if (cpfValido[0] === cpfValido[index]) {
      count += 1;
    }
  }
  if (checkCpf1 === cpfValido[9] && checkCpf2 === cpfValido[10] && count !== 11) {
    return true;
  } else {
    return false;
  }
}

// validar se somente números estão sendo digitados, e insere os caracteres especias no cpf
function validCpf(key, inputCpf) {
  if (!isNaN(key)) {
    if (inputCpf.value.length === 3 || inputCpf.value.length === 7) {
      return `.${key}`;
    } else if (inputCpf.value.length === 11) {
      return `-${key}`;
    }
    return key;
  }
  return '';
}

// recebe o cpf e fas o cálculo para verificar se é válido
function checkCpf() {
  if (inputCpf.value.length < 14) {
    return false;
  } else {
    let checkCpf1 = 0;
    let checkCpf2 = 0;
    const cpfValido = [Number(inputCpf.value[0]),
    Number(inputCpf.value[1]),
    Number(inputCpf.value[2]),
    Number(inputCpf.value[4]),
    Number(inputCpf.value[5]),
    Number(inputCpf.value[6]),
    Number(inputCpf.value[8]),
    Number(inputCpf.value[9]),
    Number(inputCpf.value[10]),
    Number(inputCpf.value[12]),
    Number(inputCpf.value[13])];
    for (let index = 0; index < cpfValido.length - 2; index += 1) {
      checkCpf1 += cpfValido[index] * (10 - index);
      checkCpf2 += cpfValido[index] * (11 - index);
    }
    checkCpf2 += cpfValido[9] * 2;
    checkCpf1 = 11 - (checkCpf1 % 11);
    checkCpf2 = 11 - (checkCpf2 % 11);
    if (checkCpf1 >= 10) {
      checkCpf1 = 0;
    }
    if (checkCpf2 >= 10) {
      checkCpf2 = 0;
    }
    return calculoCpf(cpfValido, checkCpf1, checkCpf2);
  }
}

// Ao pressionar um botão no cpf
inputCpf.addEventListener('keypress', (event) => {
  event.preventDefault();
  if (inputCpf.value.length < 14) {
    inputCpf.value += validCpf(event.key, inputCpf);
  }
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      const form1 = document.getElementById('my-form');
      const formData = new FormData(form1);
      console.log(formData.entries());
      const insertForm = document.getElementById('insert-form');
      for (var pair of formData.entries()) {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `<span class="col-6 text-end">${pair[0]}: </span><span class="col-6">${pair[1]}</span>`;
        newDiv.className = 'row mt-3';
        insertForm.appendChild(newDiv);
      }
      form.classList.add('was-validated')
    }, false)
  })
})()

const states = {
  'AC': 'Acre',
  'AL': 'Alagoas',
  'AP': 'Amapá',
  'AM': 'Amazonas',
  'BA': 'Bahia',
  'CE': 'Ceará',
  'DF': 'Distrito Federal',
  'ES': 'Espírito Santo',
  'GO': 'Goías',
  'MA': 'Maranhão',
  'MT': 'Mato Grosso',
  'MS': 'Mato Grosso do Sul',
  'MG': 'Minas Gerais',
  'PA': 'Pará',
  'PB': 'Paraíba',
  'PR': 'Paraná',
  'PE': 'Pernambuco',
  'PI': 'Piauí',
  'RJ': 'Rio de Janeiro',
  'RN': 'Rio Grande do Norte',
  'RS': 'Rio Grande do Sul',
  'RO': 'Rondônia',
  'RR': 'Roraíma',
  'SC': 'Santa Catarina',
  'SP': 'São Paulo',
  'SE': 'Sergipe',
  'TO': 'Tocantins'
}

const selectState = document.getElementById('select-state');

function insertStates() {
  for (const key in states) {
    let optionState = document.createElement('option');
    optionState.value = key;
    optionState.innerText = states[key];
    selectState.appendChild(optionState);
  }
}

insertStates();
