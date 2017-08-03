require('./controllers/module');
require('./services/module');

let list = require('./views/list.html');
let form = require('./views/form.html');

module.exports = angular.module('app.gastank', ['ui.router', 'app.gastank.controllers', 'app.gastank.services','api.location'])
    .config(['$stateProvider', 'apiLocation', function ($stateProvider, apiLocation) {
        $stateProvider
            .state('gastank.list', {
                url: '/list',
                templateUrl: list,
                controller: 'GasTankListController',
                data: {id: 2}
            })
            .state('gastank.insert', {
                url: '/insert',
                templateUrl: form,
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
                templateUrl: form,
                controller: 'GasTankFormController',
                data: {id: 3}, resolve: {
                    entity: ['$stateParams', '$http', function ($stateParams, $http) {
                        var url = apiLocation + '/api/gastank/' + $stateParams.id;
                        return $http.get(url);
                    }]
                }
            });
    }]);
