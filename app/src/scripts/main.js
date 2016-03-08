require.config({
	baseUrl:'scripts',
	paths:{
		'jquery':'../lib/jquery/jquery-1.12.1.min',
		'angular':'../lib/angular/angular.min',
		'domReady':'../lib/requirejs/domReady',
		'angular-cookies':'../lib/angular/angular-cookies.min',
		'angular-messages':'../lib/angular/angular-messages.min',
		'angular-message-format':'../lib/angular/angular-message-format.min',
		'angular-resource':'../lib/angular/angular-resource.min',
		'angular-sanitize':'../lib/angular/angular-sanitize.min',
		'angular-touch':'../lib/angular/angular-touch.min',
		'angular-animate':'../lib/angular/angular-animate.min',
		'angular-route':'../lib/angular/angular-route.min',
		'angular-ui-router':'../lib/angular-ui-router/angular-ui-router.min',
		'ui-bootstrap-custom':'../lib/angular-ui-bootstrap/ui-bootstrap-custom.min',
		'ui-bootstrap-custom-tpls':'../lib/angular-ui-bootstrap/ui-bootstrap-custom-tpls.min',
		'twitterbootstrap':'../lib/bootstrap/js/bootstrap.min',
		'underscore':'../lib/underscore/underscore-min',
		'app':'app',
		'router':'route',
		'bootstrap':'bootstrap',
		'common':'common',
		'templatefactory':'templateFactory',
		'controller-module':"controllers/module",
		'service-module':"services/module",
		'directive-module':"directives/module",
		'filter-module':"filters/module",
		"mainDirective":'directives/main-directive',
		"mainController":'controllers/main-controller',
		"mainService":'services/main-service',
		'mainFilter':"filters/main-filter",
		'commonControllers':"controllers/commonControllers",
		'commonFilters':'filters/commonFilters',
		'commonDirectives':'directives/commonDirectives',
		'parameterServices':'services/parameterServices'


	},
	shim:{
		'angular':{
			exports:'angular'
		},
		'angular-route':{
			deps:['angular'],
			exports:'angular-route'
		},
		'angular-ui-router':{
			deps:['angular'],
			exports:'angular-ui-router'
		},
		'angular-touch':{
			deps:['angular'],
			exports:'angular-touch'
		},
		'angular-animate':{
			deps:['angular'],
			exports:'angular-animate'
		},
		'angular-resource':{
			deps:['angular'],
			exports:'angular-resource'
		},
		'angular-messages':{
			deps:['angular'],
			exports:'angular-messages'
		},
		'angular-message-format':{
			deps:['angular'],
			exports:'angular-message-format'
		},
		'angular-cookies':{
			deps:['angular'],
			exports:'angular-cookies'
		},
		'angular-sanitize':{
			deps:['angular'],
			exports:'angular-sanitize'
		},
		'templatefactory':{
			deps:['angular'],
			exports:'templatefactory'
		},
		'twitterbootstrap':{
			deps:['jquery'],
			exports:'twitterbootstrap'
		},
		'ui-bootstrap-custom':{
			deps:['angular','twitterbootstrap','angular-touch','angular-animate','ui-bootstrap-custom-tpls'],
			exports:'ui-bootstrap-custom'
		},
		'ui-bootstrap-custom-tpls':{
			deps:['angular','angular-touch','angular-animate','twitterbootstrap'],
			exports:'ui-bootstrap-custom-tpls'
		}
	},
	deps:['bootstrap'],
	waitSeconds: 0,
	urlArgs:"bust="+(new Date()).getTime()
})