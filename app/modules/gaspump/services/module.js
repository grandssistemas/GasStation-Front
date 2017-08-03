module.exports = angular.module('app.gaspump.services', ['gumga.core', 'api.location'])
    .service('GasPumpService', require('./GasPumpService'))