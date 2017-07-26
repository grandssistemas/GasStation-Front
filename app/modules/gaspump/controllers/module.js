require('../services/module')
module.exports = angular.module('app.gaspump.controllers', ['app.gaspump.services', 'ui.router'])
    .controller('GasPumpFormController', require('./GasPumpFormController'))
    .controller('GasPumpListController', require('./GasPumpListController'))