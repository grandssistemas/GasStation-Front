angular.module('app.gastank.controllers')
    .controller('GasTankListController', ['$scope', 'GasTankService', 'gumgaController',
        function GasTankListController($scope, GasTankService, gumgaController) {
            gumgaController.createRestMethods($scope, GasTankService, 'gastank');
            $scope.gastank.execute('reset')
            $scope.gastank.execute('get')

            $scope.conf = {
                columns: 'name,number,product,button',
                selection: 'multi',
                columnsConfig: [
                    {
                        name: 'name',
                        size: 'col-md-7',
                        title: '<strong gumga-translate-tag="gastank.name">Name</strong>',
                        content: '<div> {{$value.name}} </div>'
                    }, {
                        name: 'number',
                        size: 'col-md-2',
                        title: '<strong gumga-translate-tag="gastank.number">Name</strong>',
                        content: '<div> {{$value.number}} </div>'
                    },{
                        name: 'product',
                        size: 'col-md-2',
                        title: '<strong gumga-translate-tag="gastank.product">Name</strong>',
                        content: '<div> {{$value.products[0].name}} </div>'
                    },
                    {
                        name: 'button',
                        title: ' ',
                        size: 'col-md-1',
                        content: '<div align="center"><button type="button" ui-sref="gastank.edit({id: $value.id})" grands-button="edit-sm" uib-tooltip="Editar"></button></div>'
                    }
                ]
            };

            $scope.gastank.on('deleteSuccess', function(){
                $scope.gastank.execute('get');
            })
        }])