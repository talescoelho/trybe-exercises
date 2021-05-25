const { searchEmployee } = require('../exercicioDoDia/script1');

describe('Testa a função searchEmployee', () => {
  it('Verifica se a Função searchEmployee Existe', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('Verifica se o ID do professionalBoard Existe', () => {
    expect(searchEmployee('', 'Ana')).toBe('ID não identificada');
    expect(searchEmployee('4678', 'Ana')).toBe('ID não identificada');
    
  });

  it('Verifica se a informação do professionalBoard Existe', () => {
    expect(searchEmployee('8579-6', '')).toBe('Informação indisponível');
    expect(searchEmployee('8579-6', 'name')).toBe('Informação indisponível');
  });

  it('Verifica se o retorno da função seachEmployee está certa', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
    expect(searchEmployee('1256-4', 'specialities')).toEqual([ 'Hooks', 'Context API', 'Tailwind CSS' ]);
    expect(searchEmployee('4456-4', 'firstName')).toBe('Leila');
    expect(searchEmployee('9852-2-2', 'lastName')).toBe('Cook');
    expect(searchEmployee('4678-2', 'lastName')).toBe('Dodds');
    expect(searchEmployee('5569-4', 'specialities')).toEqual([ 'Frontend', 'Redux', 'React', 'CSS' ]);
  });
});