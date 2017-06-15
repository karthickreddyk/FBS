(function () {

    var questionController = function ($scope) {
        $scope.message = "Hello from questionController";

        $scope.Question = [];

        $scope.mainQuestion = [
            "Main Question 1",
            "Main Question 1",
            "Main Question 1",
            "Main Question 1",
            "Main Question 1"
        ];


        $scope.fetchSubQuestion = function () {
            $scope.books = [
                { ID: 1, Question: "Sub Question 1", Desc: "Sub Question Desc 1"},
                { ID: 2, Question: "Sub Question 2", Desc: "Sub Question Desc 2"},
                { ID: 3, Question: "Sub Question 3", Desc: "Sub Question Desc 3"},
                { ID: 4, Question: "Sub Question 4", Desc: "Sub Question Desc 4"},
                { ID: 5, Question: "Sub Question 5", Desc: "Sub Question Desc 5"}
            ];
        }
    }

    angular.module('myApp').controller('questionController', ["$scope", questionController]);

}());