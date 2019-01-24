if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
     var q = $.Deferred();
     setTimeout(function (){
      q.resolve(value);
     },10);
     return q.promise();
    },

    manipulateRemoteData : function(url) {
      var q = $.Deferred();
      $.ajax(url).then(function (res){
        var people = $.map(res.people, function(person){
          return person.name;
        });
        q.resolve(people.sort());
      });
      return q.promise();
    }
  };
});
