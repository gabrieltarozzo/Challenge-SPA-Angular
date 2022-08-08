(function(){
    'use strict';
    angular
    .module('app')
    .factory('git_repo', git_repo);

    git_repo.$inject = ['$http']

    function git_repo($http){
        var repo = function(search){
            return $http({
                url: 'https://api.github.com/search/repositories?',
                method: 'GET',
                params : {
                    q: '=' + search
                }
            })
        };
        return {
            repo: repo
        }
    }
})()