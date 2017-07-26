GasSupplyService.$inject = ['GumgaRest', 'apiLocation']
function GasSupplyService(GumgaRest, apiLocation) {
    var service = new GumgaRest(apiLocation + '/api/gassupply');

    service.findAllOpen = function () {
        service.resetDefaultState();
        service._query.params.aq = 'obj.status = \'OPEN\'';
        return service.extend('get', '/', service._query);
    };

    service.changeSupplyStatus = function (id, status) {
        return service.extend('get', '/changestatus/' + status + '/' + id);
    }

    return service;

}
module.exports = GasSupplyService