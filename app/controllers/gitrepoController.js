

var app = angular.module('app');

app.controller("gitrepoController", function(git_repo, $scope){
    
        $scope.repo = function (search){
            $scope.repositorios = [];

            git_repo.repo(search).success(function(data){
    
                $scope.repositorios_total = data.total_count;
                $scope.repositorios = data.items;             

               console.log(data);
               
            })

            
        }

});

