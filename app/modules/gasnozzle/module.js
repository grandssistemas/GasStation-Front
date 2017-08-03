require('./controllers/module');
require('./services/module');

let list = require('./views/list.html');
let form = require('./views/form.html');

module.exports =angular.module('app.gasnozzle', ['ui.router', 'app.gasnozzle.controllers', 'app.gasnozzle.services','api.location'])
    .config(['$stateProvider', 'apiLocation', function ($stateProvider, apiLocation) {
        $stateProvider
            .state('gasnozzle.list', {
                url: '/list',
                templateUrl: list,
                controller: 'GasNozzleListController',
                data: {id: 2}
            })
            .state('gasnozzle.insert', {
                url: '/insert',
                templateUrl: form,
                controller: 'GasNozzleFormController',
                controllerAs: 'form',
                data: {id: 3}, resolve: {
                    entity: ['$stateParams', '$http', function ($stateParams, $http) {
                        var url = apiLocation + '/api/gasnozzle/new';
                        return $http.get(url);
                    }]
                }
            })
            .state('gasnozzle.edit', {
                url: '/edit/:id',
                templateUrl: form,
                controller: 'GasNozzleFormController',
                data: {id: 3}, resolve: {
                    entity: ['$stateParams', '$http', function ($stateParams, $http) {
                        var url = apiLocation + '/api/gasnozzle/' + $stateParams.id;
                        return $http.get(url);
                    }]
                }
            });
    }]);
