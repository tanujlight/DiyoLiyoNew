(function() {
    'use strict';

    var controllerId = 'home';

    angular
            .module('app')
            .controller(controllerId, home);

    home.$inject = ['$scope', '$state', '$timeout'];
    function home($scope, $state, $timeout) {
        var vm = this;

        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();   
        });

        // owl slider function  
        vm.owlSliderCall = function() {
            console.log('slider start');
            for (var i=0; i<1; i++) {
                $("#owl-example" + i).owlCarousel({
                    itemsDesktop: [1499, 6],
                    itemsDesktopSmall: [1199, 6],
                    itemsTablet: [899, 4],
                    itemsMobile: [599, 2],
                    navigation: true,
                    navigationText: ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>', '<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
                });
                $("#owl-example1" + i).owlCarousel({
                    itemsDesktop: [1499, 6],
                    itemsDesktopSmall: [1199, 6],
                    itemsTablet: [899, 4],
                    itemsMobile: [599, 2],
                    navigation: true,
                    navigationText: ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>', '<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
                });
                $("#owl-example2" + i).owlCarousel({
                    itemsDesktop: [1499, 6],
                    itemsDesktopSmall: [1199, 6],
                    itemsTablet: [899, 4],
                    itemsMobile: [599, 2],
                    navigation: true,
                    navigationText: ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>', '<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
                });
                $("#owl-example3" + i).owlCarousel({
                    itemsDesktop: [1499, 6],
                    itemsDesktopSmall: [1199, 6],
                    itemsTablet: [899, 4],
                    itemsMobile: [599, 2],
                    navigation: true,
                    navigationText: ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>', '<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
                });
                $("#owl-example4" + i).owlCarousel({
                    itemsDesktop: [1499, 6],
                    itemsDesktopSmall: [1199, 6],
                    itemsTablet: [899, 4],
                    itemsMobile: [599, 2],
                    navigation: true,
                    navigationText: ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>', '<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
                });
                $("#offer" + i).owlCarousel({
                    itemsDesktop: [1499, 6],
                    itemsDesktopSmall: [1199, 6],
                    itemsTablet: [899, 4],
                    itemsMobile: [599, 2],
                    navigation: true,
                    navigationText: ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>', '<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
                });
                $("#newarrival" + i).owlCarousel({
                    itemsDesktop: [1499, 6],
                    itemsDesktopSmall: [1199, 6],
                    itemsTablet: [899, 4],
                    itemsMobile: [599, 2],
                    navigation: true,
                    navigationText: ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>', '<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
                });
            }
        }
        $timeout(function(){vm.owlSliderCall()}, 1000);

        // dummy json
        vm.dummyJson = [];


        vm.dummyJsonCall = function() {
            for(var i=0; i<1; i++) {
                vm.dummyJson.push(vm.firstJson = {
                    name : 'KITCHEN APPLIANCES',
                    name1 : 'HOME APPLIANCES',
                    name2: 'WOMEN’S FASHION',
                    name3: 'MEN’S FASHION',
                    name4: 'KID’S FASHION',
                    shop : []
                })
            }
        }
        vm.dummyJsonCall();

        vm.addShopCall = function() {
            var arraylg = vm.dummyJson.length;

            for(var i=0; i<arraylg; i++) {
                for (var j = 0; j<10;j++) {
                   vm.dummyJson[i].shop.push(vm.secondJson = {
                        name: 'Hot Case',
                        name1: 'Electrice Iron',
                        name2: 'Salwar Kurti',
                        name3: 'Vagga T-shirt',
                        name4: 'Galaxy Kids Jeans',
                        new: 'Cindrella Ladies Raincoat',
                        offer: 'Samsung Galaxy A5',
                        image: 'app/content/img/products/p1.jpg',
                        image1: 'app/content/img/products/p9.jpg',
                        image2: 'app/content/img/products/p8.jpg',
                        image3: 'app/content/img/products/p10.jpg',
                        image4: 'app/content/img/products/p11.jpg',
                        offerImage: 'app/content/img/products/p14.jpg',
                        newImage: 'app/content/img/products/p13.jpg'
                   })
                }
            }

        }
        vm.addShopCall();

        // open the product page
        $scope.viewProduct = function(){
            $state.go("product");
        }
    }
})();
