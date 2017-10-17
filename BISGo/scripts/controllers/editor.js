var app = angular.module("app", ['ngDraggable']);
var isDraging = false;
app.controller('indexController', ['$scope', 'tempService', function ($scope, tempService) {

    $scope.myCtrlID = 0;
    $scope.myList = [];
    $scope.styleField = '';
    $scope.ctrlTitle = "CONTROLS";
    $scope.formTitle = "BUILD YOUR FORM HERE";
    $scope.myControls = [
                { "id": 1, "Code": "text", "Name": "Text Field", "Icon": "input", "type": "input","initial":true },
                { "id": 2, "Code": "Date", "Name": "Date Field", "Icon": "event", "type": "input", "initial": true  },
                { "id": 3, "Code": "Time", "Name": "Time Field", "Icon": "timer", "type": "input", "initial": true  },
                { "id": 4, "Code": "number", "Name": "Whole Numbers", "Icon": "dialpad", "type": "input", "initial": true  },
                { "id": 5, "Code": "Selection", "Name": "Single Selection", "Icon": "reorder", "type": "Selection", "initial": true  },
                { "id": 6, "Code": "Multi Selection", "Name": "Multi Selection", "Icon": "list", "type": "MultiSelection", "initial": true  },
                { "id": 7, "Code": "Submit", "Name": "Submit", "Icon": "check", "type": "Submit", "initial": true  }
    ];
    $scope.onDropComplete = function (data, evt, obj) {


        var IsJson = false;
        try {
            if (typeof data == 'object') {
                IsJson = true;
            }
            else {
                IsJson = false;
            }

        } catch (e) {
            IsJson = false;
        }
        var IsInitial = false;
        if (data.initial != undefined) {
            IsInitial = data.initial;
        }
        if (IsInitial){
        var myTitle = data.Code;
        var type = data.type;
        var myEvent = evt.event.type;
        var icon = data.Icon;
        $scope.myCtrlID++;
        var target = evt.event.target.id;
        var targetName = evt.event.target.getAttribute('name');
        var targetValue = evt.event.target.getAttribute('value');
        var targetArray = target.split("-");

        var mainId = targetArray[1];
        var _tmp = $scope.myList.filter(x => x.id == mainId);
        if (_tmp.length > 0) {
            if (targetArray[0] == "Main") {
                var targetIndex = $scope.myList.indexOf(_tmp[0]);
                var obj = {
                    id: $scope.myCtrlID,
                    title: myTitle,
                    Sub: [],
                    type: type,
                    Icon:icon
                };$scope.myList
                //$scope.myList[targetIndex] = obj;

                $scope.myList.splice(targetIndex + 1, 0, obj);
            }
            else {
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
                                type: type,
                                Icon: icon
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
                            type: type,
                            Icon: icon
                        });
                    }
                }
            }

        }
        else {
                $scope.myList.push({
                    id: $scope.myCtrlID,
                    title: myTitle,
                    Sub: [],
                    type: type,
                    Icon: icon
                });
        }
        }
        else {

           // var targetID = evt.event.target.id;
            var targetID = $scope.ReorderDivID;
            var cntrlID = data.id;
            var targetIndex;
            var controlIndex;
            var _tmpTarget = $scope.myList.filter(x => x.id == targetID);
            if (_tmpTarget.length > 0) {
                targetIndex = $scope.myList.indexOf(_tmpTarget[0]);
            }
            var _tmpControl = $scope.myList.filter(x => x.id == cntrlID);
            if (_tmpControl.length > 0) {
                controlIndex = $scope.myList.indexOf(_tmpControl[0]);
            }
            var b = $scope.myList[targetIndex];
            $scope.myList[targetIndex] = $scope.myList[controlIndex];
            $scope.myList[controlIndex] = b;
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
    $scope.AddControl = function (code, type,icon) {
        $scope.myCtrlID++;
        $scope.myList.push({
            id: $scope.myCtrlID,
            title: code,
            Sub: [],
            type: type,
            Icon:icon
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
    $scope.AddhoverIn = function () {

        if ($scope.isDragging) {
            this.hoverAdd = true;
        }
    };

    $scope.AddhoverOut = function () {
        this.hoverAdd = false;
    };
    $scope.$on('draggable:start', function (data) {

        $scope.isDragging = true;
        isDraging = true;
        $scope.DragClick = false;
        $scope.DragShow = true;
    });
    $scope.Test = function (obj) {
        if ($scope.isDragging) {


        }
    }
    $scope.$on('draggable:end', function (data) {

        $scope.isDragging = false;
        isDraging = false;
        $scope.hoverEdit = false;
        $scope.DragShow = false;
    });
    $scope.ShowControl = function () {

        $scope.DragClick = true;
    }
    $scope.IsSettings = false;
    $scope.HideControl = function () {

        $scope.DragClick = false;

    }

    $scope.HideSettings = function () {
   
        $scope.IsSettings = false;
        var controlID =" "+ $scope.EditControlID;
        var controlIDArray = controlID.split("-");
        if (controlIDArray.length == 1) {
            var _tmp = $scope.myList.filter(x => x.id == controlIDArray[0]);
            _tmp[0].placeholder = $scope.PlaceHolderText;
            //_tmp[0].IsRequired = true;
        }
        else if (controlIDArray.length == 2) {
            var _tmp = $scope.myList.filter(x => x.id == controlIDArray[0]);
            var _Secondtmp = _tmp[0].Sub.filter(x => x.id == controlIDArray[1]);
            _Secondtmp[0].placeholder = $scope.PlaceHolderText;
            //_tmp[0].IsRequired = true;
        }
        else if (controlIDArray.length == 3) {
            var _tmp = $scope.myList.filter(x => x.id == controlIDArray[0]);
            var _Secondtmp = _tmp[0].Sub.filter(x => x.id == controlIDArray[1]);
            var _thirdtmp = _Secondtmp[0].Sub.filter(x => x.id == controlIDArray[2]);
            _thirdtmp[0].placeholder = $scope.PlaceHolderText;
        }


    }
    $scope.EditControlID = "0";
    $scope.ControlSettings = function (mainID, FirstSubID, SecondSubID) {
        $scope.IsSettings = true;
        if (mainID != undefined && FirstSubID == undefined && SecondSubID == undefined) {
            //var _tmp = $scope.myList.filter(x => x.id == mainID);
            //_tmp[0].IsRequired = true;
            $scope.EditControlID = mainID;
        }
        else if (mainID != undefined && FirstSubID != undefined && SecondSubID == undefined) {
            //var _tmp = $scope.myList.filter(x => x.id == mainID);
            //_tmp[0].IsRequired = true;
            $scope.EditControlID = mainID + "-" + FirstSubID;
        }
        else if (mainID != undefined && FirstSubID != undefined && SecondSubID != undefined) {
            //var _tmp = $scope.myList.filter(x => x.id == mainID);
            //_tmp[0].IsRequired = true;
            $scope.EditControlID = mainID + "-" + FirstSubID + "-" + SecondSubID
        }
    }
    $scope.PlaceHolderText = "";

    $scope.ReorderHover = function (id) {

        $scope.ReorderDivID = id;
    }
}]);

app.service('tempService', ['$http', '$log', function ($http, $log) {
    //Service goes here
}]);


    var isDragging = false;
    var isMouseClicked = false;
    $("fieldset")
        .mousedown(function () {

        isDragging = false;
    isMouseClicked = true;
        })
        .mousemove(function () {
            if (isMouseClicked) {
        isDragging = true;
    }
            else {
        isDragging = false;
    }

        })
        .mouseup(function () {
        isDragging = false;
    isMouseClicked = false;
        });

    $("div").mouseup(function () {
        isDragging = false;
    isMouseClicked = false;
    });
    function ShowIcon(obj,IsMainControl) {
        
        if (!isDragging) {

            //$(obj.firstElementChild).css('opacity', '1');
            //$(obj.children[1]).css('opacity', '1');
            //$(obj.children[2]).css('opacity', '1');
            if (IsMainControl) {
                $(obj.children[1]).css('opacity', '1');
               $(obj.children[2]).css('opacity', '1');
            }
            else {
                $(obj.firstElementChild).css('opacity', '1');
                $(obj.children[1]).css('opacity', '1');
            }


    }
    }

    function HideIcon(obj, IsMainControl) {

        //$(obj.firstElementChild).css('opacity', '0');
        if (IsMainControl) {
            $(obj.children[1]).css('opacity', '0');
            $(obj.children[2]).css('opacity', '0');
        }
        else {
            $(obj.firstElementChild).css('opacity', '0');
            $(obj.children[1]).css('opacity', '0');
        }
        //$(obj.children[1]).css('opacity', '0');
        //$(obj.children[2]).css('opacity', '0');

    }

