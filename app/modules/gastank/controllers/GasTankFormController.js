angular.module('app.gastank.controllers')
    .controller('GasTankFormController', ['$state', '$scope', 'entity', 'GasTankService', 'ProductService',
        function GasTankFormController($state, $scope, entity, GasTankService, ProductService) {

            $scope.entity = angular.copy(entity.data);

            $scope.searchProduct = function(param){
                return ProductService.searchOnlyGasProducts(param).then(function(response){
                    return response.data.values;
                })
            };

            $scope.blockBtnSave = function(entity){
                return !entity.name || !entity.number || !$scope.product;
            };

            $scope.update = function(entity){
                entity.products = [$scope.product];
                GasTankService.update(entity).then(function(){
                    $state.go('gastank.list');
                })

            }
        }]);