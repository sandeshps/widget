(function() {
  'use strict';

  angular
    .module('assignment')
    .directive('filePicker', filePicker);

  function filePicker() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs, fn) {
        element.on('click', function() {
          $(document.getElementById(attrs.elem)).click();
        })
      }
    }
  }
})();
