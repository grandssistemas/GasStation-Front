GasTankService.$inject = ['GumgaRest', 'apiLocation']
function GasTankService(GumgaRest, apiLocation) {
    var service = new GumgaRest(apiLocation + '/api/gastank');


    return service;

}
module.exports = GasTankService;