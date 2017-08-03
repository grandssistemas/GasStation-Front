GasPumpService.$inject = ['GumgaRest', 'apiLocation']
function GasPumpService(GumgaRest, apiLocation) {
    var service = new GumgaRest(apiLocation + '/api/gaspump');


    return service;

}
module.exports = GasPumpService