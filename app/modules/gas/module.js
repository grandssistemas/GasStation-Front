angular.module('app.gastank', ['ui.router', 'app.gastank.controllers', 'app.gastank.services','api.location'])
    .config(['$stateProvider', 'apiLocation', function ($stateProvider, apiLocation) {
        $stateProvider
            .state('gastank.list', {
                url: '/list',
                templateUrl: 'modules/gastank/views/list.html',
                controller: 'GasTankListController',
                data: {id: 2}
            })
            .state('gastank.insert', {
                url: '/insert',
                templateUrl: 'modules/gastank/views/form.html',
                controller: 'GasTankFormController',
                controllerAs: 'form',
                data: {id: 3}, resolve: {
                    entity: ['$stateParams', '$http', function ($stateParams, $http) {
                        var url = apiLocation + '/api/gastank/new';
                        return $http.get(url);
                    }]
                }
            })
            .state('gastank.edit', {
                url: '/edit/:id',
                templateUrl: 'modules/gastank/views/form.html',
                controller: 'GasTankFormController',
                data: {id: 3}, resolve: {
                    entity: ['$stateParams', '$http', function ($stateParams, $http) {
                        var url = apiLocation + '/api/gastank/' + $stateParams.id;
                        return $http.get(url);
                    }]
                }
            });
    }]);
