(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('MainController', MainController);

    MainController.$inject = [];
    
    /* @ngInject */
    function MainController (){
        var vm = this;
        vm.title = 'MainController';
        vm.income = [{}]; // all incomes with descriptions
        vm.expenses = [{}]; // all expenses with descriptions
        vm.totalIncome = 0; 
        vm.totalExpense = 0;
        vm.leftOvers = 0;


        activate();

        ////////////////

        function activate() {
            }
        // adding a new income item and summing it up to the total
        vm.addItemInc = function() {
            vm.income.push({
                'description' : vm.descriptionInc,
                'amount' : vm.amountInc
            });
            vm.totalIncome += vm.amountInc;
            vm.leftOvers += vm.amountInc;
        }
        // adding a new expense item and summing it up to the total
        vm.addItemExp = function() {
            vm.expenses.push({
                'description' : vm.descriptionExp,
                'amount' : vm.amountExp
            });
            vm.totalExpense += vm.amountExp;
            vm.leftOvers -= vm.amountExp;
        }
    }
})();
