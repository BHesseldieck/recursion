// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var result = [];
var getElementsByClassName = function(className, ele) {

  ele = ele || document.children;
  for(var i = 0; i < ele.length; i++) {
    if(ele[i].className === className) {
        //console.log("ele I", ele[i]);
        result.push(ele[i]);
    }
    if(ele[i].childNodes.length > 0) {
      getElementsByClassName(className, ele[i].children);
    }
  }
  //console.log("result", result);
  return result;
};
