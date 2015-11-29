# Iterator Generator

An iterable interface to collections

## Installation
```sh
npm install iterator-generator --save
```

## Usage Example
```js
import iterable from 'iterator-generator';
var list = ['a', 'b', 'c', 'd'];
var iterator = iterable(list);

var item = iterator.next();
while (!item.done) {
  console.log(item.value);
  item = iterator.next();
}
```

Outputs:
```js
a
b
c
d
```
