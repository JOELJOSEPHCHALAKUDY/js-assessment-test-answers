if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var results = [];
      var walk = function (data) {
        return data.files.map(function (item) {
          if (item.files) {
            walk(item);
          } else {
            if (dirName) {
              var file = item.split('.');
              if (file[1] === dirName) {
                results.push(item);
              }
            } else {
              results.push(item);
            }
          }
        });
      };
  
      walk(data);
  
      return results;		
    },

    permute: function(arr) {
      Array.prototype.swap = function (index, otherIndex) {
        var valueAtIndex = this[index];
        this[index] = this[otherIndex];
        this[otherIndex] = valueAtIndex;
      };
      var result = [arr.slice()], length = arr.length;
      for (var i = 1, heap = new Array(length).fill(0); i < length;)if (heap[i] < i) {
        arr.swap(i, i % 2 && heap[i]);
        result.push(arr.slice());
        heap[i]++;
        i = 1;
      } else {
        heap[i] = 0;
        i++;
      }
      return result;
    }
  };
});
