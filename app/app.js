angular.module('gas.core', [
    'ui.router',
    'ngSanitize',
    'app.gasnozzle',
    'app.gaspump',
    'app.gastank',
    'app.gas',
    'gumga.core',
    'grands.components',
    'product.core',
    'gas.templates'
]).config(['$stateProvider', function ($stateProvider) {

    $stateProvider
        .state('gaspump', {
            data: {id: 1},
            url: '/gaspump',
            templateUrl: 'baseGasStation.html'
        })
        .state('gastank', {
            data: {id: 1},
            url: '/gastank',
            templateUrl: 'baseGasStation.html'
        })
        .state('gasnozzle', {
            data: {id: 1},
            url: '/gasnozzle',
            templateUrl: 'baseGasStation.html'
        })

}]);

