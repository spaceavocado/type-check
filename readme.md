# Type Check
Collection of small javascript type check functions.

## Installation via NPM or Yarn
```sh
npm install -D @spaceavocado/type-check
```
or 
```sh
yarn add @spaceavocado/type-check -D
```

## Usage
The library is built as [UMD](https://github.com/umdjs/umd) module, therefore is capable of working everywhere, be it in the client, on the server or elsewhere. The usage below showcases ES6 module import.
### Import All Functions
```javascript
import tc from '@spaceavocado/type-check';
tc.isFunction(value);
```
The **tc** object has **not** property which holds negated version of all functions. e.g. **tc.isString()**, **tc.not.isString()**. 

### Specific Functions
```javascript
import {isFunction, isArray} from '@spaceavocado/type-check';
```

## Type Check Functions
### isString
```javascript
tc.isString('value');
// => true

tc.not.isString('value');
// => false
```

### isEmpty
Supports string and array empty check, any other types throws an error (**tc.TypeCheckError**).
```javascript
// String value
tc.isEmpty('');
// => true

// Array value
tc.isEmpty([]);
// => true

tc.isEmpty({});
// => throws tc.TypeCheckError

// String value
tc.not.isEmpty('');
// => false

// Array value
tc.not.isEmpty([]);
// => false
```

### isNumber
```javascript
tc.isNumber(5);
// => true

tc.not.isNumber(5);
// => false
```

### isFunction
```javascript
tc.isFunction(() => {});
// => true

tc.not.isFunction(() => {});
// => false
```

### isObject
```javascript
tc.isObject({});
// => true

tc.not.isObject({});
// => false
```

### isError
```javascript
tc.isError(new Error('error message'));
// => true

tc.not.isError(new Error('error message'));
// => false
```

### isNullOrUndefined
```javascript
tc.isNullOrUndefined(undefined);
// => true

tc.isNullOrUndefined(null);
// => true

tc.not.isNullOrUndefined(undefined);
// => false
```

### isArray
```javascript
tc.isArray([]);
// => true

tc.not.isArray([]);
// => false
```

### isSymbol
```javascript
tc.isSymbol(new Symbol());
// => true

tc.not.isSymbol(new Symbol());
// => false
```

### isEnumKey
```javascript
const myEnum = {
  A: 'A',
  B: 'B',
}

tc.isEnumKey(myEnum.A, myEnum);
// => true

tc.isEnumKey('C', myEnum);
// => false

tc.not.isEnumKey(myEnum.A, myEnum);
// => false
```