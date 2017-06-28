var app = angular.module("app", ['ngDraggable']);

app.controller('newDesignController', ['$scope', 'tempService', function ($scope, tempService) {
    $scope.myCtrlID = 0;
    $scope.myList = [{ id: $scope.myCtrlID, title: 'welcome' }];

    $scope.onDropComplete = function (data, evt) {
        var ctrlName = data.Code;
        $scope.myCtrlID++;
        var mainQuestions = [];
        var subQuestions = [];
        var secondsubQuestions = [];
        var subQuestionCount = 0;
        var secondsubQuestionCount = 0;
        if (ctrlName == 'String') {
            subQuestionCount++;
            secondsubQuestionCount++;
            $scope.myList.push({
                id: $scope.myCtrlID,
                title: "String",
                eventType: evt.event.type,
                ismainQuestion: 1,
                issubQuestions: 0,
                issecondsubQuestions: 0,
                subQuestionCount: subQuestionCount,
                secondsubQuestionCount: secondsubQuestionCount,
                mainQuestions: mainQuestions.concat(ctrlName),
                mainQuestions: mainQuestions.concat(data),
                subQuestions: subQuestions.concat(ctrlName),
                secondsubQuestions: secondsubQuestions.concat(ctrlName),
                items:[{
                    "id":1,
                    "ismainQuestions": 1,
                    "issubQuestions": 0,
                    "issecondsubQuestions": 0,
                    "Code": "String",
                    "Name": "Text Field",
                    "Description": "This is a text Field that allows any charactor input", 
                    "DBType": "String", 
                    "UIType": "Text Field", 
                    "ConstraintForm": "BCF01", 
                    "Icon": "input"
                }]
            });
        }
        else if (ctrlName == 'Selection') {
            $scope.myList.push({
                id: $scope.myCtrlID,
                title: "Selection",
                eventType: evt.event.type,
                mainQuestions: mainQuestions.concat(ctrlName),
                mainQuestions: mainQuestions.concat(data),
                subQuestions: subQuestions.concat(ctrlName),
                secondsubQuestions: secondsubQuestions.concat(ctrlName),
                items: [{
                    "id": 1,
                    "ismainQuestions": 1,
                    "issubQuestions": 0,
                    "issecondsubQuestions": 0,
                    "Code": "Selection",
                    "Name": "Text Field",
                    "Description": "This is a text Field that allows any charactor input",
                    "DBType": "String",
                    "UIType": "Text Field",
                    "ConstraintForm": "BCF01",
                    "Icon": "input"
                }]
            });
        }
        else if (ctrlName == 'Multi Selection') {
            $scope.myList.push({
                id: $scope.myCtrlID,
                title: "Multi Selection",
                eventType: evt.event.type,
                mainQuestions: mainQuestions.concat(ctrlName),
                mainQuestions: mainQuestions.concat(data),
                subQuestions: subQuestions.concat(ctrlName),
                secondsubQuestions: secondsubQuestions.concat(ctrlName),
                items: [{
                    "id": 1,
                    "ismainQuestions": 1,
                    "issubQuestions": 0,
                    "issecondsubQuestions": 0,
                    "Code": "Multi Selection",
                    "Name": "Text Field",
                    "Description": "This is a text Field that allows any charactor input",
                    "DBType": "String",
                    "UIType": "Text Field",
                    "ConstraintForm": "BCF01",
                    "Icon": "input"
                }]
            });
        }
        else if (ctrlName == 'Date') {
            $scope.myList.push({
                id: $scope.myCtrlID,
                title: "Date",
                mainQuestions: mainQuestions.concat(ctrlName),
                mainQuestions: mainQuestions.concat(data),
                subQuestions: subQuestions.concat(ctrlName),
                secondsubQuestions: secondsubQuestions.concat(ctrlName),
                items: [{
                    "id": 1,
                    "ismainQuestions": 1,
                    "issubQuestions": 0,
                    "issecondsubQuestions": 0,
                    "Code": "Date",
                    "Name": "Text Field",
                    "Description": "This is a text Field that allows any charactor input",
                    "DBType": "String",
                    "UIType": "Text Field",
                    "ConstraintForm": "BCF01",
                    "Icon": "input"
                }]
            });
        }
        else if (ctrlName == 'DateTime') {
            $scope.myList.push({
                id: $scope.myCtrlID,
                title: "DateTime",
                eventType: evt.event.type,
                mainQuestions: mainQuestions.concat(ctrlName),
                mainQuestions: mainQuestions.concat(data),
                subQuestions: subQuestions.concat(ctrlName),
                secondsubQuestions: secondsubQuestions.concat(ctrlName),
                items: [{
                    "id": 1,
                    "ismainQuestions": 1,
                    "issubQuestions": 0,
                    "issecondsubQuestions": 0,
                    "Code": "DateTime",
                    "Name": "Text Field",
                    "Description": "This is a text Field that allows any charactor input",
                    "DBType": "String",
                    "UIType": "Text Field",
                    "ConstraintForm": "BCF01",
                    "Icon": "input"
                }]
            });
        }
        else if (ctrlName == 'Time') {
            $scope.myList.push({
                id: $scope.myCtrlID,
                title: "Time",
                eventType: evt.event.type,
                mainQuestions: mainQuestions.concat(ctrlName),
                mainQuestions: mainQuestions.concat(data),
                subQuestions: subQuestions.concat(ctrlName),
                secondsubQuestions: secondsubQuestions.concat(ctrlName),
                items: [{
                    "id": 1,
                    "ismainQuestions": 1,
                    "issubQuestions": 0,
                    "issecondsubQuestions": 0,
                    "Code": "Time",
                    "Name": "Text Field",
                    "Description": "This is a text Field that allows any charactor input",
                    "DBType": "String",
                    "UIType": "Text Field",
                    "ConstraintForm": "BCF01",
                    "Icon": "input"
                }]
            });
        }
        else if (ctrlName == 'Integer') {
            $scope.myList.push({
                id: $scope.myCtrlID,
                title: "Integer",
                eventType: evt.event.type,
                mainQuestions: mainQuestions.concat(ctrlName),
                mainQuestions: mainQuestions.concat(data),
                subQuestions: subQuestions.concat(ctrlName),
                secondsubQuestions: secondsubQuestions.concat(ctrlName),
                items: [{
                    "id": 1,
                    "ismainQuestions": 1,
                    "issubQuestions": 0,
                    "issecondsubQuestions": 0,
                    "Code": "Integer",
                    "Name": "Text Field",
                    "Description": "This is a text Field that allows any charactor input",
                    "DBType": "String",
                    "UIType": "Text Field",
                    "ConstraintForm": "BCF01",
                    "Icon": "input"
                }]
            });
        }
        else if (ctrlName == 'Decimal') {
            $scope.myList.push({
                id: $scope.myCtrlID,
                title: "Decimal",
                eventType: evt.event.type,
                mainQuestions: mainQuestions.concat(ctrlName),
                mainQuestions: mainQuestions.concat(data),
                subQuestions: subQuestions.concat(ctrlName),
                secondsubQuestions: secondsubQuestions.concat(ctrlName),
                items: [{
                    "id": 1,
                    "ismainQuestions": 1,
                    "issubQuestions": 0,
                    "issecondsubQuestions": 0,
                    "Code": "Decimal",
                    "Name": "Text Field",
                    "Description": "This is a text Field that allows any charactor input",
                    "DBType": "String",
                    "UIType": "Text Field",
                    "ConstraintForm": "BCF01",
                    "Icon": "input"
                }]
                
            });
        }
        else if (ctrlName == 'Section') {
            $scope.myList.push({
                id: $scope.myCtrlID,
                title: "Section",
                eventType: evt.event.type,
                mainQuestions: mainQuestions.concat(ctrlName),
                mainQuestions: mainQuestions.concat(data),
                subQuestions: subQuestions.concat(ctrlName),
                secondsubQuestions: secondsubQuestions.concat(ctrlName),
                items: [{
                    "id": 1,
                    "ismainQuestions": 1,
                    "issubQuestions": 0,
                    "issecondsubQuestions": 0,
                    "Code": "Section",
                    "Name": "Text Field",
                    "Description": "This is a text Field that allows any charactor input",
                    "DBType": "String",
                    "UIType": "Text Field",
                    "ConstraintForm": "BCF01",
                    "Icon": "input"
                }]
            });
        }
        else if (ctrlName == 'Submit') {
            $scope.myList.push({
                id: $scope.myCtrlID,
                title: "Submit",
                eventType: evt.event.type,
                mainQuestions: mainQuestions.concat(ctrlName),
                mainQuestions: mainQuestions.concat(data),
                subQuestions: subQuestions.concat(ctrlName),
                secondsubQuestions: secondsubQuestions.concat(ctrlName),
                items: [{
                    "id": 1,
                    "ismainQuestions": 1,
                    "issubQuestions": 0,
                    "issecondsubQuestions": 0,
                    "Code": "Submit",
                    "Name": "Text Field",
                    "Description": "This is a text Field that allows any charactor input",
                    "DBType": "String",
                    "UIType": "Text Field",
                    "ConstraintForm": "BCF01",
                    "Icon": "input"
                }]
            });
        }
    }

}]);