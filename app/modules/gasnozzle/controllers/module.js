require('../services/module')
module.exports = angular.module('app.gasnozzle.controllers', ['app.gasnozzle.services','ui.router'])
    .controller('GasNozzleFormController',require('./GasNozzleFormController'))
    .controller('GasNozzleListController',require('./GasNozzleListController'))
