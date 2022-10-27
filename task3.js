function createEmptyObj() {
  return Object.create(null);
}

function testCreateEmptyObj() {
  const testObj = createEmptyObj();
  if (Object.getPrototypeOf(testObj) === null) {
    console.log('test ok');
  } else {
    console.log('test failed');
  }
}

testCreateEmptyObj();
