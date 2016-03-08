define(['angular','mainController','mainDirective','mainService','mainFilter'],function(angular){
	var autodashapp=angular.module('autodashapp',['ui.router','ui.bootstrap','ui.bootstrap.tpls','autodashapp.controllers','autodashapp.directives','autodashapp.services','autodashapp.filters']);
	return autodashapp;
})