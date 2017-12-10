(function() {
    'use strict';

    var controllerId = 'myCart';

    angular
            .module('app')
            .controller(controllerId, myCart);

    myCart.$inject = ['$scope'];
    function myCart($scope) {
        var vm = this;

        $('[data-toggle=confirmation]').confirmation({
		  rootSelector: '[data-toggle=confirmation]',
		  // other options
		});
    }
})();
