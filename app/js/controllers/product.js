(function() {
    'use strict';

    var controllerId = 'product';

    angular
            .module('app')
            .controller(controllerId, product);

    product.$inject = ['$scope'];
    function product($scope) {
        var vm = this;

        $(document).ready(function() {
            
            // products-images changes 
            $('.product-page .product-images li a').click(function() {
                $('.product-page .product-images li').removeClass('active');
                $(this).parents('li').addClass('active');
                var imgSrc = $(this).find('img').attr("src");
                var targetValue = $(this).parents('.product-image-container').find('.product-image a img');
                targetValue.attr('src', imgSrc);
            })

            $('.product-page .product-image a').click(function() {
                var imgSrc = $(this).find('img').attr("src");
                var targetValue = $(this).parents('.product-page').find('#product-big-image figure img');
                targetValue.attr('src', imgSrc);
            })
        })
    }
})();
