define(["app"],
    function(app){
        return app.run([
            '$rootScope',
            '$state',
            '$stateParams',
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
                $rootScope.serviceUrl="";
                var expireDate=new Date();
                var date=expireDate.getDate();
                expireDate.setDate(date+14);
                $rootScope.expireDate=expireDate;
            }
        ])
            .config(function($stateProvider, $urlRouterProvider, $locationProvider, $uiViewScrollProvider){
                //$locationProvider.html5Mode(true);


                //用于改变state时跳至顶部
                $uiViewScrollProvider.useAnchorScroll();
                // 默认进入先重定向
                $urlRouterProvider.otherwise('/home');
                $stateProvider.state('login',{
                    url:'/login',
                    templateUrl:'views/login.html'
                })
            })
    })