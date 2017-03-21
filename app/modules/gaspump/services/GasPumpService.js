angular.module('app.gaspump.services')
    .service('GasPumpService', ['GumgaRest', 'apiLocation', function (GumgaRest, apiLocation) {
        var service = new GumgaRest(apiLocation + '/api/gaspump');


        return service;

    }]);
