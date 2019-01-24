if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        return arr.reduce(function (prev, now){
          return prev +=now;
        });
    },

    remove : function(arr, item) {
      var index = arr.indexOf(item);

      while(index !== -1){
        arr.splice(index,1);
        index = arr.indexOf(item);
      }

      return arr;

    },

    removeWithoutCopy : function(arr, item) {
      var index = arr.indexOf(item);

      while(index !== -1){
        arr.splice(index,1);
        index = arr.indexOf(item);
      }

      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      arr.shift();
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index,0,item);
      return arr;
    },

    count : function(arr, item) {
      var count = 0;
      arr.reduce(function (prev, now){
        if(now === item){
          count++;
        }
      });
      return count;
    },

    duplicates : function(arr) {
      var seen = [], result = [];
      arr.map(function (element){
        if((seen.indexOf(element) === -1) && (result.indexOf(element) === -1)){
          seen.push(element);
        }
        else
        {
          if((seen.indexOf(element) !== -1) && (result.indexOf(element) === -1)){
            result.push(element);
          }
        }
      });

      return result;
    },

    square : function(arr) {
      return arr.map(function (item) {
        return Math.pow(item, 2);
      });
    },

    findAllOccurrences : function(arr, target) {
      var indexes = [];
      arr.map(function (item,index){
        if(item === target){
          indexes.push(index);
        }
      });
      return indexes;
    }
  };
});
