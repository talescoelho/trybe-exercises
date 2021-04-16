const selectState = document.getElementById('select-state');

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

const months = {
  Janeiro: [1, 31],
  Fevereiro: [2, 28],
  Março: [3, 31],
  Abril: [4, 30],
  Maio: [5, 31],
  Junho: [6, 30],
  Julho: [7, 31],
  Agosto: [8, 31],
  Setembro: [9, 30],
  Outubro: [10, 31],
  Novembro: [11, 30],
  Dezembro: [12, 31]
}

function insertStates() {
  for (const key in states) {
    let optionState = document.createElement('option');
    optionState.value = key;
    optionState.innerText = states[key];
    selectState.appendChild(optionState);
  }
}

insertStates();

// Validando meus inputs primeira fieldset
const inputNome = document.getElementById('input-nome');
const inputEmail = document.getElementById('input-email');
const inputCpf = document.getElementById('input-cpf');
const inputAddress = document.getElementById('input-address');
const inputCity = document.getElementById('input-city');
const buttonForm = document.getElementById('button-form');

// Validando meus inputs segunda fieldset
const textAreaCurriculum = document.getElementById('text-area-curriculum');
const inputOffice = document.getElementById('input-office');
const textAreaCargo = document.getElementById('text-area-cargo');
const inputDate = document.getElementById('input-date');

// Começando a validação da minha primeira fieldset
// Verifica se o nome tem mais de 3 letras
function checkName() {
  if (inputNome.value.length < 3) {
    return false;
  } else {
    return true;
  }
}

//verifica o e-mail
function checkEmail() {
  if (document.forms[0].email.value === '' || document.forms[0].email.value.indexOf('@')==-1 || document.forms[0].email.value.indexOf('.')==-1) {
    return false;
  } else {
    return true;
  }
}

// verifica se o endereço tem menos de 3 caracteres
function checkAddress() {
  if (inputAddress.value.length < 3) {
    return false;
  } else {
    return true;
  }
}

// verifica se o endereço tem menos de 3 caracteres
function checkCity() {
  if (inputCity.value.length < 3) {
    return false;
  } else {
    return true;
  }
}

// recebe o cálculo do cpf e verifica se ele é válido
function calculoCpf(cpfValido, checkCpf1, checkCpf2) {
  let count = 0;
  for (let index = 0; index < cpfValido.length; index++) {
    if(cpfValido[0] === cpfValido[index]) {
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
      checkCpf1 += cpfValido[index] * (10-index);
      checkCpf2 += cpfValido[index] * (11-index);
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
// Terminando de validar minha primeira fieldset
// Começando a validar minha segunda fieldset
// Validando minha rext área de curriculum
function checkTextAreaCurriculum() {
  if (textAreaCurriculum.value.length < 30) {
    return false;
  } else {
    return true;
  }
}

// Validando minha input de cargo
function checkInputOffice() {
  if (inputOffice.value.length < 3) {
    return false;
  } else {
    return true;
  }
}

// Validando minha text área de cargo
function checkTextAreaCargo() {
  if (textAreaCargo.value.length < 15) {
    return false;
  } else {
    return true;
  }
}

// validando a data e formatando
function validDate(key, inputDate) {
  if (!isNaN(key)) {
    if (inputDate.value.length === 2 || inputDate.value.length === 5) {
      return `/${key}`;
    }
    return key;
  }
  return '';
}

// chamando a função para formatar a data
inputDate.addEventListener('keypress', (event) => {
  event.preventDefault();
  if (inputDate.value.length < 10) {
    inputDate.value += validDate(event.key, inputDate);
  }
});

// verificando se a data é válida
function checkDate() {
  const set = inputDate.value.split('/');
  const days = [Number(set[0]), Number(set[1]), Number(set[2])];
  if (inputDate.value.length < 10) {
    return false;
  }

  if (days[2] % 4 === 0) {
    months.Fevereiro[1] = '29';
  }
  for (const key in months) {
    if (days[1] > 12 || days[0] > months[key][1]) {
      return false;
    }
  }
  return true;
}

// botão de enviar, fazendo as verificações de todos os inputs
function checkFirstFieldFunctions() {
  if (!checkName()) {
    inputNome.focus();
    alert('Favor Colocar mais de 3 caracteres no Nome!');
    return false;
  } else if (!checkEmail()) {
    alert('Favor insira um e-mail válido!');
    inputEmail.focus();
    return false;
  } else if (!checkCpf()) {
    inputCpf.focus();
    alert('Favor preencher o campo com um Cpf válido!');
    return false;
  } else if (!checkAddress()) {
    inputAddress.focus();
    alert('O endereço é um campo obrigatório!');
    return false;
  } else if (!checkCity()) {
    inputCity.focus();
    alert('Favor inserir o nome da sua cidade!');
    return false;
  }
  return true;
}

function checkSecondFieldFunctions() {
  if (!checkTextAreaCurriculum()) {
    alert('Favor Colocar mais de 30 caracteres no Curriculum!');
    textAreaCurriculum.focus();
    return false;
  } else if (!checkInputOffice()) {
    alert('Favor Colocar mais de 3 caracteres no cargo!');
    inputOffice.focus();
    return false;
  } else if (!checkTextAreaCargo()) {
    textAreaCargo.focus();
    alert('Favor Colocar mais de 15 caracteres na descrição do cargo!');
    return false;
  } else if (!checkDate()) {
    inputDate.focus();
    alert('Favor inserir uma data Válida!');
    return false;
  }
  return true;
}

// Botão de validação
buttonForm.addEventListener('click', (event) => {
  if (!checkFirstFieldFunctions() && !checkSecondFieldFunctions()) {
    event.preventDefault();
  }
});
