var myModule = angular.module("DirectiveAngular",[]);

myModule.directive("hello",function(){
   return {
       restrict:'E',
       template: '<div>Hi everyone!</div>',
       replace: true
   };
});