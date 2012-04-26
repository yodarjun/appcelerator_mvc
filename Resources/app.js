// This is the only file in js that you will need to modify manually
var root = {
  config: {},
  model: {},
  view: {},
  sharedView: {},
  helper: {},
  controller: {},
  lib: {}
};

root.tests_enabled = false;

// Config
// include your config files
// Ti.include('js/config/config.js');

// Models
// include your model files
// Ti.include('js/models/model.js')

// Views
// include your view files
// Ti.include('js/views/view.js')

// Helpers
// include your helper files
// Ti.include('js/helpers/helper.js')

// Controllers
// include your controller files
// Ti.include('js/controllers/controller.js')

// Lib
// include your lib files
// Ti.include('js/lib/lib.js')

Ti.include('js/main.js');

// Tests
Ti.include('test/enabled.js',
           'test/tests.js')

root.start();
