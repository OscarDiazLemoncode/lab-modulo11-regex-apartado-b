# Laboratorio Módulo 11 - Expresiones Regulares

## Apartado A

Vamos a leer IBAN de cuentas de bancos españoles, ver que estar bien formado, validarlo y extraer información del mismo, mock de la aplicación:
Un IBAN en España tiene el siguiente formato:

WW 0000 0000 00 0000000000

Donde: WW: código de país 00: dígito de control 0000: código de banco 0000: código de sucursal 00: dígito de control 0000000000: número de cuenta

Queremos poder leer IBAN con espacios, sin espacios, o guiones, por ejemplo:

ES21 1465 0100 72 2030876293

ES2114650100722030876293

ES21-1465-0100-72-2030876293

ES6621000418401234567891

Valida que un IBAN este bien formado.

Después valida que sea correcto, para ello puedes usar esta librería

https://github.com/Simplify/ibantools

Después extrae el código de sucursal:

Muestra:

- El banco al que pertenece, para ello:
- La oficina.
- El digito de control.
- La cuenta.

Para sacar el nombre del banco

- Extrae el código de banco.
- Compáralo con la siguiente tabla:

2080 Abanca Corporación Bancaria

0061 Banca March

0188 Banco Alcalá

0182 Banco Bilbao Vizcaya Argentaria

0130 Banco Caixa Geral

0234 Banco Caminos

2105 Banco Castilla-La Mancha

0240 Banco de Crédito Social Cooperativo

0081 Banco de Sabadell

0487 Banco Mare Nostrum

0186 Banco Mediolanum

0238 Banco Pastor

0075 Banco Popular Español

0049 Banco Santander

3873 Banco Santander Totta

2038 Bankia

0128 Bankinter

0138 Bankoa

0152 Barclays Bank PLC

3842 BNP Paribas Paris

3025 Caixa de Credit del Enginyers

2100 Caixabank

2045 Caja de Ahorros y Monte de Piedad de Ontinyent

3035 Caja Laboral Popular CC

3081 Caja Rural Castilla-La Mancha3058 Cajamar Caja Rural

2000 Cecabank

1474 Citibank Europe PLC

3821 Commerzbank AG

3877 Danske Bank A/S

0019 Deutsche Bank SAE

0239 EVO Banco

2085 Ibercaja Banco

1465 ING Bank NV

2095 Kutxabank

2048 Liberbank

0131 Novo Banco

0073 Open Bank

0108 Société Générale

2103 Unicaja Banco

## Apartado B

Cuando se pincha en el botón extrae los enlaces a las imágenes que haya en el textarea y las muestra en pantalla.

Es decir:

- Busca todos los tags img
- Por cada tag busca el atributo src
- Muestra el contenido en enlace a la imagen que hay dentro del SRC.
