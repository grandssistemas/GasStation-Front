angular.module('app.gaspump.controllers')
    .controller('GasPumpListController', ['$scope', 'GasPumpService', 'gumgaController',
        function GasPumpListController($scope, GasPumpService, gumgaController) {
            gumgaController.createRestMethods($scope, GasPumpService, 'gaspump');
            $scope.gaspump.execute('reset')
            $scope.gaspump.execute('get')

            $scope.conf = {
                columns: 'name,number,button',
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
                    },
                    {
                        name: 'button',
                        title: ' ',
                        size: 'col-md-1',
                        content: '<div align="center"><button type="button" ui-sref="gaspump.edit({id: $value.id})" grands-button="edit-sm" uib-tooltip="Editar"></button></div>'
                    }
                ]
            };

            $scope.gaspump.on('deleteSuccess', function(){
                $scope.gaspump.execute('get');
            })

        }]);