var app = angular.module('meanTea', ['ngRoute'])

app.config(function($routeProvider){
  $routeProvider
  .when("/", {
    templateUrl: "./partials/home.html",
    controller: "mainController"
  })
})
