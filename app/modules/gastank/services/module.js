module.exports = angular.module('app.gastank.services', ['gumga.core', 'api.location'])
    .service('GasTankService', require('./GasTankService'))