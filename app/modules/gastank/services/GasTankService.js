angular.module('app.gastank.services')
    .service('GasTankService', ['GumgaRest', 'apiLocation', function (GumgaRest, apiLocation) {
        var service = new GumgaRest(apiLocation + '/api/gastank');


        return service;

    }]);
