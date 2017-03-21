angular.module('app.gaspump.controllers')
    .controller('GasPumpFormController', ['$state', '$scope', 'entity', 'GasPumpService',
        function GasPumpFormController($state, $scope, entity, GasPumpService) {

            $scope.entity = angular.copy(entity.data);

            $scope.blockBtnSave = function(entity){
                return !entity.name || !entity.number;
            }

            $scope.update = function(entity){
                GasPumpService.update(entity).then(function(){
                    $state.go('gaspump.list')
                })

            }

        }]);