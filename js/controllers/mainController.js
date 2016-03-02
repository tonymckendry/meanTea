app.controller('mainController', ['$scope', 'service', function($scope, service){
  var promise = service.getTea();

  promise.then(function(results){
    $scope.teas = results.data;
    console.log($scope.teas)
  })
}])
