GasNozzleService.$inject = ['GumgaRest', 'apiLocation']
function GasNozzleService(GumgaRest, apiLocation) {
    var service = new GumgaRest(apiLocation + '/api/gasnozzle');


    return service;

}
module.exports = GasNozzleService;