var app = angular.module("reddit", []);

app.controller("frontPage", function($scope, $http){
  $http.get('http://api.reddit.com').then(function(response){
    $scope.posts = response.data.data.children
  });

  $scope.toggleComments = function(item){
    event.preventDefault();
    if(item.comments) {
      item.comments = null;
    }else{
      $http.get(event.target.href).then(function(response){
        var commentsArray = response.data[1].data.children;
        item.comments = commentsArray;
      })
    }
  };
});
