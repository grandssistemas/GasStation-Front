angular.module('app.gasnozzle.controllers')
    .controller('GasNozzleListController', ['$scope', 'GasNozzleService', 'gumgaController',
        function GasNozzleListController($scope, GasNozzleService, gumgaController) {
            gumgaController.createRestMethods($scope, GasNozzleService, 'gasnozzle');
            $scope.gasnozzle.execute('reset');
            $scope.gasnozzle.execute('get');

            $scope.conf = {
                columns: 'name,pump,tank,button',
                selection: 'multi',
                materialTheme: true,
                activeLineColor: '#cccccc',
                hoverLineColor: '#f5f5f5',
                itemsPerPage: [5, 10, 25, 50, 100],
                title:'Listagem de bicos',
                columnsConfig: [
                    {
                        name: 'name',
                        size: 'col-md-7',
                        sortField: 'number',
                        title: '<strong gumga-translate-tag="gasnozzle.number">Name</strong>',
                        content: '<div> {{$value.number}} </div>'
                    }, {
                        name: 'tank',
                        size: 'col-md-2',
                        title: '<strong gumga-translate-tag="gasnozzle.tankname">Name</strong>',
                        content: '<div> {{$value.tank.name}} </div>'
                    },{
                        name: 'pump',
                        size: 'col-md-2',
                        title: '<strong gumga-translate-tag="gasnozzle.pumpname">Name</strong>',
                        content: '<div> {{$value.pump.name}} </div>'
                    },
                    {
                        name: 'button',
                        title: ' ',
                        size: 'col-md-1',
                        content: '<div align="center"><button type="button" ui-sref="gasnozzle.edit({id: $value.id})" grands-button="edit-sm" uib-tooltip="Editar"></button></div>'
                    }
                ]
            };

            $scope.gasnozzle.on('deleteSuccess', function(){
                $scope.gasnozzle.execute('get');
            })
        }]);