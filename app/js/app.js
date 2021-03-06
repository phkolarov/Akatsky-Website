    var app = angular.module('akatsky', ['ngResource','ngRoute','ui.router','base64', 'pascalprecht.translate']);

app.constant('baseServiceURL', 'https://api.parse.com/1/');
app.constant('applicationId', 'CnBPycH9QIjp4vX4GOlGfK2a0gGy4xerVBowPZfk');
app.constant('restApiKEY', 'Ad8iKkyjUj4vcMktXzjDqiQlIk18YCLvubwD8tML');
app.constant('header', '������');
app.constant('baseThumbnail', 'data:image/jpg;base64,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')

app.config(['$routeProvider','$translateProvider', function ($routeProvider,$translateProvider) {


    $translateProvider.translations('en_US', {
        "TITLE"     : "How to use",
        "HEADER"    : "You can translate texts by using a ��.",
        "SUBHEADER" : "And if you don't like filters, you can use a directive.",
        "HTML_KEYS" : "If you don't like an empty elements, you can write a key for the translation as an inner HTML of the directive.",
        "DATA_TO_FILTER"    : "Your translations might also contain any static ({{staticValue}}) or random ({{randomValue}}) values, which are taken directly from the model.",
        "DATA_TO_DIRECTIVE" : "And it's no matter if you use filter or directive: static is still {{staticValue}} and random is still {{randomValue}}.",
        "RAW_TO_FILTER"     : "In case you want to pass a {{type}} data to the filter, you have only to pass it as a filter parameter.",
        "RAW_TO_DIRECTIVE"  : "This trick also works for {{type}} with a small mods.",
        "SERVICE"        : "Of course, you can translate your strings directly in the js code by using a $translate service.",
        "SERVICE_PARAMS" : "And you are still able to pass params to the texts. Static = {{staticValue}}, random = {{randomValue}}."
    });

    // Adding a translation table for the Russian language
    $translateProvider.translations('bg_BG', {
        "TITLE"     : "��� ������������",
        "HEADER"    : "�� ������ ���������� ������ ��� ������ �������.",
        "SUBHEADER" : "� ���� ��� �� �������� �������, �� ������ ��������������� ����������.",
        "HTML_KEYS" : "���� ��� �� �������� ������ ��������, �� ������ �������� ���� ��� �������� � ��� ���������� HTML ���������.",
        "DATA_TO_FILTER"    : "���� �������� ����� ����� ��������� ����� ��������� ({{staticValue}}) ��� ��������� ({{randomValue}}) ��������, ������� ������� ����� �� ������.",
        "DATA_TO_DIRECTIVE" : "� ���������� �� ����� ����������� �� �� ������ ��� ���������: ����������� �������� �� �������� {{staticValue}} � ��������� - {{randomValue}}.",
        "RAW_TO_FILTER"     : "���� �� ������ �������� \"�����\" ({{type}}) ������ �������, ��� ����� ���� ����� �������� �� ������� � �������� ����������.",
        "RAW_TO_DIRECTIVE"  : "��� ����� �������� � ��� �������� ({{type}}) � ���������� �������������.",
        "SERVICE"        : "�������, �� ������ ���������� ���� ������ ����� � js ���� ��� ������ ������� $translate.",
        "SERVICE_PARAMS" : "� �� ��� ��� ������ ���������� ��������� � ������. ����������� �������� = {{staticValue}}, ��������� = {{randomValue}}."
    });

    // Tell the module what language to use by default
    $translateProvider.preferredLanguage('bg_BG');


    $routeProvider.when('/', {
        templateUrl: 'partials/pages/homepage.html',
        controller: 'HomePageController'
    });
    $routeProvider.when('/forUs', {
        templateUrl: 'partials/pages/homepage.html',
        controller: 'HomePageController'
    });
    $routeProvider.when('/neWs', {
        templateUrl: 'partials/pages/homepage.html',
        controller: 'HomePageController'
    });

    $routeProvider.when('/neWs/:newsId', {
        templateUrl: 'partials/pages/article.html',
        controller: 'CurrentArticleController'
    });

    $routeProvider.when('/videOs', {
        templateUrl: 'partials/pages/homepage.html',
        controller: 'HomePageController'
    });
    $routeProvider.when('/forUm', {
        templateUrl: 'partials/pages/homepage.html',
        controller: 'HomePageController'
    });
    $routeProvider.when('/contacTs', {
        templateUrl: 'partials/pages/homepage.html',
        controller: 'HomePageController'
    });

    //$routeProvider.otherwise({
    //    redirectTo: '/'
    //})

}]);

