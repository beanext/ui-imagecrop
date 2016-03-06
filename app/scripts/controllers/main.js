'use strict';

/**
 * @ngdoc function
 * @name generatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the generatorApp
 */
angular.module('generatorApp')
  .controller('MainCtrl', ['$scope', '$uibModal', 'Upload', function ($scope, $uibModal, Upload) {
    $scope.open = function () {
      var scope = $scope.$new();
      $uibModal.open({
        templateUrl: 'views/main.html',
        scope: scope,
        backdrop: 'static',
        keyboard: false,
        controller: ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {
          $scope.myCroppedImage = '';
          $scope.cancel = function () {
            $uibModalInstance.dismiss("cancel");
          }
          $scope.myCallbackFunction = function (image) {
            $scope.myCroppedImage = image;
            $scope.$apply();
          }
          $scope.containerStyle = {height: '300px'};
          $scope.upload = function (file) {
            Upload.base64DataUrl(file).then(function (urls) {
              $scope.myImage = urls;
            });
            $scope.file = file;
            $scope.containerStyle = {height: 'auto'};
          }
        }]
      })
    }
  }]);
