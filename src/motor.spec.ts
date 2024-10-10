import { validarExistenciaDeImg } from './motor';

describe('validarExistenciaDeImg', () => {
  test.each([
    ['<img src="http://localhost:3000/./mortadelo.webp" />', true],
    ['<img src="http://localhost:3000/./filemon.webp" />', true],
    ['<img src="http://localhost:3000/./ofelia.webp" />', true],
    ['<img src="http://localhost:3000/./bacterio.webp" />', true],
    ['src="http://localhost:3000/./bacterio.webp"', false],
    ['http://localhost:3000/./bacterio.webp', false],
  ])(
    'Deberia devolver true si existe <img>',
    (valor: string, expected: boolean) => {
      expect(validarExistenciaDeImg(valor)).toBe(expected);
    }
  );
});
