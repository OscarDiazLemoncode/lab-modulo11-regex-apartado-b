import { validarIbanBienFormado } from './motor';

describe('validarIbanBienFormado', () => {
  test.each([
    ['ES21 1465 0100 72 2030876293', true],
    ['ES2114650100722030876293', true],
    ['ES21-1465-0100-72-2030876293', true],
    ['ES6621000418401234567891', true],
    ['ES.211465 0100 72 2030876293', false],
    ['ES-2114650100722030876293', false],
    ['ES v21-1465-0100-72-2030876293', false],
    ['ES662.1000418401234567891', false],
    ['ES662.100.04184 01234567891', false],
    ['ES-662.10004184012,34567891', false],
  ])(
    'Deberia devolver true si los IBAN están bien formados',
    (valor: string, expected: boolean) => {
      expect(validarIbanBienFormado(valor)).toBe(expected);
    }
  );
});
