var app = angular.module("app", ['ngDraggable']);

app.controller('buildController', ['$scope', 'tempService', function ($scope, tempService) {
    $scope.styleField = '';
    $scope.ctrlTitle = "CONTROLS";
    $scope.formTitle = "BUILD YOUR FORM HERE";
    $scope.myTemplates = tempService.getTempCtrl('tempCtrl');
    $scope.myControls = tempService.getBasicCtrl('basicCtrl');

    $scope.onDropComplete = function (data, evt) {
        var myTitle = data.title;
        var myEvent = evt.event.type;
        var myElement = angular.element(document.querySelector('#ulDrop'));
        if (myTitle == 'heading') {
            $scope.styleField = '<li class="form-field" type="heading">';
            $scope.styleField += '<div class="field-actions"><a class="edit btn" title="Edit"><img alt="Edit" src="../icons/edit.png" /></a>';
            $scope.styleField += '<a class="copy btn" title="Copy"><img alt="Copy" src="../icons/copy.png" /></a><a class="remove btn" title="Remove"><img alt="Remove" src="../icons/delete.png" /></a></div>';
            $scope.styleField += '<div class="prev-holder"><div class="form-group"><h1>Heading</h1></div></div>';
            $scope.styleField += '</li>';
        }
        else if (myTitle == 'name') {
            $scope.styleField = '<li class="form-field" type="heading">';
            $scope.styleField += '<div class="field-actions"><a class="edit btn" title="Edit"><img alt="Edit" src="../icons/edit.png" /></a>';
            $scope.styleField += '<a class="copy btn" title="Copy"><img alt="Copy" src="../icons/copy.png" /></a><a class="remove btn" title="Remove"><img alt="Remove" src="../icons/delete.png" /></a></div>';
            $scope.styleField += '<label class="field-label">Name</label><div class="prev-holder"><div class="fnamedv"><input class="form-control name" required type="text">First Name</div>';
            $scope.styleField += '<div class="lnamedv"><input class="form-control name" required type="text">Last Name</div></div>';
            $scope.styleField += '</li>';
        }
        else if (myTitle == 'email') {
            $scope.styleField = '<li class="form-field" type="heading">';
            $scope.styleField += '<div class="field-actions"><a class="edit btn" title="Edit"><img alt="Edit" src="../icons/edit.png" /></a>';
            $scope.styleField += '<a class="copy btn" title="Copy"><img alt="Copy" src="../icons/copy.png" /></a><a class="remove btn" title="Remove"><img alt="Remove" src="../icons/delete.png" /></a></div>';
            $scope.styleField += '<label class="field-label">Email</label><div class="prev-holder"><div class="emaildv"><input class="form-control" type="email">Email ID</div></div>';
            $scope.styleField += '</li>';
        }
        else if (myTitle == 'address') {
            $scope.styleField = '<li class="form-field" type="heading">';
            $scope.styleField += '<div class="field-actions"><a class="edit btn" title="Edit"><img alt="Edit" src="../icons/edit.png" /></a>';
            $scope.styleField += '<a class="copy btn" title="Copy"><img alt="Copy" src="../icons/copy.png" /></a><a class="remove btn" title="Remove"><img alt="Remove" src="../icons/delete.png" /></a></div>';
            $scope.styleField += '<label class="field-label">Address</label><div class="prev-holder"><div class="emaildv"><input class="form-control" type="text">Address 1</div>';
            $scope.styleField += '<div class="emaildv"><input class="form-control" type="text">Address 2</div><div class="fnamedv"><input class="form-control name" type="text">City</div>';
            $scope.styleField += '<div class="lnamedv"><input class="form-control name" type="text">State / Province</div><div class="fnamedv"><input class="form-control name" type="text">Country</div>';
            $scope.styleField += '<div class="lnamedv"><input class="form-control name" type="number" ng-minlength="4" ng-maxlength="8">Postal / Zipcode</div></div>';
            $scope.styleField += '</li>';
        }
        else if (myTitle == 'tel') {
            $scope.styleField = '<li class="form-field" type="heading">';
            $scope.styleField += '<div class="field-actions"><a class="edit btn" title="Edit"><img alt="Edit" src="../icons/edit.png" /></a>';
            $scope.styleField += '<a class="copy btn" title="Copy"><img alt="Copy" src="../icons/copy.png" /></a><a class="remove btn" title="Remove"><img alt="Remove" src="../icons/delete.png" /></a></div>';
            $scope.styleField += '<label class="field-label">Phone No</label><div class="prev-holder"><div class="areadv"><span style="float: left;">+</span><input class="form-control" type="text">Area Code</div>';
            $scope.styleField += '<div class="teldv"><input class="form-control" type="tel">Phone / Mobile</div></div>';
            $scope.styleField += '</li>';
        }
        else if (myTitle == 'date') {
            $scope.styleField = '<li class="form-field" type="heading">';
            $scope.styleField += '<div class="field-actions"><a class="edit btn" title="Edit"><img alt="Edit" src="../icons/edit.png" /></a>';
            $scope.styleField += '<a class="copy btn" title="Copy"><img alt="Copy" src="../icons/copy.png" /></a><a class="remove btn" title="Remove"><img alt="Remove" src="../icons/delete.png" /></a></div>';
            $scope.styleField += '<label class="field-label">Date</label><div class="prev-holder"><div class="datedv"><input class="form-control" type="date">Date</div></div>';
            $scope.styleField += '</li>';
        }
        else if (myTitle == 'time') {
            $scope.styleField = '<li class="form-field" type="heading">';
            $scope.styleField += '<div class="field-actions"><a class="edit btn" title="Edit"><img alt="Edit" src="../icons/edit.png" /></a>';
            $scope.styleField += '<a class="copy btn" title="Copy"><img alt="Copy" src="../icons/copy.png" /></a><a class="remove btn" title="Remove"><img alt="Remove" src="../icons/delete.png" /></a></div>';
            $scope.styleField += '<label class="field-label">Date</label><div class="prev-holder"><div class="datedv"><input class="form-control" type="time">Time</div></div>';
            $scope.styleField += '</li>';
        }
        else if (myTitle == 'submit') {
            $scope.styleField = '<li class="form-field" type="heading">';
            $scope.styleField += '<div class="field-actions"><a class="edit btn" title="Edit"><img alt="Edit" src="../icons/edit.png" /></a>';
            $scope.styleField += '<a class="copy btn" title="Copy"><img alt="Copy" src="../icons/copy.png" /></a><a class="remove btn" title="Remove"><img alt="Remove" src="../icons/delete.png" /></a></div>';
            $scope.styleField += '<div class="prev-holder"><button type="submit">Submit</button></div>';
            $scope.styleField += '</li>';
        }

        else if (myTitle == 'checkbox') {
            $scope.styleField = '<li class="form-field" type="heading">';
            $scope.styleField += '<div class="field-actions"><a class="edit btn" title="Edit"><img alt="Edit" src="../icons/edit.png" /></a>';
            $scope.styleField += '<a class="copy btn" title="Copy"><img alt="Copy" src="../icons/copy.png" /></a><a class="remove btn" title="Remove"><img alt="Remove" src="../icons/delete.png" /></a></div>';
            $scope.styleField += '<div class="prev-holder"><div class="form-group"><input type="checkbox" name="vehicle" title="You can edit this text" value="Bike">You can edit this text</div>';
            $scope.styleField += '</li>';
        }
        else if (myTitle == 'combobox') {
            $scope.styleField = '<li class="form-field" type="heading">';
            $scope.styleField += '<div class="field-actions"><a class="edit btn" title="Edit"><img alt="Edit" src="../icons/edit.png" /></a>';
            $scope.styleField += '<a class="copy btn" title="Copy"><img alt="Copy" src="../icons/copy.png" /></a><a class="remove btn" title="Remove"><img alt="Remove" src="../icons/delete.png" /></a></div>';
            $scope.styleField += '<div class="prev-holder"><div class="form-group"><select class="form-control selectht"><option value="1">Item 1</option><option value="2">Item 2</option><option value="3">Item 3</option></select></div>';
            $scope.styleField += '</li>';
        }
        else if (myTitle == 'hyperlink') {
            $scope.styleField = '<li class="form-field" type="heading">';
            $scope.styleField += '<div class="field-actions"><a class="edit btn" title="Edit"><img alt="Edit" src="../icons/edit.png" /></a>';
            $scope.styleField += '<a class="copy btn" title="Copy"><img alt="Copy" src="../icons/copy.png" /></a><a class="remove btn" title="Remove"><img alt="Remove" src="../icons/delete.png" /></a></div>';
            $scope.styleField += '<div class="prev-holder"><div class="form-group"><a href="#">Your Link goes here</a> </div>';
            $scope.styleField += '</li>';
        }

        else if (myTitle == 'image') {
            $scope.styleField = '<li class="form-field" type="heading">';
            $scope.styleField += '<div class="field-actions"><a class="edit btn" title="Edit"><img alt="Edit" src="../icons/edit.png" /></a>';
            $scope.styleField += '<a class="copy btn" title="Copy"><img alt="Copy" src="../icons/copy.png" /></a><a class="remove btn" title="Remove"><img alt="Remove" src="../icons/delete.png" /></a></div>';
            $scope.styleField += '<div class="prev-holder"><div class="form-group"><img alt="Your Image" src="../images/noimage.png" /></div>';
            $scope.styleField += '</li>';
        }

        myElement.append($scope.styleField);
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