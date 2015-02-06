/**
 * Created by Sasuke on 2015/2/6.
 */
function HelloAngular($scope) {
    $scope.greeting = {text: 'Hello'};

};var myModule = angular.module("DirectiveAngular",[]);

myModule.directive("hello",function(){
   return {
       restrict:'E',
       template: '<div>Hi everyone!</div>',
       replace: true
   };
});;var myModule = angular.module("HelloAngular", []);

myModule.controller("HelloAngular", ['$scope', function HelloAngular($scope) {
    $scope.greeting = {text: 'Hello'};
}]);