var Eval=angular.module('FACTORY',[]);
Eval.factory('EvaluatorFactory', function ($state) {
    return {

        authenticate: function (param) {

           if (param.id == "sai" && param.password == "sai") {
                param.logval = false;
                $state.go('one');

            } else {

                param.logval = true;

            }
        }
    }
});