require('./controllers/module');
require('./services/module');

let list = require('./views/list.html');
let form = require('./views/form.html');

module.exports = angular.module('app.gaspump', ['ui.router', 'app.gaspump.controllers', 'app.gaspump.services', 'api.location'])
    .config(['$stateProvider', 'apiLocation', function ($stateProvider, apiLocation) {
        $stateProvider
            .state('gaspump.list', {
                url: '/list',
                templateUrl: list,
                controller: 'GasPumpListController',
                data: {id: 2}
            })
            .state('gaspump.insert', {
                url: '/insert',
                templateUrl: form,
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
                templateUrl: form,
                controller: 'GasPumpFormController',
                data: {id: 3}, resolve: {
                    entity: ['$stateParams', '$http', function ($stateParams, $http) {
                        var url = apiLocation + '/api/gaspump/' + $stateParams.id;
                        return $http.get(url);
                    }]
                }
            });
    }]);
