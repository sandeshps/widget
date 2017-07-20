(function() {
  'use strict';

  angular
    .module('assignment')
    .controller('widgetCtrl', widgetCtrl);

  function widgetCtrl($scope) {


    $scope.switchTabs = function(property) {
      for(var key in $scope.widget) {
        if(key == property) {
          $scope.widget[key] = true;
        } else {
          $scope.widget[key] = false;
        }
      }
    }

    // Switch tab
    $scope.selectTab = function(name) {
      switch(name) {
        case 'chat':
              $scope.switchTabs('chatSelected');
              break;
        case 'faq':
              $scope.switchTabs('faqSelected');
              break;
        case 'mail':
              $scope.switchTabs('mailSelected');
              break;
      }
    }

    $scope.closeWidget = function() {
      $scope.isClosed = !$scope.isClosed;
    }

    $scope.openWidget = function() {
      $scope.isClosed = !$scope.isClosed;
    }

    // Send email
    $scope.sendEmail = function(form) {
      $scope.formSubmitSuccess = true;
      $scope.mailFields.mailSubject = '';
      $scope.mailFields.mailMessage = '';
    }

    function init() {
      $scope.widget = {};
      $scope.mailFields = {};
      $scope.isClosed = false;
      $scope.mailFields.toAddress = 'support@recruiterbox.com';
      $scope.widget.chatSelected = true;
      $scope.widget.faqSelected = false;
      $scope.widget.mailSelected = false;
      $scope.formSubmitSuccess = false;
    }

    init();
  }
})();
