// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var nodeList = [];
  function test(node) {
    if (_(node.classList).contains(className)) {
      nodeList.push(node);
    }
    _(node.childNodes).forEach(function(child) {
      test(child);
    });
  }
  test(document.body);
  return nodeList;
};
