/* import {
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
 */

import {
  obtenerValorTextArea,
  obtenerImgEnHtml,
  habilitarBotonExtraer,
  validarExistenciaDeImg,
  mostrarMensajeAviso,
  /* obtenerEnlacesImg, */
} from './motor';

export const eventos = () => {
  const textArea = document.querySelector('#textarea');
  const botonExtraer = document.querySelector('#extraer');

  if (textArea && textArea instanceof HTMLTextAreaElement) {
    textArea.addEventListener('change', habilitarBotonExtraer);
  }
  if (textArea && textArea instanceof HTMLTextAreaElement) {
    textArea.addEventListener('input', () => {
      const hayImgs = validarExistenciaDeImg();
      mostrarMensajeAviso(hayImgs);
    });
  }

  if (botonExtraer && botonExtraer instanceof HTMLButtonElement) {
    botonExtraer.addEventListener('click', () => {
      const valorTextarea = obtenerValorTextArea();
      /* const imaganes =  */ obtenerImgEnHtml(valorTextarea);
      /* obtenerEnlacesImg(imaganes); */
    });
  }
};
