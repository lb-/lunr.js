// package metadata file for Meteor.js
'use strict';

// https://atmospherejs.com/lbee/lunr
var packageName = 'lbee:lunr';

Package.describe({
  name: packageName,
  summary: 'Lunr.js Packaged for Meteor, simple full-text search in your browser.',
  version: '0.5.12',
  git: 'https://github.com/lb-/lunr.js.git',
  documentation: 'README.mdown'
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@1.0']);
  api.export('lunr');
  api.add_files([
    'lunr.js',
    'meteor/export.js',
  ], ['client', 'server']);
});

Package.onTest(function (api) {
  api.use(packageName);
  api.use('tinytest');
  api.addFiles('meteor/test.js');
});
