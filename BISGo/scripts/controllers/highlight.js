var app = angular.module("app", ['ngDraggable']);

app.controller('indexController', ['$scope', 'tempService', function ($scope, tempService) {

    $scope.myCtrlID = 0;
    $scope.myList = [{ id: $scope.myCtrlID, title: 'welcome' }];
    $scope.styleField = '';
    $scope.ctrlTitle = "CONTROLS";
    $scope.formTitle = "BUILD YOUR FORM HERE";
    //$scope.myControls = tempService.getBasicCtrl('basicCtrl');
    $scope.myControls = [
                { "id": 1, "Code": "String", "Name": "Text Field", "Icon": "input" },
                { "id": 2, "Code": "Selection", "Name": "Single Selection", "Icon": "reorder" },
                { "id": 3, "Code": "Multi Selection", "Name": "Multi Selection", "Icon": "list" },
                { "id": 4, "Code": "Date", "Name": "Date Field", "Icon": "event" },
                { "id": 5, "Code": "DateTime", "Name": "Date & Time Field", "Icon": "timer" },
                { "id": 6, "Code": "Time", "Name": "Time Field", "Icon": "timer" },
                { "id": 7, "Code": "Integer", "Name": "Whole Numbers", "Icon": "dialpad" },
                { "id": 8, "Code": "Submit", "Name": "Submit", "Icon": "check" },
                { "id": 9, "Code": "Radio", "Name": "RadioButton", "Icon": "check", "RadioVal": "male" }
    ];

    $scope.onDropComplete = function (data, evt, obj) {
        debugger;
        var myTitle = data.Code;
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
            if (_tmp[0].radioType != undefined) {
                arrayName = _tmp[0].radioType;
            }

            if (targetArray.length > 2) {
                var _tmpSub = _tmp[0][arrayName].filter(x => x.id == targetArray[2]);

                if (targetName == 'Radio') {

                    if (_tmpSub.length > 0) {
                        if (_tmpSub[0][targetValue].length >= 2) {
                            alert("User exceeded the limit!");
                        }
                        else {
                            if (data.Code == 'Radio') {
                                _tmpSub[0][targetValue].push({
                                    id: $scope.myCtrlID,
                                    title: myTitle,
                                    radioType: 'male'
                                });
                            }
                            else {
                                _tmpSub[0][targetValue].push({
                                    id: $scope.myCtrlID,
                                    title: myTitle

                                });
                            }
                        }

                    }
                }
                else {

                    if (_tmpSub.length > 0) {
                        if (_tmpSub[0].Sub.length >= 2) {
                            alert("User exceeded the limit!");
                        }
                        else {
                            if (data.Code == 'Radio') {
                                _tmpSub[0].Sub.push({
                                    id: $scope.myCtrlID,
                                    title: myTitle,
                                    radioType: 'male'
                                });
                            }
                            else {
                                _tmpSub[0].Sub.push({
                                    id: $scope.myCtrlID,
                                    title: myTitle

                                });
                            }
                        }

                    }
                }
            }
            else {
                if (targetName == 'Radio') {
                    if (_tmp[0][targetValue].length >= 3) {
                        alert("User exceeded the limit!");
                    }
                    else {
                        if (data.Code == 'Radio') {
                            _tmp[0][targetValue].push({
                                id: $scope.myCtrlID,
                                title: myTitle,
                                male: [],
                                female: [],
                                radioType: 'male'

                            });
                        }
                        else {
                            _tmp[0][targetValue].push({
                                id: $scope.myCtrlID,
                                title: myTitle,
                                Sub: []

                            });
                        }
                    }

                }
                else {
                    if (_tmp[0].Sub.length >= 3) {
                        alert("User exceeded the limit!");
                    }
                    else {
                        if (data.Code == 'Radio') {
                            _tmp[0].Sub.push({
                                id: $scope.myCtrlID,
                                title: myTitle,
                                male: [],
                                female: [],
                                radioType: 'male'
                            });
                        }
                        else {
                            _tmp[0].Sub.push({
                                id: $scope.myCtrlID,
                                title: myTitle,
                                Sub: []
                            });
                        }

                    }

                }
            }
        }
        else {
            if (data.Code == 'Radio') {
                $scope.myList.push({
                    id: $scope.myCtrlID,
                    title: myTitle,
                    male: [],
                    female: [],
                    radioType: 'male'
                });
            } else {
                $scope.myList.push({
                    id: $scope.myCtrlID,
                    title: myTitle,
                    Sub: []
                });
            }
            //if (myTitle == 'String') {
            //    $scope.myList.push({
            //        id: $scope.myCtrlID,
            //        title: myTitle,
            //        Sub:[]
            //    });
            //}
            //else if (myTitle == 'Selection') {
            //    $scope.myList.push({
            //        id: $scope.myCtrlID,
            //        title: "Selection"
            //    });
            //}
            //else if (myTitle == 'Multi Selection') {
            //    $scope.myList.push({
            //        id: $scope.myCtrlID,
            //        title: "Multi Selection"
            //    });
            //}
            //else if (myTitle == 'Date') {
            //    $scope.myList.push({
            //        id: $scope.myCtrlID,
            //        title: "Date"
            //    });
            //}
            //else if (myTitle == 'DateTime') {
            //    $scope.myList.push({
            //        id: $scope.myCtrlID,
            //        title: "DateTime"
            //    });
            //}
            //else if (myTitle == 'Time') {
            //    $scope.myList.push({
            //        id: $scope.myCtrlID,
            //        title: "Time"
            //    });
            //}
            //else if (myTitle == 'Integer') {
            //    $scope.myList.push({
            //        id: $scope.myCtrlID,
            //        title: "Integer"
            //    });
            //}
            //else if (myTitle == 'Decimal') {
            //    $scope.myList.push({
            //        id: $scope.myCtrlID,
            //        title: "Decimal"
            //    });
            //}
            //else if (myTitle == 'Section') {
            //    $scope.myList.push({
            //        id: $scope.myCtrlID,
            //        title: "Section"
            //    });
            //}
            //else if (myTitle == 'Submit') {
            //    $scope.myList.push({
            //        id: $scope.myCtrlID,
            //        title: "Submit"
            //    });
            //}
        }
    }

    $scope.DeleteCtrl = function (mainID, FirstSubID, SecondSubID) {
        debugger;
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
}]);

app.service('tempService', ['$http', '$log', function ($http, $log) {

    //this.getBasicCtrl = function (ctrlType) {
    //    var myCtrl = [
    //            { "id": 1, "Code": "String", "Name": "Text Field", "Icon": "input" },
    //            { "id": 2, "Code": "Selection", "Name": "Single Selection", "Icon": "reorder" },
    //            { "id": 3, "Code": "Multi Selection", "Name": "Multi Selection", "Icon": "list" },
    //            { "id": 4, "Code": "Date", "Name": "Date Field", "Icon": "event" },
    //            { "id": 5, "Code": "DateTime", "Name": "Date & Time Field", "Icon": "timer" },
    //            { "id": 6, "Code": "Time", "Name": "Time Field", "Icon": "timer" },
    //            { "id": 7, "Code": "Integer", "Name": "Whole Numbers", "Icon": "dialpad" },
    //            { "id": 8, "Code": "Submit", "Name": "Submit", "Icon": "check" },
    //            { "id": 9, "Code": "Radio", "Name": "RadioButton", "Icon": "check" }
    //    ];


    //}
}]);