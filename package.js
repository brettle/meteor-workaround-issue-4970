"use strict";

Package.describe({
  name: 'brettle:workaround-issue-4970',
  version: '0.0.4',
  summary:
    'Workaround Meteor issue 4970 - login fail breaks auto-login on reconnect.',
  git: 'https://github.com/brettle/meteor-workaround-issue-4970.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4');
  api.use('underscore', 'client');
  api.use('brettle:workaround-issue-4331@0.0.1', 'client');
  api.imply('accounts-base');
  api.addFiles('workaround-issue-4970.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('random');
  api.use('brettle:accounts-testing-support');
  api.use('brettle:workaround-issue-4970');
  api.addFiles('workaround-issue-4970-tests.js', 'client');
});
