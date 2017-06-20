var app = angular.module("app", ['ngDraggable']);

app.controller('editorController', ['$scope', 'tempService', function ($scope, tempService) {
    $scope.myCtrlID = 0;
    $scope.myList = [{ id: $scope.myCtrlID, title: 'welcome' }];
    $scope.styleField = '';
    $scope.ctrlTitle = "CONTROLS";
    $scope.formTitle = "BUILD YOUR FORM HERE";
    $scope.myControls = tempService.getBasicCtrl('basicCtrl');
    $scope.subQuestion = [{ id: 1, title: 'Sub Question 1' }];

    $scope.onDropComplete = function (data, evt) {

        var myTitle = data.Code;
        var myEvent = evt.event.type;
        $scope.myCtrlID++;

        if (myTitle == 'String') {
            $scope.myList.push({
                id: $scope.myCtrlID,
                title: "String",
                subQuestion: $scope.subQuestion
            });
        }
        else if (myTitle == 'Selection') {
            $scope.myList.push({
                id: $scope.myCtrlID,
                title: "Selection", subQuestion: $scope.subQuestion
            });
        }
        else if (myTitle == 'Multi Selection') {
            $scope.myList.push({
                id: $scope.myCtrlID,
                title: "Multi Selection", subQuestion: $scope.subQuestion
            });
        }
        else if (myTitle == 'Date') {
            $scope.myList.push({
                id: $scope.myCtrlID,
                title: "Date", subQuestion: $scope.subQuestion
            });
        }
        else if (myTitle == 'DateTime') {
            $scope.myList.push({
                id: $scope.myCtrlID,
                title: "DateTime", subQuestion: $scope.subQuestion
            });
        }
        else if (myTitle == 'Time') {
            $scope.myList.push({
                id: $scope.myCtrlID,
                title: "Time", subQuestion: $scope.subQuestion
            });
        }
        else if (myTitle == 'Integer') {
            $scope.myList.push({
                id: $scope.myCtrlID,
                title: "Integer", subQuestion: $scope.subQuestion
            });
        }
        else if (myTitle == 'Decimal') {
            $scope.myList.push({
                id: $scope.myCtrlID,
                title: "Decimal", subQuestion: $scope.subQuestion
            });
        }
        else if (myTitle == 'Section') {
            $scope.myList.push({
                id: $scope.myCtrlID,
                title: "Section", subQuestion: $scope.subQuestion
            });
        }
        else if (myTitle == 'Submit') {
            $scope.myList.push({
                id: $scope.myCtrlID,
                title: "Submit", subQuestion: $scope.subQuestion
            });
        }
    }

}]);

app.service('tempService', ['$http', '$log', function ($http, $log) {

    this.getBasicCtrl = function (ctrlType) {
        var myCtrl = [
                { "id": 1, "Code": "String", "Name": "Text Field", "Description": "This is a text Field that allows any charactor input", "DBType": "String", "UIType": "Text Field", "ConstraintForm": "BCF01", "Icon": "input" },
                { "id": 2, "Code": "Selection", "Name": "Single Selection", "Description": "This field allows you to have a single selection of predifined items", "DBType": "Selection", "UIType": "Combo Box", "ConstraintForm": "BCF02", "Icon": "reorder" },
                { "id": 3, "Code": "Multi Selection", "Name": "Multi Selection", "Description": "A multi selection field that open a selection window for multiple selections of predifined items", "DBType": "Multi Selection", "UIType": "Button", "ConstraintForm": "BCF03", "Icon": "list" },
                { "id": 4, "Code": "Date", "Name": "Date Field", "Description": "A date Range field that allows a user to select a date within a given range", "DBType": "Date", "UIType": "Picker", "ConstraintForm": "BCF04", "Icon": "event" },
                { "id": 5, "Code": "DateTime", "Name": "Date & Time Field", "Description": "A Range field that allows a user to select a Date & Time within a given range", "DBType": "DateTime", "UIType": "Picker", "ConstraintForm": "BCF05", "Icon": "timer" },
                { "id": 6, "Code": "Time", "Name": "Time Field", "Description": "A Range field that allows a user to select a Time within a given range", "DBType": "Time", "UIType": "Picker", "ConstraintForm": "BCF06", "Icon": "timer" },
                { "id": 7, "Code": "Integer", "Name": "Whole Numbers", "Description": "A text entry that only allows whole numbers", "DBType": "Integer", "UIType": "Text Field", "ConstraintForm": "BCF07", "Icon": "dialpad" },
                { "id": 8, "Code": "Decimal", "Name": "Decimal Numbers", "Description": "A text entry that only any numbers", "DBType": "Decimal", "UIType": "Text Field", "ConstraintForm": "BCF08", "Icon": "dialpad" },
                { "id": 9, "Code": "Section", "Name": "Section", "Description": "This is a field that allows you to store multiple fields under 1 section", "DBType": "Section", "UIType": "None", "ConstraintForm": "BCF09", "Icon": "reorder" },
                { "id": 10, "Code": "Submit", "Name": "Submit", "Description": "This is a field that allows you to store multiple fields under 1 section", "DBType": "Section", "UIType": "None", "ConstraintForm": "BCF10", "Icon": "check" }
        ];
       
        return myCtrl;

        ////to Use my REST
        //this.getTemplates = function (callback) {
        //    $http({
        //        url: 'http://mstgoservice.mstrack.com/GetControls?type=' + ctrlType,
        //        method: 'GET'
        //    }).then(function (response) {
        //        $log.log(response.data)
        //        callback(response.data);
        //    }, function (response) {
        //        $log.error("Error Occurred");
        //    });
        //}
    }
}]);