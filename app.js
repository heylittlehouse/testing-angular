var app = angular.module("reddit", []);

app.controller("frontPage", function($scope, $http){
  $http.get('http://api.reddit.com').then(function(response){
    $scope.posts = response.data.data.children

  });
});
