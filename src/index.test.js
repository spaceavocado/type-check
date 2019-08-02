import tc, {TypeCheckError} from './index.js';

test('String', () => {
  expect(tc.isString('Hello')).toBe(true);
  expect(tc.isString({})).toBe(false);
  expect(tc.isString([])).toBe(false);
  expect(tc.isString(5)).toBe(false);
  expect(tc.isString(true)).toBe(false);
  expect(tc.isString(null)).toBe(false);
  expect(tc.isString(undefined)).toBe(false);
  expect(tc.isString(Symbol())).toBe(false);
  expect(tc.isString(function() {
    return false;
  })).toBe(false);
  expect(tc.isString(new Error('Sample error'))).toBe(false);
});
test('Number', () => {
  expect(tc.isNumber('Hello')).toBe(false);
  expect(tc.isNumber({})).toBe(false);
  expect(tc.isNumber([])).toBe(false);
  expect(tc.isNumber(5)).toBe(true);
  expect(tc.isNumber(true)).toBe(false);
  expect(tc.isNumber(null)).toBe(false);
  expect(tc.isNumber(undefined)).toBe(false);
  expect(tc.isNumber(Symbol())).toBe(false);
  expect(tc.isNumber(function() {
    return false;
  })).toBe(false);
  expect(tc.isNumber(new Error('Sample error'))).toBe(false);
});
test('Function', () => {
  expect(tc.isFunction('Hello')).toBe(false);
  expect(tc.isFunction({})).toBe(false);
  expect(tc.isFunction([])).toBe(false);
  expect(tc.isFunction(5)).toBe(false);
  expect(tc.isFunction(true)).toBe(false);
  expect(tc.isFunction(null)).toBe(false);
  expect(tc.isFunction(undefined)).toBe(false);
  expect(tc.isFunction(Symbol())).toBe(false);
  expect(tc.isFunction(function() {
    return false;
  })).toBe(true);
  expect(tc.isFunction(new Error('Sample error'))).toBe(false);
});
test('Object', () => {
  expect(tc.isObject('Hello')).toBe(false);
  expect(tc.isObject({})).toBe(true);
  expect(tc.isObject([])).toBe(false);
  expect(tc.isObject(5)).toBe(false);
  expect(tc.isObject(true)).toBe(false);
  expect(tc.isObject(null)).toBe(false);
  expect(tc.isObject(undefined)).toBe(false);
  expect(tc.isObject(Symbol())).toBe(false);
  expect(tc.isObject(function() {
    return false;
  })).toBe(false);
  expect(tc.isObject(new Error('Sample error'))).toBe(false);
});
test('Null or Undefined', () => {
  expect(tc.isNullOrUndefined('Hello')).toBe(false);
  expect(tc.isNullOrUndefined({})).toBe(false);
  expect(tc.isNullOrUndefined([])).toBe(false);
  expect(tc.isNullOrUndefined(5)).toBe(false);
  expect(tc.isNullOrUndefined(true)).toBe(false);
  expect(tc.isNullOrUndefined(null)).toBe(true);
  expect(tc.isNullOrUndefined(undefined)).toBe(true);
  expect(tc.isNullOrUndefined(Symbol())).toBe(false);
  expect(tc.isNullOrUndefined(function() {
    return false;
  })).toBe(false);
  expect(tc.isNullOrUndefined(new Error('Sample error'))).toBe(false);
});
test('Array', () => {
  expect(tc.isArray('Hello')).toBe(false);
  expect(tc.isArray({})).toBe(false);
  expect(tc.isArray([])).toBe(true);
  expect(tc.isArray(5)).toBe(false);
  expect(tc.isArray(true)).toBe(false);
  expect(tc.isArray(null)).toBe(false);
  expect(tc.isArray(undefined)).toBe(false);
  expect(tc.isArray(Symbol())).toBe(false);
  expect(tc.isArray(function() {
    return false;
  })).toBe(false);
  expect(tc.isArray(new Error('Sample error'))).toBe(false);
});
test('Symbol', () => {
  expect(tc.isSymbol('Hello')).toBe(false);
  expect(tc.isSymbol({})).toBe(false);
  expect(tc.isSymbol([])).toBe(false);
  expect(tc.isSymbol(5)).toBe(false);
  expect(tc.isSymbol(true)).toBe(false);
  expect(tc.isSymbol(null)).toBe(false);
  expect(tc.isSymbol(undefined)).toBe(false);
  expect(tc.isSymbol(Symbol())).toBe(true);
  expect(tc.isSymbol(function() {
    return false;
  })).toBe(false);
  expect(tc.isSymbol(new Error('Sample error'))).toBe(false);
});
test('Error', () => {
  expect(tc.isError('Hello')).toBe(false);
  expect(tc.isError({})).toBe(false);
  expect(tc.isError([])).toBe(false);
  expect(tc.isError(5)).toBe(false);
  expect(tc.isError(true)).toBe(false);
  expect(tc.isError(null)).toBe(false);
  expect(tc.isError(undefined)).toBe(false);
  expect(tc.isError(Symbol())).toBe(false);
  expect(tc.isError(function() {
    return false;
  })).toBe(false);
  expect(tc.isError(new Error('Sample error'))).toBe(true);
  expect(tc.isError(new TypeCheckError('Sample error'))).toBe(true);
});
test('Empty', () => {
  expect(tc.isEmpty('Hello')).toBe(false);
  expect(tc.isEmpty(['Hello', 'World'])).toBe(false);
  expect(tc.isEmpty('')).toBe(true);
  expect(tc.isEmpty(' ')).toBe(true);
  expect(tc.isEmpty([])).toBe(true);
  expect(() => tc.isEmpty({})).toThrow(TypeCheckError);
});
test('Enum Key', () => {
  expect(tc.isEnumKey('Hello', {Hello: 'Value'})).toBe(true);
  expect(tc.isEnumKey('Hello', {World: 'Value'})).toBe(false);
  expect(tc.isEnumKey({}, {World: 'Value'})).toBe(false);
  expect(tc.isEnumKey()).toBe(false);
});
test('Not Modifier', () => {
  expect(tc.not.isString('Hello')).toBe(false);
});
