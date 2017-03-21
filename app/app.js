angular.module('gas.core', [
        'ui.router',
        'ngSanitize',
        'gumga.core',
        'grands.components',
        'product.core'
    ]).config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('gaspump',{
                data: { id : 1},
                url: '/gaspump',
                templateurl : 'base.html'
            })
            .state('gastank',{
                data: { id : 1},
                url: '/gastank',
                templateurl : 'base.html'
            })
            .state('gasnozzle',{
                data: { id : 1},
                url: '/gasnozzle',
                templateurl : 'base.html'
            })


    }])

