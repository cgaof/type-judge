# jstypecgf v1.0.4

The library exported as [Node.js](https://nodejs.org/) modules.

## Installation

Using npm:
```shell
$ npm i -g npm
$ npm i --save jstypecgf
```

## Example
``` javascript
import jsType from jstypecgf
jsType.isBoolean()
jsType.isNumber()
jsType.isString()
jsType.isFunction()
jsType.isArray()
jsType.isDate()
jsType.isRegExp()
jsType.isObject()
jsType.isError()
console.log(jsType.isBoolean([1, 2, 3]))
// => false

console.log(jsType.isBoolean(false))
// => true

```


## LICENSE [MIT](LICENSE)




