# type-judge 
The library exported as [Node.js](https://nodejs.org/) modules.

## Installation

Using npm:
```shell
$ npm i -g npm
$ npm i --save type-judge
```

## Example
``` javascript
import jsType from type-judge

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




