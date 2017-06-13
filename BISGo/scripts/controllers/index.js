var app = angular.module("app", ['ngDraggable']);

app.controller('indexController', ['$scope', 'tempService', function ($scope, tempService) {
    $scope.myCtrlID = 0;
    $scope.myList = [{ id: $scope.myCtrlID, title: 'welcome' }];
    $scope.styleField = '';
    $scope.ctrlTitle = "CONTROLS";
    $scope.formTitle = "BUILD YOUR FORM HERE";
    $scope.myControls = tempService.getBasicCtrl('basicCtrl');

    $scope.onDropComplete = function (data, evt) {

        var myTitle = data.Code;
        var myEvent = evt.event.type;
        $scope.myCtrlID++;

        if (myTitle == 'String') {
            $scope.myList.push({
                id: $scope.myCtrlID,
                title: "String",

            });
        }
        else if (myTitle == 'Selection') {
            $scope.myList.push({
                id: $scope.myCtrlID,
                title: "Selection"
            });
        }
        else if (myTitle == 'Multi Selection') {
            $scope.myList.push({
                id: $scope.myCtrlID,
                title: "Multi Selection"
            });
        }
        else if (myTitle == 'Date') {
            $scope.myList.push({
                id: $scope.myCtrlID,
                title: "Date"
            });
        }
        else if (myTitle == 'DateTime') {
            $scope.myList.push({
                id: $scope.myCtrlID,
                title: "DateTime"
            });
        }
        else if (myTitle == 'Time') {
            $scope.myList.push({
                id: $scope.myCtrlID,
                title: "Time"
            });
        }
        else if (myTitle == 'Integer') {
            $scope.myList.push({
                id: $scope.myCtrlID,
                title: "Integer"
            });
        }
        else if (myTitle == 'Decimal') {
            $scope.myList.push({
                id: $scope.myCtrlID,
                title: "Decimal"
            });
        }
        else if (myTitle == 'Section') {
            $scope.myList.push({
                id: $scope.myCtrlID,
                title: "Section"
            });
        }
        else if (myTitle == 'Submit') {
            $scope.myList.push({
                id: $scope.myCtrlID,
                title: "Submit"
            });
        }
    }

}]);

app.service('tempService', ['$http', '$log', function ($http, $log) {

    this.getBasicCtrl = function (ctrlType) {
        var myCtrl = [
                {"id":1,"Code":"String","Name":"Text Field","Description":"This is a text Field that allows any charactor input","DBType":"String","UIType":"Text Field","ConstraintForm":"BCF01", "SubControl":"array"},
                {"id":2,"Code":"Selection","Name":"Single Selection","Description":"This field allows you to have a single selection of predifined items","DBType":"Selection","UIType":"Combo Box","ConstraintForm":"BCF02"},
                {"id":3,"Code":"Multi Selection","Name":"Multi Selection","Description":"A multi selection field that open a selection window for multiple selections of predifined items","DBType":"Multi Selection","UIType":"Button","ConstraintForm":"BCF03"},
                {"id":4,"Code":"Date","Name":"Date Field","Description":"A date Range field that allows a user to select a date within a given range","DBType":"Date","UIType":"Picker","ConstraintForm":"BCF04"},
                {"id":5,"Code":"DateTime","Name":"Date & Time Field","Description":"A Range field that allows a user to select a Date & Time within a given range","DBType":"DateTime","UIType":"Picker","ConstraintForm":"BCF05"},
                {"id":6,"Code":"Time","Name":"Time Field","Description":"A Range field that allows a user to select a Time within a given range","DBType":"Time","UIType":"Picker","ConstraintForm":"BCF06"},
                {"id":7,"Code":"Integer","Name":"Whole Numbers","Description":"A text entry that only allows whole numbers","DBType":"Integer","UIType":"Text Field","ConstraintForm":"BCF07"},
                {"id":8,"Code":"Decimal","Name":"Decimal Numbers","Description":"A text entry that only any numbers","DBType":"Decimal","UIType":"Text Field","ConstraintForm":"BCF08"},
                {"id":9,"Code":"Section","Name":"Section","Description":"This is a field that allows you to store multiple fields under 1 section","DBType":"Section","UIType":"None","ConstraintForm":"BCF09"}
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