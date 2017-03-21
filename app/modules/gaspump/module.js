angular.module('app.gaspump', ['ui.router', 'app.gaspump.controllers', 'app.gaspump.services','api.location'])
    .config(['$stateProvider', 'apiLocation', function ($stateProvider, apiLocation) {
        $stateProvider
            .state('gaspump.list', {
                url: '/list',
                templateUrl: 'modules/gaspump/views/list.html',
                controller: 'GasPumpListController',
                data: {id: 2}
            })
            .state('gaspump.insert', {
                url: '/insert',
                templateUrl: 'modules/gaspump/views/form.html',
                controller: 'GasPumpFormController',
                controllerAs: 'form',
                data: {id: 3}, resolve: {
                    entity: ['$stateParams', '$http', function ($stateParams, $http) {
                        var url = apiLocation + '/api/gaspump/new';
                        return $http.get(url);
                    }]
                }
            })
            .state('gaspump.edit', {
                url: '/edit/:id',
                templateUrl: 'modules/gaspump/views/form.html',
                controller: 'GasPumpFormController',
                data: {id: 3}, resolve: {
                    entity: ['$stateParams', '$http', function ($stateParams, $http) {
                        var url = apiLocation + '/api/gaspump/' + $stateParams.id;
                        return $http.get(url);
                    }]
                }
            });
    }]);
