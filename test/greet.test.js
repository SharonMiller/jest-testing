const greet = require('../lib/greet');

test('should return Hello Adam', () => {
  //arrange
  //act
  //assert
  let actual = greet.sayHello('Adam');
  let expectedValue = 'Hello Adam';
  
  expect(actual).toBe(expectedValue);
});

test('this should return null with no args', () => {
  expect(greet.sayHello()).toBeNull();
});