( function() {

  'use strict'

  angular.module("ModuleOneApp", [])

  .controller('ModuleOneController', function($scope) {

    $scope.lunch = "";
    $scope.message = ""
    $scope.checkLunch = function() {
      $scope.items = $scope.lunch.split(",")
      console.log($scope.items.length);

      if($scope.items.length === 1){
        console.log("Please Enter Data");
        $scope.message = "Please Enter Data" ;
        return;
      }

      if( $scope.items.length > 1 && $scope.items.length <= 3) {
        console.log("Enjoy!");
        $scope.message = "Enjoy";
      }else if ($scope.items.length > 3) {
        console.log("Too Much!");
        $scope.message = "Too much";
      } else {
        $scope.message = "Please Enter Data" ;
      }
    }
}
);
})();
