// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var result = [];
  function test(node) {
    var parts = node.className.split(' ');
    if (parts.indexOf(className) !== -1) {
      result.push(node);
    }
    for (var i = 0; i < node.children.length; i++) {
      test(node.children[i]);
    }
  }
  test(document.body);
  return result;
};
