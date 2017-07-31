var app = angular.module("app", ['ngDraggable']);

app.controller('indexController', ['$scope', 'tempService', function ($scope, tempService) {

    $scope.myCtrlID = 0;
    $scope.myList = [];
    $scope.styleField = '';
    $scope.ctrlTitle = "CONTROLS";
    $scope.formTitle = "BUILD YOUR FORM HERE";
    $scope.myControls = [
                { "id": 1, "Code": "text", "Name": "Text Field", "Icon": "input", "type": "input" },
                { "id": 2, "Code": "Date", "Name": "Date Field", "Icon": "event", "type": "input" },
                { "id": 3, "Code": "Time", "Name": "Time Field", "Icon": "timer", "type": "input" },
                { "id": 4, "Code": "number", "Name": "Whole Numbers", "Icon": "dialpad", "type": "input" },
                { "id": 5, "Code": "Selection", "Name": "Single Selection", "Icon": "reorder", "type": "Selection" },
                { "id": 6, "Code": "Multi Selection", "Name": "Multi Selection", "Icon": "list", "type": "MultiSelection" },
                { "id": 7, "Code": "Submit", "Name": "Submit", "Icon": "check", "type": "Submit" }
    ];
    $scope.onDropComplete = function (data, evt, obj) {
        var myTitle = data.Code;
        var type = data.type;
        var myEvent = evt.event.type;
        $scope.myCtrlID++;
        var target = evt.event.target.id;
        var targetName = evt.event.target.getAttribute('name');
        var targetValue = evt.event.target.getAttribute('value');
        var targetArray = target.split("-");
        var mainId = targetArray[1];
        var _tmp = $scope.myList.filter(x => x.id == mainId);
        if (_tmp.length > 0) {
            var arrayName = "Sub";
            if (targetArray.length > 2) {
                var _tmpSub = _tmp[0][arrayName].filter(x => x.id == targetArray[2]);

                    if (_tmpSub.length > 0) {
                        if (_tmpSub[0].Sub.length >= 2) {
                            alert("User exceeded the limit!");
                        }
                        else {                        
                                _tmpSub[0].Sub.push({
                                    id: $scope.myCtrlID,
                                    title: myTitle,
                                    type: type
                                });
                       }
                    }
            }
            else {
                    if (_tmp[0].Sub.length >= 3) {
                        alert("User exceeded the limit!");
                    }
                    else {                     
                            _tmp[0].Sub.push({
                                id: $scope.myCtrlID,
                                title: myTitle,
                                Sub: [],
                                type: type
                            });
                    }               
            }
        }
        else {           
                $scope.myList.push({
                    id: $scope.myCtrlID,
                    title: myTitle,
                    Sub: [],
                    type:type
                });
        }
    }

    $scope.DeleteCtrl = function (mainID, FirstSubID, SecondSubID) {
        if (mainID != undefined && FirstSubID == undefined && SecondSubID == undefined) {
            var _tmp = $scope.myList.filter(x => x.id == mainID);
            var index = $scope.myList.indexOf(_tmp[0]);
            $scope.myList.splice(index, 1);
        }
        else if (mainID != undefined && FirstSubID != undefined && SecondSubID == undefined) {
            var _tmp = $scope.myList.filter(x => x.id == mainID);
            if (_tmp[0].radioType != undefined) {
                var arrName = _tmp[0].radioType;
                var _SubTmp = _tmp[0][arrName].filter(x => x.id == FirstSubID);
                var index = _tmp[0][arrName].indexOf(_SubTmp[0]);
                _tmp[0][arrName].splice(index, 1);
            }
            else {

                var _SubTmp = _tmp[0].Sub.filter(x => x.id == FirstSubID);
                var index = _tmp[0].Sub.indexOf(_SubTmp[0]);
                _tmp[0].Sub.splice(index, 1);
            }
        }
        else if (mainID != undefined && FirstSubID != undefined && SecondSubID != undefined) {
            var _tmp = $scope.myList.filter(x => x.id == mainID);
            if (_tmp[0].radioType != undefined) {
                var arrName = _tmp[0].radioType;
                var _SubTmp = _tmp[0][arrName].filter(x => x.id == FirstSubID);
                if (_SubTmp[0].radioType != undefined) {
                    var _SecondSub = _SubTmp[0][_SubTmp[0].radioType].filter(x => x.id == SecondSubID);
                    var index = _SubTmp[0][_SubTmp[0].radioType].indexOf(_SecondSub[0]);
                    _SubTmp[0][_SubTmp[0].radioType].splice(index, 1);
                }
                else {
                    var _SecondSub = _SubTmp[0].Sub.filter(x => x.id == SecondSubID);
                    var index = _SubTmp[0].Sub.indexOf(_SecondSub[0]);
                    _SubTmp[0].Sub.splice(index, 1);
                }
            }
            else {
                var _SubTmp = _tmp[0].Sub.filter(x => x.id == FirstSubID);
                if (_SubTmp[0].radioType != undefined) {
                    var _SecondSub = _SubTmp[0][_SubTmp[0].radioType].filter(x => x.id == SecondSubID);
                    var index = _SubTmp[0][_SubTmp[0].radioType].indexOf(_SecondSub[0]);
                    _SubTmp[0][_SubTmp[0].radioType].splice(index, 1);
                }
                else {
                    var _SecondSub = _SubTmp[0].Sub.filter(x => x.id == SecondSubID);
                    var index = _SubTmp[0].Sub.indexOf(_SecondSub[0]);
                    _SubTmp[0].Sub.splice(index, 1);
                }
            }
        }
    }
    $scope.AddControl = function (code, type) {
        $scope.myCtrlID++;
        $scope.myList.push({
            id: $scope.myCtrlID,
            title: code,
            Sub: [],
            type: type
        });
    }
    $scope.hoverIn = function () {
        if($scope.isDragging){
            this.hoverEdit = true;
        }
    };

    $scope.hoverOut = function () {
        this.hoverEdit = false;
    };
    $scope.$on('draggable:start', function (data) {
     
        $scope.isDragging = true;
    });
    $scope.$on('draggable:end', function (data) {
        
        $scope.isDragging = false;
    });
}]);

app.service('tempService', ['$http', '$log', function ($http, $log) {
    //Service goes here
}]);