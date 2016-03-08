define([
        'require',
        'angular',
        'domReady',
        'jquery',
        'angular-cookies',
        'angular-sanitize',
        'angular-messages',
        'angular-touch',
        'angular-resource',
        'angular-animate',
        'twitterbootstrap',
        'ui-bootstrap-custom',
        'ui-bootstrap-custom-tpls',
        'angular-ui-router',
        'app',
        'router',
        'common',
        'templatefactory',
        'underscore'

    ],
    function(require, angular, domReady) {
        'use strict';
        require(['domReady!'], function(document) {
            angular.bootstrap(document, ['autodashapp']);
        })
    })