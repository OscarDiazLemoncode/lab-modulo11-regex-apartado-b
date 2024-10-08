/* import { tablaBancos, PATRON } from './modelo';

export const obtenerValorInput = (): string => {
  const input = document.querySelector('#input_iban');
  if (input && input instanceof HTMLInputElement) {
    return input.value.toUpperCase().trim();
  }
  throw new Error('No se ha obtenido el valor del input');
};

export const habilitarBoton = () => {
  const comprobar = document.querySelector('#comprobar');
  if (comprobar && comprobar instanceof HTMLButtonElement) {
    comprobar.removeAttribute('disabled');
  }
};
export const deshabilitarBoton = () => {
  const comprobar = document.querySelector('#comprobar');
  if (comprobar && comprobar instanceof HTMLButtonElement) {
    comprobar.setAttribute('disabled', 'true');
  }
};

export const crearTitulo = (texto: string) => {
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
    input.value = '';
    divInfo.innerHTML = '';
  }
};

export const validarIbanBienFormado = (valor: string): boolean => {
  const patron =
    /^(?<pais>[A-Z]{2})(?<digitoControlPais>\d{2})(\s|-)?(?<entidad>\d{4})(\s|-)?(?<oficina>\d{4})(\s|-)?(?<digitoControl>\d{2})(\s|-)?(?<numeroCuenta>\d{10})$/gm;
  return patron.exec(valor) ? true : false;
};

const coincidenciaConTablaBancos = (entidad: string): string | undefined => {
  const bancoEncontrado = tablaBancos.find((banco) => {
    const digitosBanco = banco.trim().slice(0, 4);
    return entidad === digitosBanco;
  });

  if (bancoEncontrado) {
    const nombreBanco = bancoEncontrado.trim().slice(5);
    crearTitulo(`Banco: ${nombreBanco}`);
  } else {
    crearTitulo('No hay coincidencias con ningún banco');
  }
  return bancoEncontrado;
};

export const mostrarDatosIban = (valor: string, ibanValidado: boolean) => {
  //const ibanValidado = validarIbanBienFormado(valor);
  const datosExtraidosDelIban = PATRON.exec(valor);

  ibanValidado
    ? crearTitulo(`El IBAN está bien formado`)
    : crearTitulo(`El IBAN NO está bien formado`);

  if (ibanValidado && datosExtraidosDelIban) {
    const {
      pais,
      digitoControlPais,
      entidad,
      oficina,
      digitoControl,
      numeroCuenta,
    } = datosExtraidosDelIban.groups as any;
    crearTitulo(`El IBAN es válido`);
    crearTitulo(`PAÍS: ${pais}`);
    crearTitulo(`Dígito control país: ${digitoControlPais}`);
    crearTitulo(`Código sucursal: ${entidad}`);
    crearTitulo(`Código oficina: ${oficina}`);
    crearTitulo(`Dígito de control: ${digitoControl}`);
    crearTitulo(`Número de cuenta: ${numeroCuenta}`);
    coincidenciaConTablaBancos(entidad);
    deshabilitarBoton();
  }
};
 */
import { PATRON } from './modelo';

export const crearTitulo = (texto: string) => {
  const divInfo = document.querySelector('.info');
  const titulo = document.createElement('h2');
  if (divInfo && divInfo instanceof HTMLDivElement) {
    titulo.textContent = texto;
    divInfo.appendChild(titulo);
  }
};

export const crearenlaceImg = (texto: string) => {
  const divInfo = document.querySelector('.info');
  const enlace = document.createElement('a');
  if (divInfo && divInfo instanceof HTMLDivElement) {
    enlace.textContent = texto;
    enlace.href = texto;
    divInfo.appendChild(enlace);
  }
};
const limpiarInfo = () => {
  const divInfo = document.querySelector('.info');
  if (divInfo && divInfo instanceof HTMLDivElement) {
    divInfo.innerHTML = '';
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
  }
};
export const validarExistenciaDeImg = (): boolean => {
  const valor = obtenerValorTextArea();
  const patron = /\s*?<img\s*?src=/gm;
  ///\s*?<img\s*?src=["'](.*)["'\s*?\/>$]/gm;
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
    console.log(imgs);
    return imgs;
  }
  throw 'No se han obtenido las imagenes';
};

export const obtenerEnlacesImg = (imgs: string[]): any => {
  const patronEnlaceImg: RegExp =
    ///["']?(?<url>(http:|https:)\/\/.*)["']?/gm;
    /["']?(?<url>(http:|https:)\/\/.*\.(jpg|webp|png|jpeg))["']/gm;
  const arrayImagenes = imgs.forEach((imagen) => {
    const enlace = imagen.match(patronEnlaceImg);
    //const nombre = patronEnlaceImg.exec(enlace.toString())
    if (enlace) {
      console.log(enlace);
      console.log(enlace.toString());
      crearenlaceImg(enlace.toString());
    }
  });
  return arrayImagenes;
};
/* const patron =
    /^(?<parteNumerica>\d{2}\.?\d{3}\.?\d{3})(\s|-|_)?(?<letra>[A-Za-z])$/;
  const coincidencia = patron.exec(value);
  if (coincidencia) {
    const { parteNumerica, letra } = coincidencia.groups as any;
    //Replace (metodo strings)
    // Reemplaza todos los puntos que encuentres de forma global(/g), y lo cambias por...("" espacio en blanco)
    const numeroLimpio = parteNumerica.replace(/\./g, '');
    console.log('La parte numerica es:', numeroLimpio);
    console.log('La letra es:', letra);
    return true;
  } else {
    console.log('FALLO');
    return false;
  } */
