function foo(bar) {
  console.log(bar());
}

function bar1(){
  return 'Welcome'
}

let bar2 = function(){
  return 3.1415
}

let bar3 = function(){
  return [1,2,3]
}

foo(bar1);    // Should print 'Welcome'
foo(bar2);    // Should print 3.1415
foo(bar3);    // Should print [1, 2, 3]
