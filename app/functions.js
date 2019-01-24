if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return  fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        return  fn.call(obj);
    },

    functionFunction : function(str) {
        return function (str1){
          return str + ', ' + str1;
        };
    },

    makeClosures : function(arr, fn) {
        return arr.map(function (item){
          return function () {
            return fn(item);
          };
        });
    },

    partial : function(fn, str1, str2) {
      return function(str3) {
        return fn.call(this, str1, str2, str3);
      };
    },

    useArguments : function() {
      var result = 0,i=0;
      for(var len = arguments.length; i < len; i++){
        result += arguments[i];
      }
      return result;
    },

    callIt : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1);
      return fn.apply(null,args);
    },

    partialUsingArguments : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1);
      return function (){
        var firstArgs = Array.prototype.slice.call(arguments), secondArgs = args.concat(firstArgs);
        return fn.apply(null, secondArgs);
      };
    },

    curryIt : function(fn) {
      var args = [], fnLength = fn.length;
      return function makeCurry(arg){
        args.push(arg);
        while (args.length < fnLength){
          return makeCurry;
        }
        return fn.apply(null, args);
      };
    }
  };
});
