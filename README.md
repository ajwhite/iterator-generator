# Iterator Generator

An iterable interface to collections using ES2015 generators

## Installation
```sh
npm install iterator-generator --save
```

## Usage Example
```js
'use strict';
import iterable from 'iterator-generator';

var list = ['a', 'b', 'c', 'd'];
var iterator = iterable(list);

var item;
while (!(item = iterator.next()).done) {
  console.log(item.value);
}
```

Outputs:
```js
a
b
c
d
```
