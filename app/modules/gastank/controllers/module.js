require('../services/module')
module.exports = angular.module('app.gastank.controllers', ['app.gastank.services','ui.router'])
    .controller('GasTankFormController',require('./GasTankFormController'))
    .controller('GasTankListController',require('./GasTankListController'))
