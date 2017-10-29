(function() {
    'use strict';

    var controllerId = 'products';

    angular
            .module('app')
            .controller(controllerId, products);

    products.$inject = ['$scope'];
    function products($scope) {
        var vm = this;

        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();   
        });

        vm.dummyJson = [];

        vm.dummyJsonCall = function() {
            for(var i =0; i< 20; i++) {
                vm.dummyJson.push(vm.viewShops = {
                    image:"app/content/img/products/p10.jpg",
                    name:"Vagga T-shirt"
                });
            }
        }
        vm.dummyJsonCall();
    }
})();
