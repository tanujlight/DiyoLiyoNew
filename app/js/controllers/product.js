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
            // Instantiate EasyZoom instances
            var $easyzoom = $('.easyzoom').easyZoom();

            // Setup thumbnails example
            var api1 = $easyzoom.filter('.easyzoom--with-thumbnails').data('easyZoom');

            $('.thumbnails').on('click', 'a', function(e) {
                var $this = $(this);

                e.preventDefault();

                // Use EasyZoom's `swap` method
                api1.swap($this.data('standard'), $this.attr('href'));
            });
        })
    }
})();
