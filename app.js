var app = angular.module("reddit", []);

app.controller("frontPage", function($scope, $http){
  $http.get('http://api.reddit.com').then(function(response){
    $scope.posts = response.data.data.children
  });

  $scope.comments = function(){
    event.preventDefault();
    $http.get(event.target.href).then(function(response){
      var commentsArray = response.data[1].data.children
      console.log(commentsArray)
    })
  }
});
