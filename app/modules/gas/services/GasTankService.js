angular.module('app.gas.services')
    .service('GasService', ['GumgaRest', 'apiLocation', function (GumgaRest, apiLocation) {
        var service = new GumgaRest(apiLocation + '/api/gas');


        return service;

    }]);
