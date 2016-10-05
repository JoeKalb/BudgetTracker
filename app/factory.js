
(function() {
    'use strict';
    angular
        .module('myApp')
        .factory('budgetFactory', budgetFactory);
    budgetFactory.$inject = [''];
    /* @ngInject */
    
    function budgetFactory() {
        var service = {
            summing: summing
        };
        return service;
        ////////////////
        // add a calculation function here
        
    }
})();
