import { tablaBancos, PATRON } from './modelo';

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
