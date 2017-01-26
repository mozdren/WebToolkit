headerApplication.controller("headerController", function($scope, $http) {
    
    /// Model
    
    $scope.background = "images/office.jpg";
    $scope.title = "Lorem ipsum dolor";
    $scope.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar sem non libero vehicula, nec placerat elit ullamcorper. Quisque a congue lacus. Nam porta massa ex, nec auctor arcu ultrices ac. Morbi non ultricies nibh.";

    /// Computed

    $scope.style = function () {
        return "background-image: url(" + $scope.background + ")";
    }

    /// Methods

    /*$http.get("data/header.json").then(function(response) {
        $scope.background = response.data.background;
        $scope.title = response.data.title;
        $scope.text = response.data.text;
    });*/
});