(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#karl-app');
  app.tabs = [];

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    //console.log('Our app is ready to rock!');
    
    var menu = document.querySelector('#rightMenu');
  
    menu.addEventListener("iron-select", function() {
      var tabHandler = document.querySelector("tab-handler");
      tabHandler.addTab(menu.selectedItem.getAttribute("value"));
    });
  });
  

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
  });

})(document);
