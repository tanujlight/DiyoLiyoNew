(function() {
    'use strict';

    var controllerId = 'header';

    angular
            .module('app')
            .controller(controllerId, header);

    header.$inject = ['$scope'];
    function header($scope) {
        var vm = this;

        $scope.subcategories = [{name: 'Shirts'}, {name: 'Jeans'}, {name: 'Footwear'}, {name: 'Watches'}, {name: 'Accessories'}, {name: 'Miscellaneous'}];
        $scope.categories = [

            {
                name: 'Men',
                subcategories: $scope.subcategories
            },

            {
                name: 'Women',
                subcategories: $scope.subcategories
            },

            {
                name: 'Kids',
                subcategories: $scope.subcategories
            },

            {
                name: 'Appliances',
                subcategories: $scope.subcategories
            },

            {
                name: 'Electronics',
                subcategories: $scope.subcategories
            },

            {
                name: 'Offer Zone',
            },

            {
                name: 'New Arrivals',
            },

            {
                name: 'Miscellaneous',
                subcategories: $scope.subcategories
            }
        ]

        $scope.subcategory = function($event) {
            if($($event.target).parent('li').find('.sub-categories').hasClass('active')){
                $($event.target).parent('li').find('.sub-categories').removeClass('active')
           }else{
                $('header .bottom-header .sub-categories').removeClass('active');
                $($event.target).parent('li').find('.sub-categories').addClass('active')
           }
        }
    }
})();