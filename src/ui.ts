import {
  habilitarBoton as habilitarBotonComprobar,
  limpiarInfo,
  obtenerValorInput,
  mostrarDatosIban,
  validarIbanBienFormado,
} from './motor';

export const eventos = () => {
  const comprobar = document.querySelector('#comprobar');
  const input = document.querySelector('#input_iban');
  const borrar = document.querySelector('.clear');

  if (
    input &&
    input instanceof HTMLInputElement &&
    borrar &&
    borrar instanceof HTMLSpanElement
  ) {
    input.addEventListener('change', () => {
      habilitarBotonComprobar();
    });
    input.addEventListener('input', () => {
      borrar.classList.remove('oculto');
    });
    borrar.addEventListener('click', () => {
      limpiarInfo();
      borrar.classList.add('oculto');
    });
  }

  if (comprobar && comprobar instanceof HTMLButtonElement) {
    comprobar.addEventListener('click', () => {
      const valorInput = obtenerValorInput();
      const ibanValidado = validarIbanBienFormado(valorInput);
      mostrarDatosIban(valorInput, ibanValidado);
    });
  }
};
