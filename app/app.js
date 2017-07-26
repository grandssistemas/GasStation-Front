require('./import-modules');

let base = require('./baseGasStation.html');
module.exports = angular.module('gas.core', [
    'ui.router',
    'ngSanitize',
    'app.gasnozzle',
    'app.gaspump',
    'app.gastank',
    'gumga.core',
    'app.gassupply.services',
    'grands.components',
    'product.core'
]).config(['$stateProvider', function ($stateProvider) {

    $stateProvider
        .state('gaspump', {
            data: {id: 1},
            url: '/gaspump',
            templateUrl: base
        })
        .state('gastank', {
            data: {id: 1},
            url: '/gastank',
            templateUrl: base
        })
        .state('gasnozzle', {
            data: {id: 1},
            url: '/gasnozzle',
            templateUrl: base
        })

}]);

