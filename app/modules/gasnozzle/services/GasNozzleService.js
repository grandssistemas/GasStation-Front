angular.module('app.gasnozzle.services')
    .service('GasNozzleService', ['GumgaRest', 'apiLocation', function (GumgaRest, apiLocation) {
        var service = new GumgaRest(apiLocation + '/api/gasnozzle');


        return service;

    }]);
