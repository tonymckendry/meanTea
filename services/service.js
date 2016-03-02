app.service('service', ['$http', '$q', function($http, $q){
  var deferred = $q.defer();
  $http.get('./tea.json').then(function(data){
    deferred.resolve(data)
  })
  this.getTea = function(){
    return deferred.promise
  }
}])
