"use strict";angular.module("fmsApp",["ui.router"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/"),a.state("index",{url:"/",templateUrl:"views/main.html",controller:"MainCtrl"}).state("contactos",{url:"/contactos",templateUrl:"views/contactus.html"}).state("nosotros",{url:"/nosotros",templateUrl:"views/aboutus.html"}).state("objetivos",{url:"/objetivos",templateUrl:"views/objectives.html"}).state("programas",{url:"/programas",templateUrl:"views/programs.html"}).state("galeria",{url:"/galeria",templateUrl:"views/gallery.html"}).state("noticias",{url:"/noticias",templateUrl:"views/news.html"}).state("preguntas",{url:"/preguntas",templateUrl:"views/faq.html"})}]),angular.module("fmsApp").controller("MainCtrl",["$scope",function(){}]);