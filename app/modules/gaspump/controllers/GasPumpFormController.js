GasPumpFormController.$inject = ['$state', '$scope', 'entity', 'GasPumpService']
function GasPumpFormController($state, $scope, entity, GasPumpService) {

    $scope.entity = angular.copy(entity.data);

    $scope.blockBtnSave = function (entity) {
        return !entity.name || !entity.number;
    }

    $scope.update = function (entity, block) {
        if (block) return;
        GasPumpService.update(entity).then(function () {
            $state.go('gaspump.list')
        })

    }

}
module.exports = GasPumpFormController;