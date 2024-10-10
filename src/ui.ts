import {
  obtenerValorTextArea,
  obtenerImgEnHtml,
  habilitarBotonExtraer,
  validarExistenciaDeImg,
  mostrarMensajeAviso,
} from './motor';

export const eventos = () => {
  const textArea = document.querySelector('#textarea');
  const botonExtraer = document.querySelector('#extraer');

  if (textArea && textArea instanceof HTMLTextAreaElement) {
    textArea.addEventListener('change', habilitarBotonExtraer);
  }
  if (textArea && textArea instanceof HTMLTextAreaElement) {
    textArea.addEventListener('input', () => {
      const valorTextarea = obtenerValorTextArea();
      const hayImgs = validarExistenciaDeImg(valorTextarea);
      mostrarMensajeAviso(hayImgs);
    });
  }

  if (botonExtraer && botonExtraer instanceof HTMLButtonElement) {
    botonExtraer.addEventListener('click', () => {
      const valorTextarea = obtenerValorTextArea();
      obtenerImgEnHtml(valorTextarea);
    });
  }
};
