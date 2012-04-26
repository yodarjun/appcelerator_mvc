(function(){
  if (root.tests_enabled) {
    Ti.include('/test/lib/jasmine-1.0.2.js',
               '/test/lib/jasmine-titanium.js');

    // Include all the test files
    Ti.include('/js/test/test_main.js');

    // Models
    Ti.include('/js/test/models/test_user.js',

    // Controllers

    // Views

    jasmine.getEnv().addReporter(new jasmine.TitaniumReporter());
    jasmine.getEnv().execute();
  }
})();
