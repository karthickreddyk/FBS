var app = angular.module("app", ['ngDraggable']);

app.controller('buildController', ['$scope', 'tempService', function ($scope, tempService) {
    $scope.enableList = [];
    $scope.styleField = '';
    $scope.ctrlTitle = "CONTROLS";
    $scope.formTitle = "BUILD YOUR FORM HERE";
    $scope.myTemplates = tempService.getTempCtrl('tempCtrl');
    $scope.myControls = tempService.getBasicCtrl('basicCtrl');

    $scope.onDropComplete = function (data, evt) {
        //var myTitle = data.title;
        //var myEvent = evt.event.type;
        //var myElement = angular.element(document.querySelector('#ulDrop'));

        $scope.enableList = ["heading", "name"];
        var myData = $scope.enableList;

        //if ($scope.enableList.length < 1)
        //{
        //    $scope.enableList = [];
        //}
        
        //if (myTitle == 'heading') {
        //    $scope.enableList.push("heading");
        //}
        //else if (myTitle == 'name') {
        //     $scope.enableList.push("name");
        //}
        //else if (myTitle == 'email') {
        //    $scope.enableList.push("email");
        //}
        //else if (myTitle == 'address') {
        //    $scope.enableList.push("address");
        //}
        //else if (myTitle == 'tel') {
        //    $scope.enableList.push("tel");
        //}
        //else if (myTitle == 'date') {
        //    $scope.enableList.push("date");
        //}
        //else if (myTitle == 'time') {
        //    $scope.enableList.push("time");
        //}
        //else if (myTitle == 'submit') {
        //    $scope.enableList.push("submit");
        //}
        //else if (myTitle == 'checkbox') {
        //    $scope.enableList.push("checkbox");
        //}
        //else if (myTitle == 'combobox') {
        //    $scope.enableList.push("combobox");
        //}
        //else if (myTitle == 'hyperlink') {
        //    $scope.enableList.push("hyperlink");
        //}
        //else if (myTitle == 'image') {
        //    $scope.enableList.push("image");
        //}
    }

}]);

app.service('tempService', ['$http', '$log', function ($http, $log) {
    this.getTempCtrl = function (ctrlType) {
        var myCtrl = [
            { id: 1, title: 'heading', description: 'Heading', allowClone: true },
            { id: 2, title: 'name', description: 'Name', allowClone: true },
            { id: 3, title: 'email', description: 'Email', allowClone: true },
            { id: 4, title: 'address', description: 'Address', allowClone: true },
            { id: 5, title: 'tel', description: 'Phone No', allowClone: true },
            { id: 6, title: 'date', description: 'Date', allowClone: true },
            { id: 7, title: 'time', description: 'Time', allowClone: true },
            { id: 8, title: 'submit', description: 'Submit', allowClone: true }
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

    this.getBasicCtrl = function (ctrlType) {
        var myCtrl = [
            { id: 1, title: 'checkbox', description: 'Check Box', allowClone: true },
            { id: 2, title: 'combobox', description: 'Combo Box', allowClone: true },
            { id: 3, title: 'hyperlink', description: 'Hyperlink', allowClone: true },
            { id: 4, title: 'image', description: 'Image', allowClone: true },
            { id: 5, title: 'label', description: 'Label', allowClone: true },
            { id: 6, title: 'textbox', description: 'Text Box', allowClone: true },
            { id: 7, title: 'email', description: 'Email', allowClone: true },
            { id: 8, title: 'password', description: 'Password', allowClone: true },
            { id: 9, title: 'number', description: 'Number', allowClone: true },
            { id: 10, title: 'tel', description: 'Telephone', allowClone: true },
            { id: 11, title: 'url', description: 'URL', allowClone: true },
            { id: 12, title: 'search', description: 'Search Box', allowClone: true },
            { id: 13, title: 'date', description: 'Date', allowClone: true },
            { id: 14, title: 'time', description: 'Time', allowClone: true },
            { id: 15, title: 'month', description: 'Month', allowClone: true },
            { id: 16, title: 'week', description: 'Week', allowClone: true },
            { id: 17, title: 'range', description: 'Range', allowClone: true },
            { id: 18, title: 'button', description: 'Button', allowClone: true },
            { id: 19, title: 'table', description: 'Table', allowClone: true },
            { id: 20, title: 'bulleted', description: 'Bulleted', allowClone: true },
            { id: 21, title: 'line', description: 'Line', allowClone: true },
            { id: 22, title: 'h1', description: 'H1', allowClone: true },
            { id: 23, title: 'h2', description: 'H2', allowClone: true },
            { id: 24, title: 'h3', description: 'H3', allowClone: true },
            { id: 25, title: 'h4', description: 'H4', allowClone: true },
            { id: 26, title: 'h5', description: 'H5', allowClone: true },
            { id: 27, title: 'h6', description: 'H6', allowClone: true }
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