function printOwnProperties(obj) {
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(obj[key]);
    }
  }
}

function testPrintOwnProperties() {
  const test_parent = { a: 'parent_prop_a', b: 'parent_prop_b' };
  const test_child = Object.create(test_parent);
  test_child.c = 'child_prop_c';
  test_child[''] = "child_prop_''";
  test_result = printOwnProperties(test_child);
  if (test_result === undefined) {
    console.log('returned value... ok')
  } else {
    console.log('returned value... fail')
  }
}

testPrintOwnProperties();
