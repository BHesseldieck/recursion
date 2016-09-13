// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = "";
  if(typeof(obj) === "number") {
    result += obj;
  } else if(obj === null) {
    result += "null";
  } else if(typeof(obj) === "boolean") {
    result += obj;
  } else if(typeof(obj) === "string") {
    result += '\"'+ obj + '\"';
  } else if(Array.isArray(obj)) {
    result += '[';
    for(var i = 0; i < obj.length; i++){
      result += stringifyJSON(obj[i]);
      if(i !== obj.length-1){
        result += ',';
      }
    }
    result += ']';
  } else if (typeof(obj) === "object") {
    result += '{';
    var counter = 0;
    for(var key in obj) {
      if(typeof(obj[key]) === "function" || typeof(obj[key]) === "undefined") {
        continue;
      }
      if(counter > 0){
        result += ",";
      }
      result += stringifyJSON(key) + ":" + stringifyJSON(obj[key]);
      counter++;
    }
    result += '}';
  }
  return result;
};
