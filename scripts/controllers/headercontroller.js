headerApplication.controller("headerController", function($scope) {
    $scope.background = "images/office.jpg";
    $scope.title = "Lorem ipsum dolor";
    $scope.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar sem non libero vehicula, nec placerat elit ullamcorper. Quisque a congue lacus. Nam porta massa ex, nec auctor arcu ultrices ac. Morbi non ultricies nibh.";
    $scope.style = "background-image: url(" + $scope.background + ")"
});