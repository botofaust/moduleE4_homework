function objHasKey(key, obj) {
  return key in obj;
}

function testObjHasKey() {
  const test_parent = { a: 'parent_prop_a', b: 'parent_prop_b' };
  const test_child = Object.create(test_parent);
  test_child.c = 'child_prop_c';
  test_child[''] = "child_prop_''";
  if (objHasKey('a', test_child)) {
    console.log('test1... ok');
  } else {
    console.log('test1 failed');
  }
  if (objHasKey('', test_child)) {
    console.log('test2... ok');
  } else {
    console.log('test2 failed');
  }
  if (!objHasKey('123456', test_child)) {
    console.log('test3... ok');
  } else {
    console.log('test3 failed');
  }
  if (objHasKey('c', test_child)) {
    console.log('test4... ok');
  } else {
    console.log('test4 failed');
  }
}

testObjHasKey();
