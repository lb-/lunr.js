Package.describe({
  name: 'lbee:lunr',
  summary: 'Lunr.js Packaged for Meteor, simple full-text search in your browser.',
  version: '0.5.6',
  git: 'https://github.com/lb-/lunr.js.git'
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);

  api.export(['lunr']);

  api.add_files([
    'lunr/lunr.js',
    'export.js',
  ]);

});
