GasTankFormController.$inject = ['$state', '$scope', 'entity', 'GasTankService', 'GasService']
function GasTankFormController($state, $scope, entity, GasTankService, GasService) {

    $scope.entity = angular.copy(entity.data);
    $scope.product = $scope.entity.products[0];

    $scope.searchProduct = function (param) {
        return GasService.getAdvancedSearch('obj.name like \'%' + param + '%\'').then(function (response) {
            return response.data.values;
        })
    };

    $scope.blockBtnSave = function (entity) {
        return !entity.name || !entity.number || !$scope.product;
    };

    $scope.update = function (entity) {
        entity.products = [$scope.product];
        GasTankService.update(entity).then(function () {
            $state.go('gastank.list');
        })

    }
}
module.exports = GasTankFormController;