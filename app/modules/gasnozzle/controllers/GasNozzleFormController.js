GasNozzleFormController.$inject = ['$state', '$scope', 'entity', 'GasNozzleService', 'GasTankService', 'GasPumpService', 'GasService']
function GasNozzleFormController($state, $scope, entity, GasNozzleService, GasTankService, GasPumpService, GasService) {

    $scope.entity = angular.copy(entity.data);

    $scope.searchPump = function (param) {
        param = param || "";
        return GasPumpService.getAdvancedSearch('obj.name like \'%' + param + '%\'').then(function (response) {
            return response.data.values;
        })
    }
    $scope.searchTank = function (param) {
        param = param || "";
        return GasTankService.getAdvancedSearch('obj.name like \'%' + param + '%\'').then(function (response) {
            return response.data.values;
        })
    }

    $scope.blockBtnSave = function (entity) {
        return !entity.number || !entity.pump || !entity.tank;
    }

    $scope.update = function (entity) {
        GasNozzleService.update(entity).then(function () {
            $state.go('gasnozzle.list')
        })
    }

    $scope.searchProduct = function (param) {
        return GasService.getAdvancedSearch('obj.name like \'%' + param + '%\'').then(function (response) {
            return response.data.values;
        })
    }

}
module.exports = GasNozzleFormController;