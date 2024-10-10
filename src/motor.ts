import { PATRON } from './modelo';

export const crearTitulo = (texto: string): void => {
  const divInfo = document.querySelector('.info');
  const titulo = document.createElement('h2');
  if (divInfo && divInfo instanceof HTMLDivElement) {
    titulo.textContent = texto;
    divInfo.appendChild(titulo);
  }
};

export const crearenlaceImg = (url: string): void => {
  const divInfo = document.querySelector('.info');
  const enlace = document.createElement('a');
  if (divInfo && divInfo instanceof HTMLDivElement) {
    enlace.textContent = url;
    enlace.href = url;
    divInfo.appendChild(enlace);
  }
};
export const crearImg = (url: string): void => {
  const divInfo = document.querySelector('.info');
  const img = document.createElement('img');
  if (divInfo && divInfo instanceof HTMLDivElement) {
    img.src = url;
    divInfo.appendChild(img);
  }
};

export const crearCardPersonaje = (url: string) => {
  const divInfo = document.querySelector('.info');
  const card = document.createElement('div');
  card.classList.add('card');
  const nombre = document.createElement('h3');
  nombre.textContent = url.replace(/^.*\/([^\/]+)\.[^.]+$/gm, '$1');
  const enlace = document.createElement('a');
  enlace.textContent = url;
  enlace.href = url;
  const imagen = document.createElement('img');
  imagen.src = url;
  if (divInfo && divInfo instanceof HTMLDivElement) {
    card.classList.add('card');
    divInfo.appendChild(card);
    card.append(nombre, imagen, enlace);
  } else {
    throw new Error('No se ha creado card de cada personaje');
  }
};

const limpiarInfo = () => {
  const divInfo = document.querySelector('.info');
  if (divInfo && divInfo instanceof HTMLDivElement) {
    divInfo.innerHTML = '';
  } else {
    throw new Error('No se ha limpiado info');
  }
};

export const obtenerValorTextArea = (): string => {
  const textArea = document.querySelector('textarea');
  if (textArea && textArea instanceof HTMLTextAreaElement) {
    return textArea.value.replace(/[\s\n]/gm, '').trim();
  }
  throw new Error('No se ha obtenido el valor de textarea');
};

export const habilitarBotonExtraer = () => {
  const extraer = document.querySelector('#extraer');
  if (extraer && extraer instanceof HTMLButtonElement) {
    extraer.removeAttribute('disabled');
    extraer.classList.toggle('valid');
  } else {
    throw new Error('No se ha habilitado el boton de extraer imagenes');
  }
};
export const validarExistenciaDeImg = (valor: string): boolean => {
  const patron = /\s*?<img\s*?src=/gm;
  return patron.test(valor) ? true : false;
};

export const mostrarMensajeAviso = (hayImgs: boolean): void => {
  if (hayImgs) {
    limpiarInfo();
  } else {
    limpiarInfo();
    crearTitulo('No se han encontrado elmentos de tipo <img>');
  }
};

export const obtenerImgEnHtml = (valor: string): string[] => {
  const imgs = valor.match(PATRON);
  if (imgs) {
    return imgs.map((el) => {
      const coincidencia = PATRON.exec(valor);
      if (coincidencia && el) {
        const { url } = coincidencia.groups as any;
        crearCardPersonaje(url);
        return url;
      }
    });
  }
  throw 'No se han obtenido las imagenes';
};
