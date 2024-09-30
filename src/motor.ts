export const obtenerValorInput = (): string => {
  const input = document.querySelector('#input_iban');
  if (input && input instanceof HTMLInputElement) {
    return input.value.toUpperCase();
  }
  throw new Error('No se ha obtenido el valor del input');
};

export const habilitarBoton = () => {
  const comprobar = document.querySelector('#comprobar');
  if (comprobar && comprobar instanceof HTMLButtonElement) {
    comprobar.removeAttribute('disabled');
  }
};
const deshabilitarBoton = () => {
  const comprobar = document.querySelector('#comprobar');
  if (comprobar && comprobar instanceof HTMLButtonElement) {
    comprobar.setAttribute('disabled', 'true');
  }
};

export const validarIbanBienFormado = (valor: string): boolean => {
  const patron =
    /^([A-Z]{2})(\d{2})(\s|-)?\d{4}(\s|-)?\d{4}(\s|-)?\d{2}(\s|-)?\d{10}$/gm;
  if (patron.test(valor)) {
    crearTitulo('El IBAN está bien formado');
    crearTitulo('El IBAN es válido');
    crearTitulo('Código sucursal:');
    crearTitulo('Dígito de control:');
    crearTitulo('Número de cuenta:');
    deshabilitarBoton();
    return true;
  }
  crearTitulo('El IBAN no está bien formado');
  deshabilitarBoton();
  return false;
};

const crearTitulo = (texto: string) => {
  const divInfo = document.querySelector('.info');
  const titulo = document.createElement('h2');
  if (divInfo && divInfo instanceof HTMLDivElement) {
    titulo.textContent = texto;
    divInfo.appendChild(titulo);
  }
};

export const limpiarInfo = () => {
  const divInfo = document.querySelector('.info');
  const input = document.querySelector('#input_iban');
  if (
    divInfo &&
    divInfo instanceof HTMLDivElement &&
    input &&
    input instanceof HTMLInputElement
  ) {
    divInfo.innerHTML = '';
    input.value = '';
  }
};
