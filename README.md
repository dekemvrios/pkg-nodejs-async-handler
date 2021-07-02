# Node Async Handler

[![npm version](https://badge.fury.io/js/%40sintese%2Fnodejs-async-handler.svg)](https://badge.fury.io/js/%40sintese%2Fnodejs-async-handler)
[![Software License][ico-license]](LICENSE.md)

Handler para funções asíncronas abstraindo o uso de chamadas `try/catch`

## Instalando

Via npm

``` bash
$ npm i @sintese/nodejs-async-handler
```

## Usando

``` nodejs
const handle = require('@sintese/nodejs-async-handler');

async function myAsyncCallback () {
    // my async code
}
 
const [error, data] = await handle(myAsyncCallback)

if(error) {
    // do something with it
}

console.log(data);
```

## Change log

Modificações recentes são registradas no [CHANGELOG](CHANGELOG.md)

## Contribuindo

Dúvidas, contribuições e sugestões são muito bem vidas.

## Créditos

- [Rafael Becker][link-author]

## Licença

Esse pacote é disponibilizado sob a licença [MIT](LICENSE.md).

[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square
[link-author]: https://github.com/rafaelbeecker