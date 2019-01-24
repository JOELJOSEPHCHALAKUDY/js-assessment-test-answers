if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
      function GreetModule(message,name){
        this.greeting = message;
        this.name = name;
        this.sayIt = function(){
          return this.greeting + ', ' + this.name;
        };
      }
      return new GreetModule(str1,str2);
    }
  };
});

