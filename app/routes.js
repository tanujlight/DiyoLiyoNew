(function() {
    'use strict';
    var app = angular.module('app');

    app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', configureState]);

    function configureState($stateProvider, $urlRouterProvider, $locationProvider) {
        // $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('');
        
        $stateProvider

        // .state("login", {
        //     url: '/login',
        //     views: {
        //         "content@": {
        //             templateUrl: 'app/templates/login.html',
        //             controller: 'login'
        //         },

        //         "header@": {
        //             templateUrl: 'app/templates/header.html',
        //         },

        //         "footer@": {
        //             templateUrl: 'app/templates/footer.html',
        //         }
        //     }
        // })
        // .state("register", {
        //     url: '/register',
        //     views: {
        //         "content@": {
        //             templateUrl: 'app/templates/register.html',
        //             controller: 'register'
        //         },

        //         "header@": {
        //             templateUrl: 'app/templates/header.html',
        //         },

        //         "footer@": {
        //             templateUrl: 'app/templates/footer.html',
        //         }
        //     }
        // })

        // .state("update-profile", {
        //     url: '/update-profile',
        //     views: {
        //         "content@": {
        //             templateUrl: 'app/templates/update-profile.html',
        //             controller: 'updateprofile'
        //         },

        //         "header@": {
        //             templateUrl: 'app/templates/header.html',
        //         },

        //         "footer@": {
        //             templateUrl: 'app/templates/footer.html',
        //         }
        //     }
        // })

        // .state("forgot-password", {
        //     url: '/forgot-password',
        //     views: {
        //         "content@": {
        //             templateUrl: 'app/templates/forgot-password.html',
        //             controller: 'forgotpassword'
        //         },

        //         "header@": {
        //             templateUrl: 'app/templates/header.html',
        //         },

        //         "footer@": {
        //             templateUrl: 'app/templates/footer.html',
        //         }
        //     }
        // })

        // .state("change-password", {
        //     url: '/change-password',
        //     views: {
        //         "content@": {
        //             templateUrl: 'app/templates/change-password.html',
        //             controller: 'changepassword'
        //         },

        //         "header@": {
        //             templateUrl: 'app/templates/header.html',
        //         },

        //         "footer@": {
        //             templateUrl: 'app/templates/footer.html',
        //         }
        //     }
        // })
        // .state("update-password", {
        //     url: '/updatepassword',
        //     views: {
        //         "content@": {
        //             templateUrl: 'app/templates/update-password.html',
        //             controller: 'updatepassword'
        //         },

        //         "header@": {
        //             templateUrl: 'app/templates/header.html',
        //         },

        //         "footer@": {
        //             templateUrl: 'app/templates/footer.html',
        //         }
        //     }
        // })

        .state("home", {
            url: '/home',
            views: {
                "content@": {
                    templateUrl: 'app/templates/home.html',
                    controller: 'home',
                    controllerAs: 'vm'
                },

                "header@": {
                    templateUrl: 'app/templates/header.html',
                },

                "footer@": {
                    templateUrl: 'app/templates/footer.html',
                }
            }
        })

        .state("product", {
            url: '/product',
            views: {
                "content@": {
                    templateUrl: 'app/templates/product.html',
                },

                "header@": {
                    templateUrl: 'app/templates/header.html',
                },

                "footer@": {
                    templateUrl: 'app/templates/footer.html',
                }
            }
        })
        // .state("search-results", {
        //     url: '/search-results',
        //     views: {
        //         "content@": {
        //             templateUrl: 'app/templates/search-results.html',
        //             controller: 'search'
        //         },

        //         "header@": {
        //             templateUrl: 'app/templates/header.html',
        //         },

        //         "footer@": {
        //             templateUrl: 'app/templates/footer.html',
        //         }
        //     }
        // })

        // .state("contact", {
        //     url: '/contact',
        //     views: {
        //         "content@": {
        //             templateUrl: 'app/templates/contact.html',
        //             controller: 'contact'
        //         },

        //         "header@": {
        //             templateUrl: 'app/templates/header.html',
        //         },

        //         "footer@": {
        //             templateUrl: 'app/templates/footer.html',
        //         }
        //     }
        // })

        // .state("privacy-policy", {
        //     url: '/privacy-policy',
        //     views: {
        //         "content@": {
        //             templateUrl: 'app/templates/privacy-policy.html',
        //         },

        //         "header@": {
        //             templateUrl: 'app/templates/header.html',
        //         },

        //         "footer@": {
        //             templateUrl: 'app/templates/footer.html',
        //         }
        //     }
        // })

        // .state("about", {
        //     url: '/about',
        //     views: {
        //         "content@": {
        //             templateUrl: 'app/templates/about.html',
        //         },

        //         "header@": {
        //             templateUrl: 'app/templates/header.html',
        //         },

        //         "footer@": {
        //             templateUrl: 'app/templates/footer.html',
        //         }
        //     }
        // })

        // .state("terms-and-conditions", {
        //     url: '/terms-and-conditions',
        //     views: {
        //         "content@": {
        //             templateUrl: 'app/templates/terms-and-conditions.html',
        //         },

        //         "header@": {
        //             templateUrl: 'app/templates/header.html',
        //         },

        //         "footer@": {
        //             templateUrl: 'app/templates/footer.html',
        //         }
        //     }
        // })

        $urlRouterProvider.otherwise('/home');
    }
})();
